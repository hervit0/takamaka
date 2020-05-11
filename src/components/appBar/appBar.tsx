import { TextField } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import TelegramIcon from '@material-ui/icons/Telegram';
import React from 'react';
import { Routes } from '../../navigation/router';
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
      <AppBar position="static" color='transparent'>
        <Toolbar className={classes.toolbar}>
          <Box>
            <TextField autoFocus={true} size='small' id="outlined-basic" label="Code" variant='filled'/>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" href={Routes.root}>
              <TelegramIcon/>
            </IconButton>
          </Box>
          <AppBarLeft/>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default CustomAppBar;