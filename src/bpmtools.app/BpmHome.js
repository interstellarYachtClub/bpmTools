import React from "react";
import BpmTools from './BpmTools';
import BpmInfo from './BpmInfo';
import BpmAbout from './BpmAbout';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const BpmHome = () => {
  return (
    <Router>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <BpmTools />
          </Route>
          <Route exact path="/info">
            <BpmInfo />
          </Route>
          <Route exact path="/about">
            <BpmAbout />
          </Route>
        </Switch>

    </Router>
  );
}

export default BpmHome;