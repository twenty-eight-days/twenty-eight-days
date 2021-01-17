import { DatabaseState } from './model'

export const defaultDatabaseState: DatabaseState = {
  authState: {
    type: 'login-form',
    state: {
      type: 'login-form-idle',
    },
  },
}
