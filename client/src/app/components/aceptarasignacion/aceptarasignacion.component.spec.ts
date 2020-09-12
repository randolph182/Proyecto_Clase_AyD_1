import { Type } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Curso } from 'src/app/Models/Curso';

import { AceptarasignacionComponent } from './aceptarasignacion.component';

describe('AceptarasignacionComponent', () => {
  let component: AceptarasignacionComponent;
  let fixture: ComponentFixture<AceptarasignacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AceptarasignacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AceptarasignacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería eliminar un curso de la lista',()=>{
    let curso1 = {
      curso:"ipc2",
      seccion:"b"
    }
    let curso2 = {
      curso:"ipc1",
      seccion:"b"
    }
    let curso3 = {
      curso:"ipc3",
      seccion:"a"
    }
    let cursosAsignados:any = [curso1,curso2,curso3];
    component.elminarCurso("ipc3a",cursosAsignados);
    expect(cursosAsignados.length==2).toBeTrue();
  });
  it('no debería eliminar un curso de la lista',()=>{
    let curso1 = {
      curso:"ipc2",
      seccion:"b"
    }
    let curso2 = {
      curso:"ipc1",
      seccion:"b"
    }
    let curso3 = {
      curso:"ipc3",
      seccion:"a"
    }
    let cursosAsignados:any = [curso1,curso2,curso3];
    component.elminarCurso("ipc3w",cursosAsignados);
    expect(cursosAsignados.length==2).toBeTrue();
  });
  it('no debería eliminar un curso de la lista',()=>{
    
    let cursosAsignados:any = [];

    expect(component.asignar(cursosAsignados)).toBeFalse();
  });
});
