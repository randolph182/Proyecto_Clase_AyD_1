import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionCongresoComponent } from './asignacion-congreso.component';

describe('AsignacionCongresoComponent', () => {
  let component: AsignacionCongresoComponent;
  let fixture: ComponentFixture<AsignacionCongresoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignacionCongresoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionCongresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it ('debería agregar un congreso',()=>{
    let congreso = {
      nombre:'sistemas',
      id_congreso:1
    }
    expect(component.agregar(congreso.nombre+congreso.id_congreso)).toBeTruthy();

  });
  it ('debería eliminar un congreso',()=>{
    let congreso1 = {
      nombre:'sistemas',
      id_congreso:1
    }
    let congreso2 = {
      nombre:'devops',
      id_congreso:2
    }
    component.congresosAgregados.push(congreso1);
    component.congresosAgregados.push(congreso2);
    component.eliminar("devops2")
    expect(component.congresosAgregados.length==1).toBeTruthy();

  });

  it ('no debería enviar congresos',()=>{
    let congresos =[]
    component.congresosAgregados= congresos;
    expect(component.enviar()).toBeFalsy();
    
  });
  
});
