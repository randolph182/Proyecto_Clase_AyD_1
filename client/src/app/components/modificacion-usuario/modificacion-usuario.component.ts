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
    this.usuario = new Catedratico();
    this.getUsuario();
  }

  goBack(){
    this.location.back();
  }

  getUsuario():void{
    
    this.usuario.id = +this.route.snapshot.paramMap.get('id');
    this.usuario.nombre = this.route.snapshot.paramMap.get('nombre');
    this.usuario.apellido = this.route.snapshot.paramMap.get('apellido');
    this.usuario.password = this.route.snapshot.paramMap.get('password');
    this.usuario.carnet = +this.route.snapshot.paramMap.get('carnet');
    this.usuario.dpi   = +this.route.snapshot.paramMap.get('dpi');

    
  }

  actualizarDatos(id:number){
    this.registroService.updateUsuario(this.usuario)
      .subscribe(() => this.goBack());
  }

}
