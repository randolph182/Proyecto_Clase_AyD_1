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
  private catedraticourl = 'http://localhost:3000/api/catedraticos';
  private estudianteurl = 'http://localhost:3000/api/estudiantes';
  private adminurl = 'http://localhost:3000/api/administradores';
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

  /** GET estudiantes from the server */
  getEstudiantes(): Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>(this.estudianteurl)
    .pipe(tap(_ => console.log('fetched estudiantes')),
    catchError(this.handleError<Estudiante[]>('getEstudiantes', []))
    );
  }

  /** GET hero by id. Will 404 if id not found */
  getEstudiante(id_estudiante: number): Observable<Estudiante> {
    if(id_estudiante < 0){
      return of();
    }
    
    const url = `${this.estudianteurl}/${id_estudiante}`;
    return this.http.get<Estudiante>(url).
    pipe(
      tap(_ => console.log(`fetched estudiante codestudiante=${id_estudiante}`)),
      catchError(this.handleError<Estudiante>(`getestudiante username=${id_estudiante}`))
    );
  }

  


  /*** DML */
  addEstudiante(estudiante : Estudiante) : Observable<Estudiante>{
    return this.http.post<Estudiante>(this.estudianteurl, estudiante, httpOptions)
    .pipe(
      tap((newEstudiante : Estudiante) => console.log(`added new user w/ id=${newEstudiante}`)),
      catchError(this.handleError<Estudiante>('Catedratico'))
    );

  }

    /** GET estudiantes from the server */
    getAdministrativos(): Observable<Administrativo[]> {
      return this.http.get<Administrativo[]>(this.adminurl)
      .pipe(tap(_ => console.log('fetched administrador')),
      catchError(this.handleError<Administrativo[]>('getEstudiantes', []))
      );
    }
  
    /** GET hero by id. Will 404 if id not found */
    getAdministrativo(id_admin: number): Observable<Administrativo> {
      if(id_admin < 0){
        return of();
      }
      
      const url = `${this.adminurl}/${id_admin}`;
      return this.http.get<Administrativo>(url).
      pipe(
        tap(_ => console.log(`fetched estudiante codestudiante=${id_admin}`)),
        catchError(this.handleError<Administrativo>(`getestudiante username=${id_admin}`))
      );
    }
  
    
  
  
    /*** DML */
    addAdministrador(administrador : Administrativo) : Observable<Administrativo>{
      return this.http.post<Administrativo>(this.adminurl,administrador, httpOptions)
      .pipe(
        tap((newAdmin : Administrativo) => console.log(`added new user w/ id=${newAdmin}`)),
        catchError(this.handleError<Administrativo>('Catedratico'))
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
