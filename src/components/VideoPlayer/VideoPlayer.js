import React from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
//store
import { selectVideos } from "../../App/App-selectors"
//style
import "./VideoPlayer.scss"

const VideoPlayer = () => {
  const { slug } = useParams()
  const videoUrls = useSelector(selectVideos(slug))
  // console.log("slug from params", slug)
  // console.log(" videos", videoUrls)

  return (
    <div className="VideoPlayer">
      {videoUrls.map((video, i) => (
        <iframe
          key={i}
          width="420"
          height="315"
          src={videoUrls}
          // ref={(ref) => console.dir(ref)}
        ></iframe>
      ))}
    </div>
  )
}
export default VideoPlayer
