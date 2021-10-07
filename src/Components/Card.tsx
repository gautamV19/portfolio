import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Interface } from "readline";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const MyCard = () => (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} gutterBottom>
        Social Media app
      </Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis vel eum
        non ipsum modi, iste molestiae, omnis eveniet ullam similique qui iusto
        enim sint praesentium doloribus recusandae sunt, reiciendis est.
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

export default MyCard;
