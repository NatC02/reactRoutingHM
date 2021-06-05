import React from "react";
import { Route } from "react-router-dom";
import App from "../components/App";
import SpecsOneplus from "../components/SpecsOneplus";
import SpecsSamsung from "../components/SpecsSamsung";
import Header from "../header";

class ReactRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Route exact path="/" component={App} />
        <Route path="/specsoneplus" component={SpecsOneplus} />
        <Route path="/specssamsung" component={SpecsSamsung} />
      </React.Fragment>
    );
  }
}

export default ReactRouter;
