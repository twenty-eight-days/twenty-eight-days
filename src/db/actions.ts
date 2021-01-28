import { UPDATE_AUTH_STATE } from './actionTypes'
import { AuthState, LoginState, LoginFormState, CycleId, LoginFormField } from './model'
import { userbase, UserResult } from './userbase'

export type DatabaseAction = UpdateAuthStateAction

interface UpdateAuthStateAction {
  type: typeof UPDATE_AUTH_STATE
  authState: AuthState
}

const updateAuthState = (authState: AuthState): UpdateAuthStateAction => ({
  type: UPDATE_AUTH_STATE,
  authState,
})

const updateLoginForm = (state: LoginFormState) =>
  updateAuthState({
    type: 'login-form',
    state,
  })

export const loginFormSubmitted = () => updateLoginForm({ type: 'login-form-submitted' })
export const loginFormError = (error: string, field: LoginFormField) =>
  updateLoginForm({ type: 'login-form-error', field, error })

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
