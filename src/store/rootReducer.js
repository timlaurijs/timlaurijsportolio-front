import { combineReducers } from "redux"
import Homepage from "./Homepage/reducer"
import App from "./App/reducer"

export default combineReducers({
  App,
  Homepage,
})
