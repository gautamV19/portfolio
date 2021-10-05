import React from "react";
import { Grid, ButtonGroup, Button, Typography } from "@mui/material";
import myPhoto from "../assets/Images/myPhoto.jpeg";
import MyButton from "../Components/MyButton";

function Home() {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-evenly"
      sx={{ backgroundColor: "lightcyan" }}
    >
      <Grid item lg={4}>
        <img
          src={myPhoto}
          alt="My Photo"
          style={{ height: "300px", width: "300px", borderRadius: "50%" }}
        />
      </Grid>
      <Grid
        container
        item
        lg={6}
        sx={{ border: "4px dashed darkgreen", borderRadius: "2rem" }}
        p={2}
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Grid item alignSelf="flex-start">
          <Typography variant="h1" color="initial">
            Hello
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6" color="initial">
            Institute WebOps Coordinator @ IIT Madras | Project Management
            Coordinator @ Nirmaan IITM | Currently doing web development and
            coding | Aspiring Entrepreneur
          </Typography>
        </Grid>
        <Grid item container justifyContent="space-evenly">
          <MyButton>Resume</MyButton>
          <MyButton>Projects</MyButton>
          <MyButton>Contact</MyButton>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;
// height: "100%", width: "100%",

/*

 <Button
            size="large"
            variant="contained"
            sx={{ borderRadius: "50%", height: "7rem", width: "7rem" }}
          >
            Resume
          </Button>
          <Button
            size="large"
            variant="contained"
            sx={{ borderRadius: "50%", height: "7rem", width: "7rem" }}
          >
            Projects
          </Button>
          <Button
            size="large"
            variant="contained"
            sx={{
              borderRadius: "50%",
              height: "7rem",
              width: "7rem",
            }}
          >
            Contact
          </Button>
*/
