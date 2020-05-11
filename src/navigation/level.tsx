import { Button, TextField } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import TelegramIcon from '@material-ui/icons/Telegram';
import React from 'react';
import { useCookies } from 'react-cookie';
import { Redirect } from 'react-router-dom';
import CustomHeader from '../components/header/header';
import PageContainer from '../components/pageContainer/pageContainer';
import { getCodeValidation } from '../services/code';
import { getRoute, Routes } from './router';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginLeft: theme.spacing(2),
  },
}));

type LevelProps = {
  stage: string
}

const Level = ({ stage }: LevelProps) => {
  const classes = useStyles();
  const [cookies, setCookie] = useCookies(['level']);
  const [code, setCode] = React.useState('');
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [nextLevel, setNextLevel] = React.useState('');
  const [isError, setIsError] = React.useState(false);

  const handleCodeOnChange = (e: React.BaseSyntheticEvent) => {
    setCode(e.target.value);
  };

  const handleSubmitCode = () => {
    //  TODO: should be cross-checked with cookie
    const codeValidation = getCodeValidation(code);
    if (codeValidation.isValid) {
      setIsSuccess(true);
      setNextLevel(codeValidation.nextLevel!);
    } else {
      setIsError(true);
      console.log(isError)
    }
  };

  if (isSuccess) {
    return (<Redirect to={getRoute(nextLevel)}/>);
  }

  return (
    <PageContainer>
      <CustomHeader header={stage}/>
      <Box>
        <TextField autoFocus={true} size='small' id="outlined-basic" label="Code" variant='filled' onChange={handleCodeOnChange}/>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" href={Routes.root} onClick={handleSubmitCode}>
          <TelegramIcon/>
        </IconButton>
      </Box>

      <Typography variant="h5">
        {cookies.level}
      </Typography>
      <Button
        variant="outlined"
        color="secondary"
        size="large"
        startIcon={<FiberNewIcon/>}
        onClick={() => setCookie('level', stage)}
      >
        Sign up
      </Button>
    </PageContainer>
  );
};

export default Level;