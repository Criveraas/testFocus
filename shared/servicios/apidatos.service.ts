import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CuentasModel } from '../modelos/CuentasModel';



@Injectable({
  providedIn: 'root'
})
export class ApidatosService {

  private url: string = 'http://localhost:3000/metas';


  constructor(private httpClient: HttpClient) { }


  getCuentas(): Observable<CuentasModel[]> {
    return this.httpClient.get<CuentasModel[]>(this.url)
  }
}
