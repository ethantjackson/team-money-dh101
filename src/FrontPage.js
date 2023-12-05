import { Box, Link, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import IndividualCollectivismHist from './IndividualCollectivismHist';

const FrontPage = () => {
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

  return (
    <>
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
            <Link
              key={navItem}
              href={`/${navItem}`}
              underline='none'
              mr={5}
              sx={{
                transition: 'font-weight 0.1s',
                '&:hover': {
                  // color: 'red',
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
    </>
  );
};

export default FrontPage;
