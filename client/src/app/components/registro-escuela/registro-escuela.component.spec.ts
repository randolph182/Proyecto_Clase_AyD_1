import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroUsuarioComponent } from '../registro-usuario/registro-usuario.component';

import { RegistroEscuelaComponent } from './registro-escuela.component';

describe('RegistroEscuelaComponent', () => {
  let component: RegistroEscuelaComponent;
  let fixture: ComponentFixture<RegistroEscuelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroEscuelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroEscuelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('deberia guardar el valor del nombre', () => {
    //expect(RegistroEscuelaComponent['nombre'] != "");
  });
});
