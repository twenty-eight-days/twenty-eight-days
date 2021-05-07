import React, { useEffect, useState } from 'react'
import { LoginForm as LoginFormComponent } from '../components/LoginForm'
import { useDispatch } from 'react-redux'
import { loginFormError, loginFormSubmitted } from '../actions'
import { LoginFormState } from '../model'
import { signIn, signUp, userbase } from '../userbase'
import { isSignUp } from '../default'

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

      if (isSignUp) {
        signUp(username, password).then((action) => dispatch(action))
      } else {
        signIn(username, password).then((action) => dispatch(action))
      }
    }
  }, [isDbInitialized, credentials, dispatch])

  return <LoginFormComponent isSignUp={isSignUp} state={state} onSubmit={onSubmit} />
}
