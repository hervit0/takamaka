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
      {children}
    </PageContainer>
  );
};

export default Level;