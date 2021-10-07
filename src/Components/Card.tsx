import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import social from "../assets/Images/socialMedia.jpg";

type AppPropsFront = {
  color: string;
  title?: string;
  img: string;
};

type AppPropsBack = {
  color: string;
  description?: string;
  link: string;
};

const frontside = ({ color, title = "My Project", img }: AppPropsFront) => (
  <Box sx={{ width: "350px", height: "350px", boxShadow: 3 }}>
    <Typography sx={{ fontSize: 14, backgroundColor: `${color}` }} gutterBottom>
      {title}
    </Typography>
    <img
      src={social}
      alt="demo-image"
      style={{ height: "70%", width: "100%" }}
    />
  </Box>
);

const backside = ({ color, link, description }: AppPropsBack) => (
  <Box sx={{ width: "350px", height: "350px", boxShadow: 3 }}>
    <Typography variant="body1" sx={{ backgroundColor: `${color}` }}>
      {description ||
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore veritatis eligendi minima quae sed magni, illum optio impedit vero exercitationem sapiente sit voluptates explicabo repellat et culpa vitae quo inventore."}
    </Typography>
    <Button size="large">{link}</Button>
  </Box>
);
const MyCard = {
  Front: frontside,
  Back: backside,
};

export default MyCard;
