import { UserResult } from 'userbase-js'

/* ·················································································································· */
/*  Redux State
/* ·················································································································· */

export interface DatabaseState {
  readonly authState: AuthState
}

export type AuthState = NoAppId | DbInitInProgress | DbInitFailed | DisplayLoginForm | LoginState

export interface NoAppId {
  type: 'no-app-id'
}

export interface DbInitInProgress {
  type: 'db-init-in-progress'
}

export interface DbInitFailed {
  type: 'db-init-failed'
  error: any
}

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

export interface LoginFormError {
  type: 'login-form-error'
  error: any
}

export interface LoginState {
  type: 'logged-in'
  user: UserResult
}

/* ·················································································································· */
/*  Userbase IDs
/* ·················································································································· */

enum CycleIdBrand {}

export type CycleId = CycleIdBrand & string
