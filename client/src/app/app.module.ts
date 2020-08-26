import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'
import { AceptarasignacionComponent } from './components/aceptarasignacion/aceptarasignacion.component' 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsignacionComponent } from './components/asignacion/asignacion.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { HomeComponent } from './components/home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fas,far);
@NgModule({
  declarations: [
    AppComponent,
    AsignacionComponent,
    EncabezadoComponent,
    HomeComponent,
    AceptarasignacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
