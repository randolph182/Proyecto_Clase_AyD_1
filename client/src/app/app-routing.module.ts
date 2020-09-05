import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { HomeComponent } from './components/home/home.component';
import { AsignacionComponent } from './components/asignacion/asignacion.component';
import { AceptarasignacionComponent } from './components/aceptarasignacion/aceptarasignacion.component';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';
const routes: Routes = [
  {path: '', redirectTo: '/home' , pathMatch: 'full'},
  {path: 'encabezado', component:EncabezadoComponent},
  {path: 'home', component:HomeComponent },
  {path: 'asignacion', component:AsignacionComponent},
  {path: 'aceptarasignacion',component:AceptarasignacionComponent},
  {path: 'registro-usuario', component:RegistroUsuarioComponent}
];
import { LoginComponent } from './components/login/login.component';
import { RegistroUsuarioComponent } from './components/registro-usuario/registro-usuario.component';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }


const rutas: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroUsuarioComponent}
];