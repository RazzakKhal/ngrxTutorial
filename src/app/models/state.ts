import { User } from "./user";

export interface State{
  root : RootState

}

export interface RootState {

    firstValue : string,
    secondValue : string;
    user : User[]

}
