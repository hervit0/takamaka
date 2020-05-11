import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InfoIcon from '@material-ui/icons/Info';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import React from 'react';
import { useCookies } from 'react-cookie';
import { Routes } from '../../navigation/router';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  }
}));

const AppBarLeft = () => {
  const classes = useStyles();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cookies, _, removeCookie] = useCookies(['level']);

  if (cookies.level) {
    return (
      <Button
        className={classes.button}
        variant="contained"
        color="secondary"
        size="large"
        startIcon={<RotateLeftIcon/>}
        href={Routes.root}
        onClick={() => {
          removeCookie('level');
        }}
      >
        Reset
      </Button>
    );
  } else {
    return (< InfoIcon/>);
  }
};

export default AppBarLeft;