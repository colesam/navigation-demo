import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import IncorrectExamples from "./pages/IncorrectExamples";
import BreakpointApproach from "./pages/BreakpointApproach";
import TouchFlagApproach from "./pages/TouchFlagApproach";
import PreventDefaultApproach from "./pages/PreventDefaultApproach";
import Page from "./components/Page";
import NavDropdown from "./components/NavDropdown/NavDropdownBest";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/example/1">
            <IncorrectExamples />
          </Route>

          <Route path="/example/2">
            <BreakpointApproach />
          </Route>

          <Route path="/example/3">
            <TouchFlagApproach />
          </Route>

          <Route path="/example/4">
            <PreventDefaultApproach />
          </Route>

          <Route path="/account">
            <Page DropdownComponent={NavDropdown}>
              <h1>My Account</h1>
            </Page>
          </Route>

          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
