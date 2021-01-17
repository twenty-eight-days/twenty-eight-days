import React, { useEffect, useState } from 'react'
import { LoginForm as LoginFormComponent } from '../components/LoginForm'
import { useDispatch } from 'react-redux'
import userbase, { UserResult } from 'userbase-js'
import { loginFormError, loginFormSubmitted, loginSuccessful } from '../actions'
import { LoginFormState } from '../model'

interface Props {
  readonly state: LoginFormState
}

export const LoginForm = ({ state }: Props) => {
  const [appId, setAppId] = useState<string>()
  const [isDbInitialized, setDbInitialized] = useState<boolean>(false)
  const [credentials, setCredentials] = useState<[string, string]>()

  const dispatch = useDispatch()

  const onSubmit = (appId: string, username: string, password: string) => {
    setAppId(appId)
    setCredentials([username, password])
    dispatch(loginFormSubmitted())
  }

  useEffect(() => {
    if (appId && !isDbInitialized) {
      console.debug('Initializing DB...')
      userbase
        .init({ appId })
        .then(() => {
          console.debug('DB init successful')
          setDbInitialized(true)
        })
        .catch((error) => {
          console.debug('DB init failed: ' + error)
          setDbInitialized(false)
          dispatch(loginFormError('Invalid App Id', 'appId'))
        })
    }
  }, [appId, isDbInitialized, setDbInitialized, dispatch])

  useEffect(() => {
    if (isDbInitialized && credentials) {
      // Prevent already signed-in
      userbase.signOut().catch(() => {
        /* Ignore not-yet-signed-in */
      })
      const [username, password] = credentials
      console.debug('DB sign-in...')
      userbase
        .signIn({
          username,
          password,
        })
        .then((user: UserResult) => {
          console.debug('DB sign-in successful')
          return dispatch(loginSuccessful(user))
        })
        .catch((e: string) => {
          console.debug('DB sign-in failed: ' + e)
          if (e.toString().startsWith('AppIdNotValid')) {
            dispatch(loginFormError('Invalid App Id', 'appId'))
          } else {
            dispatch(loginFormError('Invalid Credentials', 'credentials'))
          }
        })
    }
  }, [isDbInitialized, credentials, dispatch])

  return <LoginFormComponent state={state} onSubmit={onSubmit} />
}
