import { Box, Button } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import CreateIcon from '@material-ui/icons/Create';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import React from 'react';
import CustomHeader from '../../components/header/header';
import PageContainer from '../../components/pageContainer/pageContainer';
import { Routes } from '../../navigation/router';

const useStyles = makeStyles((theme) => ({
  typoShare: {
    margin: theme.spacing(1),
  },
  link: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  startButton: {
    marginTop: theme.spacing(1),
  }
}));

export default function NewStoryPage() {
  const classes = useStyles();

  return (
    <PageContainer>
      <CustomHeader header='Start a new story'/>

      <Typography className={classes.typoShare} variant="body1" color="textPrimary" component="p">
        Begin a new story with a friend. You will alternatively complete the story, turn by turn. Just start by giving a name to your story.
      </Typography>
      <TextField
        id="story-name"
        style={{ margin: 8 }}
        placeholder="Name of your story"
        margin="normal"
        size='medium'
        InputLabelProps={{
          shrink: true,
        }}
      />
      <Typography className={classes.typoShare} variant="body1" color="textPrimary" component="p">
        Share the following link with your pen friend:
      </Typography>
      <div className={classes.link}>
        <Typography className={classes.typoShare} variant="body2" color="textPrimary" component="p">
          https://fake.com/story/e7f81831-7f37-45c5-bc30-6db60d1f75e9/join
        </Typography>
        <IconButton aria-label="copy">
          <FileCopyIcon/>
        </IconButton>
      </div>
      <Box className={classes.startButton}>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          startIcon={<CreateIcon/>}
          href={Routes.story}
        >
          Start writing!
        </Button>
      </Box>
    </PageContainer>
  );
}
