import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { HomeComponent } from './components/home/home.component';
import { AsignacionComponent } from './components/asignacion/asignacion.component';
import { AceptarasignacionComponent } from './components/aceptarasignacion/aceptarasignacion.component';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { RegistroCuentaComponent } from './components/registro-cuenta/registro-cuenta.component';

import { ModificacionUsuarioComponent } from './components/modificacion-usuario/modificacion-usuario.component';
import { LoginComponent } from './components/login/login.component';
import { AsignacionCongresoComponent } from './components/asignacion-congreso/asignacion-congreso.component';

const routes: Routes = [
  {path: '', redirectTo: '/home' , pathMatch: 'full'},
  {path: 'encabezado', component:EncabezadoComponent},
  {path: 'home', component:HomeComponent },
  {path: 'asignacion', component:AsignacionComponent},
  {path: 'aceptarasignacion',component:AceptarasignacionComponent},
  {path: 'registro-usuario', component:RegistroUsuarioComponent},
  {path: 'usuarios', component:UsuariosComponent},
  {path: 'registro-cuenta/:id', component:RegistroCuentaComponent },
  {path: 'modificacion-usuario/:id', component:ModificacionUsuarioComponent},
  {path: 'login', component:LoginComponent},
  {path: 'asignacion/congresos', component:AsignacionCongresoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }


