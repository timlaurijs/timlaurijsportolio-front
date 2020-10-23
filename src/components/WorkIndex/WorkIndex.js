import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { useHistory, Link } from "react-router-dom"

//store
import { selectTitles } from "../../App/App-selectors"
//style
import "./WorkIndex.scss"

const WorkIndex = () => {
  const { slug } = useParams()
  const history = useHistory()
  const titles = useSelector(selectTitles)

  const uniqueYears =
    titles &&
    [...new Set(titles.map((title) => title.yearPublished))].sort(
      (a, b) => b - a
    )

  const selectedTitle = (param) => {
    // console.log("param", param)
    // console.log("slug", slug)
    if (slug && slug === param) {
      return {
        color: "blue",
      }
    }
  }

  const handleKeyDown = (index, indexLength) => (event) => {
    if (event.key === "ArrowUp" && !event.repeat)
      history.push(
        `/${titles[index - 1 < 0 ? indexLength - 1 : index - 1].slug}`
      )
    else if (event.key === "ArrowDown" && !event.repeat)
      history.push(`/${titles[(index + 1) % indexLength].slug}`)
    else return
  }

  const indexOfWork = titles.findIndex((post) => post.slug === slug)
  const lengthOfWorks = titles && titles.length
  useEffect(() => {
    const handler = handleKeyDown(indexOfWork, lengthOfWorks)
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [indexOfWork, lengthOfWorks, handleKeyDown])

  console.log(titles && titles[indexOfWork] && titles[indexOfWork].slug)

  return (
    <div className="WorkIndex">
      {uniqueYears.map((year, i) => (
        <div key={i}>
          <p>{year}</p>
          {titles.length &&
            titles
              .filter(({ yearPublished }) => yearPublished === year)
              .map(({ title, id, slug, publishedAt }) => {
                return (
                  <Link key={id} to={`/${slug}`} style={selectedTitle(slug)}>
                    - {title}
                  </Link>
                )
              })}
        </div>
      ))}
    </div>
  )
}
export default WorkIndex
