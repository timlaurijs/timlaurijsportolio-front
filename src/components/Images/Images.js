import React from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
//store
import { selectImages } from "../../App/App-selectors"
//style
import "./Images.scss"

const Images = () => {
  const { slug } = useParams()
  const imageUrls = useSelector(selectImages(slug))

  // console.log("imageUrls", imageUrls)

  return (
    <div>
      {imageUrls.map((image, i) => (
        <img key={i} src={image} />
      ))}
    </div>
  )
}
export default Images
