import Typography from '@material-ui/core/Typography';
import React from 'react';

type LevelProps = {
  stage: string
}

const Level = ({ stage }: LevelProps) => (
  <Typography variant="h5">
    {stage}
  </Typography>
);

export default Level;