import { Component, OnInit, OnDestroy } from '@angular/core';
import { RegistroService } from './../../services/registro.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit, OnDestroy {
  registro;
  subscriptor: Subscription;

  constructor(private _sRegistro: RegistroService) { }

  ngOnInit() {
    this.subscriptor = this._sRegistro.getRegistro().subscribe((lista) => {
      this.registro = lista;
    })

  }
  ngOnDestroy() {
    this.subscriptor.unsubscribe();
  }
}