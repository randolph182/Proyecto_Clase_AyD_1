import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CursoService {
  API_URI = 'http://';
  cursos:any=[];
  constructor(private http:HttpClient) { }

  getCursosEstudiante(id_estudiante:number){
    return this.http.post(`${this.API_URI}/getCursos`,id_estudiante);
  }
  getCurso(id_curso:number){
    return this.http.post(`${this.API_URI}/getCurso`,id_curso);
  }
} 
