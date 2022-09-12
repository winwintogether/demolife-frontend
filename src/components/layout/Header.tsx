import React from 'react'
import { Toolbar, AppBar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1.5),
  },
}));

const Header: React.FC = () => {
  const classes = useStyles()

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        Header
      </Toolbar>
    </AppBar>
  )
}

export default Header;
