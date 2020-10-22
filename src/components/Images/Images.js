import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import Modal from "react-modal"
//store
import { selectImages } from "../../App/App-selectors"
//style
import "./Images.scss"
//utils
import logo from "../../assets/colorpalette_test01.gif"

const Images = () => {
  const { slug } = useParams()
  const imageUrls = useSelector(selectImages)
  const [selectedImage, setSelectedImage] = useState("")

  const indexOfImage = imageUrls && imageUrls.indexOf(selectedImage)
  const lengthOfImageUrls = imageUrls && imageUrls.length
  
  const handleKeyDown = (index, indexLength) => (event) => {
      if (event.key === "ArrowLeft" && !event.repeat)
        setSelectedImage(imageUrls[index - 1 < 0 ? indexLength - 1 : index - 1])
      else if (event.key === "ArrowRight" && !event.repeat)
        setSelectedImage(imageUrls[(index + 1) % indexLength])
      else return
    }
    
    // sets selectedImage fot first of the array if empty
    useEffect(() => {
        if (imageUrls && selectedImage === "") setSelectedImage(imageUrls[0])
      }, [imageUrls, selectedImage, slug])
      
      // setsSelected image if another work is clicked
      useEffect(() => {
          if (imageUrls && imageUrls.includes(selectedImage)) return
          else if (imageUrls) setSelectedImage(imageUrls[0])
          else setSelectedImage("")
        }, [imageUrls, selectedImage])
        
        // add event listener for keydown
        useEffect(() => {
            const handler = handleKeyDown(indexOfImage, lengthOfImageUrls)
            window.addEventListener("keydown", handler)
            return () => {
                window.removeEventListener("keydown", handler)
              }
            }, [indexOfImage, lengthOfImageUrls, handleKeyDown])
            
  const [modalIsOpen, setModalIsOpen] = useState(false)
  Modal.setAppElement("#root")
            

  const selectedThumbnail = (url) => {
    if (url === selectedImage) {
      return { opacity: 1 }
    }
  }

  return (
    <div className="Images">
      
      <div className="Images__main">
        <img src={selectedImage} onClick={() => setModalIsOpen(true)} alt=""></img>
        {imageUrls === undefined ? 
        <div className="Images__main__default">
          <img  src={logo}></img> :
        </div> :
          null
        }
      </div>
      
      {imageUrls && imageUrls.length > 1 ? 
      <div className="Images__nav">
        {imageUrls.map((image, i) => (
              <img
                src={image}
                className="Images__nav__button"
                key={i}
                onClick={() => setSelectedImage(image)}
                style={selectedThumbnail(image)}
                alt=""
              ></img>
            ))}
          </div>
          : null
          }

      
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
          src={selectedImage}
          style={{ maxWidth: "100%", maxHeight: "100%", overflow: "hidden" }}
          alt=""
        ></img>
      </Modal>
    </div>
  )
}
export default Images
