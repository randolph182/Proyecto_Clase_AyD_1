import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AsignacionService {
  API_URI = 'http://3.85.52.106:3000';
  asignacion:any;
  constructor(private http:HttpClient) { }
  
  addAsignacionEstudiante(asignacion){
    return this.http.post(`${this.API_URI}/getAsignacion`,asignacion);
  }
}
