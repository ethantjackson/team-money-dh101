import GetAppIcon from "@mui/icons-material/GetApp";
import { Box, Button, Container, Divider, Link, Paper, Typography } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";

const Resources = () => {
  return (
    <>
      <Navbar />
      <Box sx={{ backgroundColor: "#f5f5f5", paddingBottom: 4 }}>
        <Container sx={{ paddingTop: 8, textAlign: "center", marginBottom: 4 }}>
          <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: 4 }}>
            BIBLIOGRAPHY
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
            href="#dummy-link"
          >
            DOWNLOAD THE ANNOTATED BIBLIOGRAPHY
          </Button>
        </Container>
      </Box>

      {/* Use Paper component to give a raised card effect for each section */}
      <Paper elevation={3} sx={{ margin: 4, padding: 4 }}>
        <Container>
          <Typography variant="h4" sx={{ fontWeight: "bold" }} gutterBottom>
            The "Three Layers" of Digital Humanities Projects
          </Typography>
          <Typography paragraph>
            Our research studies the relationship between U.S. presidential administrations and the
            deployment of drone warfare in Afghanistan, Pakistan, Yemen, and Somalia. We are using a
            combination of{" "}
            <Link href="#" underline="hover">
              four datasets from The Bureau of Investigative Journalism
            </Link>{" "}
            regarding the U.S. drone campaign in four different countries. In addition, we plan to
            use a combination of books, journal articles, and websites to provide perspective on the
            dataset. As external insight on US drone strikes beyond the data provided by the Bureau
            of Investigative Journalism, these documents provide background to the numbers in our
            dataset and help our team approach analysis of the dataset understanding the US drone
            strike situation in Afghanistan, Pakistan, Yemen, and Somalia from an objective
            standpoint. Using the information available in the dataset and insight from additional
            reading, we were able to develop computationally tractable research questions.
          </Typography>
          Our comparative methodology makes our project unique. Most projects using drone-enabled
          airstrike data, including the Bureau of Investigative Journalism, either focus on one
          country at a time or one administration at a time, but never compare country-to-country or
          administration-to-administration. We are use four discrete databases (one per country),
          which, to our knowledge, has not been done in a single project. Our literature review
          shows that scholars have tried comparing the different political, geographical,
          humanitarian, and legal contexts of the countries to each other. Generally, President
          Obama is attributed to have been the pivotal actor in how wars are fought. However, most
          of this literature was written before Donald Trump came into office. Our data does include
          updates with Trumps deployment of drones and is included in our analysis to determine
          discrepancy or continuity between his patterns and President Obamas patterns. Overall, we
          believe our project manipulates and highlights the data in ways that have not been
          previously done, in an overall attempt to beg the question, "is drone warfare worth it?"
        </Container>
      </Paper>

      {/* Divider for visual separation */}
      <Divider variant="middle" />

      <Paper elevation={3} sx={{ margin: 4, padding: 4, backgroundColor: "#e8eaf6" }}>
        <Container>
          <Typography variant="h4" sx={{ fontWeight: "bold" }} gutterBottom>
            PROCESSING
          </Typography>
          <Typography paragraph>
            Our data is provided by the Journal of Investigative Journalism in four individual
            Google Sheets, one for each country. We exported these datasets and created our own
            database in Google Sheets. This allowed us to clean the data as necessary for our maps
            and data visualizations, combine data across countries, and order data according to
            presidential administration.
          </Typography>
          The maps we created are important for showing the geographical and temporal contexts in
          which drone strikes are happening. We used the HamsterMap Geocoder and Google Maps to
          geocode the locations in our data into latitudes and longitudes. Our maps were made in
          CARTO, a location intelligence software, and Tableau. More yap yap yap
        </Container>
      </Paper>

      {/* Divider for visual separation */}
      <Divider variant="middle" />

      <Paper elevation={3} sx={{ margin: 4, padding: 4, backgroundColor: "#c5cae9" }}>
        <Container>
          <Typography variant="h4" sx={{ fontWeight: "bold" }} gutterBottom>
            PRESENTATION
          </Typography>
          <Typography paragraph>yap yap yap</Typography>
        </Container>
      </Paper>

      {/* Add additional styled sections as needed */}
    </>
  );
};

export default Resources;
