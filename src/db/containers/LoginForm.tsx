import React from 'react'
import { LoginForm as LoginFormComponent } from '../components/LoginForm'
import { useDispatch } from 'react-redux'
import userbase, { UserResult } from 'userbase-js'
import { loginFormError, loginFormSubmitted, loginSuccessful } from '../actions'
import { LoginFormState } from '../model'

interface Props {
  readonly state: LoginFormState
}

export const LoginForm = ({ state }: Props) => {
  const dispatch = useDispatch()
  const onSubmit = (username: string, password: string) => {
    dispatch(loginFormSubmitted())
    userbase
      .signIn({
        username,
        password,
        rememberMe: 'session',
      })
      .then((user: UserResult) => {
        return dispatch(loginSuccessful(user))
      })
      .catch((error) => dispatch(loginFormError(error)))
  }
  return <LoginFormComponent state={state} onSubmit={onSubmit} />
}
