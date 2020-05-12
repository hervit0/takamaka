import { Card, CardContent, Grid, Typography } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import rotherhithe from '../../resources/rotherhithe.png';
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
    minWidth: 900
  },
  media: {
    height: 500,
  },
}));

const Level5 = () => {
  const classes = useStyles();

  return (
    <Level name={'Won\'t go home without you'}>
      <Grid className={classes.root} container spacing={2} direction="column" justify="center" alignItems="center">
        <Typography className={classes.typo} variant="overline">
          "Right, what did you think about the noddles? Not bad, huh? Look, there's no one in the station, damn corona.
          Let's take left, I'll show around, it's quite a nice neighbourhood! Okay, on your right, that's a museum about
          the tunnel, quite cool, in the summer they organise concerts and stuff.
          Hm, if we turn right it's the way to home, but I bet you fancy a pint, right?
          There you go, best pub in London!"
        </Typography>

        <Card className={classes.card}>
          <CardContent>
            <CardMedia
              className={classes.media}
              image={rotherhithe}
              title="Beautiful neighbourhood"
            />
          </CardContent>
        </Card>
      </Grid>
    </Level>
  );
};

export default Level5;