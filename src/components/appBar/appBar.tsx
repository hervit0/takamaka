import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import AppBarLeft from './appBarLeft';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: theme.spacing(2),
  },
  toolbar: {
    justifyContent: 'space-between',
  },
}));

const CustomAppBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky">
        <Toolbar className={classes.toolbar}>
          <Typography variant="h5">
            Takamaka
          </Typography>
          <AppBarLeft/>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default CustomAppBar;