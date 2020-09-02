import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RegistroUsuarioService {

  private usuariourl = 'http://localhost:3000/api/usuarios';
  

  constructor(private http:HttpClient) { }

  // retorno de usuario
  getUsuarios (): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.usuariourl)
    .pipe();
  }
  // si esta vacio retorna un error
  getUsuario(username: string): Observable<Usuario> {
    if(!username.trim()){
      return of();
    }
    
    const url = `${this.usuariourl}/${username}`;
    return this.http.get<Usuario>(url).
    pipe();
  }

  /*** DML agreacion de usuario */
  addUsuario(usuario : Usuario) : Observable<Usuario>{
    return this.http.post<Usuario>(this.usuariourl, usuario, httpOptions)
    .pipe();

  }


  
}
