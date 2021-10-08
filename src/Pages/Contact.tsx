import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import ContactForm from "../Components/ContactForm";
import MyButton from "../Components/MyButton";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <Grid
      container
      spacing={3}
      direction="column"
      justifyContent="space-around"
      alignItems="center"
      wrap="wrap"
      sx={{ backgroundColor: "grey" }}
    >
      <Grid
        container
        item
        spacing={3}
        direction="column"
        justifyContent="space-around"
        alignItems="center"
        wrap="wrap"
        sx={{ backgroundColor: "grey", width: "40%" }}
      >
        <Typography variant="h2" color="black">
          Contact
        </Typography>
        <Typography variant="subtitle1" color="primary">
          Looking forward to hearing from you
        </Typography>
        <Typography variant="h4" color="initial">
          Phone
        </Typography>
        <Typography variant="subtitle1" color="primary">
          8779536074
        </Typography>
        <Typography variant="h4" color="initial">
          Email:
        </Typography>
        <Typography variant="subtitle1" color="primary">
          gautamiitmee@gmail.com
        </Typography>
      </Grid>
      <Grid item sx={{ backgroundColor: "grey", width: "40%" }}>
        <ContactForm />
        <Link to="/">
          <MyButton>Submit</MyButton>
        </Link>
      </Grid>
    </Grid>
  );
}
