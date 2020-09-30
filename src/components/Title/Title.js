import React from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
//store
import { selectTitle } from "../../App/App-selectors"
//style
import "./Title.scss"

const Title = () => {
  const { slug } = useParams()
  const title = useSelector(selectTitle)

  return (
    <div className="Title">
      <div>{title}</div>
    </div>
  )
}
export default Title
