import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const useMediaPlayer = ({ mediaUrls, slug }) => {
  const [selectedUrl, setSelectedUrl] = useState("")

  // sets selectedUrl fot first of the array if empty
  useEffect(() => {
    if (mediaUrls && selectedUrl === "") setSelectedUrl(mediaUrls[0])
  }, [mediaUrls, selectedUrl, slug])

  // setsSelected video if another work is clicked
  useEffect(() => {
    if (mediaUrls && mediaUrls.includes(selectedUrl)) return
    else if (mediaUrls) setSelectedUrl(mediaUrls[0])
    else setSelectedUrl("")
  }, [mediaUrls, selectedUrl])

  // handles keydown actions
  const handleKeyDown = (index, indexLength) => (event) => {
    if (event.key === "ArrowLeft" && !event.repeat)
      setSelectedUrl(mediaUrls[index - 1 < 0 ? indexLength - 1 : index - 1])
    else if (event.key === "ArrowRight" && !event.repeat)
      setSelectedUrl(mediaUrls[(index + 1) % indexLength])
    else return
  }

  // add event listener for keydown
  const indexOfUrl = mediaUrls && mediaUrls.indexOf(selectedUrl)
  const lengthOfMediaUrls = mediaUrls && mediaUrls.length
  useEffect(() => {
    const handler = handleKeyDown(indexOfUrl, lengthOfMediaUrls)
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [indexOfUrl, lengthOfMediaUrls, handleKeyDown])

  //highligh selected thumbnail
  const selectedThumbnail = (url) => {
    if (url === selectedUrl) {
      return {
        opacity: 1,
        filter: "hue-rotate(20deg)",
        boxShadow: "0px 0px 40px 10px rgb(255, 255, 255, 0.2)",
        zIndex: 1,
      }
    }
  }
  return { selectedUrl, setSelectedUrl, selectedThumbnail }
}

export default useMediaPlayer
