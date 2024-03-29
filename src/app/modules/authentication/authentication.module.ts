import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignUpComponent} from './sign-up/sign-up.component';
import {LogInComponent} from './log-in/log-in.component';
import {LogoutComponent} from './logout/logout.component';
import {RouterLink} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {EffectsModule} from "@ngrx/effects";
import {SignupEffect} from "../../store/effects/signup.effect";

@NgModule({
  declarations: [
    SignUpComponent,
    LogInComponent,
    LogoutComponent
  ],
  exports: [
    LogoutComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    ReactiveFormsModule,
    EffectsModule.forFeature(SignupEffect)
  ]
})
export class AuthenticationModule {
}
