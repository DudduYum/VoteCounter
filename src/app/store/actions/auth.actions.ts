import {createActionGroup, props} from "@ngrx/store";
import Utenente from "../../../api/models/utenente";
import {RegisterUserCommand} from "../../../api/commands/register-user";

export const AuthActions = createActionGroup({
  source: 'Auth',
  events: {
    'login': props,
    'user-loged-in': props<Utenente>(),
    'signup': props<RegisterUserCommand>(),
    'user-signed-up': props<Utenente>()
  }
})
