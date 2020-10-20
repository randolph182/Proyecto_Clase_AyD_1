import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Catedratico } from 'src/app/models/catedratico';
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
    private router:Router,
    private registroService:RegistroService) {

     }

  ngOnInit(): void {

    this.usuarioForm = this.formBuilder.group(
      {
        nombre: ['',Validators.required],
        apellido: ['',Validators.required],
        dpi: ['', [Validators.required, Validators.maxLength(13), Validators.pattern('^\d+$')]],
        carnet: ['', [Validators.required, Validators.maxLength(9), Validators.pattern('^\d+$')]],
        selectUsuario: ['',Validators.required]
        
      }
    );

  }

  public getError(controlName:string):string{
    let error= '';
    const control = this.usuarioForm.controls[controlName];
    if(control.touched && control.errors != null){
      if(controlName == 'clave'){
        error = 'Se necesita '+controlName+' campo obligatorio, al menos 1 letra, 1 simbolo y 1 numero.';
      }else {
        error = 'Se necesita '+controlName+' campo obligatorio.';
      }

    }
    return error;

  }

  addUsuario():void{

    let user:Catedratico = new Catedratico();
    

    user.nombre = this.usuarioForm.controls['nombre'].value;
    user.apellido = this.usuarioForm.controls['apellido'].value;


    console.log(user);
    

    this.registroService.addCatedratico(user).
      subscribe(
        usuario => {
          alert('Usuario ingresado con exito');
          console.log(usuario);
          // redireccionamos para que este en una pagina para que valide su correo..

        }
      );

    
  }
  

}
