import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { currency } from '../util';
import RadioButtons from './common/RadioButtons';
import SlideController from './SlideController';
import { CoverOptionItem, LeadFormData, LeadType } from 'types/main';

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

const typeOptions = [
  {
    value: LeadType.cover,
    label: 'Cover or'
  },
  {
    value: LeadType.premium,
    label: 'Premium'
  },
];

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
  const [type, setType] = useState<LeadType>(LeadType.cover);
  const [target, setTarget] = useState('');
  const [slider, setSlider] = useState(defaultSlider);
  const [user, setUser] = useState({
    name: '',
    email: '',
    mobile: '',
  });
  const [amount, setAmount] = useState<number>(400000);

  const handleChangeAmount = (value: number) => {
    if (type === LeadType.premium) {
      const coverOption: CoverOptionItem | undefined = coverOptions.find(option => option.cover_amount === value);
      if (coverOption && coverOption.monthly_premium) {
        setTarget(coverOption.monthly_premium.toString());
      }
    }
    setAmount(value);
  };

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    })
  };

  const handleChangeType = (value: LeadType) => {
    if (value === LeadType.cover) {
      setSlider(defaultSlider);
      setTarget(income);
    } else {
      const len = coverOptions.length;
      if (len) {
        setSlider({
          step: 100000,
          max: coverOptions[0].cover_amount,
          min: coverOptions[len - 1].cover_amount,
        })
        setTarget(coverOptions[0].monthly_premium.toString());
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

  useEffect(() => {
    setTarget(income)
  }, [income])

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography color="textSecondary" variant="subtitle2">
          {`Life ${type} of `}
          <Typography variant="subtitle2" component="span" color="primary">{`Ð${currency(amount)} `}</Typography>
          for&nbsp;
          <Typography variant="subtitle2" component="span" color="primary">{`Ð${currency(target)} `}</Typography>
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
            options={typeOptions}
            row
            color="primary"
            value={type}
            onChangeRadio={handleChangeType}
          />
        </div>
        <SlideController
          value={amount}
          onChangeSlider={handleChangeAmount}
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