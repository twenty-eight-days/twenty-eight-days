import parse from 'date-fns/parse'
import { DATE_FORMAT_IMPORT_EXPORT } from './utils'

const cycleStartDates: string[] = []

export const mockCycleStartDates: ReadonlyArray<number> = cycleStartDates.map((d) =>
  parse(d, DATE_FORMAT_IMPORT_EXPORT, new Date()).valueOf()
)
