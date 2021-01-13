import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeSwitch } from './ThemeSwitch'
import { lightTheme } from '../index'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<ThemeSwitch theme={lightTheme} onToggleTheme={() => {}} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
