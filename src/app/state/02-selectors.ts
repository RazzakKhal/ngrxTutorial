import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RootState, State } from "../models/state";

const featureSelector = createFeatureSelector<RootState>('root')

export const getUser = createSelector(featureSelector , (state : RootState) => state.user)
