import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentesModule } from '../componentes/componentes.module';
import { MainPageComponent } from './main-page.component';
import { ApidatosService } from '../shared/servicios/apidatos.service';



@NgModule({
  declarations: [
    MainPageComponent,
  ],
  imports: [
    CommonModule,
    ComponentesModule
  ],

})
export class MainPageModule { }
