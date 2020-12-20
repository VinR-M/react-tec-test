import React from "react"
import "./App.css"
import Cards from "./components/Cards"
import Details from "./components/Details"
import { Provider } from "react-redux"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import store from "./store"

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <Switch>
              <Route path="/" exact component={Cards} />
              <Route path="/Details/:id" component={Details} />
            </Switch>
          </header>
        </div>
      </Provider>
    </Router>
  )
}

export default App
