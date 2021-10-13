import * as React from "react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import social from "../assets/Images/socialMedia.jpg";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

type AppPropsFront = {
  title?: string;
  img: string;
};

type AppPropsBack = {
  description?: string;
  link: string;
};

const frontside = ({ title = "My Project", img }: AppPropsFront) => (
  <Grid
    className="cardfront"
    container
    justifyContent="space-between"
    alignItems="center"
    sx={{
      width: "250px",
      height: "305px",
      boxShadow: 3,
      backgroundColor: "white",
      borderRadius: "2rem",
      margin: "15px 0",
    }}
    p={1}
  >
    <Box style={{ fontSize: "2rem", fontFamily: "cursive" }}>{title}</Box>
    <img
      src={social}
      alt="demo-image"
      style={{ borderRadius: "2rem", height: "70%", width: "100%" }}
    />
  </Grid>
);

const backside = ({ link, description }: AppPropsBack) => (
  <Grid
    container
    justifyContent="space-between"
    alignItems="center"
    sx={{
      width: "240px",
      height: "285px",
      boxShadow: 3,
      backgroundColor: "lightgrey",
      borderRadius: "2rem",
      margin: "15px 0",
    }}
    p={1}
  >
    <Typography variant="body1" sx={{ fontWeight: "400" }}>
      {description ||
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore veritatis eligendi minima quae sed magni, illum optio impedit vero exercitationem sapiente sit voluptates explicabo repellat et culpa vitae quo inventore."}
    </Typography>

    <Button
      variant="contained"
      style={{ borderRadius: "2rem", backgroundColor: "#eea302" }}
    >
      <Link
        to={{ pathname: `${link}` }}
        target="_blank"
        style={{
          color: "white",
          textDecoration: "none",
        }}
      >
        See Demo
      </Link>
    </Button>
  </Grid>
);
const MyCard = {
  Front: frontside,
  Back: backside,
};

export default MyCard;
