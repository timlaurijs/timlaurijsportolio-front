// Dependencies
import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { Switch, Route } from "react-router-dom"
import { useQuery } from "react-query"
// utils
import { sanityClient } from "../utils/Api"
//pages
import Homepage from "../pages/Homepage/Homepage"
import About from "../pages/About/About"
//components
import MessageBox from "../components/MessageBox/MessageBox"
import Loading from "../components/Loading/Loading"
import Navigation from "../components/Navigation/Navigation"
// store
import { fetchPosts } from "./App-queries"
import { updatePosts, updateError } from "./App-actions"
// style
import "./App.scss"

function App() {
  const dispatch = useDispatch()
  const { isLoading, error, data } = useQuery("pages", () =>
    sanityClient.fetch(fetchPosts)
  )

  useEffect(() => {
    if (data) dispatch(updatePosts(data))
    if (error) dispatch(updateError(error))
  }, [data, error, dispatch])

  return (
    <div className="App">
      <Navigation />
      <MessageBox />
      {isLoading && <Loading />}
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/:slug" component={Homepage} />
        <Route path="/" component={Homepage} />
      </Switch>
    </div>
  )
}

export default App
