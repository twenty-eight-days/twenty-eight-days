import { Typography } from '@material-ui/core'
import * as React from 'react'
import ErrorIcon from '@material-ui/icons/Error'

interface Props {
  readonly error: any
}

export const Error = ({ error }: Props) => {
  console.log(error)
  return (
    <Typography variant={'body1'} align={'center'}>
      <ErrorIcon fontSize={'large'} color={'secondary'} />
      <br />
      Oops – something went wrong...
    </Typography>
  )
}
