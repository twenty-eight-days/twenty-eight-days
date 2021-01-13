import { ThemeState } from '../theme'
import { CycleState } from '../cycle'
import { DatabaseState } from '../db'

export interface RootState {
  readonly database: DatabaseState
  readonly theme: ThemeState
  readonly cycle: CycleState
}
