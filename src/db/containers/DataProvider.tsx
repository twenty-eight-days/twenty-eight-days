import { ReactElement, useEffect } from 'react'
import { useTypedSelector } from '../../store'
import { useDispatch } from 'react-redux'
import { RawCycle, updateCycles } from '../../cycle'
import { cycleDatabaseName } from '../actions'
import { CycleId } from '../model'
import { userbase, Item } from '../userbase'

interface Props {
  children: ReactElement
}

export const DataProvider = ({ children }: Props) => {
  const loginState = useTypedSelector((s) => s.database.authState)
  const dispatch = useDispatch()
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
          console.log(`DB openDatabase ${databaseName} successful`)
        })
        .catch((err) => console.log(`DB openDatabase ${databaseName} failed ${err}`))
    }
  }, [loginState, dispatch])

  return children
}
