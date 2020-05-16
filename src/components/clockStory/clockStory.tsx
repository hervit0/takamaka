import DateFnsUtils from '@date-io/date-fns';
import { Box, Card, CardActionArea, CardContent, Container, Typography } from '@material-ui/core';
import { MuiPickersUtilsProvider, TimePicker } from '@material-ui/pickers';
import React from 'react';

const ClockStory = () => {
  const [selectedDate, handleDateChange]: [Date, any] = React.useState(new Date());

  return (
    <Box>
      <Container maxWidth={'sm'}>
        <Box display={'flex'} justifyContent={'center'}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <TimePicker
              clearable
              autoOk={true}
              variant="static"
              ampm={false}
              value={selectedDate}
              onChange={handleDateChange}
            />
          </MuiPickersUtilsProvider>
        </Box>
      </Container>

      <Card>
        <CardActionArea>
          <CardContent>
            <Box fontStyle="oblique">
              <Typography variant="body1">
                {getStoryLine(selectedDate.getHours(), selectedDate.getMinutes())}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

const getStoryLine = (hours: number, minutes: number): string => {
  switch (hours) {
    case 1: {
      return 'early';
    }
    case 2: {
      return 'early';
    }
    case 19: {
      switch (minutes) {
        case 59: {
          return 'BOOM!';
        }
        default:
          return 'It is imminent';
      }
    }
    default:
      return 'The bomb has exploded';
  }

};

export default ClockStory;