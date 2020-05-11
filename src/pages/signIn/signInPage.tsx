import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import React from 'react';
import { Redirect } from 'react-router-dom';
import CustomHeader from '../../components/header/header';
import PageContainer from '../../components/pageContainer/pageContainer';
import { useAuth } from '../../contexts/auth';
import { RouteNames } from '../../navigation/router';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  button: {
    margin: theme.spacing(1),
  }
}));

const SignInPage = (props: any) => {
  const classes = useStyles();
  // const referer = props.location.state.referer || RouteNames.root;

  const [isLoggedIn, setLoggedIn] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [userName, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { setAuthTokens } = useAuth();

  const handleUsernameOnChange = (e: React.BaseSyntheticEvent) => {
    setUserName(e.target.value);
  };

  const handlePasswordOnChange = (e: React.BaseSyntheticEvent) => {
    setPassword(e.target.value);
  };

  const handleLoginButtonClick = () => {
    if (userName === 'hum' && password === 'hum') {
      setAuthTokens!('sup3rTok3n');
      setLoggedIn(true);
    } else {
      setIsError(true);
    }
  };

  if (isLoggedIn) {
    return (<Redirect to={RouteNames.dashboard}/>);
  }

  return (
    <PageContainer>
      <CustomHeader header='Sign in'/>

      <form className={classes.root} noValidate autoComplete="off">
        <TextField id="username" label="Username" variant="outlined" autoFocus={true} onChange={handleUsernameOnChange}/>
        <TextField id="password" label="Password" variant="outlined" type="password" onChange={handlePasswordOnChange}/>
      </form>
      <Button
        className={classes.button}
        variant="contained"
        color="secondary"
        size="large"
        startIcon={<LockOpenIcon/>}
        onClick={handleLoginButtonClick}
      >
        Login
      </Button>
      {isError && <p>Hum hum</p>}
    </PageContainer>
  );
};

export default SignInPage;