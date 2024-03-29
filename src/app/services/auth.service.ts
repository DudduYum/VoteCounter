import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {API} from "../../api/ApiList";
import {RegisterUserCommand} from "../../api/commands/register-user";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private apiClient: HttpClient ) { }

  public signup(signupComand:RegisterUserCommand): Observable<any>{
    return this.apiClient.post(
      API.SignupApi,
      signupComand
    );
  }
}
