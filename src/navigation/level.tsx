import { Button } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import React from 'react';
import { useCookies } from 'react-cookie';
import CustomHeader from '../components/header/header';
import PageContainer from '../components/pageContainer/pageContainer';
import { encryptLevelCookie } from '../services/cryptography';

type LevelProps = {
  stage: string
}

const Level = ({ stage }: LevelProps) => {
  const [cookies, setCookie] = useCookies(['level']);

  return (
    <PageContainer>
      <CustomHeader header={stage}/>
      <Typography variant="h5">
        {cookies.level}
      </Typography>
      <Button
        variant="outlined"
        color="secondary"
        size="large"
        startIcon={<FiberNewIcon/>}
        onClick={() => setCookie('level', encryptLevelCookie(stage))}
      >
        Sign up
      </Button>
    </PageContainer>
  );
};

export default Level;