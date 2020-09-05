import { Component, OnInit } from '@angular/core';
import { Catedratico } from 'src/app/models/catedratico';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-registro-cuenta',
  templateUrl: './registro-cuenta.component.html',
  styleUrls: ['./registro-cuenta.component.css']
})
export class RegistroCuentaComponent implements OnInit {
  catedratico:Catedratico;
  constructor(private route:ActivatedRoute,
    private location:Location) {

   }

  ngOnInit(): void {
  }

}
