import React from 'react'
import { Cycle, CycleHistory } from '../model'
import { BarDatum, BarItemProps, ResponsiveBar } from '@nivo/bar'
import { lighten, makeStyles } from '@material-ui/core/styles'
import { barLighteningCoefficient, fd } from './shared'
import { Theme, useTheme } from '@material-ui/core'
import { addDays } from 'date-fns'
import { CartesianMarkerProps } from '@nivo/core'

interface CycleBarDatum {
  readonly id: string
  readonly currentDuration: number
  readonly pastDuration: number
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
const labelPadding = -12

interface Props {
  readonly cycleHistory: CycleHistory
  readonly median: number
}

export const CycleBarChart = ({ cycleHistory, median }: Props) => {
  const pastCycles = cycleHistory.pastCycles
  const height = barWidth * (1 + barPadding) * pastCycles.length
  const classes = useStyles(height)
  const theme = useTheme()

  const cycles = [cycleHistory.currentCycle, ...pastCycles].reverse().map<CycleBarDatum>((c) => ({
    id: toAxisLabel(c),
    currentDuration: c.type === 'current' ? c.duration + 1 : 0,
    pastDuration: c.type === 'past' ? c.duration : 0,
  }))

  const currentCycleLabel = ({ bars }: { bars: BarItemProps[] }) => {
    const labels = bars.map(({ data, x, y, width, height }) => {
      const barDatum: BarDatum = data.data
      return (
        <text
          className={classes.label}
          key={`${data.id}/${data.index}`}
          x={x}
          y={y}
          transform={`translate(${width + labelPadding},${height / 2})`}
        >
          {data.id === 'currentDuration' && data.index === cycles.length - 1 ? barDatum.currentDuration : ''}
          {data.id === 'pastDuration' && data.index <= cycles.length ? barDatum.pastDuration : ''}
        </text>
      )
    })
    return <g>{labels}</g>
  }

  const medianMarker: CartesianMarkerProps = {
    axis: 'x',
    value: median,
    lineStyle: { stroke: theme.palette.secondary.main, strokeWidth: 0.5 },
  }

  return (
    <div className={classes.root}>
      <ResponsiveBar
        data={cycles}
        keys={['currentDuration', 'pastDuration']}
        colors={['lavender', lighten(theme.palette.primary.main, barLighteningCoefficient)]}
        layout={'horizontal'}
        padding={barPadding}
        enableGridY={false}
        isInteractive={false} // disable tooltips
        layers={['markers', 'axes', 'bars', currentCycleLabel]}
        margin={{ top: 0, right: 0, bottom: 0, left: 115 }}
        label={() => ''} // disable default labels
        theme={{ fontSize, textColor: theme.palette.text.primary }}
        markers={[medianMarker]}
      />
    </div>
  )
}

function toAxisLabel(c: Cycle) {
  const startDate = fd(c.startDate)
  switch (c.type) {
    case 'past':
      const endDate = fd(addDays(c.startDate, c.duration))
      return `${startDate} - ${endDate}`
    default:
      return `${startDate} - __.__.____`
  }
}
