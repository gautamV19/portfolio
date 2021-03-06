import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Stack, useMediaQuery } from "@mui/material";

import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MobileHeader from "./Components/MobileHeader";
import MobileFooter from "./Components/MobileFooter";

import MobileHome from "./Pages/MobileHome";
import Resume from "./Pages/Resume";
import Portfolio from "./Pages/Portfolio";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";

function App() {
  const matches = useMediaQuery("(min-width:450px)");

  if (matches) {
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
  } else {
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
          <MobileHeader />
          <Switch>
            <Route exact path="/" component={MobileHome} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
          </Switch>
          <MobileFooter />
        </Router>
      </Stack>
    );
  }
}

export default App;
