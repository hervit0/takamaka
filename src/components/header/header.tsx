import { Box, IconButton, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TelegramIcon from '@material-ui/icons/Telegram';
import React from 'react';
import { useCookies } from 'react-cookie';
import { Redirect } from 'react-router-dom';
import { getRoute, Routes } from '../../navigation/router';
import { getCodeValidation } from '../../services/code';

const useStyles = makeStyles((theme) => ({
  header: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: '10px',
  },
  typoShare: {
    margin: theme.spacing(1),
  },
  menuButton: {
    marginLeft: theme.spacing(2),
  },
}));

type CustomHeaderProps = {
  header: string,
}

const CustomHeader = ({ header }: CustomHeaderProps) => {
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
    const codeValidation = getCodeValidation(code, cookies.level);
    if (codeValidation.isValid) {
      setIsSuccess(true);
      setNextLevel(codeValidation.nextLevel!);
      setCookie('level', codeValidation.nextLevel!);
    } else {
      setIsError(true);
      console.log(isError);
    }
  };

  if (isSuccess) {
    return (<Redirect to={getRoute(nextLevel)}/>);
  }

  return (
    <div className={classes.header}>
      <Typography className={classes.typoShare} variant='h4' color="textPrimary">
        {header}
      </Typography>
      {cookies.level ?
        (<Box>
          <TextField autoFocus={true} size='small' id="outlined-basic" label="Code" variant='filled' onChange={handleCodeOnChange}/>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" href={Routes.root} onClick={handleSubmitCode}>
            <TelegramIcon/>
          </IconButton>
        </Box>) : null
      }
    </div>

  );
};

export default CustomHeader;