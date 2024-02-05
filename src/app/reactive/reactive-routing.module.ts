import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternalReqComponent } from './pages/internal-req/internal-req.component';
import { ComercialReqComponent } from './pages/comercial-req/comercial-req.component';
import { GenericReqComponent } from './pages/generic-req/generic-req.component';
import { RequestLayoutComponent } from './layouts/request-layout/request-layout.component';

const routes: Routes = [
  {
    path: '',
    component: RequestLayoutComponent,
    children: [
      { path: 'comercial', component: ComercialReqComponent },
      { path: 'internal', component: InternalReqComponent },
      { path: 'generic', component: GenericReqComponent },
      { path: '**', redirectTo: 'comercial' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveRoutingModule { }
