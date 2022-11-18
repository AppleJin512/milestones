import React from "react";
import { Grid, Box, Typography, styled, Container } from "@mui/material";
import useStyles from "../../styles/home_styles";

const ImageBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  backgroundPosition: "center",
  objectFit: "cover",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundImage: "url('/image/cartoon_1.png')",
}));

const TextContent = styled(Typography)(({ theme }) => ({
  color: "gray",
}));

export default function AboutUs(props) {
  const classes = useStyles();
  return (
    <Container className={classes.generalContainer} maxWidth="xl">
      <Box mb={8} mt={18}>
        <Grid container>
          <Grid item xs={12} md={6} sx={{ background: "black" }}>
            <Box
              width="100%"
              sx={{ color: "white", textAlign: "center" }}
              className={classes.aboutUsTextBox}
            >
              <Box mb={3}>
                <Typography variant="h5">ABOUT US</Typography>
              </Box>
              <Box mb={3}>
                <TextContent variant="subtitle2">
                  I'm a paragraph. Click here to add your own text and edit me.
                  It's easy. Just Click "Edit Text" or double click me to add
                  your own content and make changes to the font. Feel free to
                  drag and drop me anywhere you like on your page. I'm a great
                  place for you to tell a story and let your uses know a little
                  more about you.
                </TextContent>
              </Box>
              <Box mb={5}>
                <TextContent variant="subtitle2">
                  This is a great space to write long text about your company
                  and your services. You can use this space to go into a little
                  more detail about your company. Talk about your team and what
                  services you provide. Tell your visitors the story of how you
                  came up with the idea for your business and what makes you
                  different from your competitors. Make your company stand out
                  and show your visitors who you are.
                </TextContent>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box width="100%" height={570}>
              <ImageBox></ImageBox>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
