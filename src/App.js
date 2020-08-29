import React from "react";
import "./App.css";
import Welcome from "./components/Welcome";
import Home from "./components/Home";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import Temp from "./components/Temp";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Nav} />
          <Route exact path="/welcome" component={Welcome} />
          <Route
            path="/welcome/:id"
            render={(props) => (
              <Welcome {...props} name={props.match.params.name} />
            )}
          />
          <Route
            exact
            path="/Temp/:id"
            render={(props) => <Temp {...props} />}
          />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
