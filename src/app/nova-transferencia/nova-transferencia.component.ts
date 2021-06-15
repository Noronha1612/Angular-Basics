import { TransferenciaService } from './../transferencia.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.css'],
})
export class NovaTransferenciaComponent {
  valor: number | undefined;
  destino: string | undefined;

  constructor(
    private readonly _transferenciaService: TransferenciaService,
    private readonly _router: Router
  ) {}

  transferir() {
    if (this.valor && this.destino) {
      const transferencia = { valor: this.valor, destino: this.destino };
      this._transferenciaService.adicionarTransferencia(transferencia)
        .subscribe(() => {
          this._router.navigateByUrl('extrato');
        });
    } else {
      console.log('Falta dados');
    }
  }
}
