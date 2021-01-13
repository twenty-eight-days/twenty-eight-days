import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import { ThemeSwitch } from '../../theme'
import makeStyles from '@material-ui/core/styles/makeStyles'
import { ExportCycleData } from '../../cycle'
import { IconButton, Theme, Typography } from '@material-ui/core'
import RefreshIcon from '@material-ui/icons/Refresh'
import { Main } from '../containers/Main'

const useStyles = makeStyles((theme: Theme) => ({
  appBar: {
    height: 64, // fix vertical toolbar item offset in safari
  },
  toolbar: {
    display: 'grid',
    gridTemplateColumns: 'auto auto', // center is position 'absolute'
  },
  toolbarLeft: {
    height: '100%',
    marginRight: 'auto', // push to the left
    display: 'grid',
    gridTemplateColumns: 'auto auto',
    alignItems: 'center',
  },
  toolbarCenter: {
    // position centered on page (rather than in flow of toolbar items)
    position: 'absolute',
    width: '100%',
    display: 'grid',
    pointerEvents: 'none',
    [theme.breakpoints.down('sm')]: {
      visibility: 'hidden',
    },
  },
  title: {
    justifySelf: 'center',
    color: theme.palette.primary.contrastText,
  },
  toolbarRight: {
    height: '100%',
    marginLeft: 'auto', // push to the right
    display: 'grid',
    gridTemplateColumns: 'auto',
    alignItems: 'center',
  },
  main: {
    display: 'grid',
    width: '100vw',
    gridTemplateRows: 'auto 1fr auto',
    gridRowGap: 8,
    paddingTop: 100,
    paddingLeft: '20vw',
    paddingRight: '20vw',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '5vw',
      paddingRight: '5vw',
    },
  },
  bottomNav: {
    width: '100vw',
    position: 'fixed',
    bottom: 0,
  },
}))

export const App = () => {
  const classes = useStyles()
  const onRefresh = () => window.location.reload()

  return (
    <div className="App">
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.toolbarLeft}>
            <ExportCycleData />
            <IconButton color="inherit" onClick={onRefresh}>
              <RefreshIcon />
            </IconButton>
          </div>
          <div className={classes.toolbarCenter}>
            <Typography
              className={classes.title}
              variant="h6"
            >{`${process.env.REACT_APP_NAME} v${process.env.REACT_APP_VERSION}`}</Typography>
          </div>
          <div className={classes.toolbarRight}>
            <ThemeSwitch />
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.main}>
        <Main />
      </div>
    </div>
  )
}
