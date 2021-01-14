import * as React from 'react'
import { Typography } from '@material-ui/core'
import { dateWithoutWeekDay, dateWithWeekDay } from '../utils'
import addDays from 'date-fns/addDays'
import { isBefore } from 'date-fns'

interface Props {
  readonly currentDay: number
  readonly median: number
  readonly lastStartDate: number
}

export const CycleDescription = ({ currentDay, median, lastStartDate }: Props) => {
  const expectedStartDate = addDays(lastStartDate, median - 1).valueOf()
  const expectedStart = isBefore(expectedStartDate, new Date()) ? (
    <b>{'today'}</b>
  ) : (
    <div>
      {'on '}
      <b>{dateWithWeekDay(expectedStartDate)}</b>
    </div>
  )

  return (
    <div>
      <Typography variant={'body1'} align={'center'}>
        Hey – today is {dateWithWeekDay(new Date().valueOf())}
      </Typography>
      <Typography variant={'h1'} align={'center'}>
        {currentDay}
      </Typography>
      <Typography variant={'body1'} align={'center'}>
        days since your last period, which started on {dateWithoutWeekDay(lastStartDate)}.
      </Typography>
      <br />
      <Typography variant={'body1'} align={'center'}>
        Your next period is expected {expectedStart}.
      </Typography>
      <br />
      <Typography variant={'body1'} align={'center'}>
        Your <b>median cycle</b> length is {median} days.
      </Typography>
    </div>
  )
}
