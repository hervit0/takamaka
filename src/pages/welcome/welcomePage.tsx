import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { AES, enc } from 'crypto-ts';
import React from 'react';
import { useCookies } from 'react-cookie';
import { Redirect } from 'react-router-dom';
import CustomHeader from '../../components/header/header';
import PageContainer from '../../components/pageContainer/pageContainer';
import { getRoute, Routes } from '../../navigation/router';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  }
}));

const WelcomePage = () => {
  const classes = useStyles();
  const [cookies] = useCookies(['level']);

  if (cookies.level) {
    return (<Redirect to={getRoute(cookies.level)}/>);
  } else {
    return (
      <PageContainer>
        <CustomHeader header='Welcome'/>
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          size="large"
          startIcon={<LockOpenIcon/>}
          href={Routes.root}
        >
          {AES.decrypt(AES.encrypt('1', process.env.REACT_APP_SALT as string).toString(), process.env.REACT_APP_SALT as string).toString(enc.Utf8)}
        </Button>
        <p>{AES.encrypt('1', process.env.REACT_APP_SALT as string).toString()}</p>
        <p>{process.env.REACT_APP_SALT}</p>
        <Button
          className={classes.button}
          variant="outlined"
          color="secondary"
          size="large"
          startIcon={<FiberNewIcon/>}
        >
          {AES.encrypt('something', process.env.REACT_APP_SALT as string).toString()}
        </Button>
      </PageContainer>
    );
  }
};

export default WelcomePage;