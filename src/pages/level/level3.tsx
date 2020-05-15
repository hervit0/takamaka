import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import Level from '../../components/level/level';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(1)
  },
  typo: {
    margin: theme.spacing(1)
  },
}));

const Level3 = () => {
  const classes = useStyles();

  return (
    <Level name={'Et tu, Brute?'}>
      <Grid className={classes.root} container spacing={2} direction="column" justify="center" alignItems="center">
        <Typography className={classes.typo} variant="body1">
          JURA QVQ GUR ZNA JNYX BA GUR ZBBA?
        </Typography>
      </Grid>
    </Level>
  );
};

export default Level3;