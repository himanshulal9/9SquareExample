import { Box, Typography } from '@material-ui/core';
import Calendar from './Calendar';
import './index.css';

export default function App() {
  const date = new Date();

  return (
    <Box className="App">
      <Typography variant="h3" component={'h1'} align="center">
        Hello Euromoney
      </Typography>
      <Typography variant="h5" component={'h1'} align="center">
        Here is your's required app
      </Typography>
      <Calendar date={date} />
    </Box>
  );
}
