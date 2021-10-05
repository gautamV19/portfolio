import React from "react";
import { Grid, ButtonGroup, Button, Typography } from "@mui/material";
import myPhoto from "../assets/Images/myPhoto.jpeg";
import bg from "../assets/Images/bg.jpg";

function Home() {
  return (
    <Grid container direction="row" justifyContent="space-evenly" mt={16}>
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
        sx={{ border: "4px dashed yellow" }}
        p={2}
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Grid item>
          <h1>Hello!</h1>
        </Grid>
        <Grid item>
          <Typography variant="h6" color="initial">
            Institute WebOps Coordinator @ IIT Madras | Project Management
            Coordinator @ Nirmaan IITM | Currently doing web development and
            coding | Aspiring Entrepreneur
          </Typography>
        </Grid>
        <Grid item>
          <ButtonGroup
            size="large"
            variant="text"
            aria-label="text button group"
          >
            <Button>Resume</Button>
            <Button>Projects</Button>
            <Button>Contact Me</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Home;
// height: "100%", width: "100%",
