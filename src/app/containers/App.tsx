import { App as AppComponent } from '../components/App'
import * as React from 'react'
import { CssBaseline, MuiThemeProvider as ThemeProvider, Theme } from '@material-ui/core'
import { useTypedSelector } from '../../store'

export const App = () => {
  // This is the only place we need to access the theme via our own model
  // From here on, it is safe and convenient to use the `useTheme` hook
  const theme = useTypedSelector<Theme>((s) => s.theme)
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppComponent />
    </ThemeProvider>
  )
}
