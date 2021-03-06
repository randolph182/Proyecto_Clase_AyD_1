import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { AceptarasignacionComponent } from './components/aceptarasignacion/aceptarasignacion.component' 
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsignacionComponent } from './components/asignacion/asignacion.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { CommonModule } from '@angular/common';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { RegistroEscuelaComponent } from './components/registro-escuela/registro-escuela.component';
import { ModificacionUsuarioComponent } from './components/modificacion-usuario/modificacion-usuario.component';
import { AsignacionCongresoComponent } from './components/asignacion-congreso/asignacion-congreso.component';
import { RegistroCongresoComponent } from './components/registro-congreso/registro-congreso.component';
import { CursosComponent } from './components/cursos/cursos.component';


library.add(fas,far);
@NgModule({
  declarations: [
    AppComponent,
    AsignacionComponent,
    EncabezadoComponent,
    HomeComponent,
    RegistroUsuarioComponent,
    LoginComponent,
    AceptarasignacionComponent,
    UsuariosComponent,
    ModificacionUsuarioComponent,
    AsignacionCongresoComponent,
    RegistroCongresoComponent
    ModificacionUsuarioComponent,
    CursosComponent
    RegistroEscuelaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  exports:[
    [RouterModule]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
