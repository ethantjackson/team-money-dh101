import GetAppIcon from "@mui/icons-material/GetApp";
import { Box, Button, Container, Typography } from "@mui/material";
import React from "react";
import Navbar from "./Navbar";

const DataCritique = () => {
  // Define a custom style for the yellow divider
  const dividerStyle = {
    height: "5px",
    marginY: 4, // adds margin to the top and bottom
  };

  return (
    <>
      <Navbar />
      <Box sx={{ backgroundColor: "#f5f5f5", paddingY: 4 }}>
        <Container sx={{ textAlign: "center" }}>
          <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: 2 }}>
            Data / Critique
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
            Explore the full database
          </Button>
        </Container>
      </Box>

      {/* Yellow Divider */}
      <Box sx={dividerStyle} />

      <Box sx={{ backgroundColor: "#f5f5f5", paddingY: 4 }}>
        <Container>
          <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 1 }} gutterBottom>
            About the Database
          </Typography>
        </Container>
      </Box>

      {/* Yellow Divider */}
      <Box sx={dividerStyle} />

      {/* SOURCES Section */}
      <Box sx={{ backgroundColor: "#f5f5f5", paddingY: 4 }}>
        <Container>
          <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 1 }} gutterBottom>
            Data Critique
          </Typography>
          <Typography paragraph>
            Before we could create an argument with data, we needed to critically analyze the
            politics of data collection processes & outcomes.
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 1 }} gutterBottom>
            How was the data generated?
          </Typography>
          What incentive is there for The Bureau to investigate the drone campaign? What are the
          stakes & who are the stakeholders?
          <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 1 }} gutterBottom>
            What are the original sources?
          </Typography>
          What incentive is there for The Bureau to investigate the drone campaign? What are the
          stakes & who are the stakeholders?
          <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 1 }} gutterBottom>
            What information is left out?
          </Typography>
          What incentive is there for The Bureau to investigate the drone campaign? What are the
          stakes & who are the stakeholders?
          <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 1 }} gutterBottom>
            Who does the dataset represent?
          </Typography>
          What incentive is there for The Bureau to investigate the drone campaign? What are the
          stakes & who are the stakeholders?
        </Container>
      </Box>

      {/* PROCESSING Section */}
      <Box sx={{ backgroundColor: "#f5f5f5", paddingY: 4 }}>
        <Container>
          <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 1 }} gutterBottom>
            PROCESSING
          </Typography>
          <Typography paragraph>
            MEOW MEOW Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis interdum
            facilisis tristique. Vivamus vitae pretium nisi, eget malesuada felis. Mauris consequat
            justo imperdiet elit dapibus laoreet. Pellentesque condimentum leo sed lobortis aliquet.
            Donec euismod non mauris sit amet congue. In eget massa sit amet ligula ullamcorper
            venenatis dignissim ultricies velit. Aliquam sit amet dui consequat, feugiat nisi non,
            fermentum lacus. Vestibulum feugiat fermentum varius. Sed rutrum purus et mi consequat
            hendrerit. Maecenas libero diam, tristique sed tortor non, luctus molestie erat.
            Pellentesque consectetur eros vitae purus varius, et pharetra tellus dictum.
            Pellentesque fermentum malesuada urna vel consectetur. Aliquam viverra sapien ut
            bibendum tincidunt. Pellentesque ultricies nisl justo.
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

      {/* Yellow Divider */}
      <Box sx={dividerStyle} />

      {/* PRESENTATION Section */}
      <Box sx={{ backgroundColor: "#f5f5f5", paddingY: 4 }}>
        <Container>
          <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 1 }} gutterBottom>
            PRESENTATION
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

export default DataCritique;
