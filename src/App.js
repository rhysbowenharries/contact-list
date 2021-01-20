import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";

import Create from "./components/Create";
import ListView from "./components/ListView";
import NoMatch from "./components/NoMatch";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/" component={ListView} />
          <Route path="/create" component={Create} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
