import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import RadioButtons from './common/RadioButtons';
import SlideController from './SlideController';

const useStyles = makeStyles((theme) => ({
  root: {
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '5px 5px 0 0',
    maxWidth: 765,
    marginTop: theme.spacing(12),
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(8),
    }
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: '#f5f5f5',
    padding: theme.spacing(3, 2),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
    }
  },
  content: {
    padding: theme.spacing(1, 2),
  },
  slideHeader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    }
  },
  textFields: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(3),
    flexWrap: 'nowrap',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
    }
  },
  action: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingBottom: theme.spacing(2),
    '& svg': {
      marginTop: 4,
      marginLeft: 18,
    },
    '& button': {
      paddingLeft: theme.spacing(10),
      paddingRight: theme.spacing(10),
    },
    [theme.breakpoints.down('sm')]: {
      '& button': {
        width: '100%',
      },
    }
  },
}));

const LifeCoverBox = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography color="textSecondary" variant="subtitle2">
          Life Cover of&nbsp;
          <Typography variant="subtitle2" component="span" color="primary">Ð1,25,000&nbsp;</Typography>
          for&nbsp;
          <Typography variant="subtitle2" component="span" color="primary">Ð23&nbsp;</Typography>
          pm*
        </Typography>
        <CloseIcon fontSize="small" color="secondary" />
      </div>
      <div className={classes.content}>
        <div className={classes.slideHeader}>
          <Typography color="textSecondary" variant="body1">
            Move the slider to change your
            &nbsp;&nbsp;
          </Typography>
          <RadioButtons
            name="type"
            options={[
              { value: 'cover', label: 'Cover or' },
              { value: 'premium', label: 'Premium' },
            ]}
            row
            color="primary"
          />
        </div>
        <SlideController />
        <Grid className={classes.textFields} container spacing={4}>
          <Grid item md={3} sm={12} xs={12}>
            <TextField variant="standard" placeholder="Name" fullWidth />
          </Grid>
          <Grid item md={5} sm={12} xs={12}>
            <TextField variant="standard" placeholder="Email" fullWidth />
          </Grid>
          <Grid item md={4} sm={12} xs={12}>
            <TextField variant="standard" placeholder="Mobile Number" fullWidth />
          </Grid>
        </Grid>
        <div className={classes.action}>
          <Button color="primary">
            Continue
            <ArrowForwardIosIcon fontSize="small" />
          </Button>
        </div>
      </div>
    </div>
  )
};

export default LifeCoverBox;