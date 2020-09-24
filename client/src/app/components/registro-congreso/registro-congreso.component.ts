import { Component, OnInit } from '@angular/core';
import {Congreso} from '../../Models/Congreso'
@Component({
  selector: 'app-registro-congreso',
  templateUrl: './registro-congreso.component.html',
  styleUrls: ['./registro-congreso.component.css']
})
export class RegistroCongresoComponent implements OnInit {

  constructor() { }
  congreso:Congreso;
  congresos:any = [];
  escuelas:any = [];
  ngOnInit(): void {
  }
  onSave():boolean{
    this.congreso.anio = new Date().getFullYear();
    return false;
  }
}
