import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from '../transferencia.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css'],
})
export class ExtratoComponent implements OnInit {
  transferencias: Transferencia[] = [];

  constructor(private readonly TransferenciaService: TransferenciaService) {}

  ngOnInit(): void {
    this.TransferenciaService.transferencias$.subscribe((transferencias) => {
      this.transferencias = transferencias;
    });
  }
}
