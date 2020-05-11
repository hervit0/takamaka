import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import React from 'react';
import { useCookies } from 'react-cookie';

type LevelProps = {
  stage: string
}

const Level = ({ stage }: LevelProps) => {
  const [cookies, setCookie] = useCookies(['name']);

  return (
    <>
      <Typography variant="h5">
        {stage}
      </Typography>
      <Typography variant="h5">
        {cookies.name}
      </Typography>
      <Button
        variant="outlined"
        color="secondary"
        size="large"
        startIcon={<FiberNewIcon/>}
        onClick={() => setCookie('name', stage)}
      >
        Sign up
      </Button>
    </>
  );
};

export default Level;