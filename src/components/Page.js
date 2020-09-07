import React from "react";
import HomePage from "../pages/HomePage";
// import Kontakt from "../pages/Kontakt";
import Store from "../pages/Store";
import Login from "../pages/Login";
import { Switch, Route } from "react-router-dom";
const Page = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/store" exact component={Store} />
        <Route path="/login" exact component={Login} />
        {/* <Route path="/contact" exact component={Kontakt} /> */}
      </Switch>
    </>
  );
};

export default Page;
