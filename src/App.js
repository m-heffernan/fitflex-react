import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import HomePage from "./pages/homepage/homepage.component"

import "./App.css"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
