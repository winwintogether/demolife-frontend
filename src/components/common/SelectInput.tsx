import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  textField: {
    minWidth: 400,
  }
}));

type Props = {
  options: Array<{ value: string, label: string }>,
  value: string,
  onChangeSelect: (value: string) => void,
  placeholder: string,
}

const SelectInput: React.FC<Props> = ({
  options,
  value,
  placeholder,
  onChangeSelect,
}) => {
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    onChangeSelect(event.target.value as string);
  };

  return (
    <Select
      className={classes.textField}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    >
      {options.map((item, index) => (
        <MenuItem key={index} value={item.value}>
          {item.label}
        </MenuItem>
      ))}
    </Select>
  )
}

export default SelectInput;
