import React, { useState } from "react";
import { FormControl, FilledInput, InputAdornment, InputLabel } from "@material-ui/core";
import { FileCopyOutlined }from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";
import { postMessage } from "../../store/utils/thunkCreators";
import PreviewImages from "./PreviewImages";

const useStyles = makeStyles(() => ({
  root: {
    justifySelf: "flex-end",
    marginTop: 15
  },
  input: {
    height: 70,
    backgroundColor: "#F4F6FA",
    borderRadius: 8,
    marginBottom: 20
  }
}));

const Input = (props) => {
  const url = "https://api.cloudinary.com/v1_1/oshiegbu/image/upload";
  const classes = useStyles();
  const [images, setImages] = useState(null);
  const [text, setText] = useState("");
  const { postMessage, otherUser, conversationId, user } = props;

  const addImages = (e) => {
    const images = Array.from(e.target.files);
    images.length && setImages(images);
  };

  const removeImage = (id) => setImages(images.filter((image) => image.name !== id));

  const uploadImages = async (images) => {
    // Array of promise is returned as map calls an async function.
    const uploadedImages = await Promise.all(images.map(async (image) => {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("upload_preset", "hatchways");
      formData.append("cloud_name", "oshiegbu");

      try {
        const response = await fetch(url, {
          method: "POST",
          body: formData
        });
        const data = await response.json();

        return data.secure_url;
      } catch (error) {
      console.log(error);
      }
    }));
  
    return uploadedImages;
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const imagesURL = images? await uploadImages(images): null;
    // add sender user info if posting to a brand new convo, so that the other user will have access to username, profile pic, etc.
    const reqBody = {
      text: event.target.text.value,
      recipientId: otherUser.id,
      conversationId,
      sender: conversationId ? null : user,
      attachments: imagesURL
    };
    await postMessage(reqBody);
    setText("");
    setImages(null);
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      {images && <PreviewImages images={images} removeImage={removeImage} />}
      <FormControl fullWidth hiddenLabel>
        <FilledInput
          classes={{ root: classes.input }}
          disableUnderline
          placeholder="Type something..."
          value={text}
          name="text"
          onChange={handleChange}
          endAdornment={
            <InputAdornment position="end">
              <InputLabel htmlFor="image-upload">
                <FileCopyOutlined color="disabled" />
              </InputLabel>
              <FilledInput
                id="image-upload" 
                type="file" 
                inputProps={{accept: "image/*", multiple: true }}
                onChange={addImages} 
                style={{display: "none"}} 
              />
            </InputAdornment>
          }
        />
      </FormControl>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    postMessage: (message) => {
      dispatch(postMessage(message));
    },
  };
};

export default connect(null, mapDispatchToProps)(Input);
