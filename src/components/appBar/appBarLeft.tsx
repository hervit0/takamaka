import { Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import React from 'react';
import { useCookies } from 'react-cookie';
import { Routes } from '../../navigation/router';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const AppBarLeft = () => {
  const classes = useStyles();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cookies, _, removeCookie] = useCookies(['level']);

  if (cookies.level) {
    return (
      <IconButton edge="start" color="inherit" aria-label="menu" href={Routes.root}>
        <Button
          className={classes.button}
          variant="contained"
          color="secondary"
          size="small"
          startIcon={<RotateLeftIcon/>}
          onClick={() => {
            removeCookie('level');
          }}
        >
          Reset
        </Button>
      </IconButton>
    );
  } else {
    return null;
  }
};

export default AppBarLeft;