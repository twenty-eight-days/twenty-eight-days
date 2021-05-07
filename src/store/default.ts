import { defaultThemeState } from '../theme'
import { RootState } from './model'
import { defaultCycleState } from '../cycle'
import { defaultDatabaseState, demoDatabaseState, isDemoMode } from '../db'

export const defaultRootState: RootState = {
  database: isDemoMode ? demoDatabaseState : defaultDatabaseState(),
  theme: defaultThemeState,
  cycle: defaultCycleState,
}
