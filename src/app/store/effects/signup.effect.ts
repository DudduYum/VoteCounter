import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {AuthActions} from "../actions/auth.actions";
import {exhaustMap} from "rxjs";

@Injectable()
export class SignupEffect {
  signup$ = createEffect(() => this.actions$.pipe(
    ofType(AuthActions.signup),
    exhaustMap(registerUserCommand => {
        console.log(registerUserCommand);

        debugger;

        return 'pip';
      }
      // this.authService.login(registerUserCommand).pipe(
      //   map(user => AuthApiActions.loginSuccess({ user })),
      //   catchError(error => of(AuthApiActions.loginFailure({ error })))
      // )
    )
  ))

  constructor(
    private actions$: Actions,
  ) {}
}
