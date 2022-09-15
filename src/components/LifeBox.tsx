import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { currency } from '../util';
import RadioButtons from './common/RadioButtons';
import SlideController from './SlideController';
import { CoverOptionItem, LeadFormData } from 'types/main';

const useStyles = makeStyles((theme) => ({
  root: {
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: '5px 5px 0 0',
    maxWidth: 765,
    marginTop: theme.spacing(12),
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(8),
    }
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: `1px solid ${theme.palette.divider}`,
    backgroundColor: '#f5f5f5',
    padding: theme.spacing(3, 2),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2),
    }
  },
  content: {
    padding: theme.spacing(1, 2),
  },
  slideHeader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    }
  },
  textFields: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(3),
    flexWrap: 'nowrap',
    [theme.breakpoints.down('sm')]: {
      flexWrap: 'wrap',
    }
  },
  action: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingBottom: theme.spacing(2),
    '& svg': {
      marginTop: 4,
      marginLeft: 18,
    },
    '& button': {
      paddingLeft: theme.spacing(10),
      paddingRight: theme.spacing(10),
    },
    [theme.breakpoints.down('sm')]: {
      '& button': {
        width: '100%',
      },
    }
  },
}));

const defaultSlider = {
  min: 100000,
  max: 5000000,
  step: 100000,
};

type Props = {
  coverOptions: CoverOptionItem[];
  income: string;
  onSubmit: (value: LeadFormData) =>  void;
};

const LifeBox: React.FC<Props> = ({ coverOptions, onSubmit, income }) => {
  const classes = useStyles();
  const [type, setType] = useState<'Cover' | 'Premium'>('Cover');
  const [slider, setSlider] = useState(defaultSlider);
  const [user, setUser] = useState({
    name: '',
    email: '',
    mobile: '',
  });
  const [amount, setAmount] = useState(400000);

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    })
  };

  const handleChangeType = (value: 'Cover' | 'Premium') => {
    if (value === 'Cover') {
      setSlider(defaultSlider);
    } else {
      const len = coverOptions.length;
      if (len) {
        setSlider({
          step: 100000,
          max: coverOptions[0].cover_amount,
          min: coverOptions[len - 1].cover_amount,
        })
      }
    }

    setType(value);
  }

  const handleSubmit = () => {
    onSubmit({
      first_name: user.name,
      last_name: user.name,
      email: user.email,
      cell_no: user.mobile,
      amount,
    });
  };

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography color="textSecondary" variant="subtitle2">
          {`Life ${type} of `}
          <Typography variant="subtitle2" component="span" color="primary">{`Ð${currency(amount)} `}</Typography>
          for&nbsp;
          <Typography variant="subtitle2" component="span" color="primary">{`Ð${currency(income)} `}</Typography>
          pm*
        </Typography>
        <CloseIcon fontSize="small" color="secondary" />
      </div>
      <div className={classes.content}>
        <div className={classes.slideHeader}>
          <Typography color="textSecondary" variant="body1">
            Move the slider to change your
            &nbsp;&nbsp;
          </Typography>
          <RadioButtons
            name="type"
            options={[
              { value: 'Cover', label: 'Cover or' },
              { value: 'Premium', label: 'Premium' },
            ]}
            row
            color="primary"
            value={type}
            onChangeRadio={handleChangeType}
          />
        </div>
        <SlideController
          value={amount}
          onChangeSlider={setAmount}
          step={slider.step}
          min={slider.min}
          max={slider.max}
        />
        <Grid className={classes.textFields} container spacing={4}>
          <Grid item md={3} sm={12} xs={12}>
            <TextField
              variant="standard"
              placeholder="Name"
              fullWidth
              name="name"
              value={user.name}
              onChange={handleChangeInput}
            />
          </Grid>
          <Grid item md={5} sm={12} xs={12}>
            <TextField
              variant="standard"
              placeholder="Email"
              fullWidth
              name="email"
              value={user.email}
              onChange={handleChangeInput}
            />
          </Grid>
          <Grid item md={4} sm={12} xs={12}>
            <TextField
              variant="standard"
              placeholder="Mobile Number"
              fullWidth
              name="mobile"
              value={user.mobile}
              onChange={handleChangeInput}
            />
          </Grid>
        </Grid>
        <div className={classes.action}>
          <Button
            disabled={!user.name || !user.email || !user.mobile}
            color="primary"
            onClick={handleSubmit}
          >
            Continue
            <ArrowForwardIosIcon fontSize="small" />
          </Button>
        </div>
      </div>
    </div>
  )
};

export default LifeBox;