import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
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
}));

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <div>
      Dashboard
    </div>
  )
}

export default Home;