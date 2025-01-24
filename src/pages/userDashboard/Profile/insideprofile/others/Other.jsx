import React, { useState, useEffect } from "react";
import "./Other.css";
import { Typography, Button, TextField } from "@mui/material";
import { useUser } from "../../../../../components/router/userContext/UserContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { post, get } from "../../../../../../src/api/api";

function Other() {
  const { userData } = useUser();
  const [isEditable, setIsEditable] = useState(false);
  const [formData, setFormData] = useState({
    bio: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  useEffect(() => {
    const fetchUserOtherDetails = async () => {
      try {
        const response = await get("user/user-other-details");
        if (response.success) {
          if (response.data.length === 0) {
          } else {
            const OtherDetails = response.data[0];
            setFormData({
              bio: OtherDetails.bio || "",
            });
          }
        } else {
          toast.warn("Failed to fetch other details.");
        }
      } catch (error) {
        toast.error("Failed to fetch other details. Please try again.");
      }
    };

    fetchUserOtherDetails();
  }, [userData]);

  const handleSave = async (e) => {
    e.preventDefault();
    const { bio } = formData;
    // if (!bio) {
    //   return toast.error("reuired");
    // }
    try {
      const url = "/user/user-other";
      const response = await post(url, formData);
      const { success, message } = response;
      if (success) {
        toast.success(message);
        setIsEditable(false);
      } else {
        toast.error(message);
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };
  const handleEditToggle = () => {
    setIsEditable((prev) => !prev);
  };

  return (
    <div className="other-container">
      <div className="other-heading">
        <Typography variant="h5">Other Information</Typography>
      </div>
      <form onSubmit={handleSave} style={{ width: "100%" }}>
        <div className="other-content">
          <TextField
            label="Additional Information (Bio)"
            value={formData.bio}
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            className="other-textfield disabled-input"
            disabled={!isEditable}
            onChange={handleInputChange}
            name="bio"
          />
        </div>
        <div className="other-btn">
          <Button
            variant="outlined"
            className="userabout-edit-btn"
            onClick={handleEditToggle}
          >
            {isEditable ? "Cancel" : "Edit"}
          </Button>
          <Button
            variant="contained"
            className="other-submit-btn"
            disabled={!isEditable}
            type="submit"
          >
            Save
          </Button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Other;
