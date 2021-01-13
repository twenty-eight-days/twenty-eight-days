import { Typography } from '@material-ui/core'
import * as React from 'react'
import LockIcon from '@material-ui/icons/Lock'

export const PrivacyFirst = () => (
  <Typography variant={'body1'} align={'center'}>
    <LockIcon fontSize={'large'} />
    <br />
    This app uses a <b>privacy-first</b> approach and can only be accessed through a <b>personal</b> URL
  </Typography>
)
