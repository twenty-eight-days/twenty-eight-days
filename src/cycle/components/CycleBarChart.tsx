import React from 'react'
import { CycleHistory } from '../model'
import { BarItemProps, ResponsiveBar } from '@nivo/bar'
import { fade, makeStyles } from '@material-ui/core/styles'
import { barOpacity } from './shared'
import { useTheme } from '@material-ui/core'

const useStyles = makeStyles({
  root: (height: number) => ({ width: '100%', maxWidth: '40vw', height }),
  label: {
    dominantBaseline: 'central',
    fontSize: 9,
  },
})

const barWidth = 6.1 // approximate histogram bar width
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

  const CustomLabels = ({ bars }: { bars: BarItemProps[] }) => {
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

  const data = [...pastCycles].reverse()

  return (
    <div className={classes.root}>
      <ResponsiveBar
        data={data}
        keys={['duration']}
        colors={[fade(theme.palette.primary.main, barOpacity)]}
        layout={'horizontal'}
        padding={0.2}
        enableGridY={false}
        layers={['axes', 'bars', CustomLabels]}
        margin={{ top: 0, right: 15, bottom: 0, left: 0 }}
        label={() => ''}
      />
    </div>
  )
}
