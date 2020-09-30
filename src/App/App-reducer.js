import {
  UPDATE_POSTS,
  UPDATE_CURRENT_POST,
  RESET_CURRENT_POST,
  UPDATE_ERROR,
} from "./App-actions"

const initialState = {
  error: null,
  posts: [],
  currentPost: [],
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_ERROR:
      return {
        ...state,
        error: payload,
      }
    case UPDATE_POSTS:
      return {
        ...state,
        posts: state.posts.concat(payload),
      }
    case UPDATE_CURRENT_POST:
      return {
        ...state,
        currentPost: payload[0],
      }
    case RESET_CURRENT_POST:
      return {
        ...state,
        currentPost: initialState.currentPost,
      }
    default:
      return state
  }
}
