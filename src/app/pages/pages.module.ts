import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsComponent } from './analytics/analytics.component';
import {PagesComponent} from './pages.component';
import {PagesRoutingModule} from './pages-routing.module';
import {NbCardModule, NbLayoutModule, NbSortDirection, NbSortDirective, NbTreeGridModule} from '@nebular/theme';



@NgModule({
  declarations: [
    AnalyticsComponent,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NbCardModule,
    NbTreeGridModule,
    NbLayoutModule,
  ]
})
export class PagesModule { }
