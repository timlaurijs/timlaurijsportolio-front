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
  const bodyText = useSelector(selectBodyText(slug))
  console.log("body", bodyText)

  bodyText && bodyText._type === "block"
    ? console.log("yes")
    : console.log("no")

  return (
    <div>
      {bodyText &&
        bodyText.body
          .filter(({ _type }) => _type === "block")
          .map((block) => (
            <BlockContent key={bodyText.id} blocks={block} serializers={{}} />
          ))}
    </div>
  )
}

export default BodyText
