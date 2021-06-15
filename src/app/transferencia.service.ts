import { Transferencia } from './models/transferencia.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private readonly url = 'http://localhost:3000/transferencias'

  constructor(
    private readonly _httpClient: HttpClient
  ) { }

  adicionarTransferencia(
    solicitacaoTransferencia: Omit<Transferencia, 'data'>
  ): Observable<Transferencia> {
    const dataAtual = new Date(Date.now());

    const novaTransferencia: Transferencia = {
      ...solicitacaoTransferencia,
      data: dataAtual,
    };

    return this._httpClient.post<Transferencia>(this.url, novaTransferencia);
  }

  get transferencias$(): Observable<Transferencia[]> {
    return this._httpClient.get<Transferencia[]>(this.url);
  }
}
