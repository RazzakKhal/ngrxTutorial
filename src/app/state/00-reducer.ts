import { Action, ActionReducer, MetaReducer, createReducer, on } from "@ngrx/store";
import {  httpActions, initAction } from "./01-actions";
import { RootState } from "../models/state";

const initialState : RootState = {
  firstValue : "Hey je suis une des valeur de base de ton store",
  secondValue : "lol",

   user : []
};

export const metaReducers : MetaReducer[] = [log];

export const rootReducer = createReducer(initialState,
   on(initAction, (state) => {

  return {
    ...state,
    isInitActionEnRoute : true
  }
})
,on(httpActions.fetchSuccess, (state, props) => {
  console.log('voici les users', props)
  return {
    ...state,
    user : [{prenom : "tarik"}]
  }
})


);

function log(reducer : ActionReducer<RootState, Action>){
  return (state :RootState, action : Action) => {
    console.log('state before', state)
    console.log('action before', action)

    const nextState = reducer(state, action)
    console.log("nouvel etat", nextState)
    console.log('nouvelle action', action)
    return nextState;
  }
}
