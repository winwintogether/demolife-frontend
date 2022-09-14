import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';

const useStyles = makeStyles((theme) => ({
  top: {
    borderTop: `1px solid ${theme.palette.divider}`,
    display: 'flex',
    minHeight: 330,
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      marginBottom: theme.spacing(3),
    },
  },
  title: {
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(3),
  },
  divider: {
    height: '100%',
  },
  section: {
    padding: theme.spacing(3.75, 6.25),
    maxWidth: '26%',
    width: '100%',
    [theme.breakpoints.down('md')]: {
      maxWidth: '100%',
      padding: theme.spacing(3, 2),
    },
  },
  firstSection: {
    maxWidth: '100%',
  },
  middleSection: {
    borderLeft: `1px solid ${theme.palette.divider}`,
    borderRight: `1px solid ${theme.palette.divider}`,
    [theme.breakpoints.down('md')]: {
      border: 'none',
    },
  },
  bottom: {
    padding: theme.spacing(1),
    borderTop: `1px solid ${theme.palette.divider}`,
  },
}));

const Footer: React.FC = () => {
  const classes = useStyles()

  return (
    <div>
      <div className={classes.top}>
        <div className={classNames(classes.section, classes.firstSection)}>
          <Typography className={classes.title}>
            About Demo Life
          </Typography>
          <Typography color="textPrimary">
            Demo Life is a demonstration website. We built a life insurance platform where products can be purchased online or via a call centre.
          </Typography>
        </div>
        <div className={classNames(classes.section, classes.middleSection)}>
          <Typography className={classes.title}>
            Contact
          </Typography>
          <Typography color="textPrimary">
            t:&nbsp;
            <Typography component="span" color="primary">010 020 0002</Typography>
          </Typography>
          <Typography color="textPrimary">
            e:&nbsp;
            <Typography component="span" color="primary">info@demolife.tech</Typography>
          </Typography>
          <Typography color="textPrimary">
            Building A, Bryanston Corner 18 Ealing Crescent, Bryanston Joburg 2021
          </Typography>
        </div>
        <div className={classes.section}>
          <Typography className={classes.title}>
            Legal
          </Typography>
          <Typography color="textPrimary">Legal Privacy Policy</Typography>
          <Typography color="textPrimary">Terms and Conditions</Typography>
        </div>
      </div>
      <div className={classes.bottom}>
        <Typography variant="h6">© Copyright 2020 Demo Life.</Typography>
        <Typography variant="h6">All rights reserved.</Typography>
      </div>
    </div>
  )
}

export default Footer;
