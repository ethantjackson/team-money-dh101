import { Box, Grid, Link, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ReactCardFlip from 'react-card-flip';

const FrontPage = () => {
  const initialPadding = '5vw';
  const navItems = ['Data', 'Narrative', 'Case Study', 'Resources'];

  const [scrollAmount, setScrollAmount] = useState();
  const [initialTopDist, setInitialTopDist] = useState();
  const [isFlipped, setIsFlipped] = useState({});

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
              width: '98vw',
              backgroundColor: 'white',
              position: 'fixed',
              top: '0',
              left: '1vw',
            }}
          />
          <Box
            sx={{
              height: '154px',
              width: '98vw',
              backgroundColor: 'white',
              position: 'fixed',
              top: '0',
              left: '1vw',
              zIndex: '1',
            }}
          />
        </>
      )}
      <Box
        sx={{
          paddingLeft: initialPadding,
          position: 'fixed',
          bottom: `calc(50% + min(${Math.max(
            0,
            scrollAmount - 200
          )}px, 50vh - 154px))`,
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
            height: '0.5px',
            width: `${90 * Math.min(1, scrollAmount / initialTopDist)}vw`,
            // backgroundColor: (theme) => theme.palette.primary.main,
            backgroundColor: '#eee',
          }}
          mt={2}
        />
      </Box>
      <Box
        id='expanding-box'
        mb={'50vh'}
        sx={{
          marginTop: '50vh',
          marginLeft: `calc(max(1vw, ${initialPadding} * 0.8 * ${
            1 - scrollAmount / initialTopDist
          }))`,
          marginRight: `calc(max(1vw, ${initialPadding} * 0.8 * ${
            1 - scrollAmount / initialTopDist
          }))`,
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
            variant='h3'
            sx={{ fontWeight: 'bold', textAlign: 'center' }}
            color='secondary'
            mt={4}
            mb={2}
          >
            Our research questions
          </Typography>
          <Typography
            mt={2}
            mb={2}
            variant='h4'
            sx={{ fontWeight: '600', textAlign: 'center' }}
          >
            Do education inequalities across genders contribute to gender-wealth
            gaps?
          </Typography>
          <Box
            sx={{
              margin: 'auto',
              width: { xs: '90%', lg: '75%', xl: '45%' },
              height: '1px',
              backgroundColor: (theme) => theme.palette.secondary.main,
            }}
          />
          <Typography
            mt={2}
            variant='h4'
            sx={{ fontWeight: '600', textAlign: 'center' }}
          >
            How does a country’s placement on the individualism-collectivism
            spectrum affect its gender-wealth gap?
          </Typography>
          <Typography
            variant='h3'
            sx={{ fontWeight: 'bold', textAlign: 'center' }}
            mt={5}
            mb={2}
            color='secondary'
          >
            Meet the team
          </Typography>
          <Grid
            container
            sx={{
              width: { xs: '90%', lg: '75%', xl: '45%' },
              margin: 'auto',
              justifyContent: 'center',
            }}
            spacing={1}
          >
            {groupMembers.map((groupMember) => (
              <Grid
                key={groupMember.name}
                xs={12}
                sm={6}
                md={4}
                sx={{
                  cursor: 'pointer',
                }}
                onClick={() =>
                  setIsFlipped({
                    ...isFlipped,
                    [groupMember.name]: !isFlipped[groupMember.name],
                  })
                }
                p={1}
              >
                <ReactCardFlip
                  isFlipped={isFlipped[groupMember.name]}
                  loading='eager'
                >
                  <Box
                    sx={{
                      height: { xs: '350px', xl: '400px' },
                      width: '100%',
                      overflow: 'hidden',
                      borderRadius: '15px',
                    }}
                  >
                    <img
                      src={groupMember.headshot}
                      loading='eager'
                      alt={groupMember.name}
                      style={{
                        height: '100%',
                        width: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      height: { xs: '350px', xl: '400px' },
                      backgroundColor: (theme) => theme.palette.secondary.main,
                      borderRadius: '15px',
                    }}
                  >
                    Back
                  </Box>
                </ReactCardFlip>
              </Grid>
            ))}
            <Typography
              variant='body2'
              color='grey'
              mt={1}
              sx={{ textAlign: 'center' }}
            >
              Click on the headshots to learn more about each member.
            </Typography>
          </Grid>
          <Typography
            variant='h3'
            sx={{ fontWeight: 'bold', textAlign: 'center' }}
            mt={3}
            mb={1}
            color='secondary'
          >
            About the project
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              width: { xs: '90%', lg: '75%', xl: '45%' },
              margin: 'auto',
            }}
          >
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
            loading='eager'
          >
            <ReactCardFlip isFlipped={isFlipped} loading='eager'>
              <Box>
                <img
                  height='300'
                  width='225'
                  src='/JoeyHeadshot.jpeg'
                  loading='eager'
                  alt='Will Headshot'
                />
              </Box>
              <Box sx={{ border: '1px solid blue' }}>Back </Box>
            </ReactCardFlip>
          </Box>
        </Box>
      </Box>
    </>
  );
};

const groupMembers = [
  {
    name: 'Will Kegelmeyer',
    headshot: '/WillHeadshot.jpeg',
    description: 'back',
  },
  {
    name: 'Joseph Soliman',
    headshot: '/WillHeadshot.jpeg',
    description: 'back',
  },
  {
    name: 'Alexa Lee',
    headshot: '/WillHeadshot.jpeg',
    description: 'back',
  },
  {
    name: 'Haik Divanyan',
    headshot: '/WillHeadshot.jpeg',
    description: 'back',
  },
  {
    name: 'Ethan Jackson',
    headshot: '/WillHeadshot.jpeg',
    description: 'back',
  },
];

export default FrontPage;
