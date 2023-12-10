import HearingDisabledIcon from '@mui/icons-material/HearingDisabled';
import PaletteIcon from '@mui/icons-material/Palette';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import { Box, Grid, Link, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import './index.css';

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
            weight: '100vw',
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
              width: { xs: '90%', lg: '75%', xl: '55%' },
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
              width: { xs: '90%', lg: '75%', xl: '55%' },
              margin: 'auto',
              justifyContent: 'center',
            }}
            spacing={1}
          >
            {groupMembers.map((groupMember) => (
              <Grid
                item
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
                      backgroundColor: 'black',
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
                        opacity: '0.25',
                        transform: 'scaleX(-1)',
                        filter: 'blur(5px)',
                      }}
                    />
                    <Box
                      sx={{
                        position: 'relative',
                        bottom: '100%',
                        textAlign: 'center',
                      }}
                      p={'10%'}
                    >
                      <Typography color='#fff' mb={1}>
                        {groupMember.name.toUpperCase()}
                      </Typography>
                      <Box
                        sx={{
                          backgroundColor: '#bbb',
                          height: '0.5px',
                          margin: 'auto',
                        }}
                      />
                      <Typography color='#fff' mt={1}>
                        {groupMember.description}
                      </Typography>
                    </Box>
                  </Box>
                </ReactCardFlip>
              </Grid>
            ))}
          </Grid>
          <Typography
            variant='body2'
            color='grey'
            mt={1}
            sx={{ textAlign: 'center' }}
          >
            Click on the headshots to learn more about each member.
          </Typography>
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
              width: { xs: '90%', lg: '75%', xl: '55%' },
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
            variant='h3'
            sx={{ fontWeight: 'bold', textAlign: 'center' }}
            mt={3}
            mb={1}
            color='secondary'
          >
            Website accessibility notes
          </Typography>
          <Grid
            container
            sx={{
              width: { xs: '90%', lg: '75%', xl: '55%' },
              margin: 'auto',
              justifyContent: 'center',
            }}
            spacing={1}
          >
            {webNotes.map((webNote) => (
              <Grid
                item
                key={webNote.title}
                xs={12}
                sm={6}
                md={4}
                sx={{
                  cursor: 'pointer',
                }}
                onClick={() =>
                  setIsFlipped({
                    ...isFlipped,
                    [webNote.title]: !isFlipped[webNote.title],
                  })
                }
                p={3}
              >
                <ReactCardFlip isFlipped={isFlipped[webNote.title]}>
                  <Box
                    sx={{
                      height: {
                        xs: '40vw',
                        sm: '30vw',
                        md: '15vw',
                        xl: '10vw',
                      },
                      width: '100%',
                      borderRadius: '15px',
                      textAlign: 'center',
                      backgroundColor: (theme) => theme.palette.secondary.main,
                    }}
                  >
                    {webNote.icon}
                    <Typography
                      variant='h4'
                      sx={{
                        fontWeight: 'bold',
                      }}
                    >
                      {webNote.title}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      height: {
                        xs: '40vw',
                        sm: '30vw',
                        md: '15vw',
                        xl: '10vw',
                      },
                      width: '100%',
                      borderRadius: '15px',
                      textAlign: 'center',
                      backgroundColor: (theme) => theme.palette.primary.main,
                      overflow: 'auto',
                    }}
                  >
                    <Typography
                      color='white'
                      sx={{
                        height: '80%',
                        padding: '5%',
                        textAlign: 'justify',
                      }}
                    >
                      {webNote.description}
                    </Typography>
                  </Box>
                </ReactCardFlip>
              </Grid>
            ))}
          </Grid>
          <Typography
            variant='body2'
            color='grey'
            mt={1}
            mb={3}
            sx={{ textAlign: 'center' }}
          >
            Click to learn about how we made an inclusive website!
          </Typography>
        </Box>
      </Box>
    </>
  );
};

const webNotes = [
  {
    title: 'Color-blind considerate',
    description:
      'We avoid color-blind unfriendly color schemes, such as red-green. Rather, we opt for high-contrast text and visualizations, aiming for a deceptively simple UI.',
    icon: (
      <PaletteIcon
        color='primary'
        sx={{
          width: '80%',
          height: '80%',
        }}
      />
    ),
  },
  {
    title: 'Screen reader-friendly',
    description:
      'We made sure to maintain proper semantic structure, using the proper, descriptive HTML tags where appropriate. Alt texts were included for all images.',

    icon: <SmartToyIcon color='primary' sx={{ width: '80%', height: '80%' }} />,
  },
  {
    title: 'No audio media',
    description:
      'To be inclusive of audio-impaired individuals, we avoided using audio-based media.',
    icon: (
      <HearingDisabledIcon
        color='primary'
        sx={{ width: '80%', height: '80%' }}
      />
    ),
  },
];

const groupMembers = [
  {
    name: 'Will Kegelmeyer',
    headshot: '/WillHeadshot.jpeg',
    description:
      'Will is a fourth-year political science major and digital humanities minor. As the data visualization specialist, he created visualization graphs and wrote descriptions for them. He also was responsible for finding secondary sources and writing the source description.',
  },
  {
    name: 'Joseph Soliman',
    headshot: '/JoeyHeadshot.jpeg',
    description:
      'Joseph is a fourth-year sociology major. As the project manager, he delegated tasks between group members, keeping members accountable, and assuring the project was being finished on time. In addition, he helped collect all the information and add it to a shared document.',
  },
  {
    name: 'Alexa Lee',
    headshot: '/AlexaHeadshot.jpg',
    description:
      'Alexa is a third-year sociology major. As the Content Developer, she created the timeline by sourcing images and identifying major events that affected education and the wealth gap throughout U.S. history. She also helped in writing and editing parts of the website.',
  },
  {
    name: 'Haik Divanyan',
    headshot: '/HaikHeadshot.jpg',
    description:
      'Haik is a fifth-year computer science major. As the Data Specialist, he examined the datasets selected, and identified potential use cases for each of them. He also helped with the creation of the visualizations. Here is Haik enjoying some apple juice.',
  },
  {
    name: 'Ethan Jackson',
    headshot: '/EthanHeadshot.jpg',
    description:
      'Ethan is a fifth-year computer science major. As the Web Specialist, he primarily assembled this website, and also contributed to data vizualization and narrative-writing.',
  },
];

export default FrontPage;
