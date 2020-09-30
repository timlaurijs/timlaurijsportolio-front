import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
//store
import { selectImages, getCurrentPost } from "../../App/App-selectors"
//style
import "./Images.scss"

const Images = () => {
  const { slug } = useParams()
  const imageUrls = useSelector(selectImages)
  const [selectedImage, setSelectedImage] = useState("")

  // sets selectedImage fot first of the array if empty
  useEffect(() => {
    if (imageUrls && selectedImage === "") setSelectedImage(imageUrls[0])
  }, [imageUrls, selectedImage, slug])

  // setsSelected image if another work is clicked
  useEffect(() => {
    if (imageUrls && imageUrls.includes(selectedImage)) return
    else if (imageUrls) setSelectedImage(imageUrls[0])
    else setSelectedImage("")
  }, [imageUrls, selectedImage])

  return (
    <div className="Images">
      <div className="Images__nav">
        {imageUrls &&
          imageUrls.map((image, i) => (
            <div
              className="Images__nav__buttons"
              key={i}
              onClick={() => setSelectedImage(image)}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
      </div>

      <div className="Images__selected">
        <img src={selectedImage}></img>
      </div>
    </div>
  )
}
export default Images
