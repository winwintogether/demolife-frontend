import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import Link from '@material-ui/core/Link';
import { Box } from '@material-ui/core';
import moment from 'moment';
import DatePicker from 'components/common/DatePicker';
import SelectInput from 'components/common/SelectInput';
import RadioButtons from 'components/common/RadioButtons';
import CheckBox from 'components/common/CheckBox';
import LifeBox from 'components/LifeBox';
import mainService from 'service/main.service';
import { educations, genders, smokeStatus } from './constants';
import { Education, Gender, Smoker, CoverOptionItem, LeadFormData } from 'types/main';
import { Lead, Premium, PremiumResponse } from 'types/api';
import config from 'config';
// @ts-ignore
import BackgroundImage from 'assets/images/demo-life-head-desktop.jpg';

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
  const [education, setEducation] = useState<Education>(Education.matric);
  const [gender, setGender] = useState<Gender>(Gender.male);
  const [status, setStatus] = useState<Smoker>(Smoker.nonSmoker);
  const [isAgree, setIsAgree] = useState<boolean>(false);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isShowLifeBox, setIsShowLifeBox] = useState<boolean>(false);
  const [coverOptions, setCoverOptions] = useState<CoverOptionItem[]>([]);

  const handleChangeIncome = (e: React.ChangeEvent<{ value: string }>) => {
    if (!isNaN(Number(e.target.value))) {
      setIncome(e.target.value);
    }
  };

  const handleSubmit = () => {
    const age = moment().diff(moment(birth), 'y');

    const data: Premium = {
      account_id: config.accountId,
      product_code: config.productCode,
      age,
      gender,
      smoker: status,
      income_gross_monthly: Number(income),
      education,
      campaign_id: config.campaignId,
      cover_amount: 1000000,
      step: 100000,
    };

    setIsLoading(true);
    mainService.quickPremium(data)
      .then((response: PremiumResponse) => {
        setCoverOptions(response.cover_options);
        setIsLoading(false);
        setIsShowLifeBox(true);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  const handleLeadStart = async (data: LeadFormData) => {
    const age = moment().diff(moment(birth), 'y');

    const payload: Lead = {
      account_id: config.accountId,
      campaign_id: config.campaignId,
      provider: {
        id: config.providerId,
      },
      first_name: data.first_name,
      last_name: data.last_name,
      email: config.email,
      cell_no: data.cell_no,
      query: {
        age,
        cover_amount: data.amount,
        education,
        gender,
        income_gross_monthly: Number(income),
        product_code: config.productCode,
        smoker: status,
      },
    };

    await mainService.leadStart(payload);
  };

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
          <Typography color="textSecondary" variant="body2">MM/DD/YYYY</Typography>
        </div>
        <div className={classes.formControl}>
          <Typography className={classes.label}>What is your monthly income?</Typography>
          <TextField
            variant="standard"
            type="text"
            fullWidth
            placeholder="Income"
            value={income}
            onChange={handleChangeIncome}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Box marginRight={2}>p.m</Box>
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className={classes.formControl}>
          <Typography className={classes.label}>What is your highest education?</Typography>
          <SelectInput
            placeholder="Education"
            options={educations}
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

        <Button
          onClick={handleSubmit}
          color="primary"
          disabled={!isAgree || !birth || !income || isLoading}
        >
          Get a Quote
        </Button>

        {isShowLifeBox && (
          <LifeBox
            income={income}
            coverOptions={coverOptions}
            onSubmit={handleLeadStart}
          />
        )}
      </Container>
    </div>
  )
}

export default Home;