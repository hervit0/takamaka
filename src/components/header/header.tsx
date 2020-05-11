import { Box, Button, IconButton, TextField } from '@material-ui/core';
import Backdrop from '@material-ui/core/Backdrop';
import Snackbar from '@material-ui/core/Snackbar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import TelegramIcon from '@material-ui/icons/Telegram';
import React from 'react';
import { useCookies } from 'react-cookie';
import { getRoute } from '../../navigation/router';
import { getCodeValidation } from '../../services/code';

const useStyles = makeStyles((theme) => ({
  header: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: '10px',
  },
  typoShare: {
    margin: theme.spacing(1),
  },
  menuButton: {
    marginLeft: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  },
}));

type CustomHeaderProps = {
  header: string,
}

const CustomHeader = ({ header }: CustomHeaderProps) => {
  const classes = useStyles();
  const [cookies, setCookie] = useCookies(['level']);
  const [code, setCode] = React.useState('');
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [nextLevel, setNextLevel] = React.useState('');
  const [openErrorSnack, setOpenErrorSnack] = React.useState(false);

  const handleCodeOnChange = (e: React.BaseSyntheticEvent) => {
    setCode(e.target.value);
  };

  const handleSubmitCode = () => {
    const codeValidation = getCodeValidation(code, cookies.level);

    if (codeValidation.isValid) {
      setIsSuccess(true);
      setNextLevel(codeValidation.nextLevel!);
      setCookie('level', codeValidation.nextLevel!);
    } else {
      setOpenErrorSnack(true);
    }
  };

  const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenErrorSnack(false);
  };

  return (
    <div className={classes.header}>
      <Typography className={classes.typoShare} variant='h4' color="textPrimary">
        {header}
      </Typography>
      {cookies.level ?
        (<Box>
          <TextField autoFocus={true} size='small' id="outlined-basic" label="Code" variant='filled' onChange={handleCodeOnChange}/>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleSubmitCode}>
            <TelegramIcon/>
          </IconButton>
        </Box>) : null
      }
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={openErrorSnack}
        autoHideDuration={3000}
        message="Do or do not. There is no try."
        onClose={handleClose}
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small"/>
            </IconButton>
          </React.Fragment>
        }
      />
      <Backdrop className={classes.backdrop} open={isSuccess}>
        <Box display="flex" flexDirection='column' justifyContent="center">
          <Typography className={classes.typoShare} variant='h3' color='textSecondary'>
            Well done!
          </Typography>
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
            size="large"
            startIcon={<PlayCircleOutlineIcon/>}
            href={`#${getRoute(nextLevel)}`}
          >
            Go to next level
          </Button>
        </Box>
      </Backdrop>
    </div>
  );
};

export default CustomHeader;