import { CycleHistory, CycleState, PastCycle, RawCycle } from './model'
import { CycleAction } from './actions'
import { UPDATE_CYCLES } from './actionTypes'
import differenceInDays from 'date-fns/differenceInDays'
import startOfToday from 'date-fns/startOfToday'
import { compareDesc } from 'date-fns'

export const cycleReducer = (state: CycleState, action: CycleAction): CycleState => {
  switch (action.type) {
    case UPDATE_CYCLES: {
      if (action.cycles.length > 0) {
        const startDates = [...action.cycles].sort((a, b) => compareDesc(a.startDate, b.startDate))
        const history = cycleHistory(startDates)
        return {
          ...state,
          history,
        }
      } else {
        return state
      }
    }
    default:
      return state
  }
}

export function cycleHistory(rawCycles: ReadonlyArray<RawCycle>): CycleHistory {
  const latestRawCycle = rawCycles[0]
  return {
    currentCycle: {
      id: latestRawCycle.id,
      startDate: latestRawCycle.startDate,
      duration: differenceInDays(startOfToday(), latestRawCycle.startDate),
      type: 'current',
    },
    pastCycles: rawCycles.flatMap<PastCycle>((rawCycle, index, rawCycles) => {
      if (index > 0) {
        const from = rawCycles[index - 1].startDate
        const to = rawCycle.startDate
        const duration = Math.abs(differenceInDays(from, to))
        return [
          {
            ...rawCycle,
            type: 'past',
            duration,
          },
        ]
      } else {
        return []
      }
    }),
  }
}
