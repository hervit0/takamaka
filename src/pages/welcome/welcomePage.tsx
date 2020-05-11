import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import React from 'react';
import CustomHeader from '../../components/header/header';
import PageContainer from '../../components/pageContainer/pageContainer';
import logo from '../../logo.svg';
import { Routes } from '../../navigation/router';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  }
}));

const WelcomePage = () => {
  const classes = useStyles();

  return (
    <PageContainer>
      <CustomHeader header='Welcome'/>
      <img src={logo} className="App-logo" alt="logo"/>
      <Button
        className={classes.button}
        variant="contained"
        color="secondary"
        size="large"
        startIcon={<LockOpenIcon/>}
        href={Routes.signin}
      >
        Sign in
      </Button>
      <Button
        className={classes.button}
        variant="outlined"
        color="secondary"
        size="large"
        startIcon={<FiberNewIcon/>}
      >
        Sign up
      </Button>
    </PageContainer>
  );
};

export default WelcomePage;