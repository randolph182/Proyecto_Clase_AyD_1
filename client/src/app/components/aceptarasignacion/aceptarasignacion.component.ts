import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aceptarasignacion',
  templateUrl: './aceptarasignacion.component.html',
  styleUrls: ['./aceptarasignacion.component.css']
})
export class AceptarasignacionComponent implements OnInit {
  asignaciones:any=[];
  constructor() { }

  ngOnInit(): void {
   // asginacionService.agregarAsignacion();
  }
}
