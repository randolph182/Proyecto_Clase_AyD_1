import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Catedratico } from '../models/catedratico';
import { Estudiante } from '../models/estudiante';
import { Administrativo } from '../models/administrativo';
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
  private catedraticourl = 'http://localhost:3000/regisrar_usuario';
  constructor(private http: HttpClient) {

   }

  /** GET Usuarios from the server */
  getCatedraticos (): Observable<Catedratico[]> {
    return this.http.get<Catedratico[]>(this.catedraticourl)
    .pipe(
      tap(_ => console.log('fetched catedraticos')),
      catchError(this.handleError<Catedratico[]>('getcatedraticos', []))
    );
  }

  /** GET hero by id. Will 404 if id not found */
  getCatedratico(id_catedratico: number): Observable<Catedratico> {
    if(id_catedratico < 0){
      return of();
    }
    
    const url = `${this.catedraticourl}/${id_catedratico}`;
    return this.http.get<Catedratico>(url).
    pipe(
      tap(_ => console.log(`fetched catedratico codcatedratico=${id_catedratico}`)),
      catchError(this.handleError<Catedratico>(`getcatedratico username=${id_catedratico}`))
    );
  }

  


  /*** DML */
  addCatedratico(catedratico : Catedratico) : Observable<Catedratico>{
    return this.http.post<Catedratico>(this.catedraticourl, catedratico, httpOptions)
    .pipe(
      tap((newcatedratico : Catedratico) => console.log(`added new user w/ id=${newcatedratico}`)),
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
