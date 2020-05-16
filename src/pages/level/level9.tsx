import React from 'react';
import Building from '../../components/building/building';
import ClockStory from '../../components/clockStory/clockStory';
import Level from '../../components/level/level';

const Level9 = () => {
  if (process.env.NODE_ENV === 'production') {
    return (<Building/>);
  }

  return (
    <Level name={'Time is running out'}>
      <ClockStory/>
    </Level>
  );
};

export default Level9;