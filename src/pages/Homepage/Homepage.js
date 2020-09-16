import React from "react"

//components
import WorkIndex from "../../components/WorkIndex/WorkIndex"
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer"
import Images from "../../components/Images/Images"
import BodyText from "../../components/BodyText/BodyText"
import Title from "../../components/Title/Title"

const Homepage = () => {
  return (
    <div className="Homepage">
      <h1>Works</h1>
      <Title />
      <WorkIndex />
      <VideoPlayer />
      <Images />
      <BodyText />
    </div>
  )
}

export default Homepage
