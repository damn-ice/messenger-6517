import React from 'react';

const ImageMessage = (props) => {
  const { image, alt, className, width } = props;

  return (
    <img className={className} src={image} alt={alt} width={width} />
  );
}

ImageMessage.defaultProps = {
  alt: "",
  width: 150
};

export default ImageMessage;


