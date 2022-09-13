import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import EventIcon from '@material-ui/icons/Event';

const useStyles = makeStyles(() => ({
  textField: {
    minWidth: 400,

    '& .MuiInputAdornment-positionEnd': {
      position: 'absolute',
      right: 0,
    }
  }
}));

const DatePicker = () => {
  const classes = useStyles();

  return (
    <TextField
      type="date"
      defaultValue="2017-05-24"
      variant="standard"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <EventIcon />
          </InputAdornment>
        ),
      }}
      className={classes.textField}
    />
  )
}

export default DatePicker;
