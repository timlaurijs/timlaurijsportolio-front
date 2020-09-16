export const UPDATE_POSTS = "UPDATE_POSTS"
export const UPDATE_IS_LOADING = "UPDATE_IS_LOADING"
export const UPDATE_ERROR = "UPDATE_ERROR"

export const updatePosts = (data) => {
  return {
    type: UPDATE_POSTS,
    payload: data,
  }
}
export const updateError = (data) => {
  return {
    type: UPDATE_ERROR,
    payload: data,
  }
}
