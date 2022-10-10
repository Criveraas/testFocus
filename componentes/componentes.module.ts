import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuentaRetiroComponent } from './cuenta-retiro/cuenta-retiro.component';
import { HeaderComponent } from './header/header.component';
import { TotalRetiroComponent } from './total-retiro/total-retiro.component';



@NgModule({
  declarations: [CuentaRetiroComponent, HeaderComponent, TotalRetiroComponent],
  imports: [
    CommonModule
  ],
  exports: [CuentaRetiroComponent, HeaderComponent, TotalRetiroComponent]
})
export class ComponentesModule { }
