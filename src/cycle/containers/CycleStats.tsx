import { CycleStats as CycleStatsComponent } from '../components/CycleStats'
import * as React from 'react'
import { useState } from 'react'
import useInterval from '@use-it/interval'
import { useTypedSelector } from '../../store'
import { Cycle, CycleHistory } from '../model'
import startOfToday from 'date-fns/startOfToday'
import { differenceInDays } from 'date-fns'

export const medianCycleLength = (durations: ReadonlyArray<number>) => {
  const median = (values: ReadonlyArray<number>) => {
    const mid = Math.floor(values.length / 2),
      nums = [...values].sort((a, b) => a - b)
    return values.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2
  }
  return median(durations)
}

export const cycleDurations = (cycles: ReadonlyArray<Cycle>) => cycles.map((c) => c.duration)

export const CycleStats = () => {
  const [today, setToday] = useState<number>(startOfToday().valueOf())

  useInterval(() => {
    setToday(startOfToday().valueOf())
  }, 1000 * 60)

  const history = useTypedSelector<CycleHistory | undefined>((s) => s.cycle.history)
  if (history) {
    const durations = cycleDurations(history.pastCycles)
    const lastStartDate = history.currentCycle.startDate
    const median = medianCycleLength(durations)
    const daysPast = differenceInDays(today, lastStartDate)
    const day = Math.floor(daysPast) + 1 // start date is cycle day 1
    return (
      <CycleStatsComponent currentDay={day} median={median} lastStartDate={lastStartDate} cycleDurations={durations} />
    )
  } else {
    return <div />
  }
}
