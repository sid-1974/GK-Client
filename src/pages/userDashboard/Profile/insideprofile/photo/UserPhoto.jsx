import React,{useState} from "react";
import { Typography, Button } from "@mui/material";
import "./UserPhoto.css";
import Uploadimg from "../../../../../assets/images/uploadimg.png";

function UserPhoto() {
    const [uploadedImage, setUploadedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setUploadedImage(reader.result);
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="userphoto-container">
      <div className="userphoto-heading">
        <Typography variant="h5">Upload Your Image</Typography>
      </div>
      <div className="userphoto-content-container">
        <div className="userphoto-leftside-container">
          <img src={Uploadimg} style={{width:"300px"}} alt="" />
          <div className="userphoto-leftside-content">
            <Button
              variant="contained"
              component="label"
              className="userphoto-upload-btn"
            >
              Upload
              <input type="file" hidden accept="image/*"    onChange={handleImageUpload}/>
            </Button>
            <Typography sx={{ margin: "10px" }}>
              * Please Upload High Resolution Images Only
            </Typography>
            <div className="userphoto-actions">
              <Button variant="contained" className="userphoto-save-btn">
                Save
              </Button>
              <Button variant="outlined" className="userphoto-delete-btn"     onClick={() => setUploadedImage(null)}>
                Delete
              </Button>
            </div>
          </div>
          </div>
          <div className="userphoto-rightside-container">
          {uploadedImage ? (
            <img
              src={uploadedImage}
              alt="Uploaded Preview"
              className="userphoto-rightside-preview"
            />
          ) : (
            <Typography className="userphoto-rightside-placeholder">
              *No Image Uploaded
            </Typography>
          )}
          </div>
        
      </div>
    </div>
  );
}

export default UserPhoto;
