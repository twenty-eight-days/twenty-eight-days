import React from 'react'
import { Cycle, CycleHistory } from '../model'
import { BarItemProps, ResponsiveBar } from '@nivo/bar'
import { lighten, makeStyles } from '@material-ui/core/styles'
import { barLighteningCoefficient, fd } from './shared'
import { Theme, useTheme } from '@material-ui/core'
import { addDays } from 'date-fns'

interface BarDatum {
  readonly id: string
  readonly value: Cycle
}

const fontSize = 9

const useStyles = makeStyles((theme: Theme) => ({
  root: (height: number) => ({ width: '100%', height }),
  label: {
    fill: theme.palette.text.primary,
    dominantBaseline: 'central',
    fontSize,
  },
}))

const barWidth = 15
const barPadding = 0.2
const labelPadding = 2

interface Props {
  readonly cycleHistory: CycleHistory
}

export const CycleBarChart = ({ cycleHistory }: Props) => {
  const pastCycles = cycleHistory.pastCycles
  const height = barWidth * (1 + barPadding) * pastCycles.length
  const classes = useStyles(height)
  const theme = useTheme()

  const customBarLabels = ({ bars }: { bars: BarItemProps[] }) => {
    const labels = bars.map(({ data, x, y, width, height }) => {
      return (
        <text
          className={classes.label}
          key={data.index}
          x={x}
          y={y}
          transform={`translate(${width + labelPadding},${height / 2})`}
        >
          {data.value}
        </text>
      )
    })
    return <g>{labels}</g>
  }

  const toAxisLabel = (c: Cycle) => {
    const startDate = fd(c.startDate)
    switch (c.type) {
      case 'past':
        const endDate = fd(addDays(c.startDate, c.duration))
        return `${startDate} - ${endDate}`
      default:
        return `${startDate} - ...`
    }
  }

  const data = [...pastCycles].reverse().map<BarDatum>((c) => ({
    id: toAxisLabel(c),
    value: c,
    duration: c.duration,
  }))

  return (
    <div className={classes.root}>
      <ResponsiveBar
        data={data}
        keys={['duration']}
        colors={[lighten(theme.palette.primary.main, barLighteningCoefficient)]}
        layout={'horizontal'}
        padding={barPadding}
        enableGridY={false}
        isInteractive={false} // disable tooltips
        layers={['axes', 'bars', customBarLabels]}
        margin={{ top: 0, right: 12, bottom: 0, left: 115 }}
        label={() => ''} // disable default labels
        theme={{ fontSize, textColor: theme.palette.text.primary }}
      />
    </div>
  )
}
