import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import beginRandomImg from '../../../resources/begin-random.jpg';
import beginImg from '../../../resources/begin.jpg';
import { Routes } from '../../../navigation/router';

const useStyles = makeStyles({
  dashboardActions: {
    display: 'flex',
    flexDirection: 'row',
  },
  card: {
    maxWidth: 240,
    margin: '10px',
  },
  media: {
    height: 140,
  },
});

export default function DashboardActions() {
  const classes = useStyles();

  return (
    <div className={classes.dashboardActions}>
      <Card className={classes.card}>
        <CardActionArea href={Routes.newStory}>
          <CardMedia
            className={classes.media}
            image={beginImg}
            title="Start a new story"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              New Story
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Begin a new story with a pen friend!
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card className={classes.card}>
        <CardActionArea href={Routes.dashboard}>
          <CardMedia
            className={classes.media}
            image={beginRandomImg}
            title="Join a random story"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Random story
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Someone tossed a bottle into the sea. Fancy getting the message?
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
