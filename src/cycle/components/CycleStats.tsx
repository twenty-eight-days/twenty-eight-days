import { CycleDescription } from './CycleDescription'
import * as React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { CycleHistory } from '../model'
import { CycleDurationHistogram } from './CycleDurationHistogram'
import { CycleBarChart } from './CycleBarChart'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'grid',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyItems: 'center',
    gridGap: theme.spacing(1),
  },
}))

interface Props {
  readonly userName: string
  readonly currentDay: number
  readonly median: number
  readonly lastStartDate: number
  readonly cycleHistory: CycleHistory
}

export const CycleStats = ({ userName, currentDay, median, lastStartDate, cycleHistory }: Props) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <CycleDescription userName={userName} currentDay={currentDay} median={median} lastStartDate={lastStartDate} />
      <Divider text={'Past Cycles'} />
      <Typography variant={'body1'} align={'center'}>
        Your <b>median cycle</b> length is {median} days.
      </Typography>
      <CycleBarChart cycleHistory={cycleHistory} median={median} />
      <Divider text={'Duration Histogram'} />
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

// https://stackoverflow.com/questions/61730527/react-create-a-horizontal-divider-with-text-in-between

const useDividerStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    marginTop: 12,
  },
  border: {
    borderBottom: '2px solid lightgray',
    width: '100%',
  },
  content: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    fontWeight: 500,
    fontSize: 22,
    color: 'lightgray',
    whiteSpace: 'nowrap',
  },
}))

interface DividerProps {
  readonly text: string
}

const Divider = ({ text }: DividerProps) => {
  const classes = useDividerStyles()
  return (
    <div className={classes.container}>
      <div className={classes.border} />
      <span className={classes.content}>{text}</span>
      <div className={classes.border} />
    </div>
  )
}
