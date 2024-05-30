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

on(initAction, (state, props) => {
  console.log('init action est declenché lol', props)
  return {
    ...state
  }
})
,on(httpActions.fetchSuccess, (state, props) => {
  console.log('voici les users', props)
  return {
    ...state,
    user : props.users
  }
}),
on(httpActions.fetchFailure, (state, props) => {
  console.log('erreur généré par fetchFailure',props.error.message)
  return {
    ...state
  }
})


);

function log(reducer : ActionReducer<RootState, Action>){
  return (state :RootState, action : Action) => {
    const nextState = reducer(state, action)
    return nextState;
  }
}
