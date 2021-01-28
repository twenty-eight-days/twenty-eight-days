import { CycleState } from './model'
import { cycleHistory } from './reducer'
import parse from 'date-fns/parse'
import { DATE_FORMAT_IMPORT_EXPORT } from './utils'
import { CycleId } from '../db'

const demoData = [
  '05.01.2021',
  '01.12.2020',
  '12.11.2020',
  '09.10.2020',
  '07.09.2020',
  '10.08.2020',
  '11.07.2020',
  '11.06.2020',
  '05.05.2020',
  '06.04.2020',
  '01.03.2020',
  '10.02.2020',
  '15.01.2020',
  '18.12.2019',
  '20.11.2019',
  '22.10.2019',
]

export const demoCycleState: CycleState = {
  history: cycleHistory(
    demoData
      .map((d) => parse(d, DATE_FORMAT_IMPORT_EXPORT, new Date()).valueOf())
      .sort((d1, d2) => d2 - d1)
      .map((startDate) => {
        return {
          id: startDate as CycleId,
          startDate,
        }
      })
  ),
}

export const defaultCycleState: CycleState = {}
