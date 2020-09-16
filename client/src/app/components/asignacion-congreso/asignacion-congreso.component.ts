import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asignacion-congreso',
  templateUrl: './asignacion-congreso.component.html',
  styleUrls: ['./asignacion-congreso.component.css']
})
export class AsignacionCongresoComponent implements OnInit {
  congresosAgregados:any = [];
  congresosDisponibles:any=[];
  constructor() { }

  ngOnInit(): void {

  }
  eliminar(id:string){

  }
  agregar(id:string){

  }
  enviar(){

  }
}
