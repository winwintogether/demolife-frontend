import {ThunkAction} from 'redux-thunk'
import {Action} from 'redux'

export type StoreType = {}

export type ThunkResultType<R> = ThunkAction<R, StoreType, any, Action>
