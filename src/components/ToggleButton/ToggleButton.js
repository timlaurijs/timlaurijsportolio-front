import React from 'react'
import { useSelector , useDispatch} from "react-redux"
//store
import {selectMediaType } from "../../App/App-selectors"
import { updateMediaType} from "../../App/App-actions"
// style
import "./ToggleButton.scss"

const ToggleButton = () => {
  const dispatch = useDispatch()
  const mediaType = useSelector(selectMediaType)

const toggleMediaType = () => mediaType === "images" ? "videos" : "images"

return (
    <div className="ToggleButton">
      <button onClick={() => dispatch(updateMediaType(toggleMediaType()))}>{toggleMediaType()}</button>
    </div>
  )
}
export default ToggleButton