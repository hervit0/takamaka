import DateFnsUtils from '@date-io/date-fns';
import { Box, Container } from '@material-ui/core';
import { MuiPickersUtilsProvider, TimePicker } from '@material-ui/pickers';
import React from 'react';
import Level from '../../components/level/level';

const Level9 = () => {
  const [selectedDate, handleDateChange]: [Date, any] = React.useState(new Date());

  return (
    <Level name={'Time is running out'}>
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
    </Level>
  );
};

export default Level9;