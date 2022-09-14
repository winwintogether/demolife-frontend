import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import EventIcon from '@material-ui/icons/Event';

const useStyles = makeStyles(() => ({
  textField: {
    '& .MuiInputAdornment-positionEnd': {
      position: 'absolute',
      right: 0,
      zIndex: -1,
    }
  }
}));

const DatePicker = () => {
  const classes = useStyles();

  return (
    <TextField
      className={classes.textField}
      type="date"
      // defaultValue="2017-05-24"
      variant="standard"
      placeholder="Birthdate *"
      fullWidth
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <EventIcon />
          </InputAdornment>
        ),
      }}
    />
  )
}

export default DatePicker;
