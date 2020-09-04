import { Injectable } from '@angular/core';
import {Usuario} from '../models/usuario';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {LoginComponent} from '../components/login/login.component';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LogearseService {

  private usuariourl = 'http://localhost:3000/api/login';
  constructor(private http:HttpClient) { }

  headers: HttpHeaders = new HttpHeaders({

    "Content-Type": "application/json",
  })

  loginestudiante(correo: string, pass: string, rol: string)
  {
      return this.http.post(this.usuariourl, 
        {
          "correo": correo,
          "password": pass,
          "rol": rol
        },
        {headers: this.headers}
        ).pipe();
        localStorage.setItem("sesion", correo); // seteando variable de sesión con el nombre del usuario
  }

  logincatedratico(correo: string, pass: string, rol: string)
  {
      return this.http.post(this.usuariourl, 
        {
          "correo": correo,
          "password": pass
        },
        {headers: this.headers}
        ).pipe();

  }

  loginadmin(correo: string, pass: string, rol: string)
  {
      return this.http.post(this.usuariourl, 
        {
          "correo": correo,
          "password": pass
        },
        {headers: this.headers}
        ).pipe();

  }


}
