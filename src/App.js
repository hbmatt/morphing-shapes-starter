import React from "react";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Interests from "./pages/Interests";

import "normalize.css";
import "./App.scss";

function App() {
  return (
    <Router>
      <Route
        render={({ location }) => (
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>
              <Route
                exact
                path='/'
                render={() => <Home />}
              />
              <Route
                exact
                path='/about'
                render={() => <About />}
              />
              <Route exact path='/interests' render={() => <Interests />} />
            </Switch>
          </AnimatePresence>
        )}
      />
    </Router>
  );
}

export default App;
