import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DatePicker from 'components/common/DatePicker';
import TimePicker from 'components/common/TimePicker';
import SelectInput from 'components/common/SelectInput';
import RadioButtons from 'components/common/RadioButtons';
import CheckBox from 'components/common/CheckBox';
import { genders, smokeStatus } from './constants';
// @ts-ignore
import BackgroundImage from 'assets/images/demo-life-head-desktop.jpg';

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    minHeight: 450,
    color: '#FFFFFF',
  },
  subtitle: {
    marginBottom: theme.spacing(2),
    opacity: 0.7,
  },
  heroContainer: {
    paddingTop: theme.spacing(5.5),
  },
  description: {
    padding: theme.spacing(4.5, 0),
    backgroundColor: theme.palette.primary.main,
    fontSize: theme.spacing(3.25),
    color: '#FFFFFFC0',
  },
  mainContent: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  formControl: {
    marginBottom: theme.spacing(8),
  },
  label: {
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(1),
  },
}));

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.hero} style={{ backgroundImage: `url(${BackgroundImage})` }}>
        <Container className={classes.heroContainer}>
          <Typography className={classes.subtitle} variant="subtitle1">
            Good morning
          </Typography>
          <Typography component="h3" variant="h3">
            Welcome to Demo Life
          </Typography>
        </Container>
      </div>
      <div className={classes.description}>
        <Container>
          <Typography variant="subtitle1">
            A bespoke life insurance digital platform that gives you the peace of mind of buying online
          </Typography>
        </Container>
      </div>
      <Container className={classes.mainContent}>
        <div className={classes.formControl}>
          <Typography className={classes.label}>What is your birthdate?</Typography>
          <DatePicker />
        </div>
        <div className={classes.formControl}>
          <Typography className={classes.label}>What is your monthly income?</Typography>
          <TimePicker />
        </div>
        <div className={classes.formControl}>
          <Typography className={classes.label}>What is your highest education?</Typography>
          <SelectInput />
        </div>

        <div className={classes.formControl}>
          <Typography className={classes.label}>What is your gender?</Typography>
          <RadioButtons options={genders} />
        </div>

        <div className={classes.formControl}>
          <Typography className={classes.label}>Smoker Status?</Typography>
          <RadioButtons options={smokeStatus} />
        </div>

        <div className={classes.formControl}>
          <CheckBox label='I agree to share my personal information in line with the privacy policy.' />
        </div>
        <Button color="primary">Get a Quote</Button>
      </Container>
    </div>
  )
}

export default Home;