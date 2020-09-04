import React from "react"
import { Switch, Route } from "react-router-dom"

//components
import Homepage from "./pages/Homepage"
// style
import "./App.css"

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
    </Switch>
  )
}

export default App
