export const selectError = (state) => state.App.error

export const selectAllPosts = (state) => state.App.posts

export const getCurrentPost = (slug) => (state) => {
  state.App.currentPost &&
    state.App.currentPost.filter((post) => post.slug === slug)
}

export const selectTitles = (state) =>
  Object.values(state.App.posts).map(({ title, slug, id }) => ({
    title,
    slug,
    id,
  }))

export const selectTitle = (state) =>
  state.App.currentPost.title && state.App.currentPost.title

export const selectBodyText = (state) =>
  state.App.currentPost.body && state.App.currentPost.body

export const selectVideos = (state) =>
  state.App.currentPost.video &&
  state.App.currentPost.video.map((video) => video.url)

export const selectImages = (state) =>
  state.App.currentPost.images &&
  state.App.currentPost.images.map((image) => image.url)
