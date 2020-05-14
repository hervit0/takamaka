import { useMutation, useQuery } from '@apollo/react-hooks';
import { Avatar, Box, Grid, IconButton, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TelegramIcon from '@material-ui/icons/Telegram';
import gql from 'graphql-tag';
import React from 'react';
import { Message } from '../../index';
import youAvatar from '../../resources/enigma.jpg';
import meAvatar from '../../resources/marie_curie.jpeg';
import Level from './level';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(1),
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

// const triggerMutation = () => toggleTodo({ variables: { author: 'out', content: 'maman' } })
//
// const handleEnterPres = (event: React.KeyboardEvent) => {
//   if (event.key === 'Enter') {
//     triggerMutation();
//   }
// };

const getAvatar = (author: string) => (author === 'me' ? meAvatar : youAvatar);
const getFlexDirection = (author: string) => (author === 'me' ? 'row' : 'row-reverse');

const Level8 = () => {
  const classes = useStyles();
  // https://www.apollographql.com/docs/react/data/local-state/#updating-local-state
  const { data } = useQuery(GET_VISIBILITY_FILTER);
  const [toggleTodo] = useMutation(TOGGLE_TODO);

  return (
    <Level name={'Modern problem, modern ...'}>
      <Grid className={classes.root} container spacing={2} direction="column" justify="center" alignItems="center">
        {data.messages.map(({ author, content }: Message) => (
          <Box display="flex" alignItems='center' flexDirection={getFlexDirection(author)} width='inherit'>
            <Avatar alt="Me" src={getAvatar(author)}/>
            <Box borderRadius={16} borderColor='text.secondary' border={1} margin={1}>
              <Typography className={classes.typo} variant="body1" align={'left'}>
                {content}
              </Typography>
            </Box>
          </Box>
        ))}

        <Box display="flex" alignItems='center'>
          <TextField
            size='small'
            id="outlined-basic"
            label="Code"
            variant='outlined'
            autoComplete='off'
            autoFocus={true}
            // onChange={handleCodeOnChange}
            // onKeyPress={handleEnterPres}
          />
          <IconButton
            edge="start"
            // className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => toggleTodo({ variables: { author: 'you', content: 'Apollo Client uses a normalized, in-memory cache to dramatically speed up the execution of queries t' } })}
          >
            <TelegramIcon/>
          </IconButton>
        </Box>


      </Grid>
    </Level>
  );
};

export default Level8;