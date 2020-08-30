import { Component, OnInit } from '@angular/core';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faSms } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  faSignInAlt  = faSignInAlt;
  faSms = faSms;
<<<<<<< HEAD
  constructor() {
    
   }

  ngOnInit(): void {
=======

  constructor() { }

  ngOnInit(): void {
    
>>>>>>> login2
  }
  logout(){
    
  }
<<<<<<< HEAD
=======

>>>>>>> login2
}
