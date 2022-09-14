import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Button from "@material-ui/core/Button";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  sliderWrapper: {
    padding: theme.spacing(1, 4),
    flex: 1,
  },
  button: {
    padding: 0,
    width: 44,
    minWidth: 44,
    height: 36,
    borderRadius: 4,
    backgroundColor: '#FFF',
    boxShadow: theme.shadows[1],
  },
  info: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));


const SlideController = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button className={classes.button}>
        <RemoveIcon />
      </Button>
      <div className={classes.sliderWrapper}>
        <Slider />
        <div className={classes.info}>
          <Typography
            color="textSecondary"
            variant="body1"
            component="span"
          >Ð12,500</Typography>
          <Typography
            color="textSecondary"
            variant="body1"
            component="span"
          >Ð1,250,000</Typography>
        </div>
      </div>
      <Button className={classes.button}>
        <AddIcon />
      </Button>
    </div>
  )
}

export default SlideController;
