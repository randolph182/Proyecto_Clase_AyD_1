import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CongresoService} from '../../Services/congreso.service'
@Component({
  selector: 'app-asignacion-congreso',
  templateUrl: './asignacion-congreso.component.html',
  styleUrls: ['./asignacion-congreso.component.css']
})
export class AsignacionCongresoComponent implements OnInit {
  congresosAgregados:any = [];
  congresosDisponibles:any=[];
  constructor(private congresoService:CongresoService,
    private router:Router) { }

  ngOnInit(): void {
    this.getCongresos();
  }
  getCongresos(){
    this.congresoService.getCongresos()
    .subscribe(
      res=>{
        this.congresosDisponibles = res;
      },
      err=>{
        console.error(err);
      }
    )
  }
  eliminar(id:string){
    if(this.congresosAgregados.length>0){
      this.congresosAgregados = this.congresosAgregados.filter(congreso=>congreso.nombre+congreso.id_congreso!=id);
    }
  }
  agregar(id:string){
    this.congresosDisponibles.forEach(congreso => {
      if((congreso.nombre+congreso.id_congreso)==id){
        this.congresosAgregados.push(congreso);
      }
    });
  }
  enviar(){
    if(this.congresosAgregados.length>0){
      this.congresoService.enviarCongresos(1,this.congresosAgregados);
      return true;
    }
    return false;
    
  }
}
