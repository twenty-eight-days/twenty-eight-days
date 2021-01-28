import { defaultThemeState } from '../theme'
import { RootState } from './model'
import { defaultCycleState, demoCycleState } from '../cycle'
import { defaultDatabaseState, demoDatabaseState } from '../db'

const query = new URLSearchParams(window.location.search)
const isDemoMode = query.has('demo')

export const defaultRootState: RootState = {
  database: isDemoMode ? demoDatabaseState : defaultDatabaseState,
  theme: defaultThemeState,
  cycle: isDemoMode ? demoCycleState : defaultCycleState,
}
