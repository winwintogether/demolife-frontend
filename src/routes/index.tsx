import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "../containers/Home";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Redirect to="" />
    </Switch>
  )
}

export default Routes;