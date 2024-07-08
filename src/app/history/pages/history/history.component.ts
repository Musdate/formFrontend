import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../../services/history.service';

import {
  ComercialRequest,
  InternalRequest,
  GenericRequest
} from 'src/app/reactive/interfaces';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  public comercialReq: ComercialRequest[] = [];
  public internalReq: InternalRequest[] = [];
  public genericReq: GenericRequest[] = [];

  public solicitudSelected = "";

  constructor ( private historyService: HistoryService ) { }

  ngOnInit(): void {

    this.historyService.findAllComercial('nombreSolicitud', 'desc').subscribe(
      comercialReq => this.comercialReq = comercialReq
    );

    this.historyService.findAllInternal('nombreSolicitud', 'desc').subscribe(
      internalReq => this.internalReq = internalReq
    );
    
    this.historyService.findAllGeneric('nombreSolicitud', 'desc').subscribe(
      genericReq => this.genericReq = genericReq
    );

  }

}