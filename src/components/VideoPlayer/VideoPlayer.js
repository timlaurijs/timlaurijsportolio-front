import React from "react"
import { useSelector } from "react-redux"
//store
import { selectVideos } from "../../App/App-selectors"
//style
import "./VideoPlayer.scss"

const VideoPlayer = () => {
  const videoUrls = useSelector(selectVideos)

  return (
    <div className="VideoPlayer">
      {/* {videoUrls.map((video, i) => (
        <iframe
          key={i}
          width="420"
          height="315"
          src={videoUrls}
          // ref={(ref) => console.dir(ref)}
        ></iframe>
      ))} */}
    </div>
  )
}
export default VideoPlayer
