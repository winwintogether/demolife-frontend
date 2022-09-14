import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  textField: {
    minWidth: 400,
  }
}));

const SelectInput = () => {
  const classes = useStyles();

  return (
    <Select
      className={classes.textField}
      value={10}
      placeholder="Education"
      onChange={() => {}}
    >
      <MenuItem value={10}>Martic</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </Select>
  )
}

export default SelectInput;
