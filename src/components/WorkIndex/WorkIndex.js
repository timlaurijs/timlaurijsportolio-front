import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"

//store
import { selectTitles } from "../../App/App-selectors"
//style
import "./WorkIndex.scss"

const WorkIndex = () => {
  const titles = useSelector(selectTitles)

  return (
    <div className="WorkIndex">
      {titles.map((title) => (
        <Link key={title.id} to={`/${title.slug}`}>
          {title.title}
        </Link>
      ))}
    </div>
  )
}
export default WorkIndex
