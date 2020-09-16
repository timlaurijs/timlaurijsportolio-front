export const selectError = (state) => state.App.error
export const selectTitles = (state) =>
  Object.values(state.App.posts).map(({ title, slug, id }) => ({
    title,
    slug,
    id,
  }))

export const selectCurrentTitle = (slug) => (state) => {
  const work = state.App.posts.filter(
    (work) => work.slug === slug && work.title
  )
  return work[0] ? work[0].title : null
}

export const selectBodyText = (slug) => (state) => {
  const work = state.App.posts.filter((work) => work.slug === slug && work.body)
  // console.log("body?", work[0])
  return work[0] ? work[0] : null
}
// .body[0].children[0].text
export const selectVideos = (slug) => (state) => {
  const work = state.App.posts.filter(
    (work) => work.slug === slug && work.video
  )
  return work[0] ? work[0].video.map((url) => url.url) : []
}

export const selectImages = (slug) => (state) => {
  const work = state.App.posts.filter(
    (work) => work.slug === slug && work.images
  )
  return work[0] ? work[0].images.map((url) => url.url) : []
}
