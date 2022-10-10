import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CuentasModel } from '../shared/modelos/CuentasModel';
import { ApidatosService } from '../shared/servicios/apidatos.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {


  titulo = "Hacer un Retiro";
  total: string = '';
  resp: CuentasModel[] = [];
  valor: any = '';
  


  constructor(private service: ApidatosService) { }

  ngOnInit(): void {
    this.service.getCuentas().subscribe(resp => {
      this.resp = resp;
    })

  }

  obtenerValor(valor:any){
    console.log(valor)
    this.valor = valor;
  }

  

}
