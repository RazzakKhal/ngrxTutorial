import { Component, Inject, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { httpActions, initAction } from './state/01-actions';
import { Observable, concatMap, delay, map, mergeAll, of, switchMap } from 'rxjs';
import { State } from './models/state';
import { getUser } from './state/02-selectors';
import { User } from './models/user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'entrainement';
  prenom : string = "nouveau prenom"
  actualState : Observable<State> = {} as Observable<State>
  user : Observable<User> = {} as Observable<User>
  obs1 = of(1, 2,3);
  obs2 = of('razzak','lol','hihi')
  obs3 = new Observable((observer) => {
    observer.next("parent1")
    setTimeout(() => {
      observer.next("parent2")
    },1000)
      observer.next("parent3")
  })

  constructor(private store : Store<State>){

  }
  ngOnInit(): void {
    // this.store.dispatch(initAction())
    this.actualState = this.store.pipe(select((state) => state))

  }

  ChangeNameWhenButtonClick(){
    this.store.dispatch(httpActions.fetchLaunched())
  }

}
