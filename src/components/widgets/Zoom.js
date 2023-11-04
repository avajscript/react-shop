import React from "react";

const Zoom = ({ zoomLevel, increaseZoom }) => {
  return (
    <div class="zoom-widget" onClick={increaseZoom}>
      <p>Zoom </p>

      <p class="zoom-level"> {zoomLevel}x</p>
    </div>
  );
};

export default Zoom;
