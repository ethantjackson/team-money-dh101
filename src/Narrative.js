import React from 'react';
import IndividualCollectivismHist from './IndividualCollectivismHist';
import { Container, Typography } from '@mui/material';
import Navbar from './Navbar';

const Narrative = () => {
  return (
    <>
      <Navbar />
      <Container sx={{ backgroundColor: 'white', paddingTop: '50px' }}>
        <Typography variant='h1' mb={2}>
          Exporing the Data
        </Typography>
        <Typography variant='h3' sx={{ fontWeight: 'bold' }} mb={-5}>
          Individualism & collectivism shape the wealth gap
        </Typography>
        <IndividualCollectivismHist />
        <Typography>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto,
          id quisquam ipsum molestias ea mollitia asperiores itaque excepturi,
          in repudiandae illum cum labore voluptatum consectetur sequi alias
          incidunt delectus aut! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Sit error minus quibusdam aspernatur! Nostrum nobis
          provident minima nisi, autem quos perferendis fugit! Accusamus libero
          cupiditate sit autem eum quis reprehenderit? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Quas exercitationem saepe, mollitia
          voluptatum dignissimos, deleniti obcaecati placeat debitis odit
          assumenda ullam! Corrupti quo nihil deleniti error numquam. Tenetur,
          eligendi animi!
        </Typography>
      </Container>
    </>
  );
};

export default Narrative;
