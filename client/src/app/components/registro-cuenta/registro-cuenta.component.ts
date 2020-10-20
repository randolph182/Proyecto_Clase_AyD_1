import { Component, OnInit } from '@angular/core';
import { Catedratico } from 'src/app/models/catedratico';
import { ActivatedRoute } from '@angular/router';
import { RegistroService } from 'src/app/services/registro.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-registro-cuenta',
  templateUrl: './registro-cuenta.component.html',
  styleUrls: ['./registro-cuenta.component.css']
})
export class RegistroCuentaComponent implements OnInit {
  usuario:Catedratico;
  constructor(private route:ActivatedRoute,
    private location:Location,
    private registroService:RegistroService) {

   }

  ngOnInit(): void {
  }

  goBack(){
    this.location.back();
  }

  getUsuario():void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.registroService.getUsuario(id)
      .subscribe(usuario => this.usuario = usuario);
  }

  agregarCuenta(usuario:Catedratico){
    this.registroService.addCuenta(usuario).
      subscribe(
        usuario => {
          alert('Usuario ingresado con exito');
          console.log(usuario);
          // redireccionamos para que este en una pagina para que valide su correo..

        }
      );
  }

}
