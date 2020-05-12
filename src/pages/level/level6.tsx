import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Level from './level';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(1)
  },
  typo: {
    margin: theme.spacing(1)
  },
}));

const Level6 = () => {
  const classes = useStyles();

  return (
    <Level name={'?rorrim eht otni kool uoy nehw ees uoy od ohW'}>
      <Grid className={classes.root} container spacing={2} direction="column" justify="center" alignItems="center">
        <Typography className={classes.typo} variant="body1">
          ?ssalg fo tnenopmoc niam eht si tahW
        </Typography>
      </Grid>
    </Level>
  );
};

export default Level6;