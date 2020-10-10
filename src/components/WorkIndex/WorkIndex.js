import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

//store
import { selectTitles } from "../../App/App-selectors"
//style
import "./WorkIndex.scss"

const WorkIndex = () => {
  const titles = useSelector(selectTitles)
  const uniqueYears = titles && [...new Set(titles.map(title => title.publishedAt))].sort((a, b) => b-a)

  return (
    <div className="WorkIndex">
      {uniqueYears.map((year, i) => (
        <div key={i}>
          <p>{year}</p>
          {titles.length && titles
            .filter(({publishedAt}) => publishedAt === year)
            .map(({title, id, slug}) =>   
            <Link key={id} to={`/${slug}`}>
            - {title}
          </Link>)}
        </div>
      ))}
    </div>
  )
}
export default WorkIndex
