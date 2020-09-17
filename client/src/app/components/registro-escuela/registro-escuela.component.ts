import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Escuela } from 'src/app/models/escuela';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InsertarescuelaService } from 'src/app/Services/insertarescuela.service';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-registro-escuela',
  templateUrl: './registro-escuela.component.html',
  styleUrls: ['./registro-escuela.component.css']
})
export class RegistroEscuelaComponent implements OnInit {

  nombre :string;
  loginForm: FormGroup;
  mensaje: string;
  escuela:Escuela;

  constructor(private formBuilder: FormBuilder, private insertarescuela:InsertarescuelaService) {
    
  }

  ngOnInit(): void {
  }

  get f() { return this.loginForm.controls;}

  getEscuela(){
      this.nombre = this.f.nombre.value;
      if (this.nombre == '') {
          this.mensaje = "Favor de llenar todos los campos!";

}
  }

  addEscuela(){
      let user:Escuela = new Escuela();

      user.nombre = this.nombre;
      console.log(user);

      this.insertarescuela.addEscuela(user).
      subscribe(
        escuela => {
          alert('Escuela ingresado con exito');
          console.log(escuela);
          

        }
      );
  }
}
