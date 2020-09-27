import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroEscuelaComponent } from '../components/registro-escuela/registro-escuela.component';
import { InsertarescuelaService } from './insertarescuela.service';
import { Escuela } from 'src/app/models/escuela';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { faSortNumericDown } from '@fortawesome/free-solid-svg-icons';

class HttpClientMock {
  get = jasmine.createSpy('httpClient.get');
  post = jasmine.createSpy('httpClient.post');
  put = jasmine.createSpy('httpClient.put');
}

let url = 'http://localhost:3000/registrar_escuela';  //recordar cambiar url a url de servidor

describe('InsertarescuelaService', () => {
  let service: InsertarescuelaService;
  let component: RegistroEscuelaComponent;
  let fixture: ComponentFixture<RegistroEscuelaComponent>;
  let escuela:Escuela;
  let httpClientMock: HttpClientMock;
  const EscuelaMock: Escuela ={
    id:100,
    nombre:'EscuelaPrueba'
  
}

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroEscuelaComponent ],
      providers:[{
        provide: HttpClient,
        useClass: HttpClientMock
      }]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroEscuelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('id para buscar escuela debería ser numero', () => {
    expect(escuela.id).toEqual(jasmine.any(Number));
  });

  fit('debería de ingresar escuela con mock de objeto', () => {
    const catObservable: Observable<Escuela> = of(EscuelaMock);
    httpClientMock.post.and.returnValue(catObservable);
      service.addEscuela(EscuelaMock)
      .subscribe(catStatus => {
        expect(httpClientMock.post)
          .toHaveBeenCalledWith(url, EscuelaMock);
        expect(JSON.stringify(catStatus)).toBe(JSON.stringify(EscuelaMock));
      });
    });


});
