import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import DashboardIcon from '@material-ui/icons/Dashboard';
import React from 'react';
import { Routes } from '../../navigation/router';
import AppBarLeft from './appBarLeft';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const CustomAppBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" href={Routes.dashboard}>
            <DashboardIcon/>
          </IconButton>
          <Typography variant="h4" className={classes.title}>
            Takamaka
          </Typography>
          <AppBarLeft/>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default CustomAppBar;