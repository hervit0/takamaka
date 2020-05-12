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

  const books = [
    'The Half-Blood Prince',
    'The Philosopher\'s Stone',
    'The Chamber of Secrets',
    'The Order of the Phoenix',
    'The Deathly Hallows',
    'The Prisoner of Azkaban',
    'The Goblet of Fire',
  ];

  return (
    <Level stage={'From the cupboard under the stairs'}>
      <Grid className={classes.root} container spacing={2} direction="column" justify="center" alignItems="center">
        {books.map((book) => (
          <Typography className={classes.typo} variant="body1">
            {book}
          </Typography>
        ))}
      </Grid>
    </Level>
  );
};

export default Level1;