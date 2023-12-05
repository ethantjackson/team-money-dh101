import React, { useEffect } from 'react';
import IndividualCollectivismHist from './IndividualCollectivismHist';
import { Container, Grid, Typography } from '@mui/material';
import * as d3 from 'd3';
import Navbar from './Navbar';
import educationData from './bachelorsAttainment.csv';
import Plot from 'react-plotly.js';
import Plotly from 'plotly.js';

const rightmostNonEmptyRow = (row) => {
  let val = null;
  for (let key in row) {
    if (!isNaN(row[key])) {
      val = row[key];
    }
  }
  return val;
};

const Narrative = () => {
  useEffect(() => {
    d3.csv(educationData)
      .then((data) => {
        data = data.map((row, idx) => {
          const percentage = rightmostNonEmptyRow(row);
          if (percentage != null) {
            row.BachelorsPercentage = parseFloat(percentage);
          }
          return row;
        });

        data = data.filter((row) => row.BachelorsPercentage);
        const femaleData = data.filter(
          (row) =>
            row['Series Name'] ===
            "Educational attainment, at least Bachelor's or equivalent, population 25+, female (%) (cumulative)"
        );
        const maleData = data.filter(
          (row) =>
            row['Series Name'] ===
            "Educational attainment, at least Bachelor's or equivalent, population 25+, male (%) (cumulative)"
        );
        const diffData = maleData.map((row) => {
          const countryName = row['Country Name'];
          const femaleRow = femaleData.find(
            (femaleRow) => (femaleRow['Country Name'] = countryName)
          );
          if (femaleRow) {
            row.PercentageDifferent =
              row.BachelorsPercentage - femaleRow.BachelorsPercentage;
          }
          return row;
        });

        var choroplethData = [
          {
            type: 'choropleth',
            locationmode: 'country names',
            locations: maleData.map((row) => row['Country Name']),
            z: maleData.map((row) => row['BachelorsPercentage']),
            text: maleData.map((row) => row['Country Name']),
            autocolorscale: true,
          },
        ];

        var choroplethLayout = {
          title:
            "Education attainment, at least Bachelor's or equivalent, population 25+, male (%) (cumultative)",
          geo: {
            projection: {
              type: 'robinson',
            },
          },
        };

        Plotly.newPlot('maleChoroplethDiv', choroplethData, choroplethLayout, {
          showLink: false,
        });
      })
      .catch((err) => console.error('Error loading the CSV file: ', err));

    return () => {
      Plotly.purge('maleChoroplethDiv');
    };
  }, []);
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
          The chart presents an intriguing illustration of the relationship
          between individualism and wealth distribution across different
          countries. It is indicative of the correlation identified by Binder in
          her research, which suggests that "countries with more individualistic
          cultures have significantly greater income redistribution and lower
          after-tax income inequality."
          <br />
          <br />
          From the analysis of the individuality scores, we can infer that
          countries with higher scores, like the United States, Australia, and
          the United Kingdom, prioritize personal autonomy and achievement. This
          cultural inclination often correlates with policies that foster
          entrepreneurial activities and offer a fertile ground for innovation
          and economic growth. However, these opportunities alone can exacerbate
          wealth gaps if not coupled with effective income redistribution
          mechanisms.
          <br />
          <br />
          The chart implies that individualistic countries have recognized this
          potential pitfall and have implemented robust systems for income
          redistribution, aligning with Binder's findings. These systems are
          essential in mitigating the wealth gap, as they ensure that economic
          growth benefits a broader segment of the population, thereby reducing
          after-tax income inequality.
          <br />
          <br />
          Interestingly, the countries with the highest individualism scores are
          not necessarily the ones with the least wealth gap, suggesting that
          while individualism is conducive to wealth creation, its role in
          wealth distribution is more complex and dependent on a range of fiscal
          policies and social welfare programs.
          <br />
          <br />
          In conclusion, the chart reinforces the notion that individualism in a
          culture can coexist with, and indeed promote, mechanisms for wealth
          equality. It is not the cultural inclination towards individualism
          itself that determines the wealth gap, but rather how a society's
          policies harness individualistic traits to encourage economic
          participation and ensure that the benefits of growth are equitably
          shared among its citizens. This delicate balance is the key to
          leveraging individualism in a way that contributes to a more
          egalitarian economic landscape.
        </Typography>
        <Typography variant='h3' sx={{ fontWeight: 'bold' }} mt={3}>
          Education gaps drive wealth disparity
        </Typography>
        <div id='maleChoroplethDiv' />
        <Typography variant='h3' sx={{ fontWeight: 'bold' }} mt={3} mb={1}>
          Gender employment trends
        </Typography>
        <Grid container>
          <Grid item xs={6}>
            <iframe
              title='Men Employment Rates'
              width='600'
              height='371'
              seamless
              frameBorder='0'
              scrolling='no'
              src='https://docs.google.com/spreadsheets/d/e/2PACX-1vTY4neyrOE8JbYaCXW6kMMX-DxD90lym80SX8LhzMatCIJVwuNUe0Sf0KhdR0BdHrihmim0XHcU5R7h/pubchart?oid=1385848547&amp;format=interactive'
            />
          </Grid>
          <Grid item xs={6}>
            <iframe
              title='Women Employment Rates'
              width='600'
              height='361'
              seamless
              frameBorder='0'
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
