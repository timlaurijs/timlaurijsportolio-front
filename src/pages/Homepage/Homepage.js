import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
//components
import WorkIndex from "../../components/WorkIndex/WorkIndex"
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer"
import Images from "../../components/Images/Images"
import BodyText from "../../components/BodyText/BodyText"
import Title from "../../components/Title/Title"
//Store
import { updateCurrentPost } from "../../App/App-actions"
import { selectAllPosts } from "../../App/App-selectors"
//styling
import "./Homepage.scss"

const Homepage = () => {
  const dispatch = useDispatch()
  const { slug } = useParams()
  const posts = useSelector(selectAllPosts)

  useEffect(() => {
    if (posts && posts.length > 0) dispatch(updateCurrentPost(slug))
  }, [slug, posts, dispatch])

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
