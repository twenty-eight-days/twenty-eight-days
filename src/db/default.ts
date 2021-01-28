import { DatabaseState } from './model'
import { demoUser } from './userbase'

export const defaultDatabaseState: DatabaseState = {
  authState: {
    type: 'login-form',
    state: {
      type: 'login-form-idle',
    },
  },
}

export const demoDatabaseState: DatabaseState = {
  authState: {
    type: 'logged-in',
    user: demoUser,
  },
}
