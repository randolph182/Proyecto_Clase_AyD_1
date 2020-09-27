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

  escuelas:Escuela[]=[];
  nombre :string;
  loginForm: FormGroup;
  mensaje: string;
  escuela:Escuela;

  constructor(private formBuilder: FormBuilder, private insertarescuela:InsertarescuelaService) {
    
  }

  getEscuela():void{
    this.insertarescuela.getEscuelas().
    subscribe(escuela =>{
      this.escuelas = escuela as Escuela[];
      console.log("--------categoria local------------\n");
      console.log(escuela);
      console.log("--------categoria global------------\n");
      console.log(this.escuela);
    }, 
    error => console.error(error));
  }

  ngOnInit(): void {
    this.escuela = new Escuela();
    this.getEscuela();
  }

  get f() { return this.loginForm.controls;}

  getDatosEscuela(){
      this.nombre = this.f.nombre.value;
      if (this.nombre == '') {
          this.mensaje = "Favor de llenar todos los campos!";

}
  }

  addEscuela(){

      this.insertarescuela.addEscuela(this.escuela).
      subscribe(
        escuela => {
          alert('Escuela ingresado con exito');
          console.log(escuela);
          

        }
      );
  }

  actualizarEscuela(escuela:Escuela):void{
    this.insertarescuela.updateEscuela(escuela).subscribe( escuela => { alert('escuela actualizada!');});
  }

  eliminarEscuela(escuela:Escuela):void{
    this.insertarescuela.deleteEscuela(escuela).subscribe( escuela => { alert('escuela eliminada!');});
  }

  onSave()
  {}

  onEdit(indice)
  {
    let esc:Escuela = new Escuela();
    esc.id = indice;
    esc.nombre = this.escuela.nombre;
    //console.log("nombre: " + esc.nombre);
    esc.nombre = this.escuela.nombre;
    //console.log("nombre: " + esc.nombre);
    this.actualizarEscuela(esc); 
    
  }

  onDelete(indice)
  {
    let esc:Escuela = new Escuela();
    esc.id = indice;
    this.eliminarEscuela(esc);
  }
}
