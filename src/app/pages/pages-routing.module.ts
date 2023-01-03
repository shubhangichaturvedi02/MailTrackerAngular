import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AnalyticsComponent} from './analytics/analytics.component';
import {PagesComponent} from './pages.component';
// import {SignUpComponent} from "../auth/login/sign-up/sign-up.component";


const routes: Routes = [
  {
    path: 'pages/mail',
    component: PagesComponent,
  },
    {
      path: 'pages/analytics',
      component: AnalyticsComponent
    },
  // {
  //   path: 'auth/login/sign-up',
  //   component: SignUpComponent
  // }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
