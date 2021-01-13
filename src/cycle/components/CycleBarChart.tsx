import React from 'react'
import { Cycle, CycleHistory } from '../model'
import { scaleBand, scaleLinear } from 'd3-scale'
import { max } from 'd3-array'
import { CycleId } from '../../db'

interface Props {
  readonly width: number
  readonly height: number
  readonly history: CycleHistory
}

export const CycleBarChart = ({ width, height, history }: Props) => {
  const currentCycle = history.currentCycle
  const pastCycles = history.pastCycles
  const scaleY = scaleBand<CycleId>()
    .domain([currentCycle.id, ...pastCycles.map((c) => c.id)])
    .range([0, height])
  const maxDuration = max(pastCycles.map((c) => c.duration)) ?? 0
  const scaleX = scaleLinear().domain([0, maxDuration]).range([0, width])
  return (
    <svg viewBox={`0 0 ${width} ${height}`} width={width} height={height}>
      {pastCycles.map((c: Cycle) => (
        <rect
          key={c.id}
          x={scaleX.range()[0]}
          y={scaleY(c.id)}
          width={scaleX(c.duration)}
          height={scaleY.bandwidth()}
          fill={'pink'}
        />
      ))}
    </svg>
  )
}
