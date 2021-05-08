import { DatabaseState } from './model'
import { demoUser } from './userbase'

const query = new URLSearchParams(window.location.search)
export const isSignUp = query.has('signUp')

const appId = query.get('appId') || process.env.REACT_APP_USERBASE_APP_ID

export const defaultDatabaseState = (): DatabaseState => {
  if (!isSignUp && appId) {
    return {
      authState: {
        type: 'attempt-auto-login',
        appId,
      },
    }
  } else {
    return {
      authState: {
        type: 'login-form',
        state: {
          type: 'login-form-idle',
        },
      },
    }
  }
}

export const demoDatabaseState: DatabaseState = {
  authState: {
    type: 'logged-in',
    user: demoUser,
    dataLoading: 'pending',
  },
}
