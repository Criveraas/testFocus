import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'total-retiro',
  templateUrl: './total-retiro.component.html',
  styleUrls: ['./total-retiro.component.css']
})
export class TotalRetiroComponent implements OnInit {

  @Input() valor:any;

  @Input() montoTotal:string='';

  constructor() { }

  ngOnInit(): void {
  }

 

}
