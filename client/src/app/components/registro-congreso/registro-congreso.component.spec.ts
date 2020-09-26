import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroCongresoComponent } from './registro-congreso.component';

describe('RegistroCongresoComponent', () => {
  let component: RegistroCongresoComponent;
  let fixture: ComponentFixture<RegistroCongresoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroCongresoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroCongresoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('deberia de tener un nombre', () => {
    component.congreso.nombre = "asdkjf";
    expect(component.onSave()).toBeTruthy();
  });
  it('deberia de tener un id escuela', () => {
    component.congreso.id =9;
    expect(component.onSave()).toBeTruthy();
  });
  it('deberia de tener el anño actual', () => {
    component.onSave();
    expect(component.congreso.anio==2020).toBeTruthy();
  });
  
});
