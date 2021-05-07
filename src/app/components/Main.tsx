import { AuthState, LoginForm } from '../../db'
import { CycleData, CycleStats } from '../../cycle'
import React, { useState } from 'react'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import StatsIcon from '@material-ui/icons/TrendingUp'
import DataIcon from '@material-ui/icons/Event'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { CircularProgress } from '@material-ui/core'

const useStyles = makeStyles({
  bottomNav: {
    width: '100vw',
    position: 'fixed',
    bottom: 0,
    left: 0,
  },
  progress: {
    justifySelf: 'center',
  },
})

type Tab = 'stats' | 'data'

interface Props {
  readonly authState: AuthState
}

export const Main = ({ authState }: Props) => {
  const classes = useStyles()
  const [navTab, setNavTab] = useState<Tab>('stats')

  switch (authState.type) {
    case 'attempt-auto-login':
      return <CircularProgress className={classes.progress} size={50} />
    case 'login-form':
      return <LoginForm state={authState.state} />
    case 'logged-in':
      return (
        <div>
          {navTab === 'stats' && <CycleStats />}
          {navTab === 'data' && <CycleData loginState={authState} />}
          <BottomNavigation
            className={classes.bottomNav}
            value={navTab}
            onChange={(event, newValue) => {
              setNavTab(newValue)
            }}
            showLabels={true}
          >
            <BottomNavigationAction label="Stats" icon={<StatsIcon />} value={'stats'} />
            <BottomNavigationAction label="Data" icon={<DataIcon />} value={'data'} />
          </BottomNavigation>
        </div>
      )
    default:
      return <div />
  }
}
