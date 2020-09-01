import { Component, OnInit } from '@angular/core';
import { Curso } from '../../Models/Curso'
import {CursoService} from '../../Services/curso.service'
@Component({
  selector: 'app-asignacion',
  templateUrl: './asignacion.component.html',
  styleUrls: ['./asignacion.component.css']
})
export class AsignacionComponent implements OnInit {

  constructor(/*private cursoService:CursoService*/) { }
  cursos:any=[];
  cursosAgregados:any=[];
  
  ngOnInit(): void {
    this.getCursos(); 
  }
  getCursos(){
    const id_usuario:number = 0;
    /*this.cursoService.getCursosEstudiante(id_usuario).subscribe(
      res=>{
        this.cursos= res;
      },
      err=> console.error(err)
    );*/
  }
  agregar(id_curso:number){
    /*let curso = this.cursoService.getCurso(id_curso);
    this.cursosAgregados.push(curso);*/
    
  }
}
