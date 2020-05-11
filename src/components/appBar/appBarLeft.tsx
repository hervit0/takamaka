import { Button } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import NotificationsIcon from '@material-ui/icons/Notifications';
import React from 'react';
import { useAuth } from '../../contexts/auth';
import { Routes } from '../../navigation/router';
import { isAuthenticated } from '../../services/authentication';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
  }
}));

const AppBarLeft = () => {
  const classes = useStyles();
  const { authTokens } = useAuth();

  if (isAuthenticated(authTokens)) {
    return (
      <>
        <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="notification">
          <Badge badgeContent={Math.floor(Math.random() * 10)} color="secondary">
            <NotificationsIcon/>
          </Badge>
        </IconButton>
        <IconButton edge="end" className={classes.menuButton} color="inherit" aria-label="exit" href={Routes.root}>
          <ExitToAppIcon/>
        </IconButton>
      </>
    );
  } else {
    return (
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        size="large"
        startIcon={<LockOpenIcon/>}
        href={Routes.signin}
      >
        Login
      </Button>
    );
  }
};

export default AppBarLeft;