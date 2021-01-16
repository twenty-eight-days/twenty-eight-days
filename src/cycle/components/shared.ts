import { format } from 'date-fns'

export const barLighteningCoefficient = 0.5
export const fd = (date: number | Date) => format(date, 'dd.MM.yyyy')
