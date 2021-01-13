import * as React from 'react'
import { ExportCycleData as ExportCycleDataComponent } from '../components/ExportCycleData'
import { useTypedDispatch, useTypedSelector } from '../../store'
import { exportCycleData } from '../actions'
import { CycleIOData, CycleState } from '../model'
import { f } from '../utils'

const exportableData = (cycleState: CycleState): CycleIOData => {
  const history = cycleState.history
  const allCycles = history ? [history.currentCycle, ...history.pastCycles] : []
  return {
    history: {
      startDates: allCycles.map((c) => f(c.startDate)),
    },
  }
}

export const ExportCycleData = () => {
  const cycleState = useTypedSelector<CycleState>((s) => s.cycle)
  const dispatch = useTypedDispatch()
  const onClick = () => {
    const data = exportableData(cycleState)
    dispatch(exportCycleData(data))
  }
  return <ExportCycleDataComponent onClick={onClick} />
}
