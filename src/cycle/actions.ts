import FileSaver from 'file-saver'
import { CycleIOData, RawCycle } from './model'
import { UPDATE_CYCLES } from './actionTypes'
import format from 'date-fns/format'

export type CycleAction = UpdateCyclesAction

interface UpdateCyclesAction {
  type: typeof UPDATE_CYCLES
  cycles: ReadonlyArray<RawCycle>
}

export const updateCycles = (cycles: ReadonlyArray<RawCycle>): UpdateCyclesAction => ({
  type: UPDATE_CYCLES,
  cycles,
})

export const exportCycleData = (data: CycleIOData) => () => {
  const blob = new Blob([JSON.stringify(data)], { type: 'text/json;charset=utf-8' })
  const today = format(new Date().valueOf(), 'yyyyMMdd')
  FileSaver.saveAs(blob, `cycle-data-${today}.json`)
}
