import { Box, Link, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const FrontPage = () => {
  const initialPadding = '5vw';
  const navItems = ['Data', 'Timeline', 'Narrative', 'Resources'];

  const [scrollAmount, setScrollAmount] = useState();
  const [initialTopDist, setInitialTopDist] = useState();
  const [isFlipped, setIsFlipped] = useState(false);

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

  return (
    <>
      {scrollAmount > initialTopDist && (
        <>
          <Box
            sx={{
              height: '100vh',
              width: '100vw',
              backgroundColor: 'white',
              position: 'fixed',
              top: '0',
            }}
          />
          <Box
            sx={{
              height: '154px',
              width: '100vw',
              backgroundColor: 'white',
              position: 'fixed',
              top: '0',
              zIndex: '1',
            }}
          />
        </>
      )}
      <Box
        sx={{
          paddingLeft: initialPadding,
          position: 'fixed',
          bottom: `calc(50% + min(${Math.max(0, scrollAmount - 200)}px, 31vh))`,
          zIndex: '2',
        }}
      >
        <Typography variant='h1'>The Gender-Wealth Gap</Typography>
        <Box sx={{ display: 'flex' }} mt={2}>
          {navItems.map((navItem) => (
            <Link
              key={navItem}
              href={`/${navItem}`}
              underline='none'
              mr={5}
              sx={{
                transition: 'font-weight 0.1s',
                '&:hover': {
                  cursor: 'pointer',
                  fontWeight: 'bold',
                },
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
              }}
            >
              {navItem}
            </Link>
          ))}
        </Box>
        <Box
          sx={{
            height: '1px',
            width: `${90 * Math.min(1, scrollAmount / initialTopDist)}vw`,
            backgroundColor: (theme) => theme.palette.secondary.main,
          }}
          mt={1}
        />
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
          height: '100vh',
        }}
      >
        <Box
          sx={{
            position: scrollAmount >= 200 ? 'absolute' : 'fixed',
            top: scrollAmount >= 200 ? 'calc(50% + 215px)' : 'calc(50% + 15px)',
            left: initialPadding,
            width: `calc(100vw - 2 * ${initialPadding})`,
          }}
        >
          <Typography
            variant='h2'
            sx={{ fontWeight: 'bold' }}
            mb={1}
            color='secondary'
          >
            About the project
          </Typography>
          <Typography>
            This is a group project for UCLA's Digital Humanities 101, completed
            in Fall 2022 under the direction of Dr. Wendy Perla Kurtz. Our
            collective efforts involved leveraging data processing and
            visualization techniques to draw humanistic conclusions about the
            global gender-wealth gap. This final project challenged students to
            navigate vast datasets to form data-drivn narratives about
            humanistic topcis. Our group primarily leveraged data available on
            the{' '}
            <Link href='https://genderdata.worldbank.org/' target='_blank'>
              Gender Data Portal
            </Link>{' '}
            provided by the World Bank.
          </Typography>
          <Typography
            variant='h2'
            sx={{ fontWeight: 'bold' }}
            color='secondary'
            mt={3}
          >
            Our research questions
          </Typography>
          <Box
            sx={{
              border: (theme) => `2px solid ${theme.palette.secondary.main}`,
              borderRadius: '5px',
            }}
            mt={1}
            p={2}
          >
            <Typography variant='h4' sx={{ fontWeight: 'bold' }}>
              How has wealth inequality between genders evolved over time? Are
              gender-based wealth inequalities becoming more or less pronounced
              over time?
            </Typography>
          </Box>
          <Box
            sx={{
              border: (theme) => `2px solid ${theme.palette.secondary.main}`,
              borderRadius: '5px',
            }}
            mt={2}
            p={2}
          >
            <Typography variant='h4' sx={{ fontWeight: 'bold' }}>
              How does a country’s placement on the individualism/collectivism
              spectrum affect the wealth inequality between genders in that
              country?
            </Typography>
          </Box>
          <Box
            sx={{
              border: (theme) => `2px solid ${theme.palette.secondary.main}`,
              borderRadius: '5px',
            }}
            mt={2}
            p={2}
          >
            <Typography variant='h4' sx={{ fontWeight: 'bold' }}>
              How significant is the impact of having education on the acquiring
              of wealth?
            </Typography>
          </Box>
          <Typography
            variant='h2'
            sx={{ fontWeight: 'bold' }}
            mt={3}
            color='secondary'
          >
            About us
          </Typography>
          <Box
            sx={{ cursor: 'pointer' }}
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <ReactCardFlip isFlipped={isFlipped}>
              <Box sx={{ border: '1px solid red' }}>Front</Box>
              <Box sx={{ border: '1px solid blue' }}>Back </Box>
            </ReactCardFlip>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default FrontPage;
