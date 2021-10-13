import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./Sections/Home"
import Register from "./Sections/Register"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/register" exact>
          <Register />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
