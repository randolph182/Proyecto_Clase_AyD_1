import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionComponent } from './asignacion.component';

describe('AsignacionComponent', () => {
  let component: AsignacionComponent;
  let fixture: ComponentFixture<AsignacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should be false',()=>{
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
    expect(component.aceptar()).toBeTruthy();
  })
});
