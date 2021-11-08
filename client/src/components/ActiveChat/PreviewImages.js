import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PreviewImage from "./PreviewImage";

const useStyles = makeStyles(() => ({
  previewImage: {
    marginLeft: 5,
    marginRight: 5
  }
}));

const PreviewImages = (props) => {
  const classes = useStyles();
  const { images, removeImage } = props;

    return (
      <Box>
        {images.map((image) => <PreviewImage key={image.name} image={image} className={classes.previewImage} clicked={removeImage}/>)}
      </Box>
    );
}

export default PreviewImages;
