import { Component, OnInit } from '@angular/core';
import { Catedratico } from 'src/app/models/catedratico';
import { ActivatedRoute } from '@angular/router';
import { RegistroService } from 'src/app/services/registro.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-modificacion-usuario',
  templateUrl: './modificacion-usuario.component.html',
  styleUrls: ['./modificacion-usuario.component.css']
})
export class ModificacionUsuarioComponent implements OnInit {
  usuario:Catedratico;
  constructor(private route:ActivatedRoute,
    private location:Location,
    private registroService:RegistroService) { }

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

  actualizarDatos(id:number){
    this.registroService.updateUsuario(this.usuario)
      .subscribe(() => this.goBack());
  }

}
