import { ThemeAction } from '../theme'
import { CycleAction } from '../cycle'
import { DatabaseAction } from '../db'

export type RootAction = ThemeAction | CycleAction | DatabaseAction
