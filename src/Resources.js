import GetAppIcon from '@mui/icons-material/GetApp';
import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import Navbar from './Navbar';

const Resources = () => {
  return (
    <>
      <Navbar />
      {/* BIBLIOGRAPHY Section */}
      <Container
        sx={{
          paddingTop: '50px',
          paddingBottom: '50px',
        }}
      >
        <Box mt={3} pt={1} pb={2} pl={3} pr={3} sx={{ textAlign: 'center' }}>
          <Typography variant='h2' sx={{ fontWeight: 'bold', marginBottom: 2 }}>
            Annotated bibliography
          </Typography>
          <Typography paragraph>
            This page lists all the sources used throughout this website as well
            as a few details on the technical tools we used to make this
            project. You can also download our annotated bibliography if you
            would like an overview & analysis of select sources.
          </Typography>
          <Button
            variant='contained'
            sx={{
              marginTop: 2,
              color: 'common.white',
              backgroundColor: 'primary.main',
              '&:hover': {
                backgroundColor: 'primary.dark',
              },
            }}
            startIcon={<GetAppIcon />}
            href='https://docs.google.com/document/d/1m4P7RYIyUFyiMqHfiYtwXHwlrSt-7jjX7TrkAoq546w/edit?usp=sharing'
          >
            DOWNLOAD THE ANNOTATED BIBLIOGRAPHY
          </Button>
        </Box>
        <Box
          sx={{ backgroundColor: 'white' }}
          mt={3}
          pt={2}
          pb={2}
          pl={3}
          pr={3}
        >
          <Typography variant='h2' sx={{ fontWeight: 'bold' }}>
            The "Three Layers" of digital dumanities projects
          </Typography>

          <Typography variant='h3' sx={{ fontWeight: 'bold' }} mt={3} mb={1}>
            Sourcing
          </Typography>
          <Typography>
            We focused on finding secondary sources that expanded upon
            explanations and underlying variables for the wealth gap. When
            selecting sources, we made sure to prioritize scholarly articles and
            academic journals. The sources that we chose are needed to help
            elaborate on our topic for the benefit of the reader. In How to Get
            Started in Data Visualization, Nathan provides a good anecdote that
            explains the benefit of our secondary sources. He explains,
            “Sometimes we forget that not everyone understands data. Means,
            medians, standard errors, skew, and distributions can be foreign
            concepts. It's our job to explain these technical concepts to a
            non-technical audience. We have to answer that all-important
            question, ‘So what?’”.
            <br />
            <br />
            We chose rich academic resources that allowed us to expand upon our
            resource questions. These secondary sources helped us expand upon
            the data we got from the Gender Data Portal. For example, Gendered
            Laws and Women in the Workforce gave us the academic framework to
            acknowledge that gender equality and a country’s income level are
            positively correlated with one another and both improve upon the
            other (Hyland Et. al 2020). Another source from the Director of the
            UNESCO Institute for Statistics allowed us to explore the gender gap
            in access to education from regions around the country. It also
            allowed us to understand that the least developed countries in the
            world tend to have the greatest wealth gap in a global education
            system where women are beginning to outpace men in highly developed
            countries. We even found secondary that found a correlation between
            the individuality of a country and its gender equality in
            employment.
          </Typography>
          <Typography variant='h3' sx={{ fontWeight: 'bold' }} mt={3} mb={1}>
            Processing
          </Typography>
          <Typography>
            Most of our data was accessed from The World Bank which,
            fortunately, provided a CSV file that was relatively clean with
            minimal changes or extractions needed. However, the downloaded CSV
            file contained every indicator name that was collected by The World
            Bank and therefore, the file was particularly long and the data that
            was being used had to be singled out from the large file. There were
            instances of duplicate information or lack of information which was
            caught and cleaned out. Throughout the processing stage, we kept in
            mind that in order to narrow down and separate the data that we
            wanted to collect and use, we had to keep in mind what Nathan Yau
            warns in the article, How to Get Started in Data Visualization” that
            formatting data “...might mean aggregation, subsetting, generation,
            or reshaping your data files” (Yau, “How to Get Started in Data
            Visualization,” para. 13). Fortunately, the indicator name,
            indicator code, country name, country code, year, and value were
            easy to identify and grouped together which could then be organized
            on Google Sheets or Python, programs that can manipulate data.
            <br /> <br />
            Some of our data also came from Clearly Cultural which provided
            important data but needed to be collected as it was not a
            ready-to-use CSV file. The database was organized in terms of
            different levels or measures of individuality. It was fairly
            manageable to organize data based on country and its level of
            individuality which allowed for an analysis of countries and their
            integration of groups.
            <br /> <br />
            When processing our data and how it was going to be analyzed and
            visualized, we kept in mind Yau’s reading on Exploring Data Visually
            which approached exploration of data with four considerations, “What
            data do you have?, What do you want to know about your data?, What
            visualization methods should you use?, What do you see and does it
            make sense?” (Yau, “Exploring Data Visually,” p. 137). With this
            taken into account, we processed and analyzed data that was relevant
            to our research questions and that would add to the overall
            exploration. Once we extracted the data that we needed from the
            databases, we then organized them onto Google Sheets or Python. The
            data organized on Google Sheets was then uploaded onto Tableau to be
            transformed into visualizations. Data that was organized and coded
            onto Python also transformed into visualizations that represented
            and interpreted the data most efficiently.
          </Typography>

          <Typography variant='h3' sx={{ fontWeight: 'bold' }} mt={3} mb={1}>
            Presentation
          </Typography>
          <Typography>
            We created our website using React and hosted our domain through
            Netlify, a web hosting service for which it is a publicly accessible
            hosting service. Through React we were able to code it ourselves and
            create a well-organized website. Our website is user-friend by
            making sure it is color-blind considerate, screen reader-friendly,
            and has no audio media. We started by creating our data
            visualizations and from there we decided to break up our website
            into 4 major navigation pages: Data, Narrative, Case Study, and
            resources. By clicking on each page it allows the reader to learn
            more about different aspects of our project. In each of our data
            visualizations, we made sure all units and graphs were labeled to
            make the visualizations as easy as possible to read. We made sure it
            was simple enough for everyone to understand while simultaneously
            assuring our information was properly represented. As Johanna
            Drucker in Humanities Approaches to Graphical Display, “The
            conventional forms of the graphical display of information, “data”,
            make use of a formal, unambiguous system of standard metrics.”. This
            was prevalent on our website because we had multiple graphs that we
            kept with standard metrics so everyone could understand. Our
            presentation was completely coded by our group members and meant to
            be as easy as possible to interact with. Overall, the project is
            user-friendly and very effective in presenting the information on
            our research question.
          </Typography>
        </Box>
        <Typography variant='h3' mt={3}>
          Works cited
        </Typography>
        {worksCitedEntries.map((entry) => (
          <Typography variant='body2' color='grey' mt={2}>
            {entry}
          </Typography>
        ))}
      </Container>
    </>
  );
};

