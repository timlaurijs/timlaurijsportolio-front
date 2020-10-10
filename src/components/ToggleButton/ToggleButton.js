import React from 'react'
import { useSelector , useDispatch} from "react-redux"
//store
import {selectMediaType } from "../../App/App-selectors"
import { updateMediaType} from "../../App/App-actions"

const ToggleButton = () => {
  const dispatch = useDispatch()
  const mediaType = useSelector(selectMediaType)

const toggleMediaType = () => mediaType === "image" ? "video" : "image"

return (
    <div>
      <button onClick={() => dispatch(updateMediaType(toggleMediaType()))}>{toggleMediaType()}</button>
    </div>
  )
}
export default ToggleButton