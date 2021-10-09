import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Profile from "../Pages/Profile";

import Resume from "../Pages/Resume";
import Portfolio from "../Pages/Portfolio";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";

function MyRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/resume" component={Resume} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  );
}

export default MyRoutes;
