import Navbar from './Navbar';
import {
  Timeline as MuiTimeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import { Box, Container, Typography, Grid } from '@mui/material';

const Timeline = () => {
  return (
    <>
      <Navbar />
      <Container sx={{ paddingTop: '50px', paddingBottom: '50px' }}>
        <Typography variant='h2' sx={{ fontWeight: 'bold' }} mt={3} mb={2}>
          The United States: a case study
        </Typography>
        <Box sx={{ backgroundColor: 'white' }} pt={1} pb={2} pl={3} pr={3}>
          <Typography variant='h3' sx={{ fontWeight: 'bold' }} mt={1} mb={1}>
            Gender employment trends
          </Typography>
          <Grid container>
            <Grid item xs={12} md={6} sx={{ overflow: 'auto' }}>
              <iframe
                title='Men Employment Rates 15+'
                width='500'
                height='371'
                seamless
                frameBorder='0'
                scrolling='no'
                src='https://docs.google.com/spreadsheets/d/e/2PACX-1vS2jd9skicArGL5f5m56lzG-jTSfyDZfXTusgFhfqQ9_zcmRv0t5nShsqqdg0uyz7uPb95neUYCBFWg/pubchart?oid=1385848547&amp;format=interactive'
              />
            </Grid>
            <Grid item xs={12} md={6} sx={{ overflow: 'auto' }}>
              <iframe
                title='Women Employment Rates 15+'
                width='500'
                height='361'
                seamless
                frameBorder='0'
                scrolling='no'
                src='https://docs.google.com/spreadsheets/d/e/2PACX-1vS2jd9skicArGL5f5m56lzG-jTSfyDZfXTusgFhfqQ9_zcmRv0t5nShsqqdg0uyz7uPb95neUYCBFWg/pubchart?oid=969139854&amp;format=interactive'
              />
            </Grid>
            <Grid item xs={12} sx={{ overflow: 'auto', textAlign: 'center' }}>
              <iframe
                title='Women Employment Rates 15+'
                width='500'
                height='361'
                seamless
                frameBorder='0'
                scrolling='no'
                src='https://docs.google.com/spreadsheets/d/e/2PACX-1vS2jd9skicArGL5f5m56lzG-jTSfyDZfXTusgFhfqQ9_zcmRv0t5nShsqqdg0uyz7uPb95neUYCBFWg/pubchart?oid=1306061543&amp;format=interactive'
              />
            </Grid>
            <Typography>
              The graph on the right represents the employment-to-population
              ratio of women ages 15+ in percentage form in the United States.
              The chart is based on an ILO estimate which is internationally
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
              respected country. Although individualism and the values of
              autonomy help with women’s goals and choices to help them acquire
              wealth, without closing this gap the overall general wealth gap
              won't close(Davis and Williamson, 2019) With the United States the
              participation was not significantly different but there was a
              common trend of being less than men. This difference of men being
              more in the workforce than women is a factor in the widening
              wealth gap. To acquire wealth requires to be employed or working,
              and as long as the percentages stay in this trend it would be
              harder for the gap to close.
              <br />
              <br />
              The left chart on the other hand shows the employment to
              population ratio of men ages 15+ in percentage from in the United
              States. Comparing the percentages of men and women employment
              ratios shows that in the United States, there is more employment
              in males than females every year from 1991-2022. This includes
              where the percentage of men significantly dipped in 2020. Both
              genders had a dip in the percentages in the workforce due to the
              global pandemic. This gap in percentages correlates with our
              research because as there are more men working it will keep the
              wealth gap. As explained in “The gender wealth gap in the United
              States: Trends and explanations'', “In the United States, the main
              reason to expect a gender wealth gap is that men earn more than
              women… Men have more income to save and more access to
              wealth-building employer benefits'' (Lee, 2022). Due to men
              working at higher rates, they are more likely to acquire more
              income which ultimately leads to the creation of wealth in various
              ways. Although men and women might be doing the same work there is
              different compensations and participation in the workforce that
              keeps this gap from closing. Our research considers that there is
              also various factors that may influence the wealth gap but this is
              a major one to consider.
              <br />
              <br />
              Finally, the bottom chart helps visualize the evolution of
              employment disparities between genders. This employment disparity
              can serve as an indicator of wealth disparity (which could
              potentially be more severe than employment trends indicate, when
              considered alongside possible gender-based pay gaps). Considering
              this evolution of employment and, in turn, wealth disparity, we
              can refer to the following timeline to study how various events
              have affected gender-wealth gaps in America.
            </Typography>
          </Grid>
        </Box>
        <Typography
          variant='h3'
          sx={{ fontWeight: 'bold' }}
          mt={3}
          mb={2}
          pl={3}
          pr={3}
        >
          A gender-wealth gap history
        </Typography>
        <Typography mt={1} pl={3} pr={3}>
          These hallmark events throughout the U.S.’s history have shaped
          education, individualism, and wealth disparities. By comparing these
          events with the trends we have identified in the U.S. gender-wealth
          gap over time, the U.S. can serve as a case study to determine how
          educational and indivualist/collectivist factors may influence
          gender-wealth disparity.
          <br />
          <br />
          Ultimately, the period of shrinking employment disparity from 1991 to
          2004 may reflect the cumulative effect of progressive events expanding
          the educational and individual rights of women. Here, expanding
          individual rights of women may be indicative of growing individuality
          in American women (with individuality being a trait that we have
          negatively correlated with gender-wealth gaps). Conversely, periods of
          economic turmoil such as the 2008 Great Recession exacerbate the
          employment and wealth inequalities between men and women. Considering
          this history of the gender-wealth gap, this United States case study
          supports the narratives we have extracted from our data: closing
          educational gaps and promoting individual rights of women are
          effective means of closing the wealth gap.
        </Typography>
        <MuiTimeline position='alternate-reverse'>
          {timelineItems.map((timelineItem, idx) => (
            <TimelineItem key={timelineItem.title}>
              <TimelineSeparator sx={{ color: 'white' }}>
                <TimelineDot variant='outlined' color='inherit' />
                {idx < timelineItems.length - 1 && (
                  <TimelineConnector sx={{ backgroundColor: 'white' }} />
                )}
              </TimelineSeparator>
              <TimelineContent
                sx={
                  idx % 2 === 0
                    ? {
                        backgroundColor: (theme) => theme.palette.primary.main,
                        borderRadius: '15px',
                        padding: '16px',
                        position: 'relative',
                        right: '15px',
                      }
                    : {
                        backgroundColor: (theme) => theme.palette.primary.main,
                        borderRadius: '15px',
                        padding: '16px',
                        position: 'relative',
                        left: '15px',
                      }
                }
              >
                <Typography
                  variant='h3'
                  sx={{ fontWeight: 'bold', color: '#fff' }}
                  mb={1}
                >
                  {timelineItem.title}
                </Typography>
                <Typography color='#fff' sx={{ textAlign: 'justify' }}>
                  {timelineItem.text}
                </Typography>
                {timelineItem.imgSrc && (
                  <Box mt={1}>
                    <img
                      src={timelineItem.imgSrc}
                      alt={timelineItem.title}
                      width='100%'
                      style={{ maxHeight: '30vh', objectFit: 'cover' }}
                    />
                    <Typography
                      variant='body2'
                      color='#bbb'
                      sx={{
                        fontSize: '0.8rem',
                        lineHeight: '1.2',
                        textAlign: 'justify',
                        fontWeight: '100',
                      }}
                    >
                      {timelineItem.source}
                    </Typography>
                  </Box>
                )}
              </TimelineContent>
            </TimelineItem>
          ))}
        </MuiTimeline>
        <Typography variant='h3' mt={3} mb={1}>
          Timeline Bibliography
        </Typography>
        {biblioTimelineEntries.map((entry) => (
          <Typography variant='body2' color='grey' mt={2}>
            {entry}
          </Typography>
        ))}
      </Container>
    </>
  );
};

const timelineItems = [
  {
    title: '1917: Silent Sentinels',
    text: "The Silent Sentinels were protestors who picketed around the White House for women's suffrage. They pressured President Wilson to endrse their movement through his militaristic doctrine. This democratic advancement allowed women to gain more rights which added to the culture of individualism.",
    imgSrc:
      'https://www.nps.gov/bepa/learn/images/SuffragePicketing1az.jpg?maxwidth=650&autorotate=false&quality=78&format=webp',
    source:
      'Image Source: Silent Sentinels. National Woman’s Party Protests During World War I, National Park Service, https://www.nps.gov/articles/national-womans-party-protests-world-war-i.htm. Accessed 6 Dec. 2023.',
  },
  {
    title: '1920: 19th Amendment',
    text: 'In 1919, the 19th Amendment for woman suffrage was passed by Congress and in 1920 it was ratified by the states. This amendment gave women the right to vote although only white women were allowed to.',
    imgSrc:
      'https://www.thenation.com/cdn-cgi/image/width=896,quality=80,format=auto/wp-content/uploads/2015/08/19th_amendment_loc_img.jpg',
    source:
      'Image Source: 19th Amendment. August 26, 1920: The 19th Amendment Goes Into Effect, Granting Women the Vote, The Nation, https://www.thenation.com/article/archive/august-26-1920-the-19th-amendment-is-ratified-granting-women-the-vote/. Accessed 6 Dec. 2023.',
  },
  {
    title: '1954: Brown v. Board of Education',
    text: 'The Brown v. Board of Education case ruled that racial segregation in public schools was unconstitutional, leading to egalitarian racial ideals in education. This helped set a precedent for legal protections for minority groups although unequal educational opportunities still remained.',
    imgSrc:
      'https://www.naacpldf.org/wp-content/uploads/GettyImages-517350944-2048x1638.jpg',
    source:
      'Image Source: Brown v. Board of Education. Brown v. Board of Education, The Case That Changed America, Legal Defense Fund, https://www.naacpldf.org/brown-vs-board/. Accessed 4 Dec. 2023. ',
  },
  {
    title: '1963: The Equal Pay Act',
    text: 'The Equal Pay Act, which was enacted by John F. Kennedy, was the first federal law that required employers to pay the same wages for a man and a woman when performing the same job. However, this law was unable to prevent employers from discriminating against women or not hiring them.',
    imgSrc:
      'https://assets.editorial.aetnd.com/uploads/2017/11/equal-pay-act-gettyimages-1232020267.jpg?width=3840&height=1920&crop=3840%3A1920%2Csmart&quality=75&auto=webp',
    source:
      'Image Source: Equal Pay Act, History, https://www.history.com/topics/womens-history/equal-pay-act. Accessed 4 Dec. 2023.',
  },
  {
    title: '1964: Title VII of Civil Rights Act',
    text: 'Title VII of the Civil Rights Act stated that employers could not discriminate in employment “...on the basis of sex as well as on the bases of race, color, religion, and national origin” (Brauer 1983). According to The Journal of Southern History, this Act contributed to the filing and formal addressment of over four thousand cases of sex discrimination.',
  },
  {
    title: '1965: Elementary and Secondary Education Act',
    text: 'The Elementary and Secondary Education Act aimed to address funding gaps for schools serving low-income students by providing federal funding for “...professional development, instructional materials, resources to support educational programs, and the promotion of parental involvement” (Hartshorn 1965). ',
    imgSrc:
      'https://epe.brightspotcdn.com/1a/e6/c2e671ebc72cf3a39922195c6bf8/26-esea-1965-bill-signing-lyndon-johnson-kate-deadrich-loney-bw-600.jpg',
    source:
      'Image Source: Elementary and Secondary Education Act. The Nation’s Main K-12 Law: A Timeline of the ESEA, Education Week, https://www.edweek.org/policy-politics/the-nations-main-k-12-law-a-timeline-of-the-esea/2015/03. Accessed 4 Dec. 2023. ',
  },
  {
    title: '1972: Title IX of Civil Rights Restoration Act',
    text: 'Title IX of the Civil Rights Restoration Act prohibited discrimination on the basis of sex in education programs or activities that receive federal funding. This was enacted to help create more equal opportunities in education for women.  ',
  },
  {
    title: '1990: The Coleman Report',
    text: 'The Coleman Report was a research investigation that determined that family resources and socioeconomic background has an impact on children’s education achievement. This report emphasizes the problems of the wealth gap and the importance of family background and wealth on academic success.  ',
  },
  {
    title: '2001: No Child Left Behind Act',
    text: 'The No Child Left Behind Act was a reform that forced schools, through accountability pressure, to publicize information on academic performance. This was meant to address disparities in academic performance for minorities although some argue that the Act did the opposite as failing schools received less rewards based on “adequate yearly progress.” ',
    imgSrc:
      'https://epe.brightspotcdn.com/dims4/default/b17fa0a/2147483647/strip/true/resize/840x570!/format/webp/quality/90/?url=https%3A%2F%2Fepe-brightspot.s3.us-east-1.amazonaws.com%2F26%2F49%2Fcb55705640d3a3389ad69ecd65d8%2F26-george-bush-signs-nclb-act-2002.jpg',
    source:
      'Image Source: No Child Left Behind Act. The Nation’s Main K-12 Law: A Timeline of the ESEA, Education Week, https://www.edweek.org/policy-politics/the-nations-main-k-12-law-a-timeline-of-the-esea/2015/03. Accessed 4 Dec. 2023. ',
  },
  {
    title: '2008: Great Recession',
    text: 'The Great Recession was an economic crisis that led to extreme job loss and hardships. The wealth gap only increased during this time as low-income families and less educated people were more affected.',
    imgSrc:
      'https://chiefexecutive.net/wp-content/uploads/2018/11/AdobeStock_9965704-compressor-scaled.jpeg',
    source:
      'Image Source: Great Recession. Setting The Record Straight On The Great Recession Of 2008, Chief Executive, https://chiefexecutive.net/record-straight-great-recession-2008/. Accessed 4 Dec. 2023.',
  },
  {
    title: '2015: Every Student Succeeds Act',
    text: 'The Every Student Succeeds Act changed the federal government’s involvement in education from the No Child Left Behind Act to a more relaxed role while still acknowledging disparities between education and wealth. The Act left state governments to manage and improve education policies for disadvantaged students. ',
    imgSrc:
      'https://www.usatoday.com/gcdn/-mm-/514922ee78c25e2bb90a92cf29ab3e31e5542750/c=0-153-3000-1848/local/-/media/2015/12/10/USATODAY/USATODAY/635853614123377872-500817362-78201944.JPG?width=1320&height=746&fit=crop&format=pjpg&auto=webp',
    source:
      'Image Source: Every Student Succeeds Act. The Every Student Succeeds Act vs. No Child Left Behind: What’s Changed?, USA Today, https://www.usatoday.com/story/news/politics/2015/12/10/every-student-succeeds-act-vs-no-child-left-behind-whats-changed/77088780/. Accessed 4 Dec. 2023. ',
  },
  {
    title: '2020: COVID-19 Pandemic',
    text: 'The COVID-19 Pandemic further revealed inequalities in education as the virus forced schools to shut down and move into a new way of learning; a disruption that hurt low-income students. The pandemic also led to an increase in the wealth gap as lower-income communities were hit harder. ',
    imgSrc:
      'https://www.census.gov/content/dam/Census/library/stories/2020/08/schooling-during-the-covid-19-pandemic.jpg',
    source:
      'Image Source: COVID-19 Pandemic Online Learning. Schooling During the COVID-19 Pandemic, United States Census Bureau, https://www.census.gov/library/stories/2020/08/schooling-during-the-covid-19-pandemic.html. Accessed 4 Dec. 2023. ',
  },
];

const biblioTimelineEntries = [
  '19th Amendment. August 26, 1920: The 19th Amendment Goes Into Effect, Granting Women the Vote, The Nation, https://www.thenation.com/article/archive/august-26-1920-the-19th-amendment-is-ratified-granting-women-the-vote/. Accessed 6 Dec. 2023.',
  'Black, Derek W. “Abandoning the Federal Role in Education: The Every Student Succeeds Act.” California Law Review, vol. 105, no. 5, 2017, pp. 1309–74. JSTOR, https://www.jstor.org/stable/26577710. Accessed 3 Dec. 2023.',
  'Brauer, Carl M. “Women Activists, Southern Conservatives, and the Prohibition of Sex Discrimination in Title VII of the 1964 Civil Rights Act.” The Journal of Southern History, vol. 49, no. 1, 1983, pp. 37–56. JSTOR, https://doi.org/10.2307/2209305. Accessed 3 Dec. 2023.',
  'Brown v. Board of Education. Brown v. Board of Education, The Case That Changed America, Legal Defense Fund, https://www.naacpldf.org/brown-vs-board/. Accessed 4 Dec. 2023.',
  'Carson, Clayborne. “The Fateful Turn toward Brown v. Board of Education.” Washington History, vol. 16, no. 2, 2004, pp. 6–10. JSTOR, http://www.jstor.org/stable/40073391. Accessed 3 Dec. 2023.',
  'CHUDACOFF, HOWARD P. “The Civil Rights Restoration Act and Enforcement of Title IX.” Changing the Playbook: How Power, Profit, and Politics Transformed College Sports, University of Illinois Press, 2015, pp. 83–104. JSTOR, http://www.jstor.org/stable/10.5406/j.ctt19705m9.9. Accessed 3 Dec. 2023.',
];

export default Timeline;
