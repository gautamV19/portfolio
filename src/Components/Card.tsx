import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import social from "../assets/Images/socialMedia.jpg";
import { Link } from "react-router-dom";

type AppPropsFront = {
  title?: string;
  img: string;
};

type AppPropsBack = {
  description?: string;
  link: string;
};

const frontside = ({ title = "My Project", img }: AppPropsFront) => (
  <Box
    sx={{
      width: "350px",
      height: "350px",
      boxShadow: 3,
      backgroundColor: "white",
    }}
  >
    <Typography variant="h4" color="blue">
      {title}
    </Typography>
    <img
      src={social}
      alt="demo-image"
      style={{ height: "70%", width: "100%" }}
    />
  </Box>
);

const backside = ({ link, description }: AppPropsBack) => (
  <Box
    sx={{
      width: "350px",
      height: "350px",
      boxShadow: 3,
      backgroundColor: "lightgrey",
    }}
  >
    <Typography variant="body1" sx={{ backgroundColor: "lightgreen" }}>
      {description ||
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore veritatis eligendi minima quae sed magni, illum optio impedit vero exercitationem sapiente sit voluptates explicabo repellat et culpa vitae quo inventore."}
    </Typography>

    <Link
      style={{ textDecoration: "none" }}
      to={{
        pathname: "https://www.linkedin.com/in/gautam-vaja-b80115209/",
      }}
      target="_blank"
    >
      {"See Demo"}
    </Link>
  </Box>
);
const MyCard = {
  Front: frontside,
  Back: backside,
};

export default MyCard;
