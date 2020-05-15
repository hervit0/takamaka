import { Box, Card, CardContent, Grid, Typography } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import marieCurie from '../../resources/marie_curie.jpeg';
import { decrypt } from '../../services/cryptography';
import Level from '../../components/level/level';

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
  },
}));

const Level4 = () => {
  const classes = useStyles();

  return (
    <Level name={'All the small things'}>
      <Grid className={classes.root} container spacing={2} direction="column" justify="center" alignItems="center">
        <Typography className={classes.typo} variant="body1">
          She discovered so many things.
        </Typography>

        <Typography className={classes.typo} variant="body1">
          <Box fontSize={1}>
            {decrypt('U2FsdGVkX1+Wf2aRYcSlk+kiB4qD+E1idgTC5gIcE3GM3fa0riTyQzwaixVhcwPtIcclD/WeXnAj3SYKLN13x44m8THIBomhcw9JifR2JBc=')}
          </Box>
        </Typography>

        <Card className={classes.card}>
          <CardContent>
            <CardMedia
              className={classes.media}
              image={marieCurie}
              title="A strong woman."
            />
          </CardContent>
        </Card>
      </Grid>
    </Level>
  );
};

export default Level4;