import { Typography } from '@material-ui/core'
import * as React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    display: 'grid',
    width: '100%',
    height: '100%',
    alignItems: 'start',
    justifyItems: 'center',
  },
})

export const NotEnoughData = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography variant={'body1'} align={'center'}>
        {'Please add at least two cycle start dates (via '}
        <i>{'Data'}</i>
        {' tab)'}
      </Typography>
    </div>
  )
}
