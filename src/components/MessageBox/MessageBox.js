import React from "react"
import { useSelector } from "react-redux"
//store
import { selectError } from "../../App/App-selectors"

const MessageBox = () => {
  const error = useSelector(selectError)
  if (!error) return null

  return (
    <div className="MessageBox">
      <p>Error fetching pages</p>
    </div>
  )
}

export default MessageBox
