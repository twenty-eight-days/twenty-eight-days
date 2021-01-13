import * as React from 'react'
import { ThemeSwitch as ThemeSwitchComp } from '../components/ThemeSwitch'
import { ThemeAction, toggleTheme } from '../index'
import { useTypedDispatch, useTypedSelector } from '../../store'
import { Theme } from '@material-ui/core'

export const ThemeSwitch = () => {
  const theme = useTypedSelector<Theme>((s) => s.theme)
  const dispatch = useTypedDispatch<ThemeAction>()
  const onToggleTheme = () => dispatch(toggleTheme())
  return <ThemeSwitchComp theme={theme} onToggleTheme={onToggleTheme} />
}
