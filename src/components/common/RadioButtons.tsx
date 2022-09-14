import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

type Props = {
  name: string,
  color?: 'primary' | 'secondary',
  options: Array<{ value: string, label: string }>,
  row?: boolean,
}

const RadioButtons: React.FC<Props> = ({
  name,
  options,
  row,
  color = 'secondary'
}) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setValue((event.target as HTMLInputElement).value);
  };

  return (
    <RadioGroup
      name={name}
      onChange={handleChange}
      row={row}
    >
      {options.map((option, index) => (
        <FormControlLabel
          key={index}
          value={option.value}
          control={<Radio color={color} />}
          label={option.label}
        />
      ))}
    </RadioGroup>
  );
}

export default RadioButtons;
