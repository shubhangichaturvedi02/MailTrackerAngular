import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {AuthRoutingModule} from './auth-routing.module';
import {
  NbButtonModule,
  NbCardModule,
  NbFormFieldModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule
} from '@nebular/theme';
import {FormsModule} from "@angular/forms";
import { SignUpComponent } from './login/sign-up/sign-up.component';



@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent
  ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        NbCardModule,
        NbInputModule,
        NbLayoutModule,
        NbFormFieldModule,
        NbIconModule,
        NbButtonModule,
        FormsModule
    ]
})
export class AuthModule { }
