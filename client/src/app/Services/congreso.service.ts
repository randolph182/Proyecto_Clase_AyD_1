import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Congreso } from '../Models/Congreso';

@Injectable({
  providedIn: 'root'
})
export class CongresoService {
  API_URI = 'http://3.227.118.254:3000';
  constructor(private http:HttpClient) { }
  getCongresos(){
    return this.http.get(`${this.API_URI}/obtener_congresos`);
  }
  enviarCongresos(id:number,congresos:any){
    return this.http.post(`${this.API_URI}/asignar_congresos/${id}`,congresos);
  }
  crearCongreso(congreso){
    if(congreso instanceof Congreso){
      return this.http.post(`${this.API_URI}/agregar_congreso`,congreso);
    }
    return null;
    
  }
}
