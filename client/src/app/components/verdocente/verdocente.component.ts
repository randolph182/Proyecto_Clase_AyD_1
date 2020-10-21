import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscriber } from 'rxjs';
import { GetdocentesService } from 'src/app/Services/getdocentes.service';

@Component({
  selector: 'app-verdocente',
  templateUrl: './verdocente.component.html',
  styleUrls: ['./verdocente.component.css']
})
export class VerdocenteComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private getdocente:GetdocentesService) { }

  getDocente():void{
    this.getdocente.getDocentes().
    subscribe(docente =>{
      this.docentes = docente as Docente[];
      console.log("--------categoria local------------\n");
      console.log(escuela);
      console.log("--------categoria global------------\n");
      console.log(this.docente);
    }, 
    error => console.error(error));
  }

  ngOnInit(): void {
    this.docente = new Docente();
    this.getDocente();
  }

}
