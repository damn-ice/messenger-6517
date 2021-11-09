import React from "react";

const ImageMessage = (props) => {
  const { image, className, alt = "user uploaded", width = 150 } = props;

  return (
    <img className={className} src={image} alt={alt} width={width} />
  );
}

export default ImageMessage;


