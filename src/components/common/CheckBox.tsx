import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

type Props = {
  label: string,
}

const CheckBox: React.FC<Props> = ({ label }) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          name="checkedB"
          color="primary"
        />
      }
      label={label}
    />
  );
}

export default CheckBox;
