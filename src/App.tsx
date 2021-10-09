import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Stack, Grid, Box, Slide } from "@mui/material";
// import { CSSTransition, SwitchTransition } from "react-transition-group";

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Profile from "./Pages/Profile";

import Resume from "./Pages/Resume";
import Portfolio from "./Pages/Portfolio";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";

import { TransitionGroup } from "react-transition-group";
import MyRoutes from "./Components/MyRoutes";

//todo add animations while routing and rendering

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <Stack
        sx={{ backgroundColor: "lightcyan", height: "100vh", width: "100%" }}
        justifyContent="space-between"
      >
        <Router>
          <Header />
          <MyRoutes />
          <Footer />
        </Router>
      </Stack>
    </Box>
  );
}

export default App;
