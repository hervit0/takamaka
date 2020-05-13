import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import enigma from '../../resources/enigma.jpg';
import Level from './level';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(1)
  },
  typo: {
    margin: theme.spacing(1)
  },
  card: {
    minWidth: 350
  },
  media: {
    height: 350,
  }
}));

const Level7 = () => {
  const classes = useStyles();
  const [show, setShow] = React.useState(false);

  return (
    <Level name={'I open at the close'}>
      <Grid className={classes.root} container spacing={2} direction="column" justify="center" alignItems="center">
        <Typography className={classes.typo} variant="body1">
          A team of codebreakers, including Alan Turing, managed to break the secrets of Enigma, a german encryption device.
        </Typography>
        <Typography
          className={classes.typo}
          variant="body1"
          hidden={show}
          onMouseEnter={() => setShow(true)}
        >
          When was it?
        </Typography>
        <Typography
          className={classes.typo}
          variant="body1"
          hidden={!show}
          onMouseLeave={() => setShow(false)}
        >
          Where was it?
        </Typography>

        <Card className={classes.card}>
          <CardContent>
            <CardMedia
              className={classes.media}
              image={enigma}
              title="A strong woman."
            />
          </CardContent>
        </Card>
      </Grid>
    </Level>
  );
};

export default Level7;