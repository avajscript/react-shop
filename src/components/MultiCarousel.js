import React, { useRef } from "react";

const MultiCarousel = (props) => {
  // set the main preview image
  const [image, setImage] = React.useState(props.images[0] || "");

  const imgStyles = {
    backgroundPosition: "0px 0px",
    backgroundSize: "100% 100%",
  };
  // ref to get/set main image attributes
  const imgRef = useRef(null);

  // Creates elements for each small image preview
  // and checks to see if they are the selected one for styling
  const selectImage = (imgArg) => {
    setImage(imgArg);
    setImgPreviews(
      props.images.map((img) => {
        return (
          <div
            onClick={() => selectImage(img)}
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
  };

  // Set image elements to the array of images sent by user
  const [imgPreviews, setImgPreviews] = React.useState(
    props.images.map((img) => {
      return (
        <div
          onClick={() => selectImage(img)}
          style={{
            backgroundPosition: imgStyles.backgroundPosition,
            backgroundSize: imgStyles.backgroundSize,
          }}
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
    const mousePos = {
      x: e.pageX - e.currentTarget.offsetLeft,
      y: e.pageY - e.currentTarget.offsetTop,
    };
    console.log(`x: ${mousePos.x}, y: ${mousePos.y}`);

    //document.querySelector(".preview-image").style.backgroundSize = "200% 200%";
    imgRef.current.style.backgroundSize = "200% 200%";
    // set background positions as fractions of width based off mouse position
    imgRef.current.style.backgroundPosition = `${
      (mousePos.x / props.width) * 100
    }% ${(mousePos.y / props.height) * 100}%`;
  };

  const deZoom = () => {
    imgRef.current.style.backgroundSize = "100% 100%";
  };
  return (
    <div className="multi-carousel">
      <div
        ref={imgRef}
        onMouseMove={zoom}
        onMouseOut={deZoom}
        //onMouseDown={zoom}
        className="preview-image"
        style={{
          backgroundImage: `url(${image})`,
          width: props.width + "px",
          height: props.height + "px",
        }}
      ></div>

      <div className="previews">{imgPreviews}</div>
      <p id="hello"></p>
    </div>
  );
};

export default MultiCarousel;
