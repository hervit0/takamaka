import { Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import React from 'react';
import { useCookies } from 'react-cookie';
import { Redirect } from 'react-router-dom';
import CustomHeader from '../../components/header/header';
import PageContainer from '../../components/pageContainer/pageContainer';
import { getRoute, Routes } from '../../navigation/router';
import { encrypt } from '../../services/cryptography';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
  typo: {
    marginLeft: theme.spacing(3),
  }
}));

const WelcomePage = () => {
  const classes = useStyles();
  const [cookies, setCookies] = useCookies(['level']);

  if (cookies.level) {
    return (<Redirect to={getRoute(cookies.level)}/>);
  } else {
    return (
      <PageContainer>
        <CustomHeader header='Welcome'/>
        <Box width={1} display="flex" flexDirection='column'>
          <Typography className={classes.typo} variant="body1" align='left' paragraph={true}>
            Hey! You like solving riddles and puzzles?
          </Typography>
          <Typography className={classes.typo} variant="body1" align='left' paragraph={true}>
            Here are some brain-smashing problems, they are not ordered by difficulty. They are about everything and nothing, they are sometimes obvious, sometimes not.
          </Typography>
          <Typography className={classes.typo} variant="body1" align='left' paragraph={true}>
            You just need to enter a code for each riddle.
          </Typography>
          <Typography className={classes.typo} variant="body1" align='left' paragraph={true}>
            This site uses cookies to track your progression, if you change browser or laptop, you will have to start again.
          </Typography>
          <Typography className={classes.typo} variant="body1" align='left' paragraph={true}>
            Good luck and have fun,
          </Typography>
          <Typography className={classes.typo} variant="body1" align='right' paragraph={true}>
            a kid from the 90's.
          </Typography>
        </Box>
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          size="large"
          startIcon={<PlayCircleOutlineIcon/>}
          href={Routes.root}
          onClick={() => setCookies('level', encrypt('1'))}
        >
          Start
        </Button>
      </PageContainer>
    );
  }
};

export default WelcomePage;