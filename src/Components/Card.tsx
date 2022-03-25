import * as React from "react";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

type AppPropsFront = {
  title?: string;
  img: string;
  link: string;
};

type AppPropsBack = {
  description?: string;
  link: string;
};

function ResponsiveSizes() {
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.only("sm"));
  const matchesXs = useMediaQuery(theme.breakpoints.only("xs"));

  const height = { lg: "39vh", sm: "39vh", xs: "39vh" };
  const width = { lg: "24vw", sm: "40vw", xs: "80vw" };

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
        borderRadius: "2rem",
        margin: "15px 0",
      }}
      spacing={2}
      p={matchesXs ? 2 : 1}
    >
      <Box style={{ fontSize: "2rem" }}>{title}</Box>
      <img
        src={img}
        alt="demo"
        style={{
          borderRadius: "0rem 0em 2rem 2em ",
          height: "70%",
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

function Backside({ link, description }: AppPropsBack) {
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
        borderRadius: "2rem",
        margin: "15px 0",
      }}
      p={1}
    >
      <Typography
        variant="h6"
        sx={{ fontWeight: "550", height: "65%", overflow: "clip" }}
      >
        {description ||
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore veritatis eligendi minima quae sed magni, illum optio impedit vero exercitationem sapiente sit voluptates explicabo repellat et culpa vitae quo inventore."}
      </Typography>

      <Button
        variant="contained"
        style={{
          borderRadius: "2rem",
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
          See Demo
        </Link>
      </Button>
    </Grid>
  );
}
const MyCard = {
  Front: Frontside,
  Back: Backside,
};

export default MyCard;
