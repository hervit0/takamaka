import { Container } from '@material-ui/core';
import React, { ReactNode } from 'react';
import CustomHeader from '../../components/header/header';
import PageContainer from '../../components/pageContainer/pageContainer';

type LevelProps = {
  stage: string
  children?: ReactNode
}

const Level = ({ stage, children }: LevelProps) => {
  return (
    <PageContainer>
      <CustomHeader header={stage}/>
      <Container>
        {children}
      </Container>
    </PageContainer>
  );
};

export default Level;