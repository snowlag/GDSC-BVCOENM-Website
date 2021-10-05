import React from "react";
import { Route, Switch } from "react-router";
import Contacts from "./Pages/Contact";
import Events from "./Pages/Events";
import LandingPage from "./Pages/Landing"
import Teams from "./Pages/Teams";

export default function Body() {
  return (
    <Switch>
      <Route path="/" exact component={LandingPage} />
      <Route path="/events" component={Events} />
      <Route path="/team" component={Teams} />
      <Route path="/contact" component={Contacts} />
    </Switch>
  );
}
