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

type Props = {
  value: string,
  onChangeDate: (value: string) => void,
};

const DatePicker: React.FC<Props> = ({
  value,
  onChangeDate,
}) => {
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeDate(event.target.value)
  }

  return (
    <TextField
      className={classes.textField}
      type="date"
      value={value}
      onChange={handleChange}
      variant="standard"
      placeholder="Birthdate *"
      fullWidth
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <EventIcon color="secondary" />
          </InputAdornment>
        ),
      }}
    />
  )
}

export default DatePicker;
