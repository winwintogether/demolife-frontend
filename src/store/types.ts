import {ThunkAction} from 'redux-thunk'
import {Action} from 'redux'

type UserStateType = {
  email: string;
  token: string;
}

export type StoreType = {
  user: UserStateType
}

export type ThunkResultType<R> = ThunkAction<R, StoreType, any, Action>
