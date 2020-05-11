import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import Container from '@material-ui/core/Container';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FaceIcon from '@material-ui/icons/Face';
import React from 'react';
import PageContainer from '../../components/pageContainer/pageContainer';
import StoryLine from '../../components/storyLine/storyLine';

const useStyles = makeStyles((theme: Theme) => ({
    chipsBox: {
      display: 'flex',
      flexDirection: 'row',
    },
    chip: {
      margin: '10px',
    },
    storyContent: {
      margin: '10px',
    }
  }),
);

const storyLines = [
  {
    line: 'Mr. and Mrs. Dursley, of number four, Privet Drive, were proud to say that they were perfectly normal, thank you very much.',
    metaData: 'Tom, Sun, 31 Dec 1899 00:00:00 GMT'
  },
  {
    line: 'They were the last people you\'d expect to be involved in anything strange or mysterious, because they just didn\'t hold with such nonsense. ',
    metaData: 'Jerry, Sun, 31 Dec 1899 00:00:00 GMT'
  },
  {
    line: 'Mr. Dursley was the director of a firm called Grunnings, which made\n' +
      'drills. He was a big, beefy man with hardly any neck, although he did\n' +
      'have a very large mustache.',
    metaData: 'Tom, Sun, 31 Dec 1899 00:00:00 GMT'
  },
  {
    line: 'Mrs. Dursley was thin and blonde and had\n' +
      'nearly twice the usual amount of neck, which came in very useful as she\n' +
      'spent so much of her time craning over garden fences, spying on the\n' +
      'neighbors.',
    metaData: 'Jerry, Sun, 31 Dec 1899 00:00:00 GMT'
  },
  {
    line: 'The Dursleys had a small son called Dudley and in their\n' +
      'opinion there was no finer boy anywhere. ',
    metaData: 'Tom, Sun, 31 Dec 1899 00:00:00 GMT'
  },
  {
    line: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. You wrote rubbish, didn\'t you?',
    metaData: 'Yourself, Sun, 31 Dec 1899 00:00:00 GMT'
  },
];

const DemoStoryPage = () => {
  const classes = useStyles();

  return (
    <PageContainer>
      <Box className={classes.chipsBox}>
        <Chip className={classes.chip} label="Jerry's turn" variant="outlined" color="secondary" size="medium"/>
        <Chip className={classes.chip} label="8 sentences left" variant="outlined" color="primary" size="medium"/>
      </Box>

      <Typography color="textPrimary" variant="h3">
        Tomorrow Never Dies
      </Typography>
      <Typography color="textSecondary" variant="caption">
        By Tom & Jerry
      </Typography>

      <Container className={classes.storyContent} maxWidth="sm">
        {storyLines.map(({ line, metaData }) => (
          StoryLine(line, metaData))
        )
        }
      </Container>

      <Chip icon={<FaceIcon/>} className={classes.chip} label="Waiting for Jerry" color="secondary"/>
    </PageContainer>
  );
};

export default DemoStoryPage;