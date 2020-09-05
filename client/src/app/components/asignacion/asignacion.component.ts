import { Component, OnInit } from '@angular/core';
import { Curso } from '../../Models/Curso'
import {CursoService} from '../../Services/curso.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-asignacion',
  templateUrl: './asignacion.component.html',
  styleUrls: ['./asignacion.component.css']
})
export class AsignacionComponent implements OnInit {

  constructor(private cursoService:CursoService,
              private router:Router) { }
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
  aceptar():boolean{
    let aux:any;
    if(this.cursosAgregados.length==0){
      return false;
    }
    for (let i = 0;i<this.cursosAgregados.length;i++) {
      aux = this.cursosAgregados[i];
      if(i+1<this.cursosAgregados.length){
        if(aux.curso==this.cursosAgregados[i+1].curso){
          return false;
        }
      }
    }

    return true;
  }
  irAAsignacion(){
    console.log(this.aceptar());
    if(this.aceptar()){
      this.router.navigate['aceptarasignacion'];
    }
  }
}
