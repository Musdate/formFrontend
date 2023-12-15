import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './pages/history/history.component';
import { HistoryLayoutComponent } from './layouts/history-layout/history-layout.component';

const routes: Routes = [
  {
    path: '',
    component: HistoryLayoutComponent,
    children: [
      { path: 'history', component: HistoryComponent },
      { path: '**', redirectTo: 'history' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryRoutingModule { }
