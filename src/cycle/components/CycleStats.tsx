import { CycleDescription } from './CycleDescription'
import { CycleDurationHistogram } from './CycleDurationHistogram'
import * as React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { CycleHistory } from '../model'

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
  readonly cycleHistory: CycleHistory
}

export const CycleStats = ({ currentDay, median, lastStartDate, cycleHistory }: Props) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <CycleDescription currentDay={currentDay} median={median} lastStartDate={lastStartDate} />
      <CycleDurationHistogram
        width={200}
        height={150}
        currentDay={currentDay}
        median={median}
        cycleHistory={cycleHistory}
      />
    </div>
  )
}
