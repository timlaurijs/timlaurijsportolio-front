import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { Media, Player, controls } from "react-media-player"
import getYoutubeId from "get-youtube-id"

//store
import { selectVideos } from "../../App/App-selectors"
//style
import "./VideoPlayer.scss"

const VideoPlayer = () => {
  const { slug } = useParams()
  const videoUrls = useSelector(selectVideos)
  const [selectedVideo, setSelectedVideo] = useState("")
  const { PlayPause, MuteUnmute } = controls

  // sets selectedVideo fot first of the array if empty
  useEffect(() => {
    if (videoUrls && selectedVideo === "") setSelectedVideo(videoUrls[0])
  }, [videoUrls, selectedVideo, slug])

  // setsSelected video if another work is clicked
  useEffect(() => {
    if (videoUrls && videoUrls.includes(selectedVideo)) return
    else if (videoUrls) setSelectedVideo(videoUrls[0])
    else setSelectedVideo("")
  }, [videoUrls, selectedVideo])

  // handles keydown actions
  const handleKeyDown = (index, indexLength) => (event) => {
    if (event.key === "ArrowLeft" && !event.repeat)
      setSelectedVideo(videoUrls[index - 1 < 0 ? indexLength - 1 : index - 1])
    else if (event.key === "ArrowRight" && !event.repeat)
      setSelectedVideo(videoUrls[(index + 1) % indexLength])
    else return
  }

  // add event listener for keydown
  const indexOfVideo = videoUrls && videoUrls.indexOf(selectedVideo)
  const lengthOfVideo = videoUrls && videoUrls.length
  useEffect(() => {
    const handler = handleKeyDown(indexOfVideo, lengthOfVideo)
    window.addEventListener("keydown", handler)
    return () => {
      window.removeEventListener("keydown", handler)
    }
  }, [indexOfVideo, lengthOfVideo, handleKeyDown])

  //highligh selected thumbnail
  const selectedThumbnail = (url) => {
    if (url === selectedVideo) {
      return { opacity: 1 }
    }
  }

  return (
    <div className="VideoPlayer">
      <Media>
        <div className="VideoPlayer__main">
          <div className="mediaPlayer">
            <Player
              src={
                selectedVideo &&
                `https://www.youtube.com/watch?v=${selectedVideo}&ab`
              }
            />
          </div>
        </div>
      </Media>
      <div className="VideoPlayer__nav">
        {videoUrls && videoUrls.length > 1
          ? videoUrls.map((url, i) => (
              <img
                src={`http://img.youtube.com/vi/${url}/0.jpg`}
                key={i}
                onClick={() => setSelectedVideo(url)}
                style={selectedThumbnail(url)}
                alt=""
              ></img>
            ))
          : null}
      </div>
    </div>
  )
}
export default VideoPlayer
