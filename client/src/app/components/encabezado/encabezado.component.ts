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
  constructor() {
    
   }

  ngOnInit(): void {
  }
  logout(){
    
  }
}
