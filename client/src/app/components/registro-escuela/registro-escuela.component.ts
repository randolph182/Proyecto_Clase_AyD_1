import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro-escuela',
  templateUrl: './registro-escuela.component.html',
  styleUrls: ['./registro-escuela.component.css']
})
export class RegistroEscuelaComponent implements OnInit {

  nombre :string;
  loginForm: FormGroup;
  mensaje: string;

  constructor(private formBuilder: FormBuilder) { 
    
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
}
