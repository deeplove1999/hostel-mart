import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.component";

const DairyPage = () => (
  <div>
    <h1>Dairy and Eggs</h1>
  </div>
);

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/dairy" component={DairyPage} />
    </Switch>
  );
}

export default App;
