import React from "react"
import { useSelector } from "react-redux"
import { Media, Player, controls } from 'react-media-player'

//store
import { selectVideos } from "../../App/App-selectors"
//style
import "./VideoPlayer.scss"

const VideoPlayer = () => {
  const videoUrls = useSelector(selectVideos)
  const { PlayPause, MuteUnmute } = controls

  return (
    <div className="VideoPlayer">
        <Media className="VideoPlayer__selected">
        <div className="VideoPlayer__selected">
          <div className="media-player">
            <Player src="http://www.youtube.com/embed/h3YVKTxTOgU" />
          </div>
          <div className="media-controls">
            <PlayPause />
            <MuteUnmute />
          </div>
        </div>
      </Media>
      <div>
        
      </div>
    </div>
  )
}
export default VideoPlayer
