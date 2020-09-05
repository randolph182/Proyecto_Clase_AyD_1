import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CursoService {
  API_URI = 'http://3.85.52.106:3000';
  cursos:any=[];
  constructor(private http:HttpClient) { }

  getCursosEstudiante(){
    return this.http.get(`${this.API_URI}/obtener_cursos`);
  }
  getCurso(id_curso:number){
    return this.http.post(`${this.API_URI}/getCurso`,id_curso);
  }
} 
