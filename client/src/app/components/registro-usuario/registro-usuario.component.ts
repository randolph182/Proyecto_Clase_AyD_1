import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Catedratico } from 'src/app/models/catedratico';
import { Estudiante } from 'src/app/models/estudiante';
import { Administrativo } from 'src/app/models/administrativo';
import { RegistroService } from 'src/app/services/registro.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.component.html',
  styleUrls: ['./registro-usuario.component.css']
})
export class RegistroUsuarioComponent implements OnInit {

  usuarioForm:FormGroup;
  constructor(private formBuilder:FormBuilder,
    private router:Router) { }

  ngOnInit(): void {

    this.usuarioForm = this.formBuilder.group(
      {
        nombre: ['',Validators.required],
        apellidos: ['',Validators.required],
        selectUsuario: ['',Validators.required]
        
      }
    );

  }

  addUsuario():void{

    let user:Catedratico = new Catedratico();
    if(this.usuarioForm.controls['selectUsuario'].value == "1"){
      console.log('Es un administrador');
      alert('Es un administrador');
      
    }


    /*if(this.usuarios.find(usuario => usuario.username === user.username)){
      alert('utilice otro nombre de usuario, ya existe este DX');
      return;
    }

    if(this.usuarios.find(usuario => usuario.correo === user.correo)){
      alert('Correo ya registrado');
      return;
    }

    this.usuarioService.addUsuario(user).
      subscribe(
        usuario => {
          alert('Usuario ingresado con exito');
          console.log(usuario);
          this.usuarios.push(user);
          // redireccionamos para que este en una pagina para que valide su correo..

        }
      );

    */
  }
  

}
