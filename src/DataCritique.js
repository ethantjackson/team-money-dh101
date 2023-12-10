import { Box, Container, Link, Typography } from '@mui/material';
import React from 'react';
import Navbar from './Navbar';

const DataCritique = () => {
  // Define a custom style for the yellow divider

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
          Data critiques and considerations
        </Typography>
        <Typography mb={2}>
          Here, we explore the datasets from which we have drawn our narratives,
          and we acknowledge the latent silences that might exist in the data.
          Feel free to{' '}
          <Link href='https://genderdata.worldbank.org/'>
            explore the Gender Data Portal
          </Link>
          .
        </Typography>
        <Box sx={{ backgroundColor: 'white' }} pt={1} pb={2} pl={3} pr={3}>
          <Typography variant='h3' sx={{ fontWeight: 'bold' }} mt={1} mb={1}>
            About the database
          </Typography>
          <Typography>
            The World Bank is an international development organization (IGO)
            owned by 187 countries. Its role is to reduce poverty by lending
            money to the governments of its poorer members to improve their
            economies and to improve the standard of living of their people. The
            organization’s “Gender Portal” brings attention to the gender gap by
            making their statistics accessible and understandable through data
            visualizations.
            <br />
            <br />
            The World Bank’s Strengthening Gender Statistics (SGS) project
            conducts assessments that center around economic indicators across
            three key areas: ownership and control of assets, employment, and
            entrepreneurship. Some of these indicators come from the NSO’s
            (National Statistical Office) published annual statistical
            yearbooks, survey reports of major surveys or census, published
            gender factbooks or compendiums, and SDG (Sustainable Development
            Goals) data and results. When conducting a gender data gap
            assessment, The World Bank identifies and computes these indicators
            into documented metadata to ensure that the information is relevant,
            meets standards, and to recognize discrepancies.
            <br />
            <br />
            Although awareness of male dominance and privilege in society has
            increased tremendously, we see how structural determinants of
            patriarchy have critical roles in inequalities, one of these
            inequalities being wealth. The disparity in wealth is an issue that
            goes beyond income difference but also brings attention to
            structural inequalities within a society such as resources and
            opportunities that affect the lack of economic equality. When
            exploring the relationships between socioeconomic factors and wealth
            inequality between genders, it is important to consider and identify
            the patterns over time so that we can see how wealth inequality has
            evolved. While factors that contribute to wealth inequality are
            dynamic and diverse, identifying these trends and the history behind
            them can play an important role in understanding what causes wealth
            inequality and measures we can put in place to minimize the wealth
            gap. Societal nuances such as a country’s placement on the
            individualism/collectivism spectrum are also important as they
            signify whether there are cultural and traditional influences that
            impact wealth inequality; directly or indirectly. More personal
            factors like education, contribute to wealth inequality, and
            understanding how significant these factors are in impacting the
            acquisition of wealth holds equal importance. The World Bank, an
            institution dedicated to reducing poverty around the world, provides
            datasets that reveal correlations between the gender gap and various
            measures of wealth such as assets and employment and time use. The
            credibility and efficiency of this source is reflected in The World
            Bank’s ability to access international assessments and economic
            indicators. Through various checkpoints such as relevancy,
            standards, and discrepancies, this information is reviewed and
            documented into metadata that argues the seriousness of the gender
            gap.
          </Typography>
          <Typography variant='h3' sx={{ fontWeight: 'bold' }} mt={3} mb={1}>
            What information is included in the dataset?
          </Typography>
          <Typography>
            The dataset is composed of many economic indicators that organize
            important statistics on ownership and control of assets, employment,
            and entrepreneurship. The dataset provides a CSV file that is
            divided into five columns: Indicator Name, Indicator Code, Country
            Name, Country Code, Year, and Value.
            <ul>
              <li>
                The <b>Indicator Name </b>identifies what the data is concerned
                with; what is being measured (e.g. “Female Percentage Working
                in...")
              </li>
              <li>
                The <b>Indicator Code</b> is a series of eleven letters that
                organizes the information
              </li>
              <li>
                The <b>Country Name </b>is the name of the country being
                measured
              </li>
              <li>
                The <b>Country Code</b> is a series of three letters that
                identifies the country and its location
              </li>
              <li>
                The <b>Year</b> is the time frame in which the data comes from
                and represents
              </li>
              <li>
                The <b>Value</b> is a series of numbers that reflect the value
                of the statistic
              </li>
            </ul>
          </Typography>
          <Typography variant='h3' sx={{ fontWeight: 'bold' }} mt={3} mb={1}>
            What the dataset illuminates
          </Typography>
          <Typography>
            The Gender Data Portal is a dataset that, through different metadata
            created by indicators deemed economically significant, provides
            important statistics that can be analyzed to form correlations.
            Firstly, it addresses the evolving dynamics of wealth inequality
            between genders over time, a topic that has not been thoroughly
            explored in existing literature. By analyzing this trend, the
            dataset helps us to understand whether gender-based wealth
            disparities are widening or narrowing, offering fresh insights into
            the effectiveness of current gender equality initiatives. Secondly,
            our research delves into the influence of a country's cultural
            orientation on gender wealth inequality. This aspect is crucial as
            it opens up a new dimension in understanding how societal values,
            particularly individualism versus collectivism, play a role in
            shaping gendered economic experiences. Finally, the impact of
            education on wealth acquisition, particularly in a gendered context,
            forms a critical part of our study. This is vital because it sheds
            light on the long-debated question of education's role as an
            equalizer in society, especially concerning gendered wealth
            disparities. Overall, the dataset illuminates and facilitates a
            deeper understanding of these complex dynamics, ultimately helping
            policymakers, educators, and activists to formulate more effective
            strategies for promoting gender equality in wealth distribution.
          </Typography>
          <Typography variant='h3' sx={{ fontWeight: 'bold' }} mt={3} mb={1}>
            Where the dataset is limited
          </Typography>
          <Typography>
            Although the dataset can demonstrate a gender gap in various
            measures of wealth (land ownership and employment), it cannot reveal
            a causal relationship between any driver of wealth inequality and
            the inequality itself.
            <br />
            <br /> The datasets themselves only represent documented people and
            don't cover a hundred percent of the global population.
            Additionally, there is no documented non-responses, which adds bias
            to the dataset based on who actually responded among those
            questioned. Analyzing with a political lens, we can also conclude
            that data could be manipulated to create a narrative that a region
            wants to portray. Therefore, there is a limitation in that the data
            might not reflect a true representation of a nation.
            <br />
            <br /> The World Bank also discusses lack of data availability
            through interactive data visualizations on “Global View,” “Topic
            View,” and “Availability by Indicator” that shows slow, but
            important, progress on improving access and data.
          </Typography>
          <Typography variant='h3' sx={{ fontWeight: 'bold' }} mt={3} mb={1}>
            Dataset ontologies
          </Typography>
          <Typography>
            If our data sets were our only source of information, there would be
            a lot of external factors that would have been left out that we
            would not be able to take into account when analyzing. Some external
            factors that we would not be able to see are personal history or the
            origins of the data. This is important because many countries have
            different gender norms, cultural expectations, and legislation that
            may affect the way one acquires wealth. There are also underlying
            variables that we would likely be unable to uncover, similar to the
            one about laws that directly affect wealth generation and
            acquisition. Using one data set can also restrict our fact-checking
            abilities as we would be unable to cross-reference our findings with
            more data. If there was another data set that provided new or
            contradictory insights from ours, we would not be able to include
            and analyze the discrepancies therein.
          </Typography>
          <Typography variant='h3' sx={{ fontWeight: 'bold' }} mt={3} mb={1}>
            Secondary literature findings
          </Typography>
          <Typography>
            To supplement potential shortcomings of our primary data set, we
            also explored a variety of secondary sources to inform our
            understandings. The collective idea that has been concluded from
            researching this project by scholars is that there are social
            reasons such as individualism and public policy(involving education)
            that contribute to income inequality. With there being income
            inequality between genders it then leads to a wealth gap. In
            addition to stating that there is a problem, some sources looked to
            find how the gap will close. This is where there are questions about
            the topic; whether the gap will close on its own or would we as a
            society need to aid in closing the gap. Some even question if the
            gap will ever close based on the social structures that are set in
            place. The predominant view of the topic agreed by two scholars,
            Carola Conces Binder and James H. Tiessen state that the gap is
            based on individualism and collectivism but there are different
            perspectives by Hong Vo Duc and Chi Minh Ho that say that background
            and demographic factors are the major reasons for the difference in
            wealth accumulation. This is why the level of education and its
            effect on wealth accumulation is researched in this project as well
            because some scholars believe that this is a very influential factor
            in wealth accumulation, as stated by Christina E. Bannier and
            Stephanie R. Psaki. In general the higher the education the higher
            the salary and when there is equal education between genders there
            is still a gap but not as large, as what the sources were stating.
            All scholars agree that there is a wealth gap between genders, but
            the reason why there is a difference between scholars and this
            project is to find out what are the most influential factors by
            focusing on individualism and education.
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default DataCritique;
