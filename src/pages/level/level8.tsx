import { useMutation, useQuery } from '@apollo/react-hooks';
import { Avatar, Box, Grid, IconButton, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TelegramIcon from '@material-ui/icons/Telegram';
import gql from 'graphql-tag';
import React from 'react';
import BouncingDots from '../../components/bouncingDots/bouncingDots';
import { Message } from '../../index';
import youAvatar from '../../resources/golum.jpeg';
import meAvatar from '../../resources/me.jpg';
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

const getAvatar = (author: string) => (author === 'me' ? meAvatar : youAvatar);
const getFlexDirection = (author: string) => (author === 'me' ? 'row' : 'row-reverse');
const getBorderColor = (author: string) => (author === 'me' ? 'primary.main' : 'secondary.main');
const getTextColor = (author: string) => (author === 'me' ? 'primary.contrastText' : 'secondary.contrastText');

const Level8 = () => {
  const classes = useStyles();
  // https://www.apollographql.com/docs/react/data/local-state/#updating-local-state
  const { data } = useQuery(GET_VISIBILITY_FILTER);
  const [toggleTodo] = useMutation(TOGGLE_TODO);
  const [code, setCode] = React.useState('');
  const [showBouncing, setShowBouncing] = React.useState(false);

  const doScript = () => {
    if (code === '') {
      return;
    }
    toggleTodo({
      variables: {
        author: 'you',
        content: code
      }
    });
    setCode('');
    setShowBouncing(true);
    setTimeout(() => {
      setShowBouncing(false);
      toggleTodo({
        variables: {
          author: 'me',
          content: 'well'
        }
      });
    }, 2000);
  };

  const handleCodeOnChange = (e: React.BaseSyntheticEvent) => {
    setCode(e.target.value);
  };

  const handleEnterPres = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      doScript();
    }
  };

  return (
    <Level name={'HAL'}>
      <Grid className={classes.root} container spacing={2} direction="column" justify="center" alignItems="center">
        {data.messages.map(({ author, content }: Message) => (
          <Box display="flex" alignItems='center' flexDirection={getFlexDirection(author)} width='inherit'>
            <Avatar alt="Me" src={getAvatar(author)}/>
            <Box
              borderRadius={16}
              bgcolor={getBorderColor(author)}
              color={getTextColor(author)}
              marginBottom={1}
              marginRight={1}
              marginLeft={1}
            >
              <Typography className={classes.typo} variant="body1" align={'left'}>
                {content}
              </Typography>
            </Box>
          </Box>
        ))}

        {showBouncing
          ? (
            <Box display="flex" alignItems='center' width='inherit'>
              <BouncingDots/>
            </Box>)
          : null
        }

        <Box display="flex" alignItems='center'>
          <TextField
            size='small'
            id="outlined-basic"
            variant='outlined'
            placeholder='Write here'
            autoComplete='off'
            autoFocus={true}
            onChange={handleCodeOnChange}
            value={code}
            onKeyPress={handleEnterPres}
          />
          <Box marginLeft={1}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              disabled={code === ''}
              onClick={doScript}
            >
              <TelegramIcon/>
            </IconButton>
          </Box>
        </Box>
      </Grid>
    </Level>
  );
};

export default Level8;