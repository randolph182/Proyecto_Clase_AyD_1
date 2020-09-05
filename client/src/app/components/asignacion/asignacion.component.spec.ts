import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionComponent } from './asignacion.component';
import { CursoService } from 'src/app/Services/curso.service';
import { Router } from '@angular/router';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AceptarasignacionComponent } from '../aceptarasignacion/aceptarasignacion.component';
import { Curso } from 'src/app/Models/Curso';

describe('AsignacionComponent', () => {
  let component: AsignacionComponent;
  let fixture: ComponentFixture<AsignacionComponent>;
  let cursoService: CursoService;
  let router:Router;
  let httpMock:HttpClientTestingModule;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers:[CursoService],
      declarations: [ AsignacionComponent ],
      imports:[HttpClientTestingModule,
              RouterTestingModule.withRoutes(
                [{path:'aceptarasignacion',component:AceptarasignacionComponent}]
              )]
    })
    .compileComponents();
    httpMock = TestBed.get(HttpTestingController);
    cursoService = TestBed.get(RouterTestingModule);
    router = TestBed.get(RouterTestingModule);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  beforeEach(()=>{
  
    component = new AsignacionComponent(cursoService,router);

  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it ('debería ser falso si está vacío',()=>{
    expect(component.aceptar()).toBeFalsy();
  })
  it ('debería ser falso si se llaman igual',()=>{
    let curso1 = {
      curso:"curso",
      seccion:'A'
    }
    let curso2 = {
      curso:"curso",
      seccion:'B'
    }
    component.cursosAgregados.push(curso1);
    component.cursosAgregados.push(curso2);
    expect(component.aceptar()).toBeFalsy();
  })
});
