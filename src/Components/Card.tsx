import * as React from "react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { List, ListItem, ListItemText } from "@mui/material";

type AppPropsFront = {
  title?: string;
  img: string;
  link: string;
};

type AppPropsBack = {
  description?: string[];
  link: string;
  demo: string;
};

function ResponsiveSizes() {
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.only("sm"));
  const matchesXs = useMediaQuery(theme.breakpoints.only("xs"));

  const height = { lg: "45vh", sm: "39vh", xs: "39vh" };
  const width = { lg: "30vw", sm: "40vw", xs: "80vw" };

  const size = {
    h: (matchesSm && height.sm) || (matchesXs && height.xs) || height.lg,
    w: (matchesSm && width.sm) || (matchesXs && width.xs) || width.lg,
  };

  return size;
}

function Frontside({ title = "My Project", img, link }: AppPropsFront) {
  const theme = useTheme();
  const matchesXs = useMediaQuery(theme.breakpoints.only("xs"));

  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      sx={{
        width: `${ResponsiveSizes().w}`,
        height: `${ResponsiveSizes().h}`,
        boxShadow: 3,
        backgroundColor: "white",
        borderRadius: "0.7rem",
        margin: "15px 0",
      }}
      spacing={2}
      p={matchesXs ? 2 : 1}
    >
      <Box
        style={{
          fontSize: "2rem",
          textAlign: "center",
          fontFamily: "Monospace",
          width: "100%",
        }}
      >
        {title}
      </Box>
      <img
        src={img}
        alt="demo"
        style={{
          borderRadius: "0rem 0em 0.7rem 0.7em ",
          height: "60%",
          width: "100%",
        }}
      />
      {matchesXs && (
        <Button
          variant="contained"
          style={{ borderRadius: "0.35rem", backgroundColor: "#eea302" }}
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
      )}
    </Grid>
  );
}

function Backside({ demo, link, description }: AppPropsBack) {
  return (
    <Grid
      container
      justifyContent="space-between"
      alignItems="center"
      sx={{
        width: `${ResponsiveSizes().w}`,
        height: `${ResponsiveSizes().h}`,
        boxShadow: 3,
        backgroundColor: "lightgrey",
        borderRadius: "0.7rem",
        margin: "15px 0",
      }}
      p={1}
    >
      <Typography
        variant="h6"
        sx={{ fontWeight: "550", height: "65%", overflow: "clip" }}
      >
        <List>
          {description?.map((item, index) => (
            <ListItem key={index}>
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Typography>

      {link && (
        <Button
          variant="contained"
          style={{
            borderRadius: "0.7rem",
            fontSize: "1.5rem",
            backgroundColor: "#eea302",
          }}
        >
          <Link
            to={{ pathname: `${link}` }}
            target="_blank"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            Link
          </Link>
        </Button>
      )}
      {demo && (
        <Button
          variant="contained"
          style={{
            borderRadius: "0.7rem",
            fontSize: "1.5rem",
            backgroundColor: "#eea302",
          }}
        >
          <Link
            to={{ pathname: `${demo}` }}
            target="_blank"
            style={{
              color: "white",
              textDecoration: "none",
            }}
          >
            Demo
          </Link>
        </Button>
      )}
    </Grid>
  );
}
const MyCard = {
  Front: Frontside,
  Back: Backside,
};

export default MyCard;
