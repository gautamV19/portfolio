import React from "react";
import {
  Grid,
  ButtonGroup,
  Button,
  Box,
  Typography,
  Avatar,
} from "@mui/material";
import myPhoto from "../assets/Images/myPhoto.png";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import MenuBox from "./MenuBox";

export default function MobileHeader() {
  return (
    <Grid
      container
      justifyContent="space-between"
      sx={{ borderRadius: "1em", height: "13vh" }}
      pr={1}
    >
      <Grid item>
        <Box>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button sx={{ fontSize: "1.3rem", border: "0.1em dashed grey" }}>
              <Typography variant="h4" color="black">
                Gautam Vaja
              </Typography>
            </Button>
          </Link>
          <Typography variant="subtitle1" color="grey">
            Software Devloper
          </Typography>
        </Box>
      </Grid>
      <Grid item>
        <MenuBox />
      </Grid>
    </Grid>
  );
}
