import { Box, Typography } from '@material-ui/core';
import BuildIcon from '@material-ui/icons/Build';
import React from 'react';

const Building = () => (
  <Box marginTop={2}>
    <BuildIcon/>
    <Typography variant="h3">
      Building in progress!
    </Typography>
    <Typography variant="h5">
      Come back soon.
    </Typography>

    <Box marginTop={2}>
      <img src={'https://media.giphy.com/media/Vuw9m5wXviFIQ/giphy.gif'} alt="Loading..."/>
    </Box>
  </Box>
);

export default Building;