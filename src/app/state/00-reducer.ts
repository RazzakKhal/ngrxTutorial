import { createReducer } from "@ngrx/store";

const initialState = {
  firstValue : "Hey je suis une des valeur de base de ton store",
  secondValue : "lol"
};

export const rootReducer = createReducer(initialState);
