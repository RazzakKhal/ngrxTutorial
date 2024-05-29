import { Injectable, OnInit } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from "../user.service";
import * as mesActions from "./01-actions"
import { map, mergeMap, tap } from "rxjs";
import { Store } from "@ngrx/store";

@Injectable()
export class Effect01 {


  constructor(private actions$ : Actions, private userService : UserService, private store : Store){
    console.log('une nouvelle instance de effect01 est créé')
  }

  private loadUsers$ = createEffect(() => this.actions$.pipe(
    ofType(mesActions.httpActions.fetchLaunched),
    tap((action1) =>  console.log('tap1')),

    mergeMap((action) => this.userService.getDataUser().pipe(
      map((objet : any) => mesActions.httpActions.fetchSuccess(objet['datas']))
    ))

  ))

}
