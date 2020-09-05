import { UPDATE_POSTS, UPDATE_ERROR } from "./App-actions"

const initialState = {
  error: null,
  posts: [],
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_POSTS:
      return {
        ...state,
        posts: state.posts.concat(payload),
      }
    case UPDATE_ERROR:
      return {
        ...state,
        error: payload,
      }
    default:
      return state
  }
}
