import { Container } from '@material-ui/core';
import React, { ReactNode } from 'react';
import CustomHeader from '../header/header';
import PageContainer from '../pageContainer/pageContainer';

type LevelProps = {
  name: string
  children?: ReactNode
}

const Level = ({ name, children }: LevelProps) => {
  return (
    <PageContainer>
      <CustomHeader header={name}/>
      <Container>
        {children}
      </Container>
    </PageContainer>
  );
};

export default Level;