const worksCitedEntries = [
  '19th Amendment. August 26, 1920: The 19th Amendment Goes Into Effect, Granting Women the Vote, The Nation, https://www.thenation.com/article/archive/august-26-1920-the-19th-amendment-is-ratified-granting-women-the-vote/. Accessed 6 Dec. 2023. ',
  'Black, Derek W. “Abandoning the Federal Role in Education: The Every Student Succeeds Act.” California Law Review, vol. 105, no. 5, 2017, pp. 1309–74. JSTOR, https://www.jstor.org/stable/26577710. Accessed 3 Dec. 2023.',
  'Brauer, Carl M. “Women Activists, Southern Conservatives, and the Prohibition of Sex Discrimination in Title VII of the 1964 Civil Rights Act.” The Journal of Southern History, vol. 49, no. 1, 1983, pp. 37–56. JSTOR, https://doi.org/10.2307/2209305. Accessed 3 Dec. 2023.',
  'Brown v. Board of Education. Brown v. Board of Education, The Case That Changed America, Legal Defense Fund, https://www.naacpldf.org/brown-vs-board/. Accessed 4 Dec. 2023.',
  'Carson, Clayborne. “The Fateful Turn toward Brown v. Board of Education.” Washington History, vol. 16, no. 2, 2004, pp. 6–10. JSTOR, http://www.jstor.org/stable/40073391. Accessed 3 Dec. 2023.',
  'CHUDACOFF, HOWARD P. “The Civil Rights Restoration Act and Enforcement of Title IX.” Changing the Playbook: How Power, Profit, and Politics Transformed College Sports, University of Illinois Press, 2015, pp. 83–104. JSTOR, http://www.jstor.org/stable/10.5406/j.ctt19705m9.9. Accessed 3 Dec. 2023.',
  'COVID-19 Pandemic Online Learning. Schooling During the COVID-19 Pandemic, United States Census Bureau, https://www.census.gov/library/stories/2020/08/schooling-during-the-covid-19-pandemic.html. Accessed 4 Dec. 2023',
  'Data to Celebrate 50 Years of Progress on Girls’ Education. 6 Mar. 2019, https://uis.unesco.org/en/blog/data-celebrate-50-years-progress-girls-education.',
  'DEE, THOMAS S., et al. “The Impact of No Child Left Behind on Students, Teachers, and Schools [with Comments and Discussion].” Brookings Papers on Economic Activity, 2010, pp. 149–207. JSTOR, http://www.jstor.org/stable/41012846. Accessed 3 Dec. 2023.',
  'Elementary and Secondary Education Act. The Nation’s Main K-12 Law: A Timeline of the ESEA, Education Week, https://www.edweek.org/policy-politics/the-nations-main-k-12-law-a-timeline-of-the-esea/2015/03. Accessed 4 Dec. 2023. ',
  'Equal Pay Act, History, https://www.history.com/topics/womens-history/equal-pay-act. Accessed 4 Dec. 2023. ',
  'Every Student Succeeds Act. The Every Student Succeeds Act vs. No Child Left Behind: What’s Changed?, USA Today, https://www.usatoday.com/story/news/politics/2015/12/10/every-student-succeeds-act-vs-no-child-left-behind-whats-changed/77088780/. Accessed 4 Dec. 2023. ',
  'Gold, Michael Evan. “THE EQUAL PAY ACT.” Introduction to the Law of Employment Discrimination, 2nd ed., Cornell University Press, 2001, pp. 78–92. JSTOR, http://www.jstor.org/stable/10.7591/j.ctv3mt9s5.8. Accessed 3 Dec. 2023.',
  'Great Recession. Setting The Record Straight On The Great Recession Of 2008, Chief Executive, https://chiefexecutive.net/record-straight-great-recession-2008/. Accessed 4 Dec. 2023. ',
  'Hartshorn, William C. “Elementary and Secondary Education Act of 1965.” Music Educators Journal, vol. 52, no. 1, 1965, pp. 65–68. JSTOR, https://doi.org/10.2307/3390536. Accessed 3 Dec. 2023.',
  'Hyland, Marie, et al. “Gendered Laws and Women in the Workforce.” American Economic Review: Insights, vol. 2, no. 4, Dec. 2020, pp. 475–90. www.aeaweb.org, https://doi.org/10.1257/aeri.20190542.',
  'Jennifer L. Jennings, and Douglas Lee Lauen. “Accountability, Inequality, and Achievement: The Effects of the No Child Left Behind Act on Multiple Measures of Student Learning.” RSF: The Russell Sage Foundation Journal of the Social Sciences, vol. 2, no. 5, 2016, pp. 220–41. JSTOR, https://doi.org/10.7758/rsf.2016.2.5.11. Accessed 3 Dec. 2023.',
  'Karl Alexander, and Stephen L. Morgan. “The Coleman Report at Fifty: Its Legacy and Implications for Future Research on Equality of Opportunity.” RSF: The Russell Sage Foundation Journal of the Social Sciences, vol. 2, no. 5, 2016, pp. 1–16. JSTOR, https://doi.org/10.7758/rsf.2016.2.5.01. Accessed 3 Dec. 2023.',
  'Kelly, Andrew P., and Rooney Columbus. College in the Time of Coronavirus: CHALLENGES FACING AMERICAN HIGHER EDUCATION. American Enterprise Institute, 2020. JSTOR, http://www.jstor.org/stable/resrep25358. Accessed 3 Dec. 2023.',
  'Nelson, Marjory. “Women Suffrage and Race.” Off Our Backs, vol. 9, no. 10, 1979, pp. 6–22. JSTOR, http://www.jstor.org/stable/25793145. Accessed 6 Dec. 2023.',
  'No Child Left Behind Act. The Nation’s Main K-12 Law: A Timeline of the ESEA, Education Week, https://www.edweek.org/policy-politics/the-nations-main-k-12-law-a-timeline-of-the-esea/2015/03. Accessed 4 Dec. 2023. ',
  'Silent Sentinels. National Woman’s Party Protests During World War I, National Park Service, https://www.nps.gov/articles/national-womans-party-protests-world-war-i.htm. Accessed 6 Dec. 2023. ',
  'Southard, Belinda A. Stillion. “Militancy, Power, and Identity: The Silent Sentinels as Women Fighting for Political Voice.” Rhetoric and Public Affairs, vol. 10, no. 3, 2007, pp. 399–417. JSTOR, http://www.jstor.org/stable/41940153. Accessed 6 Dec. 2023.',
  'Sum, Andrew, et al. “The Great Recession of 2008-2009 and the Blue-Collar Depression.” Challenge, vol. 53, no. 4, 2010, pp. 6–24. JSTOR, http://www.jstor.org/stable/40722651. Accessed 3 Dec. 2023.',
  'Yau, Nathan. “Ch. 4 Exploring Data Visually.” Data Points: Visualization That Means Something, John Wiley & Sons, Inc., Indianapolis, IN, 2013, pp. 136–137. ',
  'Yau, Nathan. “How to Get Started in Data Visualization.” The Process 151, Flowing Data. Accessed 6 Dec. 2023. ',
  'Ashby, Katherine J., et al. “The Gender Wealth Gap in the United States: Trends and Explanations.” Social Science Research, Academic Press, 3 June 2022, www.sciencedirect.com/science/article/pii/S0049089X22000515. ',
  '"Does Individualism Promote Gender Equality?” World Development, Pergamon, 5 Aug. 2019, www.sciencedirect.com/science/article/pii/S0305750X1930275X. ',
];

export default Resources;
