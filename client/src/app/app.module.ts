import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsignacionComponent } from './components/asignacion/asignacion.component';
import { HeaderPrincipalComponent } from './components/header-principal/header-principal.component';
import { RegistroUsuarioComponent } from './Components/registro-usuario/registro-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    AsignacionComponent,
    HeaderPrincipalComponent,
    RegistroUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
