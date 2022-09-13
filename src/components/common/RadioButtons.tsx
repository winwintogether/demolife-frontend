import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

type Props = {
  options: Array<{ value: string, label: string }>
}

const RadioButtons: React.FC<Props> = ({ options }) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setValue((event.target as HTMLInputElement).value);
  };

  return (
    <RadioGroup
      name="gender1"
      onChange={handleChange}
    >
      {options.map((option, index) => (
        <FormControlLabel
          key={index}
          value={option.value}
          control={<Radio />}
          label={option.label}
        />
      ))}
    </RadioGroup>
  );
}

export default RadioButtons;
