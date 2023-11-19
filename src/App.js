import { Box, ThemeProvider, Typography, createTheme } from '@mui/material';
import { useEffect, useState } from 'react';

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
  const initialPadding = '5vw';

  const navItems = ['Data', 'Timeline', 'Narrative', 'Resources'];

  const [scrollAmount, setScrollAmount] = useState();
  const [initialTopDist, setInitialTopDist] = useState();

  useEffect(() => {
    const handleScroll = () => {
      setScrollAmount(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    setScrollAmount(window.scrollY);

    const boxEle = document.getElementById('expanding-box');
    setInitialTopDist(boxEle.getBoundingClientRect().top + window.scrollY);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    console.log(scrollAmount);
  }, [scrollAmount]);

  return (
    <ThemeProvider theme={theme}>
      `
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
      <Box
        sx={{
          paddingLeft: initialPadding,
          position: 'fixed',
          bottom: `calc(50% + ${Math.max(0, scrollAmount - 200)}px)`,
        }}
      >
        <Typography variant='h1'>The Gender-Wealth Gap</Typography>
        <Box sx={{ display: 'flex' }} mt={2}>
          {navItems.map((navItem) => (
            <Typography
              key={navItem}
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
      <Box
        id='expanding-box'
        mb={'50vh'}
        sx={{
          marginTop: '50vh',
          marginLeft: `calc(${initialPadding} * 0.8 * ${
            1 - scrollAmount / initialTopDist
          })`,
          marginRight: `calc(${initialPadding} * 0.8 * ${
            1 - scrollAmount / initialTopDist
          })`,
          backgroundColor: 'white',
          height: '50vh',
        }}
      >
        <Typography
          variant='body1'
          sx={{
            position: scrollAmount >= 200 ? 'absolute' : 'fixed',
            top: scrollAmount >= 200 ? '640px' : '440px',
            left: initialPadding,
            width: `calc(100vw - ${initialPadding} - ${initialPadding})`,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem fuga, culpa iste vitae, perspiciatis laboriosam eos
          debitis dolores optio tenetur quae commodi deleniti ea sunt iure
          repellendus doloribus. Perferendis, nemo. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quod repellendus fugiat accusantium ad
          sunt magnam similique numquam harum nisi nulla, vero eos ipsam
          sapiente saepe, aut velit officiis, voluptates ipsa.
          <br />
          <br />
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
          repellendus quidem reiciendis minus eveniet dicta odit tenetur
          incidunt. Sunt tempore voluptatum, cumque aspernatur nisi voluptas
          rerum facilis libero quisquam dignissimos?Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Neque corporis delectus consequuntur
          animi nesciunt, sunt, ad omnis deleniti, perferendis blanditiis
          explicabo voluptate facere tempora dolorem sequi porro quasi eveniet!
          Inventore?lore
        </Typography>
      </Box>
    </ThemeProvider>
  );
}

export default App;
