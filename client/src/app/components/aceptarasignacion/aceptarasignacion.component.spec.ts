import { async, ComponentFixture, TestBed } from '@angular/core/testing';

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
});
