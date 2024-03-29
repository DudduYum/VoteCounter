import {Component} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {Store} from "@ngrx/store";
import {AuthActions} from "../../../store/actions/auth.actions";
import {RegisterUserCommand} from "../../../../api/commands/register-user";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})

export class SignUpComponent {
  constructor(private store: Store) {
  }

  signUpDataForm = new FormGroup(
    {
      firstName: new FormControl('pipo'),
      lastName: new FormControl(''),
      email: new FormControl(''),
      login: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl('')
    }
  );

  onSubmit() {
    this.signUpDataForm.getRawValue();
    this.store.dispatch(AuthActions.signup(
      {
        name: this.signUpDataForm.get('lastName')?.value,
        surName: this.signUpDataForm.get('lastName')?.value,
        nickname: this.signUpDataForm.get('login')?.value,
        email: this.signUpDataForm.get('email')?.value,
        password: this.signUpDataForm.get('password')?.value
      } as RegisterUserCommand
    ));
  }


}
