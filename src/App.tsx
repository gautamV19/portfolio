import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Stack } from "@mui/material";

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Profile from "./Pages/Profile";

import Resume from "./Pages/Resume";
import Portfolio from "./Pages/Portfolio";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";

//todo add animations while routing and rendering

function App() {
  return (
    <Stack
      sx={{ backgroundColor: "lightcyan", height: "100vh", width: "100%" }}
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
