import Navbar from './Navbar';
import {
  Timeline as MuiTimeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from '@mui/lab';
import { useMediaQuery, Box, Container, Typography } from '@mui/material';

const Timeline = () => {
  const isSmallScreen = useMediaQuery('(max-width: 600px)');
  console.log(isSmallScreen);
  return (
    <>
      <Navbar />
      <Container sx={{ paddingTop: '50px' }}>
        <Typography variant='h2' sx={{ fontWeight: 'bold' }}>
          A Gender-Wealth Gap History
        </Typography>
        <Typography>
          These hallmark events throughout the U.S.’s history have shaped
          education, individualism, and wealth disparities. By comparing these
          events with the trends we have identified in the U.S. gender-wealth
          gap over time, the U.S. can serve as a case study to determine how
          educational and indivualist/collectivist factors may influence
          gender-wealth disparity.
        </Typography>
        <MuiTimeline position='alternate'>
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
                  idx % 2 !== 0
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
      </Container>
    </>
  );
};

const timelineItems = [
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

export default Timeline;
