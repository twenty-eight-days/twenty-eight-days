import { ReactElement, useEffect, useState } from 'react'
import { useTypedSelector } from '../../store'
import userbase, { Item } from 'userbase-js'
import { useDispatch } from 'react-redux'
import { RawCycle, updateCycles } from '../../cycle'
import { dbInitFailed, dbInitInProgress, loginSuccessful, showLoginForm, cycleDatabaseName } from '../actions'
import { CycleId } from '../model'
import { mockCycleStartDates } from '../../cycle/mocks'

interface Props {
  children: ReactElement
}

export const DataProvider = ({ children }: Props) => {
  const existingStartDates = useTypedSelector<ReadonlyArray<number>>(
    (s) => s.cycle.history?.pastCycles.map((c) => c.startDate) ?? []
  )
  const loginState = useTypedSelector((s) => s.database.authState)
  const dispatch = useDispatch()

  useEffect(() => {
    const appId = process.env.REACT_APP_USERBASE_APP_ID || new URLSearchParams(window.location.search).get('id') || ''
    if (appId.length === 36) {
      dispatch(dbInitInProgress())
      userbase
        .init({ appId })
        .then((session) => {
          if (session.user) {
            dispatch(loginSuccessful(session.user))
          } else {
            dispatch(showLoginForm())
          }
        })
        .catch((error) => dispatch(dbInitFailed(error)))
    }
  }, [dispatch])

  const [isDatabaseOpen, setDatabaseOpen] = useState<boolean>(false)

  useEffect(() => {
    if (loginState.type === 'logged-in') {
      const databaseName = cycleDatabaseName(loginState)
      console.log(`DB openDatabase ${databaseName} ...`)
      userbase
        .openDatabase({
          databaseName,
          changeHandler: (items: ReadonlyArray<Item>) => {
            const startDates = items.map<RawCycle>((i) => ({
              id: i.itemId as CycleId,
              startDate: i.item,
            }))
            dispatch(updateCycles(startDates))
          },
        })
        .then(() => {
          setDatabaseOpen(true)
          console.log(`DB openDatabase ${databaseName} successful`)
        })
        .catch((err) => console.log(`DB openDatabase ${databaseName} failed ${err}`))
    }
  }, [loginState, dispatch])

  useEffect(() => {
    if (loginState.type === 'logged-in' && isDatabaseOpen && loginState.user.username.startsWith('r')) {
      const databaseName = cycleDatabaseName(loginState)
      console.log(`DB insert mock start dates into ${databaseName} ...`)
      mockCycleStartDates.forEach((msSinceEpoch) => {
        if (existingStartDates.find((e) => e === msSinceEpoch)) {
          return
        } else {
          userbase
            .insertItem({
              databaseName,
              itemId: `${msSinceEpoch}`,
              item: msSinceEpoch,
            })
            .catch((_) => {
              // /** fails due to duplicates expected **/
            })
        }
      })
    }
  }, [isDatabaseOpen, existingStartDates, loginState, dispatch])

  return children
}
