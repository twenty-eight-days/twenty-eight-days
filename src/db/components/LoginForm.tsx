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
  onSubmit: (username: string, password: string) => void
}

export const LoginForm = ({ state, onSubmit }: Props) => {
  const classes = useStyles()

  const [username, setUsername] = useState<string>(process.env.REACT_APP_USERBASE_USERNAME ?? '')
  const [password, setPassword] = useState<string>(process.env.REACT_APP_USERBASE_PASSWORD ?? '')
  const isSubmitted = state.type === 'login-form-submitted'

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit(username, password)
  }
  return (
    <form className={classes.root} noValidate={true} autoComplete="off" onSubmit={handleSubmit}>
      <TextField
        id="username"
        variant={'outlined'}
        fullWidth={true}
        label="Username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        disabled={isSubmitted}
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
      />
      <Button
        className={classes.button}
        disabled={isSubmitted || username.trim().length === 0 || password.trim().length === 0}
        type="submit"
        variant={'contained'}
        color="primary"
      >
        {isSubmitted ? <CircularProgress size={20} /> : 'Log In'}
      </Button>
    </form>
  )
}
