import React from 'react';
import IndividualCollectivismHist from './IndividualCollectivismHist';
import { Container, Grid, Typography } from '@mui/material';
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
        <Typography variant='h3' sx={{ fontWeight: 'bold' }} mt={3}>
          Gender employment trends
        </Typography>
        <Grid container>
          <Grid item xs={6}>
            <iframe
              title='Men Employment Rates'
              width='600'
              height='371'
              seamless
              frameborder='0'
              scrolling='no'
              src='https://docs.google.com/spreadsheets/d/e/2PACX-1vTY4neyrOE8JbYaCXW6kMMX-DxD90lym80SX8LhzMatCIJVwuNUe0Sf0KhdR0BdHrihmim0XHcU5R7h/pubchart?oid=1385848547&amp;format=interactive'
            />
          </Grid>{' '}
          <Grid item xs={6}>
            <iframe
              title='Women Employment Rates'
              width='600'
              height='361'
              seamless
              frameborder='0'
              scrolling='no'
              src='https://docs.google.com/spreadsheets/d/e/2PACX-1vTY4neyrOE8JbYaCXW6kMMX-DxD90lym80SX8LhzMatCIJVwuNUe0Sf0KhdR0BdHrihmim0XHcU5R7h/pubchart?oid=969139854&amp;format=interactive'
            />
          </Grid>
          <Typography>
            The graph on the right represents the employment-to-population ratio
            of women ages 15-24 in percentage form in the United States. The
            chart is based on an ILO estimate which is internationally
            comparable labor statistics. This is very beneficial in helping us
            understand the wealth gap between men and women due to the ability
            to compare the amount of each gender in the workforce to the chart
            that follows which shows the male employment rate. As the chart
            shows, on average every year since 1991 there were fewer females,
            percentage-wise, than males in the workforce. Although these
            illustrations represent America only, it is consistent with other
            countries where the percentage of females was less than the
            percentage of men employed. This is due to many factors but in
            correlation to this project, we looked to compare the two genders
            and see its correlation with individualism and social norms in the
            respected country. Although individualism and the values of autonomy
            help with women’s goals and choices to help them acquire wealth,
            without closing this gap the overall general wealth gap won't
            close(Davis and Williamson, 2019) With the United States the
            participation was not significantly different but there was a common
            trend of being less than men. This difference of men being more in
            the workforce than women is a factor in the widening wealth gap. To
            acquire wealth requires to be employed or working, and as long as
            the percentages stay in this trend it would be harder for the gap to
            close.
            <br />
            <br />
            The left chart on the other hand shows the employment to population
            ratio of men ages 15-24 in percentage from in the United States.
            Comparing the percentages of men and women employment ratios shows
            that in the United States, there is more employment in males than
            females every year from 1991-2022. This includes where the
            percentage of men significantly dipped in 2020. Both genders had a
            dip in the percentages in the workforce due to the global pandemic.
            This gap in percentages correlates with our research because as
            there are more men working it will keep the wealth gap. As explained
            in “The gender wealth gap in the United States: Trends and
            explanations'', “In the United States, the main reason to expect a
            gender wealth gap is that men earn more than women… Men have more
            income to save and more access to wealth-building employer
            benefits'' (Lee, 2022). Due to men working at higher rates, they are
            more likely to acquire more income which ultimately leads to the
            creation of wealth in various ways. Although men and women might be
            doing the same work there is different compensations and
            participation in the workforce that keeps this gap from closing. Our
            research considers that there is also various factors that may
            influence the wealth gap but this is a major one to consider.
          </Typography>
        </Grid>
      </Container>
    </>
  );
};

export default Narrative;
