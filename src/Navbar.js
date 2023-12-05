import { Box, Container, Grid, Link } from '@mui/material';
import React from 'react';

const Navbar = () => {
  const navItems = ['Data', 'Narrative', 'Timeline', 'Resources'];

  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.secondary.main,
        position: 'fixed',
        width: '100%',
        zIndex: '3',
      }}
      pt={1}
      pb={1}
    >
      <Container>
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <Link href={'/'} sx={{ fontWeight: 'bold' }} underline='none'>
              The Gender-Wealth Gap
            </Link>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ display: 'flex', justifyContent: 'right' }}>
              {navItems.map((navItem) => (
                <Link
                  key={navItem}
                  href={`/${navItem}`}
                  underline='none'
                  ml={4}
                  sx={{
                    transition: 'font-weight 0.1s',
                    '&:hover': {
                      cursor: 'pointer',
                      fontWeight: 'bold',
                    },
                  }}
                >
                  {navItem}
                </Link>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Navbar;
