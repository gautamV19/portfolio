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
import { AnimatePresence, motion } from "framer-motion";

//todo add animations while routing and rendering

function App() {
  return (
    <Stack
      sx={{
        background:
          "linear-gradient(180deg, rgb(255, 255, 255) 7%, f3f3f3 80%)",
        height: "100vh",
        width: "100%",
      }}
      justifyContent="space-between"
    >
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </Stack>
  );
}

export default App;
