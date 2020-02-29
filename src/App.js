import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import Homepage from "./pages/homepage.pages";

const HatPage = () => {
  return <div>hat</div>;
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop/hats" component={HatPage} />
      </Switch>
    </div>
  );
}

export default App;
