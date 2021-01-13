import { CycleDescription } from './CycleDescription'
import { CycleDurationHistogram } from './CycleDurationHistogram'
import * as React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'grid',
    alignItems: 'center',
    justifyItems: 'center',
    gridGap: theme.spacing(1),
  },
}))

interface Props {
  readonly currentDay: number
  readonly median: number
  readonly lastStartDate: number
  readonly cycleDurations: ReadonlyArray<number>
}

export const CycleStats = ({ currentDay, median, lastStartDate, cycleDurations }: Props) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <CycleDescription currentDay={currentDay} median={median} lastStartDate={lastStartDate} />
      <CycleDurationHistogram
        width={200}
        height={150}
        currentDay={currentDay}
        median={median}
        cycleDurations={cycleDurations}
      />
    </div>
  )
}
