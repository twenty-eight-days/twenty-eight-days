import { CycleId } from '../db'

export interface RawCycle {
  readonly id: CycleId
  readonly startDate: number
}

export type CycleType = 'current' | 'past'

export interface Cycle extends RawCycle {
  readonly duration: number
  readonly type: CycleType
}

export interface CurrentCycle extends Cycle {
  readonly type: 'current'
}

export interface PastCycle extends Cycle {
  readonly type: 'past'
}

export interface CycleHistory {
  readonly currentCycle: CurrentCycle
  readonly pastCycles: ReadonlyArray<PastCycle>
}

export interface CycleState {
  readonly history?: CycleHistory
}

export interface CycleIOData {
  readonly history: {
    startDates: ReadonlyArray<string>
  }
}
