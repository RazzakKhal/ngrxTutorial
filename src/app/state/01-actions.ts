import { createAction, createActionGroup, emptyProps, props } from "@ngrx/store";
import { User } from "../models/user";

export const initAction  = createAction('init app')

export const changeName = createAction("[ROOT] changeName", props<{username : string}>());

export const changeFirstValue = createAction("[ROOT] changeFirstValue", props<{firstValue : string}>())

export const loadHttp = createAction("[USER API] fetch launched");
export const succesHttp = createAction("[USER API] fetch succes", props<{users : User[]}>());
export const failureHttp = createAction("[USER API] fetch failure", props<{error : Error}>());

export const httpActions = createActionGroup({
  source : 'USER API',
  events : {
    'Fetch launched' : emptyProps,
    'Fetch success' :  props<{users : User[]}>(),
    'Fetch failure' : props<{error : Error}>()
  }
})
