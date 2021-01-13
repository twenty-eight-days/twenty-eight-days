import { UPDATE_AUTH_STATE } from './actionTypes'
import { AuthState, LoginState, LoginFormState, CycleId } from './model'
import userbase, { UserResult } from 'userbase-js'

export type DatabaseAction = UpdateAuthStateAction

interface UpdateAuthStateAction {
  type: typeof UPDATE_AUTH_STATE
  authState: AuthState
}

const updateAuthState = (authState: AuthState): UpdateAuthStateAction => ({
  type: UPDATE_AUTH_STATE,
  authState,
})

export const dbInitInProgress = () =>
  updateAuthState({
    type: 'db-init-in-progress',
  })

export const dbInitFailed = (error: any) =>
  updateAuthState({
    type: 'db-init-failed',
    error,
  })

const updateLoginForm = (state: LoginFormState) =>
  updateAuthState({
    type: 'login-form',
    state,
  })

export const showLoginForm = () => updateLoginForm({ type: 'login-form-idle' })
export const loginFormSubmitted = () => updateLoginForm({ type: 'login-form-submitted' })
export const loginFormError = (error: any) => updateLoginForm({ type: 'login-form-error', error })

export const loginSuccessful = (user: UserResult) =>
  updateAuthState({
    type: 'logged-in',
    user,
  })

export const cycleDatabaseName = (loginState: LoginState) => `${loginState.user.username}-cycles-v1`

export const addStartDate = (date: number, loginState: LoginState) => async () => {
  const databaseName = cycleDatabaseName(loginState)
  return userbase
    .insertItem({
      databaseName,
      itemId: `${date}`,
      item: date,
    })
    .then(() => console.log('DB insertItem successful'))
    .catch((e) => {
      console.error('DB insertItem failed ' + e)
    })
}

export const deleteStartDate = (id: CycleId, loginState: LoginState) => async () => {
  const databaseName = cycleDatabaseName(loginState)
  return userbase
    .deleteItem({
      databaseName,
      itemId: id,
    })
    .then(() => console.log('DB deleteItem successful'))
    .catch((e) => {
      console.error('DB deleteItem failed ' + e)
    })
}
