export const UPDATE_POSTS = "UPDATE_POSTS"
export const UPDATE_CURRENT_POST = "UPDATE_CURRENT_POST"
export const UPDATE_IS_LOADING = "UPDATE_IS_LOADING"
export const UPDATE_ERROR = "UPDATE_ERROR"
export const RESET_CURRENT_POST = "RESET_CURRENT_POST"

export const updateError = (data) => {
  return {
    type: UPDATE_ERROR,
    payload: data,
  }
}

export const updatePosts = (data) => {
  console.log("updatePosts")
  return {
    type: UPDATE_POSTS,
    payload: data,
  }
}

export const updateCurrentPost = (slug) => {
  console.log("updateCurrentPost")
  if (slug)
    return async (dispatch, getState) => {
      const selectedPost = getState().App.posts.filter(
        (post) => post.slug === slug
      )
      dispatch(updateCurrentPostSuccess(selectedPost))
    }
  else return { type: RESET_CURRENT_POST }
}
export const updateCurrentPostSuccess = (data) => {
  return {
    type: UPDATE_CURRENT_POST,
    payload: data,
  }
}
export const resetCurrentPost = (data) => {
  return {
    type: UPDATE_CURRENT_POST,
    payload: data,
  }
}
