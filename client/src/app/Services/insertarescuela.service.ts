import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Escuela } from '../models/escuela';
import { catchError, map, tap } from 'rxjs/operators';
import { analyzeAndValidateNgModules } from '@angular/compiler';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class InsertarescuelaService {
  

  constructor(private http: HttpClient) { }

  addEscuela(escuela : Escuela) : Observable<Escuela>{
    let url = 'http://3.85.52.106:3000/registrar_escuela';
    return this.http.post<Escuela>(url, escuela, httpOptions)
    .pipe(
      tap((newescuela : Escuela) => console.log(`added new user w/ id=${newescuela}`)),
      catchError(this.handleError<Escuela>('Escuela'))
    );

  }

  getEscuelas (): Observable<Escuela[]> {
    let urlUsuarios = `http://3.85.52.106:3000/obtener_escuelas`;
    return this.http.get<Escuela[]>(urlUsuarios, httpOptions)
    .pipe(
      tap(_ => console.log('fetched escuela')),
      catchError(this.handleError<Escuela[]>('getcategorias', []))
    );
  }

  updateEscuela(escuela:Escuela): Observable<any> {
    let url = 'http://3.85.52.106:3000/modificar_escuela';
    return this.http.put(url, escuela, httpOptions).pipe(
      tap(_ => console.log(`escuela actualizada id=${escuela.id}`)),
      catchError(this.handleError<any>('updateescuela'))
    );
  }

  deleteEscuela(escuela:Escuela): Observable<Escuela> {
    const url = `http://3.85.52.106:3000/eliminar_escuela`;
    return this.http.post<Escuela>(url, escuela,httpOptions).pipe(
      tap(_ => console.log(`deleted escuela id=${escuela.id}`)),
      catchError(this.handleError<Escuela>(`darDeBaja id=${escuela.id}`))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      alert(error.message);
      
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
