import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { decrypt } from '../../services/cryptography';
import Level from './level';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(1)
  },
  typo: {
    margin: theme.spacing(1)
  },
  typoHidden: {
    margin: theme.spacing(1),
    color: 'white'
  }
}));

const Level2 = () => {
  const classes = useStyles();

  return (
    <Level stage={'The dark side of the moon'}>
      <Grid className={classes.root} container spacing={2} direction="column" justify="center" alignItems="center">
        <Typography className={classes.typo} variant="body1">
          Which creature has one voice and yet becomes four-footed and two-footed and three-footed?
        </Typography>
        <Typography className={classes.typoHidden} variant="body1">
          {decrypt("U2FsdGVkX1+eEAsGocCW46sJmUTGDLGWpQJj6p8YRorfFPE1g7aaEzYhHeGwp0qZZAl+H1hAoBAd7rF4UJw9qQ==")}
        </Typography>
      </Grid>
    </Level>
  );
};

export default Level2;