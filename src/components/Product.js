import React from "react";

const Product = ({
  name,
  url,
  description,
  available = true,
  link,
  width = "200",
  height = "160",
}) => {
  return (
    <div className="product" style={{ width: "200px" }}>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>
        <b>{available ? "Available" : "Unavailable"}</b>
      </p>
      <img src={url} alt={name} width={width + "px"} height={height} />
    </div>
  );
};

export default Product;
