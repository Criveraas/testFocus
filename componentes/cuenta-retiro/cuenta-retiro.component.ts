import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MinValidator } from '@angular/forms';

@Component({
  selector: 'cuenta-retiro',
  templateUrl: './cuenta-retiro.component.html',
  styleUrls: ['./cuenta-retiro.component.css']
})
export class CuentaRetiroComponent implements OnInit {

  @Input() tituloCard:string='';
  @Input() subTitulo:string='';
  @Input() saldo: number = 0;
  retirarTodoClicked: boolean = false;
  ingresarMontoClicked: boolean = false;

  
  @Output() propagar = new EventEmitter<any>();
  
  
 

  constructor() { }

  ngOnInit(): void {
    
  }

  retirarTodo(saldo:number) {
    this.retirarTodoClicked = true;
    this.ingresarMontoClicked = false;
    console.log(saldo);
  }

  ingresarMonto() {
    this.ingresarMontoClicked = true;
    this.retirarTodoClicked = false;
  }

  volver() {
    this.ingresarMontoClicked = false;
  }

  public getInputValue(inputValue:string){
    
    this.propagar.emit(inputValue)
    
  }

  



}
