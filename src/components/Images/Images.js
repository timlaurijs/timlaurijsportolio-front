import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import Modal from "react-modal"
import useMediaPlayer from "../../Hooks/useMediaPlayer"
import { sanityimageUrl } from "../../utils/Api"

//store
import { selectImages } from "../../App/App-selectors"
//style
import "./Images.scss"
//utils
import logo from "../../assets/colorpalette_test01.gif"

const Images = () => {
  const { slug } = useParams()
  const imageUrls = useSelector(selectImages)

  useEffect(() => {
    if (imageUrls)
      imageUrls.forEach((url) => {
        const img = new Image()
        img.src = urlFor(url).width(1000).url()
      })
  }, [imageUrls])

  const urlFor = (source) => {
    return sanityimageUrl.image(source)
  }

  const { selectedUrl, setSelectedUrl, selectedThumbnail } = useMediaPlayer({
    mediaUrls: imageUrls,
    slug,
  })

  const [modalIsOpen, setModalIsOpen] = useState(false)
  Modal.setAppElement("#root")

  return (
    <div className="Images">
      <div className="Images__main">
        <img
          src={urlFor(selectedUrl).width(1000).url()}
          // src={selectedUrl}
          onClick={() => setModalIsOpen(true)}
          alt=""
        ></img>
        {imageUrls === undefined ? (
          <div className="Images__main__default">
            <img src={logo}></img> :
          </div>
        ) : null}
      </div>

      {imageUrls && imageUrls.length > 1 ? (
        <div className="Images__nav">
          {imageUrls.map((image, i) => (
            <img
              src={urlFor(image).flipHorizontal().width(200).url()}
              className="Images__nav__button"
              key={i}
              onClick={() => setSelectedUrl(image)}
              style={selectedThumbnail(image)}
              alt=""
            ></img>
          ))}
        </div>
      ) : null}

      <Modal
        style={{
          overlay: {
            position: "fixed",
            top: "0px",
            left: "0px",
            right: "0px",
            bottom: "0px",
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
          content: {
            position: "absolute",
            top: "30px",
            left: "30px",
            right: "30px",
            bottom: "30px",
            border: "0px",
            background: "white",
            backgroundColor: "black",
            overflow: "hidden",
            WebkitOverflowScrolling: "touch",
            borderRadius: "4px",
            outline: "none",
            padding: "0px",
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          },
        }}
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <img
          src={selectedUrl}
          style={{
            width: "auto",
            maxHeight: "100%",
            // Height: "auto",
            overflow: "hidden",
            objectFit: "cover",
          }}
          alt=""
        ></img>
      </Modal>
    </div>
  )
}
export default Images
