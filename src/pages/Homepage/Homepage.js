import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
//components
import WorkIndex from "../../components/WorkIndex/WorkIndex"
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer"
import Images from "../../components/Images/Images"
import BodyText from "../../components/BodyText/BodyText"
import Title from "../../components/Title/Title"
import Footer from "../../components/Footer/Footer"
//Store
import { updateCurrentPost, updateMediaType } from "../../App/App-actions"
import { selectAllPosts, getCurrentPost, selectMediaType } from "../../App/App-selectors"
//styling
import "./Homepage.scss"

const Homepage = () => {
  const dispatch = useDispatch()
  const { slug } = useParams()
  const posts = useSelector(selectAllPosts)
  const { images, videos} = useSelector(getCurrentPost)
  const mediaType = useSelector(selectMediaType)

  // console.log("mediaType:", mediaType);
  console.log("Images:", images);
  console.log("videos:", videos);
  // console.log("posts:", posts);

  const mediaSelector = () =>{
    if(mediaType === "images")
    return <Images />
    if(mediaType === "videos")
    return <VideoPlayer />
  }

  //update current post
  useEffect(() => {
    if (posts && posts.length > 0) dispatch(updateCurrentPost(slug))
  }, [slug, posts, dispatch])

  //if no images available set mediaType to video
  useEffect(() => {
    if(posts && videos && !images) dispatch(updateMediaType("videos"))
    else dispatch(updateMediaType("images"))
    // else if(posts && !videos && images) dispatch(updateMediaType("images"))
    // else dispatch(updateMediaType("images"))
  }, [posts, images, videos, dispatch])

  useEffect(() => {
    const mediaSelector = () =>{
      if(mediaType === "images")
      return <Images />
      if(mediaType === "videos")
      return <VideoPlayer />
    }

  }, [mediaType])

  return (
    <div className="Homepage">
      <div className="container">
        <div className="container__Navigation">Navigatie</div>
        <div className="container__Logo">Logo</div>
        <Title />
        <WorkIndex />
        {mediaSelector()}
        {/* <Images /> 
        <VideoPlayer /> */}
        <BodyText />
        <Footer />
      </div>
    </div>
  )
}

export default Homepage
