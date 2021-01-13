import { ThemeAction, themeReducer } from '../theme'
import { RootAction } from './actions'
import { RootState } from './model'
import { defaultRootState } from './default'
import { cycleReducer } from '../cycle'
import { CycleAction } from '../cycle'
import { DatabaseAction, dbReducer } from '../db'

export const rootReducer = (state: RootState = defaultRootState, action: RootAction): RootState => ({
  database: dbReducer(state.database, action as DatabaseAction),
  theme: themeReducer(state.theme, action as ThemeAction),
  cycle: cycleReducer(state.cycle, action as CycleAction),
})
