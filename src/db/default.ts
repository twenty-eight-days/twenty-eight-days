import { DatabaseState } from './model'

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
    user: {
      type: 'demo',
      username: 'there',
    },
  },
}
