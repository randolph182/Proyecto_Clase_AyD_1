import { Component, OnInit } from '@angular/core';
import { CongresoService } from 'src/app/Services/congreso.service';
import {Congreso} from '../../Models/Congreso'
@Component({
  selector: 'app-registro-congreso',
  templateUrl: './registro-congreso.component.html',
  styleUrls: ['./registro-congreso.component.css']
})
export class RegistroCongresoComponent implements OnInit {

  constructor(private congresoService:CongresoService) { }
  congreso:Congreso;
  congresos:any = [];
  escuelas:any = [];
  ngOnInit(): void {
    this.congreso = new Congreso();
    this.congresoService.getEscuela().subscribe(
      res=>{
        this.escuelas = res;
        console.log(this.escuelas);
      },err=>{
        console.error(err);
      }
    )
  }
  onSave(escuela):boolean{
    this.congreso.anio = new Date().getFullYear();
    this.congreso.id = escuela;
    if(this.congreso.nombre.trim()!=""&&this.congreso.descripcion.trim()!=""){
      this.congresoService.crearCongreso(this.congreso).subscribe(
        res=>{
          console.log(res);
          return true;
        },err=>{
          console.error(err);
          return false;
        }
      )
    }else{
      return false;
    }
  }
}
