import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AnalyticsComponent} from './analytics/analytics.component';
import {PagesComponent} from './pages.component';


const routes: Routes = [
  {
    path: 'pages/mail',
    component: PagesComponent,
  },
      {
        path: 'pages/analytics',
        component: AnalyticsComponent
      }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
