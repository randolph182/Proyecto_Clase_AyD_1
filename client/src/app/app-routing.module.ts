import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { HomeComponent } from './components/home/home.component';
import { AsignacionComponent } from './components/asignacion/asignacion.component';
import { AceptarasignacionComponent } from './components/aceptarasignacion/aceptarasignacion.component';
const routes: Routes = [
  {path: '', redirectTo: '/home' , pathMatch: 'full'},
  {path: 'encabezado', component:EncabezadoComponent},
  {path: 'home', component:HomeComponent },
  {path: 'asignacion', component:AsignacionComponent},
  {path: 'aceptarasignacion',component:AceptarasignacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
