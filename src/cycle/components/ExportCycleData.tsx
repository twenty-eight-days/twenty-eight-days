import * as React from 'react'
import SaveIcon from '@material-ui/icons/SaveAlt'
import { IconButton } from '@material-ui/core'

interface Props {
  onClick: () => void
}

export const ExportCycleData = ({ onClick }: Props) => (
  <IconButton color="inherit" onClick={onClick}>
    <SaveIcon />
  </IconButton>
)
