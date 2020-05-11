import React from 'react';
import CustomHeader from '../components/header/header';
import PageContainer from '../components/pageContainer/pageContainer';

type LevelProps = {
  stage: string
}

const Level = ({ stage }: LevelProps) => {
  return (
    <PageContainer>
      <CustomHeader header={stage}/>
    </PageContainer>
  );
};

export default Level;