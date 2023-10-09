import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { InternalReqComponent } from './pages/internal-req/internal-req.component';
import { ComercialReqComponent } from './pages/comercial-req/comercial-req.component';
import { GenericReqComponent } from './pages/generic-req/generic-req.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    InternalReqComponent,
    ComercialReqComponent,
    GenericReqComponent
  ],
  imports: [
    CommonModule,
    ReactiveRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ReactiveModule { }
