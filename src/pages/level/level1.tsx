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
  }
}));

const Level1 = () => {
  const classes = useStyles();

  return (
    <Level stage={'From the cupboard under the stairs'}>
      <Grid className={classes.root} container spacing={2} direction="column" justify="center" alignItems="center">
        <Typography className={classes.typo} variant="body1">
          The Half-Blood Prince
        </Typography>
        <Typography className={classes.typo} variant="body1">
          The Philosopher's Stone
        </Typography>
        <Typography className={classes.typo} variant="body1">
          The Chamber of Secrets
        </Typography>
        <Typography className={classes.typo} variant="body1">
          The Order of the Phoenix
        </Typography>
        <Typography className={classes.typo} variant="body1">
          The Deathly Hallows
        </Typography>
        <Typography className={classes.typo} variant="body1">
          The Prisoner of Azkaban
        </Typography>
        <Typography className={classes.typo} variant="body1">
          The Goblet of Fire
        </Typography>
      </Grid>
    </Level>
  );
};

export default Level1;