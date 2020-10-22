import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { Media, Player, controls } from "react-media-player"
import useMediaPlayer from "../../Hooks/useMediaPlayer"

//store
import { selectVideos } from "../../App/App-selectors"
//style
import "./VideoPlayer.scss"

const VideoPlayer = () => {
  const videoUrls = useSelector(selectVideos)
  const { slug } = useParams()

  const { selectedUrl, setSelectedUrl, selectedThumbnail } = useMediaPlayer({
    mediaUrls: videoUrls,
    slug,
  })

  return (
    <div className="VideoPlayer">
      <Media>
        <div className="VideoPlayer__main">
          <div className="mediaPlayer">
            <Player
              src={
                selectedUrl &&
                `https://www.youtube.com/watch?v=${selectedUrl}&ab`
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
                onClick={() => setSelectedUrl(url)}
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
