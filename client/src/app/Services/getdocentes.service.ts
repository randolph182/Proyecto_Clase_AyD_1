import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
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
export class GetdocentesService {

  constructor(private http: HttpClient) { }

  getDocentes(): Observable<Docente[]> {
    let urlUsuarios = `http://3.85.52.106:3000/obtener_docente`;
    return this.http.get<Docente[]>(urlUsuarios, httpOptions)
    .pipe(
      tap(_ => console.log('fetched docente')),
      catchError(this.handleError<Docente[]>('getdocente', []))
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


