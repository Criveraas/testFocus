import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentesModule } from './componentes/componentes.module';
import { MainPageModule } from './main-page/main-page.module';
import { ApidatosService } from './shared/servicios/apidatos.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentesModule,
    MainPageModule,
    HttpClientModule
  ],
  providers: [ApidatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
