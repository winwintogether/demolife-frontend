import { USER_SET, USER_REMOVE } from "../actionTypes";

const defaultState = {
  email: null,
  token: null
}

export default (state: any = defaultState, action: any) => {
  switch (action.type) {
    case USER_SET:
      return {
        ...action.user
      }
    case USER_REMOVE:
      return {
        ...defaultState
      }
    default:
      return state
  }
}
