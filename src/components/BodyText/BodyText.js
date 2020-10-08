import React from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import BlockContent from "@sanity/block-content-to-react"
//store
import { selectBodyText } from "../../App/App-selectors"
//style
import "./BodyText.scss"

const BodyText = () => {
  const { slug } = useParams()
  const bodyText = useSelector(selectBodyText)

  return (
    <div className="BodyText">
      {bodyText &&
        bodyText
          .filter(({ _type }) => _type === "block")
          .map((block, i) => (
            <BlockContent key={i} blocks={block} serializers={{}} />
          ))}
    </div>
  )
}

export default BodyText
