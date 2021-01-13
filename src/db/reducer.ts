import { DatabaseState } from './model'
import { defaultDatabaseState } from './default'
import { DatabaseAction } from './actions'
import { UPDATE_AUTH_STATE } from './actionTypes'

export const dbReducer = (state: DatabaseState = defaultDatabaseState, action: DatabaseAction): DatabaseState => {
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
