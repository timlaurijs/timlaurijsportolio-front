import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import Modal from "react-modal"
import useMediaPlayer from "../../Hooks/useMediaPlayer"
//store
import { selectImages } from "../../App/App-selectors"
//style
import "./Images.scss"
//utils
import logo from "../../assets/colorpalette_test01.gif"

const Images = () => {
  const { slug } = useParams()
  const imageUrls = useSelector(selectImages)

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
          src={selectedUrl}
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
              src={image}
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
          style={{ maxWidth: "100%", maxHeight: "100%", overflow: "hidden" }}
          alt=""
        ></img>
      </Modal>
    </div>
  )
}
export default Images
