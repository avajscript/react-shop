import React, { useRef } from "react";
import Zoom from "./widgets/Zoom";

const MultiCarousel = ({
  images,
  width,
  height,
  animation = "right-to-left",
}) => {
  // sets zoom level based on this factor, which is multiplied by 100
  const [zoomLevel, setZoomLevel] = React.useState(1);
  // set the main preview image
  const [image, setImage] = React.useState(images[0] || "");

  // ref to get/set main image attributes
  const imgRef = useRef(null);

  // Creates elements for each small image preview
  // and checks to see if they are the selected one for styling
  const selectImage = (imgArg) => {
    setImage(imgArg);
    setImgPreviews(
      // map over images provided by user
      images.map((img) => {
        return (
          <div
            onClick={() => selectImage(img)}
            // set class name based off if it's selected
            className={
              img === imgArg
                ? "carousel-prev"
                : "carousel-prev carousel-prev--not-selected"
            }
          >
            <img src={img} />
          </div>
        );
      })
    );
    imgRef.current.classList.add(`${animation}-anim`);
    setTimeout(() => {
      imgRef.current.classList.remove(`${animation}-anim`);
    }, 500);
  };

  // Set image elements to the array of images sent by user
  const [imgPreviews, setImgPreviews] = React.useState(
    images.map((img) => {
      return (
        <div
          onClick={() => selectImage(img)}
          // set class name based off if it's selected
          className={
            img === image
              ? "carousel-prev"
              : "carousel-prev carousel-prev--not-selected"
          }
        >
          <img src={img} />
        </div>
      );
    })
  );

  const zoom = (e) => {
    // calculate x and y coords in relation to the img div
    const mousePos = {
      x: e.pageX - e.currentTarget.offsetLeft,
      y: e.pageY - e.currentTarget.offsetTop,
    };
    // set the zoom level based on zoom level
    imgRef.current.style.backgroundSize = `${100 * (zoomLevel + 1)}% ${
      100 * (zoomLevel + 1)
    }%`;
    // set the background position based on mouse cursor position
    imgRef.current.style.backgroundPosition = `${(mousePos.x / width) * 100}% ${
      (mousePos.y / height) * 100
    }%`;
  };

  // resets zoom and position to defaults
  const deZoom = () => {
    imgRef.current.style.backgroundSize = "cover";
    imgRef.current.style.backgroundPosition = "center center";
  };

  // increase the zoom factor by a multiple of 1x
  const increaseZoom = () => {
    if (zoomLevel > 3) {
      setZoomLevel(1);
    } else {
      setZoomLevel((prevZoom) => prevZoom + 1);
    }
  };
  return (
    <div className="multi-carousel">
      <div
        ref={imgRef}
        onMouseMove={zoom}
        onMouseOut={deZoom}
        onTouchMove={zoom}
        onTouchEnd= {deZoom}
        //onMouseDown={zoom}
        className="preview-image"
        style={{
          backgroundImage: `url(${image})`,
          width: width + "px",
          height: height + "px",
        }}
      ></div>
      <div className="carousel-bottom-section">
        <div style={{ marginBottom: "8px" }}>
          <Zoom zoomLevel={zoomLevel} increaseZoom={increaseZoom} />
        </div>
        <div className="previews">{imgPreviews}</div>
      </div>
    </div>
  );
};

export default MultiCarousel;
