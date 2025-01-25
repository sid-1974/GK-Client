import React, { useState, useEffect } from "react";
import { Typography, Button } from "@mui/material";
import "./UserPhoto.css";
import Uploadimg from "../../../../../assets/images/uploadimg.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { post, get, del } from "../../../../../../src/api/api";
import { useUser } from "../../../../../components/router/userContext/UserContext";

function UserPhoto() {
  const { userData } = useUser();
  const [isEditable, setIsEditable] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);

  // const handleImageUpload = (event) => {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = () => setUploadedImage(reader.result);
  //     reader.readAsDataURL(file);
  //   }
  // };

  useEffect(() => {
    const fetchUserPhoto = async () => {
      try {
        const response = await get("/user/user-image-details");
        if (response.success && response.data.length > 0) {
          setUploadedImage(response.data[0].image); // Assuming response includes `image` key
        } else {
          setUploadedImage(null);
        }
      } catch (error) {
        toast.error("Failed to fetch user photo. Please try again.");
      }
    };

    fetchUserPhoto();
  }, [userData]);

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = async () => {
        try {
          const base64Image = reader.result;
          const response = await post("/user/user-image", {
            image: base64Image,
          }); // Adjust API endpoint
          if (response.success) {
            setUploadedImage(base64Image);
            toast.success(response.message || "Image uploaded successfully.");
          } else {
            toast.error(response.message || "Failed to upload image.");
          }
        } catch (error) {
          toast.error("An error occurred while uploading the image.");
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // const handleDeleteImage = async () => {
  //   try {
  //     const response = await del("/user/user-delete-image", {}); // Adjust API endpoint
  //     if (response.success) {
  //       setUploadedImage(null);
  //       toast.success(response.message || "Image deleted successfully.");
  //     } else {
  //       toast.error(response.message || "Failed to delete image.");
  //     }
  //   } catch (error) {
  //     toast.error("Oops..! No image found to delete.");
  //   }
  // };

  const handleDeleteImage = () => {
    // Show confirmation toast with both buttons

    toast.info(
      <div>
        <Typography variant="body2" style={{ marginBottom: "10px" }}>
          Are you sure you want to delete your image?
        </Typography>
        <Button
          variant="outlined"
          onClick={async () => {
            try {
              const response = await del("/user/user-delete-image", {});
              if (response.success) {
                setUploadedImage(null);
                toast.success(
                  response.message || "Image deleted successfully."
                );
                
              } else {
                toast.error(response.message || "Failed to delete image.");
              }
            } catch (error) {
              toast.error("Oops..! No image found to delete.");
            }
          }}
          style={{ marginRight: "10px" }}
        >
          Yes, Delete
        </Button>
        <Button variant="outlined" onClick={() => toast.dismiss()}>
          Cancel
        </Button>
      </div>,
      {
        autoClose: false,
        closeOnClick: false,
        draggable: false,
        position: "top-center",
        className: "confirmation-toast",
      }
    );
  };
  const handleEditToggle = () => {
    setIsEditable((prev) => !prev);
  };
  return (
    <div className="userphoto-container">
      <div className="userphoto-heading">
        <Typography variant="h5">Upload Your Image</Typography>
      </div>
      <div className="userphoto-content-container">
        <div className="userphoto-leftside-container">
          <img src={Uploadimg} style={{ width: "300px" }} alt="" />
          <div className="userphoto-leftside-content">
            <Button
              variant="contained"
              component="label"
              className="userphoto-upload-btn"
              disabled={!isEditable}
            >
              Upload
              <input
                type="file"
                hidden
                accept="image/*"
                onChange={handleImageUpload}
              />
            </Button>
            <Typography sx={{ margin: "10px" }}>
              * Please Upload High Resolution Images Only
            </Typography>
            <div className="userphoto-actions">
              <Button
                variant="outlined"
                className="userabout-edit-btn"
                onClick={handleEditToggle}
              >
                {isEditable ? "Cancel" : "Edit"}
              </Button>
              <Button
                variant="outlined"
                className="userphoto-delete-btn"
                disabled={!isEditable}
                onClick={handleDeleteImage}
              >
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
      <ToastContainer />
    </div>
  );
}

export default UserPhoto;
