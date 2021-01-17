import { UserResult } from 'userbase-js'

/* ·················································································································· */
/*  Redux State
/* ·················································································································· */

export interface DatabaseState {
  readonly authState: AuthState
}

export type AuthState = DisplayLoginForm | DbInitInProgress | DbInitFailed | LoginState

export interface DisplayLoginForm {
  type: 'login-form'
  state: LoginFormState
}

export type LoginFormState = LoginFormIdle | LoginFormSubmitted | LoginFormError

export interface LoginFormIdle {
  type: 'login-form-idle'
}

export interface LoginFormSubmitted {
  type: 'login-form-submitted'
}

export type LoginFormField = 'appId' | 'credentials'

export interface LoginFormError {
  type: 'login-form-error'
  field: LoginFormField
  error: string
}

export interface LoginState {
  type: 'logged-in'
  user: UserResult
}

export interface DbInitInProgress {
  type: 'db-init-in-progress'
}

export interface DbInitFailed {
  type: 'db-init-failed'
  error: any
}

/* ·················································································································· */
/*  Userbase IDs
/* ·················································································································· */

enum CycleIdBrand {}

export type CycleId = CycleIdBrand & string
