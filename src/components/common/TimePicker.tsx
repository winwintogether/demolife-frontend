import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from "@material-ui/core/InputAdornment";

const useStyles = makeStyles(() => ({
  textField: {
    minWidth: 400,

    '& .MuiInputAdornment-positionEnd': {
      position: 'absolute',
      right: 0,
    }
  }
}));

const TimePicker = () => {
  const classes = useStyles();

  return (
    <TextField
      type="time"
      variant="standard"
      defaultValue="07:30"
      className={classes.textField}
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">p.m</InputAdornment>
        ),
      }}
    />
  )
}

export default TimePicker;