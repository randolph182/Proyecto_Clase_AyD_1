import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsignacionComponent } from './components/asignacion/asignacion.component';

const routes: Routes = [
  {
    path:'asignacion',
    component:AsignacionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
