import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Congreso } from '../Models/Congreso';

@Injectable({
  providedIn: 'root'
})
export class CongresoService {
  API_URI = 'http://localhost:3000';
  constructor(private http:HttpClient) { }
  getCongresos(){
    return this.http.get(`${this.API_URI}/obtener_congresos`);
  }
  enviarCongresos(id:number,congresos:any){
    return this.http.post(`${this.API_URI}/asignar_congresos/${id}`,congresos);
  }
  crearCongreso(congreso){
    if(congreso instanceof Congreso){
      return this.http.post(`${this.API_URI}/registrar_congreso`,congreso);
    }
    return null;
  }
  getEscuela(){
    return this.http.get(`${this.API_URI}/obtener_escuelas`);
  }
}
