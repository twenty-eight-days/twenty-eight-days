import { CircularProgress, Theme, Typography } from '@material-ui/core'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'grid',
    width: '100%',
    justifyItems: 'center',
    marginTop: theme.spacing(1),
    gridRowGap: theme.spacing(2),
  },
}))

interface Props {
  readonly label: string
}

export const Progress = ({ label }: Props) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <CircularProgress size={100} />
      <Typography variant={'body1'} align={'center'}>
        {label}
      </Typography>
    </div>
  )
}
