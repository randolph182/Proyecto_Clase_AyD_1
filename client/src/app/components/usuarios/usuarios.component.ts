import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { Catedratico } from 'src/app/models/catedratico';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  faStar = faStar;
  selectBus:Number = 1;
  usuarios:Catedratico[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  buscar(){

  }

}
