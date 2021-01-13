import { darkTheme, lightTheme, TOGGLE_THEME, toggleTheme, ToggleThemeAction } from '../theme'
import { rootReducer } from './reducer'
import { RootState } from './index'
import { defaultRootState } from './default'

const initialState: RootState = defaultRootState

describe('root reducer', () => {
  it(`should handle ${TOGGLE_THEME} action`, () => {
    const action: ToggleThemeAction = toggleTheme()
    let state = rootReducer(initialState, action)
    expect(state.theme).toEqual(darkTheme)
    state = rootReducer(state, action)
    expect(state.theme).toEqual(lightTheme)
  })
})
