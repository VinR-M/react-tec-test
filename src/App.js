import React from "react";
import "./App.css";
import Card from "./components/Card";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import store from "./store";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <Switch>
              <Route path="/" exact component={Card} />
              {/* <Route path="/" exact component={} /> */}
            </Switch>
          </header>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
