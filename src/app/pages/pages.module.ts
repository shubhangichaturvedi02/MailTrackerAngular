import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsComponent } from './analytics/analytics.component';
import {PagesComponent} from './pages.component';
import {PagesRoutingModule} from './pages-routing.module';
import {
  NbCardModule,
  NbLayoutModule,
  NbSortDirection,
  NbSortDirective,
  NbTabsetModule,
  NbTreeGridModule
} from '@nebular/theme';
import {PlotlyModule} from "angular-plotly.js";



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
    NbTabsetModule,
    PlotlyModule,
  ]
})
export class PagesModule { }
