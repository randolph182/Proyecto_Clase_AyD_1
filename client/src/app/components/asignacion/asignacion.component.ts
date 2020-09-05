import { Component, OnInit } from '@angular/core';
import { Curso } from '../../Models/Curso'
import {CursoService} from '../../Services/curso.service'
@Component({
  selector: 'app-asignacion',
  templateUrl: './asignacion.component.html',
  styleUrls: ['./asignacion.component.css']
})
export class AsignacionComponent implements OnInit {

  constructor(private cursoService:CursoService) { }
  cursos:any=[];
  cursosAgregados:any=[];
  
  ngOnInit(): void {
    this.getCursos(); 
  }
  getCursos(){
    this.cursoService.getCursosEstudiante()
    .subscribe(
      res=>{
        this.cursos = res;
        console.log(this.cursos);
      },
      err=> console.error(err)
    );
  }
  agregar(curso){
    console.log(curso);
    this.cursos.forEach(element => {
      if((element.curso+element.seccion)==curso){
        this.cursosAgregados.push(element);
      }
    });
  }
  eliminar(curso){
    if(this.cursosAgregados.length>0){
    }
  }
  aceptar(){
  }
}
