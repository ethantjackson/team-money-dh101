import React, { useEffect } from 'react';
import IndividualCollectivismHist from './IndividualCollectivismHist';
import { Box, Container, Typography } from '@mui/material';
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
      <Container
        sx={{
          paddingTop: '50px',
          paddingBottom: '50px',
        }}
      >
        <Typography
          variant='h2'
          mt={3}
          mb={2}
          sx={{
            fontWeight: 'bold',
          }}
        >
          Data-driven narratives
        </Typography>
        <Box sx={{ backgroundColor: 'white' }} pt={1} pb={2} pl={3} pr={3}>
          <Typography variant='h3' sx={{ fontWeight: 'bold' }} mt={1} mb={-5}>
            Individualism & collectivism shape the wealth gap
          </Typography>
          <IndividualCollectivismHist />
          <Typography>
            The chart presents an intriguing illustration of the relationship
            between individualism and wealth distribution across different
            countries. It is indicative of the correlation identified by Binder
            in her research, which suggests that "countries with more
            individualistic cultures have significantly greater income
            redistribution and lower after-tax income inequality."
            <br />
            <br />
            From the analysis of the individuality scores, we can infer that
            countries with higher scores, like the United States, Australia, and
            the United Kingdom, prioritize personal autonomy and achievement.
            This cultural inclination often correlates with policies that foster
            entrepreneurial activities and offer a fertile ground for innovation
            and economic growth. However, these opportunities alone can
            exacerbate wealth gaps if not coupled with effective income
            redistribution mechanisms.
            <br />
            <br />
            The chart implies that individualistic countries have recognized
            this potential pitfall and have implemented robust systems for
            income redistribution, aligning with Binder's findings. These
            systems are essential in mitigating the wealth gap, as they ensure
            that economic growth benefits a broader segment of the population,
            thereby reducing after-tax income inequality.
            <br />
            <br />
            Interestingly, the countries with the highest individualism scores
            are not necessarily the ones with the least wealth gap, suggesting
            that while individualism is conducive to wealth creation, its role
            in wealth distribution is more complex and dependent on a range of
            fiscal policies and social welfare programs.
            <br />
            <br />
            In conclusion, the chart reinforces the notion that individualism in
            a culture can coexist with, and indeed promote, mechanisms for
            wealth equality. It is not the cultural inclination towards
            individualism itself that determines the wealth gap, but rather how
            a society's policies harness individualistic traits to encourage
            economic participation and ensure that the benefits of growth are
            equitably shared among its citizens. This delicate balance is the
            key to leveraging individualism in a way that contributes to a more
            egalitarian economic landscape.
          </Typography>
          <Typography variant='h3' sx={{ fontWeight: 'bold' }} mt={3} mb={1}>
            Wealthy women, wealthy countries
          </Typography>
          <Box
            sx={{
              textAlign: 'center',
            }}
            pl={{ sm: '10%', lg: '20%' }}
            pr={{ sm: '10%', lg: '20%' }}
          >
            <img
              src='/WomenBusinessLaw.png'
              alt='Women Pay Indicator Score'
              width='100%'
            />
          </Box>
          <Typography>
            This bar chart compares the Women, Business and the Law: Pay
            Indicator Score between multiple regions and income levels. The Pay
            indicator measures laws and regulations affecting a woman’s pay
            (Hyland Et al, 2020). The data highlights that there is an
            association between country income and laws correlated to women’s
            rights. The authors discuss how causation can go in both directions.
            Expansion of women’s economic rights increases investments in human
            capital which increases GDP. However, access to technology that is
            associated with higher income can drive social reform. Thus, women’s
            rights can improve national income and an increase in national
            income can improve upon women’s rights. There is also a wide gap
            throughout the data. North America has the highest Pay Indicator
            Score with an 88 average between the countries within the region.
            The Middle East and North Africa have the lowest Pay Indicator Score
            with a 48 average. While there may be an association between income
            level and laws supporting women, there is plenty of grey area among
            the data. For example, China has a GDP of $18 Trillion while only
            having a Pay Indicator Score of 25. However Liberia has a GDP of
            only $4 Billion and has a Pay Indicator Score of 100. The United
            States, with the largest GDP in the world, has a Pay Indicator Score
            of 75.
            <br />
            <br />
            In any case, securing women's economic rights (through both legal
            and extralegal means) is an essential step in closing the
            gender-wealth gap. In turn, wealthier women may create wealthier
            nations as seen in the case of North America. A cyclic relationship
            may arise as wealthier nations gain the tools to drive social
            reform, consequently bolstering the wealth of women once again.
            <br />
            <br />
            Closing the gap through expanding economic women's rights may
            contribute to or be indicative of more individualistic attitudes in
            a country. This relationship may explain the correlation between
            individualism and narrower gender-wealth gaps that we identified
            previously.
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
            The global map of bachelor's attainment by gender vividly portrays
            the significant impact that education has on wealth acquisition,
            with a clear difference between male and female educational
            attainment levels across various regions. In Western countries where
            females outpace males in higher education—as represented by the
            shades of purple—there appears to be a correlation with greater
            financial literacy and potential for wealth among women. This
            observation is bolstered by Christina E. Bannier’s study, which
            posits that higher education markedly strengthens financial wealth
            for women, while this effect is less pronounced for men.
            <br /> <br />
            On the other hand, the orange and yellow hues dominating regions in
            the Middle East, North Africa, and parts of Asia indicate a
            prevalent educational gap favoring males. In these areas,
            traditional gender roles, economic structures, and educational
            opportunities create disparities that likely extend to wealth
            accumulation. Education serves as a gateway to improved financial
            literacy, which is a key component of wealth generation. Therefore,
            in countries where women have lesser educational attainment, they
            may face significant challenges in accumulating wealth, underscoring
            the critical nature of access to education for economic empowerment.
            <br /> <br />
            The map, in essence, offers more than a snapshot of educational
            disparities; it suggests a roadmap for where interventions may be
            most needed to improve financial outcomes for women. As Bannier's
            research suggests, enhancing women's access to education could be
            transformative, leading to increased financial literacy and
            subsequent wealth. It is not merely the attainment of education that
            matters but its quality and the subsequent opportunities it
            provides.
            <br /> <br />
            Therefore, addressing educational disparities is imperative for
            closing the wealth gap between genders. Ensuring that women
            worldwide have equal access to quality education can be a powerful
            catalyst for economic development and gender equity. In light of
            Bannier's findings, policymakers and educators should prioritize
            gender parity in education to foster a more financially literate and
            economically empowered female population.
          </Typography>
          <Typography variant='h3' sx={{ fontWeight: 'bold' }} mt={3}>
            A narrowing education gap?
          </Typography>
          <img
            src='/WomenSchooling.png'
            alt='Average Years of Schooling for Women Globally'
            width='100%'
          />
          <Typography>
            This dataset explores the differences in Expected Years of School
            for Women within countries in the European Union. The data ranges
            from just under 12 years in Romania to just under 14 years in the
            Netherlands. As seen in data produced by UNESCO Institute for
            Statistic, school life expectancy for women in Europe and North
            America is the highest in the world. The average amount of education
            for women in this region is actually higher than men. This is true
            in Latin America, the Caribean, Southern Asia, East and Southeast
            Asia, and across the globe on average. Actually, it is mostly in the
            least developed countries where the school life expectancy is higher
            for boys than girls at 9.7 vs 8.9 years. This is a significant
            development since 1970 where men outpaced women in years of
            schooling in every major region around the globe. While years spent
            in school has increased for everyone since 1970, there is still
            significant work to be done to decrease the educational gap created
            by poverty. For example, the average years in school for boys around
            the world in 1970 (8.6 years) is around the same as the average
            years for girls in Subsaharan Africa today (8.8 years). This gap in
            education explains the intersection between extreme poverty and
            gender inequality around the world. It can be determined that there
            are economic reasons for the gender-education gap as well as social.
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Narrative;
