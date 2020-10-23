import getYoutubeId from "get-youtube-id"

export const selectError = (state) => state.App.error

export const selectAllPosts = (state) => state.App.posts

export const getCurrentPost = (state) =>
  state.App.currentPost && state.App.currentPost

export const selectTitles = (state) =>
  Object.values(state.App.posts).map(({ title, slug, id, publishedAt }) => ({
    title,
    slug,
    id,
    publishedAt,
    yearPublished: new Date(publishedAt).getFullYear(),
  }))

export const selectTitle = (state) =>
  state.App.currentPost.title && state.App.currentPost.title

export const selectBodyText = (state) =>
  state.App.currentPost.body && state.App.currentPost.body

export const selectVideos = (state) =>
  state.App.currentPost.videos &&
  state.App.currentPost.videos.map((video) => getYoutubeId(video.url))

export const selectImages = (state) =>
  state.App.currentPost.images &&
  state.App.currentPost.images.map((image) => image.url)

export const selectMediaType = (state) => state.App.mediaType
