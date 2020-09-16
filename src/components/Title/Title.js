import React from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
//store
import { selectCurrentTitle } from "../../App/App-selectors"
//style
import "./Title.scss"

const Title = () => {
  const { slug } = useParams()
  const title = useSelector(selectCurrentTitle(slug))
  console.log("title:", title)
  return <div>{title}</div>
}
export default Title
