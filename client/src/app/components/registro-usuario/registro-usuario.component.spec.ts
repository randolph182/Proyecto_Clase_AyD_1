import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { RegistroUsuarioComponent } from './registro-usuario.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RegistroService } from 'src/app/services/registro.service';
import { Catedratico } from '../../models/catedratico';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('RegistroUsuarioComponent', () => {
  let component: RegistroUsuarioComponent;
  let fixture: ComponentFixture<RegistroUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      declarations: [ RegistroUsuarioComponent ],
      providers:[{provide:RegistroService, useClass:Catedratico}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
