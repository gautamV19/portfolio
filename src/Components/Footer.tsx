import React from "react";
import { Grid } from "@mui/material";
export default function Footer() {
  return (
    <Grid
      container
      p={5}
      justifyContent="center"
      sx={{ backgroundColor: "cyan", fontSize: "3rem" }}
    >
      This is my portfolio website
    </Grid>
  );
}
