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
});
