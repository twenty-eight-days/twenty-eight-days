import { medianCycleLength } from './CycleStats'
import { DATE_FORMAT_IMPORT_EXPORT } from '../utils'
import { cycleHistory } from '../reducer'
import { CycleId } from '../../db'
import parse from 'date-fns/parse'
import { RawCycle } from '../model'

it('medianCycleLength', () => {
  const dates = ['01.01.2020', '01.02.2020', '01.03.2020'].map<RawCycle>((d) => ({
    id: d as CycleId,
    startDate: parse(d, DATE_FORMAT_IMPORT_EXPORT, new Date()).valueOf(),
  }))
  const history = cycleHistory(dates)
  const durations = history.pastCycles.map((c) => c.duration)
  expect(durations).toEqual([31, 29])
  expect(medianCycleLength(durations)).toEqual(30)
})
