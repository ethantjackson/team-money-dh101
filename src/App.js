import { Box, ThemeProvider, createTheme } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FrontPage from './FrontPage';
import Narrative from './Narrative';
import Timeline from './Timeline';

let theme = createTheme({});
theme = createTheme({
  palette: {
    // white
    primary: {
      main: '#282828',
    },
    // gold/yellow
    secondary: {
      main: '#FFC436',
    },
  },
  typography: {
    allVariants: {
      color: '#282828',
    },
    p: {
      fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
      fontWeight: 400,
      fontSize: '1.2rem',
      lineHeight: 1.5,
      display: 'block',
      [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
      },
    },
    h1: {
      fontWeight: 'bold',
      fontSize: '350%',
      lineHeight: 1.2,
      fontFamily: [
        '-apple-system,BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans - serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ].join(','),
    },
    h2: {
      fontSize: '2.7rem',
      lineHeight: 1.2,
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        "'Segoe UI'",
        'Roboto',
        "'Helvetica Neue'",
        'Arial',
        "'Noto Sans'",
        'sans-serif',
        "'Apple Color Emoji'",
        "'Segoe UI Emoji'",
        "'Segoe UI Symbol'",
        "'Noto Color Emoji'",
      ].join(','),
      fontWeight: 400,
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.7rem',
      },
    },
    h3: {
      fontSize: '1.6rem',
      lineHeight: 1.2,
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        "'Segoe UI'",
        'Roboto',
        "'Helvetica Neue'",
        'Arial',
        "'Noto Sans'",
        'sans-serif',
        "'Apple Color Emoji'",
        "'Segoe UI Emoji'",
        "'Segoe UI Symbol'",
        "'Noto Color Emoji'",
      ].join(','),
      fontWeight: 400,
    },
    h4: {
      fontSize: '1.3rem',
      lineHeight: 1.1,
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        "'Segoe UI'",
        'Roboto',
        "'Helvetica Neue'",
        'Arial',
        "'Noto Sans'",
        'sans-serif',
        "'Apple Color Emoji'",
        "'Segoe UI Emoji'",
        "'Segoe UI Symbol'",
        "'Noto Color Emoji'",
      ].join(','),
      fontWeight: 400,
    },
    highlight: {
      color: '#eec807',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          height: '100vh',
          width: '100vw',
          top: '0',
          backgroundColor: (theme) => theme.palette.secondary.main,
          position: 'fixed',
          zIndex: '-1',
        }}
      ></Box>
      <Router>
        <Routes>
          <Route path='/' element={<FrontPage />} />
          <Route path='/Narrative' element={<Narrative />} />
          <Route path='/Timeline' element={<Timeline />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
