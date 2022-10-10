import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApidatosService } from './servicios/apidatos.service';



@NgModule({
  declarations: [ApidatosService],
  imports: [
    CommonModule
  ],
  exports:[ApidatosService]
})
export class SharedModule { }
