import React from "react"
import { useSelector } from "react-redux"
//store
import { selectTitle } from "../../App/App-selectors"
//style
import "./Title.scss"

const Title = () => {
  const title = useSelector(selectTitle)


  return (
    <div className="Title">
      <h1>{title}</h1>
    </div>
  )
}
export default Title
