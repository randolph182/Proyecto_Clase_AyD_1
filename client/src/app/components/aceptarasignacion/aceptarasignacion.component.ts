import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-aceptarasignacion',
  templateUrl: './aceptarasignacion.component.html',
  styleUrls: ['./aceptarasignacion.component.css']
})
export class AceptarasignacionComponent implements OnInit {
  @Input()asignaciones:any=[];
  constructor() { }

  ngOnInit(): void {
   // asginacionService.agregarAsignacion();
  }


  
}
