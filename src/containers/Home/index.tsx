import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import DatePicker from 'components/common/DatePicker';
import SelectInput from 'components/common/SelectInput';
import RadioButtons from 'components/common/RadioButtons';
import CheckBox from 'components/common/CheckBox';
import Link from '@material-ui/core/Link';
import LifeCoverBox from 'components/LifeCoverBox';
import { genders, smokeStatus } from './constants';
// @ts-ignore
import BackgroundImage from 'assets/images/demo-life-head-desktop.jpg';
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    minHeight: 450,
    color: '#FFFFFF',
    [theme.breakpoints.down('md')]: {
      display: 'flex',
      alignItems: 'center',
      '& h3': {
        fontSize: '2rem',
        lineHeight: '2.5rem',
        paddingRight: '30%',
      },
    },
  },
  subtitle: {
    marginBottom: theme.spacing(2),
    opacity: 0.7,
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  heroContainer: {
    paddingTop: theme.spacing(5.5),
  },
  description: {
    padding: theme.spacing(4.5, 0),
    backgroundColor: theme.palette.primary.main,
    fontSize: theme.spacing(3.25),
    color: '#FFFFFFC0',
    [theme.breakpoints.down('md')]: {
      padding: theme.spacing(2.5, 0),
    },
  },
  mainContent: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(20),
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(10),
    },
  },
  formControl: {
    marginBottom: theme.spacing(8),
    maxWidth: 400,
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(6),
    },
  },
  label: {
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(1),
  },
  link: {
    fontWeight: 500,
  },
}));

const Home: React.FC = () => {
  const classes = useStyles();
  const [birth, setBirth] = useState('');
  const [income, setIncome] = useState('');
  const [education, setEducation] = useState('');
  const [gender, setGender] = useState(genders[0].value);
  const [status, setStatus] = useState(smokeStatus[0].value);
  const [isAgree, setIsAgree] = useState<boolean>(false);

  const handleChangeIncome = (e: React.ChangeEvent<{ value: string }>) => {
    setIncome(e.target.value);
  };

  const handleSubmit = () => {
    // tslint:disable-next-line:no-console
    console.log('Submitting');
  }

  return (
    <div>
      <div className={classes.hero} style={{ backgroundImage: `url(${BackgroundImage})` }}>
        <Container maxWidth="md" className={classes.heroContainer}>
          <Typography className={classes.subtitle} variant="subtitle1">
            Good morning
          </Typography>
          <Typography component="h3" variant="h3">
            Welcome to Demo Life
          </Typography>
        </Container>
      </div>
      <div className={classes.description}>
        <Container maxWidth="md">
          <Typography variant="subtitle1">
            A bespoke life insurance digital platform that gives you the peace of mind of buying online
          </Typography>
        </Container>
      </div>
      <Container maxWidth="md" className={classes.mainContent}>
        <div className={classes.formControl}>
          <Typography className={classes.label}>What is your birthdate?</Typography>
          <DatePicker value={birth} onChangeDate={setBirth} />
          <Typography color="textSecondary" variant="body2">YYYY/MM/DD</Typography>
        </div>
        <div className={classes.formControl}>
          <Typography className={classes.label}>What is your monthly income?</Typography>
          <TextField
            variant="standard"
            fullWidth
            placeholder="Income"
            value={income}
            onChange={handleChangeIncome}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">p.m</InputAdornment>
              ),
            }}
          />
        </div>
        <div className={classes.formControl}>
          <Typography className={classes.label}>What is your highest education?</Typography>
          <SelectInput
            placeholder="Education"
            options={[]}
            value={education}
            onChangeSelect={setEducation}
          />
        </div>

        <div className={classes.formControl}>
          <Typography className={classes.label}>What is your gender?</Typography>
          <RadioButtons
            name="gender"
            options={genders}
            value={gender}
            onChangeRadio={setGender}
          />
        </div>

        <div className={classes.formControl}>
          <Typography className={classes.label}>Smoker Status?</Typography>
          <RadioButtons
            name="status"
            options={smokeStatus}
            value={status}
            onChangeRadio={setStatus}
          />
        </div>

        <Box marginBottom={8}>
          <CheckBox
            label={(
              <Typography>
                I agree to share my personal information in line with the&nbsp;
                <Link className={classes.link} href="#">privacy policy</Link>.
              </Typography>
            )}
            checked={isAgree}
            onChangeCheck={setIsAgree}
          />
        </Box>

        <Button onClick={handleSubmit} color="primary">Get a Quote</Button>

        <LifeCoverBox />
      </Container>
    </div>
  )
}

export default Home;