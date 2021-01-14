import React from 'react'
import { histogram, max, min } from 'd3-array'
import { scaleLinear } from 'd3-scale'
import { makeStyles, Theme } from '@material-ui/core/styles'
import { CycleHistory } from '../model'

const useStyles = makeStyles((theme: Theme) => ({
  bar: {
    fill: theme.palette.primary.main,
    opacity: 0.5,
    strokeWidth: 1,
    stroke: theme.palette.background.default,
  },
  barBackdrop: {
    fill: 'white',
  },
  dot: {
    fill: theme.palette.secondary.main,
  },
  line: {
    stroke: theme.palette.text.primary,
    strokeWidth: 1,
  },
  text: {
    fill: theme.palette.text.primary,
    textAnchor: 'middle',
    fontSizeAdjust: 0.4,
    dominantBaseline: 'central',
  },
}))

interface Props {
  readonly width: number
  readonly height: number
  readonly currentDay: number
  readonly median: number
  readonly cycleHistory: CycleHistory
}

export const CycleDurationHistogram = ({ width, height, currentDay, median, cycleHistory }: Props) => {
  const classes = useStyles()

  const marginTop = 10
  const marginBottom = 20

  const cycleDurations = cycleHistory.pastCycles.map((c) => c.duration)

  const binMin = min(cycleDurations) ?? 20
  const binMax = max(cycleDurations) ?? 35

  const x = scaleLinear()
    .domain([binMin, binMax + 1])
    .range([0, width])
  const bins = histogram().thresholds(x.ticks(binMax - binMin))(cycleDurations)

  const y = scaleLinear()
    .domain([0, max(bins, (d) => d.length) ?? 0])
    .nice()
    .range([height - marginBottom, marginTop])

  const binWidth = width / bins.length
  const currentDayBin = currentDay >= binMin ? bins[currentDay - binMin] : undefined

  const medianX = x(median + 0.5)

  return (
    <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
      <line className={classes.line} x1={medianX} x2={medianX} y1={marginTop / 2} y2={height - marginBottom / 2 - 5} />
      <text className={classes.text} x={medianX} y={height - marginBottom / 2}>
        {median}
      </text>
      {bins.map((b, i) => {
        const h = y(0) - y(b.length)
        return (
          <g key={`bin-${i}`}>
            <rect
              className={`${classes.bar}, ${classes.barBackdrop}`}
              x={x(b.x0!)}
              y={y(b.length)}
              width={binWidth}
              height={h}
            />
            <rect className={classes.bar} x={x(b.x0!)} y={y(b.length)} width={binWidth} height={h} />
          </g>
        )
      })}
      {currentDayBin && (
        <circle
          className={classes.dot}
          cx={x(currentDay + 0.5)}
          cy={y(currentDayBin.length) - binWidth / 2}
          r={binWidth / 3}
          strokeWidth={0}
        />
      )}
    </svg>
  )
}
