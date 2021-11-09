import React from "react";

const PreviewImage = (props) => {
  const { image, className, clicked, alt = "preview", width = 50} = props;
  const src = URL.createObjectURL(image);

  return (
    <img className={className} src={src} alt={alt} width={width} onClick={() => clicked(image.name)} />
  );
}

export default PreviewImage;
