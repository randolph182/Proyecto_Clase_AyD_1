import { Injectable } from '@angular/core';
import {Usuario} from '../models/usuario';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {LoginComponent} from '../components/login/login.component';
import { Config } from '@fortawesome/fontawesome-svg-core';


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

  retorno: string;

  private usuariourl = 'http://3.227.118.254:3000/login';
  constructor(private http:HttpClient) { }

  /*headers: HttpHeaders = new HttpHeaders({

    "Content-Type": "application/json",
  })

  login(correo: string, pass: string, rol: string)
  {
      return this.http.post(this.usuariourl, 
        {
          "correo": correo,
          "password": pass,
          "rol": rol
        },
        {headers: this.headers}
        ).pipe();
        //localStorage.setItem("sesion", correo); // seteando variable de sesión con el nombre del usuario
  }*/

  login2(correo: string, pass: string, rol: string)
  {
    this.http.post<any>(this.usuariourl, {correo: "correo" , pass : "password", rol: "rol" }, httpOptions).subscribe(data => {
    this.retorno = data.id;
    console.log('respuesta: ' + data.id);})
  }
  


}
