import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Catedratico } from '../models/catedratico';
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
export class RegistroService {
  constructor(private http: HttpClient) {

   }

  /** GET Usuarios from the server */
  getCatedraticos (rol:number): Observable<Catedratico[]> {
    let urlUsuarios = `http://3.227.118.254:3000/obtener_usuarios/${rol}`;
    return this.http.get<Catedratico[]>(urlUsuarios)
    .pipe(
      tap(_ => console.log('fetched catedraticos')),
      catchError(this.handleError<Catedratico[]>('getcatedraticos', []))
    );
  }

  getUsuario(id: number): Observable<Catedratico> {
    const url = `http://3.227.118.254:3000/obtener_usuario/${id}`;
    return this.http.get<Catedratico>(url).pipe(
      tap(_ => console.log(`fetched usuario id=${id}`)),
      catchError(this.handleError<Catedratico>(`getUsuario id=${id}`))
    );
  }

  


  /*** DML */
  addCatedratico(catedratico : Catedratico) : Observable<Catedratico>{
    let url = 'http://3.85.52.106:3000/registrar_usuario';
    return this.http.post<Catedratico>(url, catedratico, httpOptions)
    .pipe(
      tap((newcatedratico : Catedratico) => console.log(`added new user w/ id=${newcatedratico}`)),
      catchError(this.handleError<Catedratico>('Catedratico'))
    );

  }

  // dar baja
  darDeBaja(id: number): Observable<Catedratico> {
    const url = `http://3.227.118.254:3000/baja_cuenta/${id}`;
    return this.http.put<Catedratico>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted usuario id=${id}`)),
      catchError(this.handleError<Catedratico>(`darDeBaja id=${id}`))
    );
  }


  addCuenta(catedratico : Catedratico) : Observable<Catedratico>{
    let url = 'http://3.85.52.106:3000/registrar_cuenta';
    return this.http.post<Catedratico>(url, catedratico, httpOptions)
    .pipe(
      tap((newcatedratico : Catedratico) => console.log(`added new cuenta w/ id=${newcatedratico}`)),
      catchError(this.handleError<Catedratico>('Catedratico'))
    );

  }

  /** PUT: update the hero on the server */
  updateUsuario(usuario:Catedratico): Observable<any> {
    let url = 'http://3.85.52.106:3000/actualizar_cuenta';
    return this.http.put(url, usuario, httpOptions).pipe(
      tap(_ => console.log(`updated hero id=${usuario.id}`)),
      catchError(this.handleError<any>('updateHero'))
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
