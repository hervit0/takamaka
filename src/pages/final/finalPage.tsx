import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import PageContainer from '../../components/pageContainer/pageContainer';

const useStyles = makeStyles((theme) => ({
  typo: {
    margin: theme.spacing(2)
  },
}));

const FinalPage = () => {
  const classes = useStyles();

  return (
    <PageContainer>
      <Typography className={classes.typo} variant="h3">
        This is the beginning of the end.
      </Typography>
      <Typography className={classes.typo} variant="body1">
        Well done you. I don't have more riddles for you (for now).
      </Typography>
    </PageContainer>
  );
};

export default FinalPage;