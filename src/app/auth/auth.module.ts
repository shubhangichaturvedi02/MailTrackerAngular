import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {AuthRoutingModule} from './auth-routing.module';
import {NbCardModule, NbInputModule, NbLayoutModule} from '@nebular/theme';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    NbCardModule,
    NbInputModule,
    NbLayoutModule
  ]
})
export class AuthModule { }