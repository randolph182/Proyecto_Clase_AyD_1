import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AsignacionService {
  API_URI = 'http://';
  asignacion:any;
  constructor(private http:HttpClient) { }

  getAsgignacionEstudiante(id_estudiante:number){
    return this.http.post(`${this.API_URI}/getAsignacion`,id_estudiante);
  }
  addAsignacionEstudiante(asignacion){
    return this.http.post(`${this.API_URI}/getAsignacion`,asignacion);
  }
}
