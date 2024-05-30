import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from "../user.service";
import * as mesActions from "./01-actions"
import { EMPTY, catchError, map, mergeMap, of, tap } from "rxjs";
import { Store } from "@ngrx/store";

@Injectable()
export class Effect01 {


  constructor(private actions$: Actions, private userService: UserService) {
  }

  private loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(mesActions.initAction),
    tap((action1) => console.log('tap1')),
    mergeMap(() => {
      return this.userService.getDataUser().pipe(
        map((objet: any) => {
          return mesActions.httpActions.fetchSuccess({users :objet['datas']})
        }),
        catchError((err : Error) => {
          // console.log('on est dans le catch')
         return of(mesActions.httpActions.fetchFailure({error : err}))

        })
      )
    })),{
      dispatch : true
    })
}
