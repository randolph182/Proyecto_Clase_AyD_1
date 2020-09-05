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
  getCatedraticos (): Observable<Catedratico[]> {
    let urlUsuarios = 'http://3.85.52.106:3000/obtener_usuarios';
    return this.http.get<Catedratico[]>(urlUsuarios)
    .pipe(
      tap(_ => console.log('fetched catedraticos')),
      catchError(this.handleError<Catedratico[]>('getcatedraticos', []))
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

  addCuenta(catedratico : Catedratico) : Observable<Catedratico>{
    let url = 'http://3.85.52.106:3000/registrar_cuenta';
    return this.http.post<Catedratico>(url, catedratico, httpOptions)
    .pipe(
      tap((newcatedratico : Catedratico) => console.log(`added new cuenta w/ id=${newcatedratico}`)),
      catchError(this.handleError<Catedratico>('Catedratico'))
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