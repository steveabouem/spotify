import React from "react";
import MainSearch from "./MainSearch.jsx";
import Landing from "./Landing.jsx";
import { Switch, Route } from "react-router-dom";


class Main extends React.Component {
  render() {
    return (
      <main id="main-container">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/main" component={MainSearch} />
        </Switch>
      </main>
    )
  }
}

export default Main