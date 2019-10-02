import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  constructor(private _sHttp: HttpClient) { }

  getRegistro(): Observable<any> {
    return this._sHttp.get("https://5d5dd71cf30df20014d41ce1.mockapi.io/registro");

  }
}
