import React from "react"
import { useSelector } from "react-redux"
import BlockContent from "@sanity/block-content-to-react"
//components
import ToggleButton from "../../components/ToggleButton/ToggleButton"
//store
import { selectBodyText, getCurrentPost } from "../../App/App-selectors"
//style
import "./BodyText.scss"

const BodyText = () => {
  const bodyText = useSelector(selectBodyText)
  const {video, images} = useSelector(getCurrentPost)

  return (
    <div className="BodyText">
      {bodyText &&
        bodyText
          .filter(({ _type }) => _type === "block")
          .map((block, i) => (
            <BlockContent key={i} blocks={block} serializers={{}} />
          ))}
    {video && images ? <ToggleButton /> : null}
    </div>
  )
}

export default BodyText
