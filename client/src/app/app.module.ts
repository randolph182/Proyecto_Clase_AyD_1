import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsignacionComponent } from './components/asignacion/asignacion.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
<<<<<<< HEAD
import { HomeComponent } from './components/home/home.component';
=======
import { LoginComponent } from './components/login/login.component';
>>>>>>> login2
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
<<<<<<< HEAD
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
=======
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
>>>>>>> login2

library.add(fas,far);
@NgModule({
  declarations: [
    AppComponent,
    AsignacionComponent,
    EncabezadoComponent,
<<<<<<< HEAD
    HomeComponent,
    RegistroUsuarioComponent
=======
    LoginComponent
>>>>>>> login2
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    FontAwesomeModule
=======
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
>>>>>>> login2
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
