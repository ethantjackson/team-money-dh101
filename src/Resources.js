import GetAppIcon from "@mui/icons-material/GetApp";
import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";

const Resources = () => {
  // Define a custom style for the yellow divider
  const dividerStyle = {
    height: "5px",
    marginY: 4, // adds margin to the top and bottom
  };

  return (
    <>
      <Navbar />
      {/* BIBLIOGRAPHY Section */}
      <Box sx={{ backgroundColor: "#f5f5f5", paddingY: 10 }}>
        <Container sx={{ textAlign: "center" }}>
          <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: 2 }}>
            Annotated bibliography
          </Typography>
          <Typography paragraph>
            This page lists all the sources used throughout this website as well as a few details on
            the technical tools we used to make this project. You can also download our annotated
            bibliography if you would like an overview & analysis of select sources.
          </Typography>
          <Button
            variant="contained"
            sx={{
              marginTop: 2,
              color: "common.white",
              backgroundColor: "primary.main",
              "&:hover": {
                backgroundColor: "primary.dark",
              },
            }}
            startIcon={<GetAppIcon />}
            href="https://docs.google.com/document/d/1m4P7RYIyUFyiMqHfiYtwXHwlrSt-7jjX7TrkAoq546w/edit?usp=sharing"
          >
            DOWNLOAD THE ANNOTATED BIBLIOGRAPHY
          </Button>
        </Container>
      </Box>

      {/* Yellow Divider */}
      <Box sx={dividerStyle} />

      {/* The "Three Layers" Section */}
      <Box sx={{ backgroundColor: "#f5f5f5", paddingY: 4 }}>
        <Container>
          <Typography variant="h2" sx={{ fontWeight: "bold", marginBottom: 1 }} gutterBottom>
            The "Three Layers" of Digital Humanities Projects
          </Typography>
        </Container>
      </Box>

      {/* SOURCES Section */}
      <Box sx={{ backgroundColor: "#f5f5f5", paddingY: 4 }}>
        <Container>
          <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: 1 }} gutterBottom>
            Sourcing
          </Typography>
          <Typography paragraph>
            We focused on finding secondary sources that expanded upon explanations and underlying
            variables for the wealth gap. When selecting sources, we made sure to prioritize
            scholarly articles and academic journals. The sources that we chose are needed to help
            elaborate on our topic for the benefit of the reader. In How to Get Started in Data
            Visualization, Nathan provides a good anecdote that explains the benefit of our
            secondary sources. He explains, “Sometimes we forget that not everyone understands data.
            Means, medians, standard errors, skew, and distributions can be foreign concepts. It's
            our job to explain these technical concepts to a non-technical audience. We have to
            answer that all-important question, ‘So what?’”.
            <br />
            <br />
            We chose rich academic resources that allowed us to expand upon our resource questions.
            These secondary sources helped us expand upon the data we got from the Gender Data
            Portal. For example, Gendered Laws and Women in the Workforce gave us the academic
            framework to acknowledge that gender equality and a country’s income level are
            positively correlated with one another and both improve upon the other (Hyland Et. al
            2020). Another source from the Director of the UNESCO Institute for Statistics allowed
            us to explore the gender gap in access to education from regions around the country. It
            also allowed us to understand that the least developed countries in the world tend to
            have the greatest wealth gap in a global education system where women are beginning to
            outpace men in highly developed countries. We even found secondary that found a
            correlation between the individuality of a country and its gender equality in
            employment.
          </Typography>
        </Container>
      </Box>

      {/* PROCESSING Section */}
      <Box sx={{ backgroundColor: "#f5f5f5", paddingY: 4 }}>
        <Container>
          <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: 1 }} gutterBottom>
            Processing
          </Typography>
          <Typography paragraph>
            Most of our data was accessed from The World Bank which, fortunately, provided a CSV
            file that was relatively clean with minimal changes or extractions needed. However, the
            downloaded CSV file contained every indicator name that was collected by The World Bank
            and therefore, the file was particularly long and the data that was being used had to be
            singled out from the large file. There were instances of duplicate information or lack
            of information which was caught and cleaned out. Throughout the processing stage, we
            kept in mind that in order to narrow down and separate the data that we wanted to
            collect and use, we had to keep in mind what Nathan Yau warns in the article, How to Get
            Started in Data Visualization” that formatting data “...might mean aggregation,
            subsetting, generation, or reshaping your data files” (Yau, “How to Get Started in Data
            Visualization,” para. 13). Fortunately, the indicator name, indicator code, country
            name, country code, year, and value were easy to identify and grouped together which
            could then be organized on Google Sheets or Python, programs that can manipulate data.
            <br /> <br />
            Some of our data also came from Clearly Cultural which provided important data but
            needed to be collected as it was not a ready-to-use CSV file. The database was organized
            in terms of different levels or measures of individuality. It was fairly manageable to
            organize data based on country and its level of individuality which allowed for an
            analysis of countries and their integration of groups.
            <br /> <br />
            When processing our data and how it was going to be analyzed and visualized, we kept in
            mind Yau’s reading on Exploring Data Visually which approached exploration of data with
            four considerations, “What data do you have?, What do you want to know about your data?,
            What visualization methods should you use?, What do you see and does it make sense?”
            (Yau, “Exploring Data Visually,” p. 137). With this taken into account, we processed and
            analyzed data that was relevant to our research questions and that would add to the
            overall exploration. Once we extracted the data that we needed from the databases, we
            then organized them onto Google Sheets or Python. The data organized on Google Sheets
            was then uploaded onto Tableau to be transformed into visualizations. Data that was
            organized and coded onto Python also transformed into visualizations that represented
            and interpreted the data most efficiently.
          </Typography>
        </Container>
      </Box>

      {/* PRESENTATION Section */}
      <Box sx={{ backgroundColor: "#f5f5f5", paddingY: 4 }}>
        <Container>
          <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: 1 }} gutterBottom>
            Presentation
          </Typography>
          <Typography>
            We created our website using React and hosted our domain through Netlify, a web hosting
            service for which it is a publicly accessible hosting service. Through React we were
            able to code it ourselves and create a well-organized website. Our website is
            user-friend by making sure it is color-blind considerate, screen reader-friendly, and
            has no audio media. We started by creating our data visualizations and from there we
            decided to break up our website into 4 major navigation pages: Data, Narrative, Case
            Study, and resources. By clicking on each page it allows the reader to learn more about
            different aspects of our project. In each of our data visualizations, we made sure all
            units and graphs were labeled to make the visualizations as easy as possible to read. We
            made sure it was simple enough for everyone to understand while simultaneously assuring
            our information was properly represented. As Johanna Drucker in Humanities Approaches to
            Graphical Display, “The conventional forms of the graphical display of information,
            “data”, make use of a formal, unambiguous system of standard metrics.”. This was
            prevalent on our website because we had multiple graphs that we kept with standard
            metrics so everyone could understand. Our presentation was completely coded by our group
            members and meant to be as easy as possible to interact with. Overall, the project is
            user-friendly and very effective in presenting the information on our research question.
          </Typography>
        </Container>
      </Box>

      {/* Yellow Divider */}
      <Box sx={dividerStyle} />

      {/* Works Cited */}
      <Box sx={{ backgroundColor: "#f5f5f5", paddingY: 4 }}>
        <Container>
          <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 1 }} gutterBottom>
            Works Cited
          </Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis interdum facilisis
          tristique. Vivamus vitae pretium nisi, eget malesuada felis. Mauris consequat justo
          imperdiet elit dapibus laoreet. Pellentesque condimentum leo sed lobortis aliquet. Donec
          euismod non mauris sit amet congue. In eget massa sit amet ligula ullamcorper venenatis
          dignissim ultricies velit. Aliquam sit amet dui consequat, feugiat nisi non, fermentum
          lacus. Vestibulum feugiat fermentum varius. Sed rutrum purus et mi consequat hendrerit.
          Maecenas libero diam, tristique sed tortor non, luctus molestie erat. Pellentesque
          consectetur eros vitae purus varius, et pharetra tellus dictum. Pellentesque fermentum
          malesuada urna vel consectetur. Aliquam viverra sapien ut bibendum tincidunt. Pellentesque
          ultricies nisl justo.
        </Container>
      </Box>

      {/* Add additional sections as needed, followed by a yellow divider */}
    </>
  );
};

export default Resources;
