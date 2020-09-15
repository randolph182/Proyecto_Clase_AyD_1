import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { Catedratico } from 'src/app/models/catedratico';
import { RegistroService } from 'src/app/services/registro.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  faStar = faStar;
  faPlus = faPlus;
  faEdit = faEdit;
  faTrashAlt = faTrashAlt;
  selectBus:number = 1;
  usuarios:Catedratico[] = [];

  constructor(private registroService:RegistroService) { }

  ngOnInit(): void {

    this.getUsuarios();
  }

  getUsuarios():void{
    this.registroService.getCatedraticos(1).
    subscribe(usuarios =>{
      this.usuarios = usuarios as Catedratico[];
      console.log("--------usuarios local------------\n");
      console.log(usuarios);
      console.log("--------usuarios global------------\n");
      console.log(this.usuarios);
    }, 
    error => console.error(error));
    


  }

  buscar(){
    let usuario:Catedratico = new Catedratico();
    usuario.rol = this.selectBus;
    // aqui devuelve para llenar de nuevo el arreglo de usuarios.
    this.registroService.getCatedraticos(this.selectBus).
      subscribe(usuarios =>{
        this.usuarios = usuarios as Catedratico[];
        console.log("--------usuarios local------------\n");
        console.log(usuarios);
        console.log("--------usuarios global------------\n");
        console.log(this.usuarios);
      }, 
      error => console.error(error));
    
    

  }

  eliminar(id:number):void{
    this.registroService.darDeBaja(id).subscribe( usuario => { alert('Usuario eliminado Dx');});



  }

}
