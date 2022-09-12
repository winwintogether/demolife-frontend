import { ThunkResultType } from 'store/types'
import { USER_SET, USER_REMOVE } from "../actionTypes";

export function set() {
  return {
    type: USER_SET,
  }
}

export function remove(): ThunkResultType<void> {
  return (dispatch) => {
    dispatch({ type: USER_REMOVE })
  }
}
