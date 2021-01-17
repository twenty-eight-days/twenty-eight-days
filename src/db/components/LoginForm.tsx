import React, { useState } from 'react'
import { Button, CircularProgress, TextField, Theme } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { LoginFormState } from '../model'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    width: '100%',
    display: 'grid',
    gridTemplateRows: 'auto auto auto',
    gridRowGap: theme.spacing(2),
  },
  button: {
    minHeight: 24,
  },
}))

interface Props {
  state: LoginFormState
  onSubmit: (appId: string, username: string, password: string) => void
}

export const LoginForm = ({ state, onSubmit }: Props) => {
  const classes = useStyles()

  const [appId, setAppId] = useState<string>(process.env.REACT_APP_USERBASE_APP_ID ?? '')
  const [username, setUsername] = useState<string>(process.env.REACT_APP_USERBASE_USERNAME ?? '')
  const [password, setPassword] = useState<string>(process.env.REACT_APP_USERBASE_PASSWORD ?? '')
  const isSubmitted = state.type === 'login-form-submitted'

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit(appId, username, password)
  }

  const isInvalidCredentials = state.type === 'login-form-error' && state.field === 'credentials'

  return (
    <form className={classes.root} noValidate={true} autoComplete="off" onSubmit={handleSubmit}>
      <TextField
        id="appId"
        variant={'outlined'}
        fullWidth={true}
        label="App Id"
        type={'password'}
        value={appId}
        onChange={(event) => setAppId(event.target.value)}
        disabled={isSubmitted}
        error={state.type === 'login-form-error' && state.field === 'appId'}
      />
      <TextField
        id="username"
        variant={'outlined'}
        fullWidth={true}
        label="Username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        disabled={isSubmitted}
        error={isInvalidCredentials}
      />
      <TextField
        id="password"
        variant={'outlined'}
        fullWidth={true}
        label="Password"
        type={'password'}
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        disabled={isSubmitted}
        error={isInvalidCredentials}
      />
      <Button
        className={classes.button}
        disabled={
          isSubmitted || appId.trim().length === 0 || username.trim().length === 0 || password.trim().length === 0
        }
        type="submit"
        variant={'contained'}
        color="primary"
      >
        {isSubmitted ? <CircularProgress size={20} /> : 'Log In'}
      </Button>
    </form>
  )
}
