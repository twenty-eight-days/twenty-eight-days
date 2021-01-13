import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { DatePicker, LocalizationProvider } from '@material-ui/pickers'
import { Button, Card, CardActions, CardContent, TextField } from '@material-ui/core'
import DateFnsAdapter from '@material-ui/pickers/adapter/date-fns'
import deLocale from 'date-fns/locale/de'
import startOfToday from 'date-fns/startOfToday'

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  content: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    width: '100%',
  },
  actions: {
    display: 'grid',
    justifyItems: 'end',
  },
})

interface Props {
  readonly onAdd: (date: number) => void
}

export const CycleAdd = ({ onAdd }: Props) => {
  const classes = useStyles()
  const [selectedDate, handleDateChange] = useState<number>(startOfToday().valueOf())
  const [isValid, setValid] = useState<boolean>(true)

  const onChange = (date: any) => date && handleDateChange((date as Date).valueOf())
  const handleSubmit = () => onAdd(selectedDate)
  const handleError = (e: any) => setValid(e === null)

  return (
    <Card className={classes.root} variant={'outlined'}>
      <CardContent className={classes.content}>
        <LocalizationProvider dateAdapter={DateFnsAdapter} locale={deLocale}>
          <DatePicker
            label="Cycle Start Date"
            value={selectedDate}
            onChange={onChange}
            onError={handleError}
            renderInput={(props) => <TextField {...props} />}
            mask={'__.__.____'}
            disableFuture={true}
            showTodayButton={true}
            autoOk={true}
          />
        </LocalizationProvider>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button variant={'contained'} color="primary" disabled={!isValid} onClick={handleSubmit}>
          Add
        </Button>
      </CardActions>
    </Card>
  )
}
