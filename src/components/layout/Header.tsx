import React from 'react';
import { Toolbar, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Logo from '../../assets/images/logo.png';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1.5, 2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  links: {
    display: 'flex',
    alignItems: 'center',
  },
  link: {
    marginLeft: theme.spacing(3),
  },
  logo: {
    width: 170,
    height: 'auto',
  },
}));

const Header: React.FC = () => {
  const classes = useStyles()

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Link href="/">
          <img className={classes.logo} src={Logo} alt="logo" />
        </Link>

        <div className={classes.links}>
          <Link className={classes.link} href="/">Home</Link>
          <Link className={classes.link} href="/">Calculator</Link>
          <Link className={classes.link} href="/">Products</Link>
          <Link className={classes.link} href="/">My Policy Dashboard</Link>
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header;
