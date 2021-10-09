import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Stack, Grid } from "@mui/material";
import { CSSTransition, SwitchTransition } from "react-transition-group";

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
        <Route
          render={({ location }) => {
            return (
              <SwitchTransition>
                <CSSTransition
                  key={location.key}
                  timeout={450}
                  classNames="slide"
                >
                  <Switch location={location}>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/resume" component={Resume} />
                    <Route exact path="/portfolio" component={Portfolio} />
                    <Route exact path="/contact" component={Contact} />
                  </Switch>
                </CSSTransition>
              </SwitchTransition>
            );
          }}
        />
        <Footer />
      </Router>
    </Stack>
  );
}

export default App;
