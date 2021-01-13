import React from 'react'
import { CycleHistory } from '../model'
import { IconButton, List, ListItemSecondaryAction, ListItemText } from '@material-ui/core'
import ListItem from '@material-ui/core/ListItem'
import makeStyles from '@material-ui/core/styles/makeStyles'
import DeleteIcon from '@material-ui/icons/Delete'
import { CycleId } from '../../db'
import { CycleAdd } from './CycleAdd'
import { f } from '../utils'

const useStyles = makeStyles({
  root: {
    display: 'grid',
    width: '100%',
    justifyItems: 'center',
  },
  list: {
    width: '100%',
  },
})

interface Props {
  readonly cycleHistory?: CycleHistory
  readonly onAdd: (date: number) => void
  readonly onDelete: (id: CycleId) => void
}

export const CycleData = ({ cycleHistory, onAdd, onDelete }: Props) => {
  const classes = useStyles()
  const cycles = cycleHistory ? [cycleHistory.currentCycle, ...cycleHistory.pastCycles] : []
  return (
    <div className={classes.root}>
      <CycleAdd onAdd={onAdd} />
      <List className={classes.list}>
        {cycles.map((cycle) => {
          return (
            <ListItem key={cycle.id}>
              <ListItemText>{f(cycle.startDate)}</ListItemText>
              <ListItemSecondaryAction>
                <IconButton edge={'end'} aria-label={'delete'} onClick={() => onDelete(cycle.id)}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          )
        })}
      </List>
    </div>
  )
}
