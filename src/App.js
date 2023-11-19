import { Box, ThemeProvider, Typography, createTheme } from '@mui/material';

let theme = createTheme({});
theme = createTheme({
  palette: {
    // white
    primary: {
      main: '##282828',
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
  const initialPadding = '100px';

  const navItems = ['Data', 'Timeline', 'Narrative', 'Resources'];

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          height: '100vh',
          backgroundColor: (theme) => theme.palette.secondary.main,
          position: 'sticky',
        }}
      >
        <Box
          sx={{
            paddingLeft: initialPadding,
            position: 'absolute',
            bottom: '50%',
          }}
        >
          <Typography variant='h1'>The Gender-Wealth Gap</Typography>
          <Box sx={{ display: 'flex' }} mt={2}>
            {navItems.map((navItem) => (
              <Typography
                variant='h3'
                mr={5}
                sx={{
                  transition: 'font-weight 0.1s',
                  '&:hover': {
                    // color: 'red',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                  },
                }}
              >
                {navItem}
              </Typography>
            ))}
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
