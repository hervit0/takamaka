import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  header: {
    width: '100%',
    display: 'flex',
    justifyContent: 'left',
    marginLeft: '10px',
  },
  typoShare: {
    margin: theme.spacing(1),
  },
}));

type CustomHeaderProps = {
  header: string,
}

const CustomHeader = ({ header }: CustomHeaderProps) => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <Typography className={classes.typoShare} variant='h3' color="textPrimary">
        {header}
      </Typography>
    </div>
  );
};

export default CustomHeader;