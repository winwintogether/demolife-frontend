import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Typography from '@material-ui/core/Typography';
import { currency } from '../util';

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

type Props = {
  value: number;
  step: number;
  min: number;
  max: number;
  onChangeSlider: (value: number) =>  void;
}

const SlideController: React.FC<Props> = ({
  value,
  step,
  min,
  max,
  onChangeSlider,
}) => {
  const classes = useStyles();

  const handleChange = (_event: any, newValue: number | number[]) => {
    onChangeSlider(newValue as number);
  };

  const handleIncrease = () => {
    onChangeSlider(Math.min(max, value + step));
  };

  const handleDecrease = () => {
    onChangeSlider(Math.max(min, value - step));
  };

  return (
    <div className={classes.root}>
      <Button className={classes.button} onClick={handleDecrease}>
        <RemoveIcon />
      </Button>
      <div className={classes.sliderWrapper}>
        <Slider
          value={value}
          onChange={handleChange}
          step={step}
          min={min}
          max={max}
        />
        <div className={classes.info}>
          <Typography
            color="textSecondary"
            variant="body1"
            component="span"
          >{`Ð${currency(min)}`}</Typography>
          <Typography
            color="textSecondary"
            variant="body1"
            component="span"
          >{`Ð${currency(max)}`}</Typography>
        </div>
      </div>
      <Button className={classes.button} onClick={handleIncrease}>
        <AddIcon />
      </Button>
    </div>
  )
}

export default SlideController;
