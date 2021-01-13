import format from 'date-fns/format'
import enLocale from 'date-fns/locale/en-US'

export const DATE_FORMAT_IMPORT_EXPORT = 'dd.MM.yyyy'
const DATE_FORMAT_WITH_WEEKDAY = 'EEEE, MMMM dd'
const DATE_FORMAT_WITHOUT_WEEKDAY = 'MMMM dd'

export const f = (date: number) => format(date, DATE_FORMAT_IMPORT_EXPORT)

const options = { locale: enLocale }

export const dateWithWeekDay = (date: number) => format(date, DATE_FORMAT_WITH_WEEKDAY, options)
export const dateWithoutWeekDay = (date: number) => format(date, DATE_FORMAT_WITHOUT_WEEKDAY, options)
