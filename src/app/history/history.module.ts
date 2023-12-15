import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { HistoryComponent } from './pages/history/history.component';
import { SharedModule } from '../shared/shared.module';
import { HistoryLayoutComponent } from './layouts/history-layout/history-layout.component';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    HistoryComponent,
    HistoryLayoutComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    SharedModule
  ],
  exports: [
    CardComponent
  ]
})
export class HistoryModule { }
