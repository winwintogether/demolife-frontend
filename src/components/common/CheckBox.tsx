import React, { ReactNode } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

type Props = {
  label: string | ReactNode,
  checked: boolean,
  onChangeCheck: (checked: boolean) => void,
}

const CheckBox: React.FC<Props> = ({ label, checked, onChangeCheck }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeCheck(event.target.checked);
  };

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          color="primary"
          onChange={handleChange}
        />
      }
      label={label}
    />
  );
}

export default CheckBox;
