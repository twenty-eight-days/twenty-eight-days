import { defaultThemeState } from '../theme'
import { RootState } from './model'
import { defaultCycleState } from '../cycle'
import { defaultDatabaseState } from '../db'

export const defaultRootState: RootState = {
  database: defaultDatabaseState,
  theme: defaultThemeState,
  cycle: defaultCycleState,
}
