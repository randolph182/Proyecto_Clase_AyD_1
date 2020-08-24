import { Component, OnInit } from '@angular/core';
import { Curso } from '../../model/Curso'
@Component({
  selector: 'app-asignacion',
  templateUrl: './asignacion.component.html',
  styleUrls: ['./asignacion.component.css']
})
export class AsignacionComponent implements OnInit {

  constructor() { }
  cursos:any=[];
  cursosAgregados:any=[];
  agregar(curso:Curso){
    this.cursos.push(curso);
  }
  ngOnInit(): void {
  }

}
