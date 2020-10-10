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
        <Media>
          <div className="VideoPlayer__main">
              <div className="mediaPlayer">
                <Player src="http://www.youtube.com/embed/h3YVKTxTOgU" />
              </div>
          </div>
        </Media>
      <div className="VideoPlayer__nav">
        <p>Navbar</p>
      </div>
    </div>
  )
}
export default VideoPlayer
