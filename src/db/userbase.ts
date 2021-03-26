import userbaseDB, { DatabaseChangeHandler, Item, Session, Userbase, UserResult } from 'userbase-js'
import { parse, differenceInDays, startOfToday, addDays } from 'date-fns'
import { DATE_FORMAT_IMPORT_EXPORT } from '../cycle/utils'

export type { Item, UserResult } from 'userbase-js'

type UserbaseProxy = Pick<Userbase, 'init' | 'signIn' | 'signOut' | 'openDatabase' | 'insertItem' | 'deleteItem'>

export const demoUser: UserResult = {
  username: 'demo-User',
  userId: 'demo-user-id',
  authToken: 'demo-authToken',
  creationDate: new Date(),
  paymentsMode: 'test',
}

class DemoUserbase implements UserbaseProxy {
  private changeHandler?: DatabaseChangeHandler
  private items: ReadonlyArray<Item> = []

  constructor(items: ReadonlyArray<Item>) {
    this.items = items
  }

  init(): Promise<Session> {
    return Promise.resolve({})
  }

  signIn(): Promise<UserResult> {
    return Promise.resolve(demoUser)
  }

  signOut(): Promise<void> {
    return Promise.resolve()
  }

  openDatabase(params: {
    databaseName?: string
    databaseId?: string
    changeHandler: DatabaseChangeHandler
  }): Promise<void> {
    this.changeHandler = params.changeHandler
    this.changeHandler([...this.items])
    return Promise.resolve()
  }

  insertItem(params: { databaseName?: string; databaseId?: string; item: Item; itemId?: string }): Promise<void> {
    if (this.items.find((i) => i.itemId === params.itemId)) {
      // TODO: Reject duplicates (https://github.com/twenty-eight-days/twenty-eight-days/issues/23)
      return Promise.resolve()
    } else {
      const newItems = [
        ...this.items,
        {
          itemId: params.itemId ?? params.item.toString(),
          item: params.item,
        },
      ]

      if (this.changeHandler) {
        this.changeHandler(newItems)
      }
      this.items = newItems
      return Promise.resolve()
    }
  }

  deleteItem(params: { databaseName?: string; databaseId?: string; itemId: string }): Promise<void> {
    const newItems = this.items.filter((i) => i.itemId !== params.itemId)
    if (this.changeHandler) {
      this.changeHandler(newItems)
    }
    this.items = newItems
    return Promise.resolve()
  }
}

const query = new URLSearchParams(window.location.search)
export const isDemoMode = query.has('demo')

const demoData = [
  '05.01.2021',
  '01.12.2020',
  '12.11.2020',
  '09.10.2020',
  '07.09.2020',
  '10.08.2020',
  '11.07.2020',
  '11.06.2020',
  '05.05.2020',
  '06.04.2020',
  '01.03.2020',
  '10.02.2020',
  '15.01.2020',
  '18.12.2019',
  '20.11.2019',
  '22.10.2019',
]

const p = (demoDateString: string) => parse(demoDateString, DATE_FORMAT_IMPORT_EXPORT, new Date()).valueOf()

// Auto-shift demo data to make sense today -> end up on day 9 of the cycle...
const demoDataCreationDate = p('13.01.2021')
const daysToAdd = differenceInDays(startOfToday(), demoDataCreationDate)

export const userbase: UserbaseProxy = isDemoMode
  ? new DemoUserbase(
      demoData
        .map<number>((d) => {
          const parsedDate = p(d)
          return addDays(parsedDate, daysToAdd).valueOf()
        })
        .sort((d1, d2) => d2 - d1)
        .map<Item>((startDate: number) => {
          return {
            itemId: `${startDate}`,
            item: startDate,
          }
        })
    )
  : userbaseDB
