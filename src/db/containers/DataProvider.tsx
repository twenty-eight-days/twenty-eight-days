import { ReactElement, useEffect } from 'react'
import { useTypedSelector } from '../../store'
import { useDispatch } from 'react-redux'
import { RawCycle, updateCycles } from '../../cycle'
import {
  cycleDatabaseName,
  dataLoadingDone,
  dataLoadingInProgress,
  dbInitFailed,
  loginSuccessful,
  showLoginForm,
} from '../actions'
import { CycleId } from '../model'
import { Item, userbase } from '../userbase'
import { Session } from 'userbase-js'

interface Props {
  children: ReactElement
}

export const DataProvider = ({ children }: Props) => {
  const loginState = useTypedSelector((s) => s.database.authState)
  const dispatch = useDispatch()

  useEffect(() => {
    if (loginState.type === 'attempt-auto-login') {
      console.debug('Attempting DB auto-login...')
      userbase
        .init({ appId: loginState.appId })
        .then((session: Session) => {
          if (session.user) {
            console.debug('DB auto-login successful')
            dispatch(loginSuccessful(session.user))
          } else {
            dispatch(showLoginForm())
          }
        })
        .catch((error) => {
          console.debug('DB init with auto-login failed: ' + error)
          dispatch(dbInitFailed(error))
        })
    } else if (loginState.type === 'logged-in' && loginState.dataLoading === 'pending') {
      const databaseName = cycleDatabaseName(loginState)
      console.log(`DB openDatabase ${databaseName} ...`)
      dispatch(dataLoadingInProgress(loginState.user))
      userbase
        .openDatabase({
          databaseName,
          changeHandler: (items: ReadonlyArray<Item>) => {
            const startDates = items.map<RawCycle>((i) => ({
              id: i.itemId as CycleId,
              startDate: i.item,
            }))
            dispatch(updateCycles(startDates))
            dispatch(dataLoadingDone(loginState.user))
          },
        })
        .then(() => {
          console.log(`DB openDatabase ${databaseName} successful`)
        })
        .catch((err) => {
          console.log(`DB openDatabase ${databaseName} failed ${err}`)
          dispatch(dataLoadingDone(loginState.user))
        })
    }
  }, [loginState, dispatch])

  return children
}
