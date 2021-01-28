import { DatabaseState } from './model'
import { DatabaseAction } from './actions'
import { UPDATE_AUTH_STATE } from './actionTypes'

export const dbReducer = (state: DatabaseState, action: DatabaseAction): DatabaseState => {
  switch (action.type) {
    case UPDATE_AUTH_STATE:
      return {
        ...state,
        authState: action.authState,
      }
    default:
      return state
  }
}
