import React from 'react'
import { Main as MainComponent } from '../components/Main'
import { useTypedSelector } from '../../store'
import { AuthState } from '../../db'

export const Main = () => {
  const authState = useTypedSelector<AuthState>((s) => s.database.authState)
  return <MainComponent authState={authState} />
}
