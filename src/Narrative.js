import React, { useEffect } from 'react';
import IndividualCollectivismHist from './IndividualCollectivismHist';
import { Container, Grid, Typography } from '@mui/material';
import * as d3 from 'd3';
import Navbar from './Navbar';
import educationData from './bachelorsAttainment.csv';
import Plotly from 'plotly.js/dist/plotly';

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
          const countryCode = row['Country Code'];
          const femaleRow = femaleData.find(
            (femaleRow) => femaleRow['Country Code'] === countryCode
          );
          const diffRow = JSON.parse(JSON.stringify(row));
          if (femaleRow) {
            diffRow.PercentageDifferent =
              row.BachelorsPercentage - femaleRow.BachelorsPercentage;
          }
          return diffRow;
        });

        var maleChoroplethData = [
          {
            type: 'choropleth',
            locationmode: 'country names',
            locations: maleData.map((row) => row['Country Name']),
            z: maleData.map((row) => row['BachelorsPercentage']),
            text: maleData.map((row) => row['Country Name']),
            autocolorscale: true,
          },
        ];

        var maleChoroplethLayout = {
          title:
            "Education attainment, at least Bachelor's or equivalent, population 25+, male (%) (cumultative)",
          geo: {
            projection: {
              type: 'robinson',
            },
          },
        };

        var femaleChoroplethData = [
          {
            type: 'choropleth',
            locationmode: 'country names',
            locations: femaleData.map((row) => row['Country Name']),
            z: femaleData.map((row) => row['BachelorsPercentage']),
            text: femaleData.map((row) => row['Country Name']),
            autocolorscale: true,
          },
        ];

        var femaleChoroplethLayout = {
          title:
            "Education attainment, at least Bachelor's or equivalent, population 25+, female (%)",
          geo: {
            projection: {
              type: 'robinson',
            },
          },
        };

        var diffChoroplethData = [
          {
            type: 'choropleth',
            locationmode: 'country names',
            locations: diffData.map((row) => row['Country Name']),
            z: diffData.map((row) => row['PercentageDifferent']),
            text: diffData.map((row) => row['Country Name']),
            autocolorscale: true,
          },
        ];

        var diffChoroplethLayout = {
          title:
            'Difference in higher education attainment between genders (male - females), population 25+, (%)',
          geo: {
            projection: {
              type: 'robinson',
            },
          },
        };

        Plotly.newPlot(
          'maleChoroplethDiv',
          maleChoroplethData,
          maleChoroplethLayout,
          {
            showLink: false,
          }
        );
        Plotly.newPlot(
          'femaleChoroplethDiv',
          femaleChoroplethData,
          femaleChoroplethLayout,
          {
            showLink: false,
          }
        );
        Plotly.newPlot(
          'diffChoroplethDiv',
          diffChoroplethData,
          diffChoroplethLayout,
          {
            showLink: false,
          }
        );
      })
      .catch((err) => console.error('Error loading the CSV file: ', err));

    return () => {
      Plotly.purge('maleChoroplethDiv');
      Plotly.purge('femaleChoroplethDiv');
      Plotly.purge('diffChoroplethDiv');
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
        <Typography
          variant='body2'
          color='grey'
          mt={2}
          mb={-2}
          sx={{ textAlign: 'center', zIndex: '2', position: 'relative' }}
        >
          The following choropleth maps can be zoomed and dragged.
        </Typography>
        <div id='maleChoroplethDiv' />
        <div id='femaleChoroplethDiv' />
        <div id='diffChoroplethDiv' />
        <Typography>
          The global map of bachelor's attainment by gender vividly portrays the
          significant impact that education has on wealth acquisition, with a
          clear difference between male and female educational attainment levels
          across various regions. In Western countries where females outpace
          males in higher education—as represented by the shades of purple—there
          appears to be a correlation with greater financial literacy and
          potential for wealth among women. This observation is bolstered by
          Christina E. Bannier’s study, which posits that higher education
          markedly strengthens financial wealth for women, while this effect is
          less pronounced for men.
          <br /> <br />
          On the other hand, the orange and yellow hues dominating regions in
          the Middle East, North Africa, and parts of Asia indicate a prevalent
          educational gap favoring males. In these areas, traditional gender
          roles, economic structures, and educational opportunities create
          disparities that likely extend to wealth accumulation. Education
          serves as a gateway to improved financial literacy, which is a key
          component of wealth generation. Therefore, in countries where women
          have lesser educational attainment, they may face significant
          challenges in accumulating wealth, underscoring the critical nature of
          access to education for economic empowerment.
          <br /> <br />
          The map, in essence, offers more than a snapshot of educational
          disparities; it suggests a roadmap for where interventions may be most
          needed to improve financial outcomes for women. As Bannier's research
          suggests, enhancing women's access to education could be
          transformative, leading to increased financial literacy and subsequent
          wealth. It is not merely the attainment of education that matters but
          its quality and the subsequent opportunities it provides.
          <br /> <br />
          Therefore, addressing educational disparities is imperative for
          closing the wealth gap between genders. Ensuring that women worldwide
          have equal access to quality education can be a powerful catalyst for
          economic development and gender equity. In light of Bannier's
          findings, policymakers and educators should prioritize gender parity
          in education to foster a more financially literate and economically
          empowered female population.
        </Typography>
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
