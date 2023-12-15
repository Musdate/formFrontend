import { Component, OnInit } from '@angular/core';
import { ComercialRequest } from 'src/app/reactive/interfaces/comercial-req.interface';
import { HistoryService } from '../../services/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  public history: ComercialRequest[] = [];

  constructor ( private historyService: HistoryService ) { }

  ngOnInit(): void {
    this.historyService.findAllComercial().subscribe(
      comercialReq => this.history = comercialReq
    );
    
  }

}
