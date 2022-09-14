import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles(() => ({
  label: {
    cursor: 'pointer'
  },
}));

const MobileMenu = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Typography
        className={classes.label}
        aria-controls="mobile-menu"
        aria-haspopup="true"
        onClick={handleClick}
        color="primary"
      >
        Menu
      </Typography>
      <Menu
        id="mobile-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Home</MenuItem>
        <MenuItem onClick={handleClose}>Calculator</MenuItem>
        <MenuItem onClick={handleClose}>Products</MenuItem>
        <MenuItem onClick={handleClose}>My Policy Dashboard</MenuItem>
      </Menu>
    </div>
  );
}

export default MobileMenu;
