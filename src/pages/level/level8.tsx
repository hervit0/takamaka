import { useMutation, useQuery } from '@apollo/react-hooks';
import { Button, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import gql from 'graphql-tag';
import React from 'react';
import { Message } from '../../index';
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

const GET_VISIBILITY_FILTER = gql`
  {
    messages @client {
      author
      content
    }
  }
`;

const TOGGLE_TODO = gql`
  mutation AddMessages($author: String!, $content: String!) {
    addMessages(author: $author, content: $content) @client {
      author
    }
  }
`;

const Level8 = () => {
  const classes = useStyles();
  // https://www.apollographql.com/docs/react/data/local-state/#updating-local-state
  const { data } = useQuery(GET_VISIBILITY_FILTER);
  const [toggleTodo] = useMutation(TOGGLE_TODO);

  return (
    <Level name={'Modern problem, modern ...'}>
      <Grid className={classes.root} container spacing={2} direction="column" justify="center" alignItems="center">
        {data.messages.map(({ author, content }: Message) => (
          <Typography className={classes.typo} variant="body1">
            {author}
            {content}
          </Typography>
        ))}

        <Button
          variant="contained"
          color="secondary"
          size="large"
          startIcon={<PlayCircleOutlineIcon/>}
          onClick={() => toggleTodo({ variables: { author: 'out', content: 'maman' } })}
        >
          Start
        </Button>


      </Grid>
    </Level>
  );
};

export default Level8;