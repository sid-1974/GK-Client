import React, { useState, useEffect } from "react";
import "./UserLife.css";
import { Grid, Typography, Button, Select, MenuItem } from "@mui/material";
import { useUser } from "../../../../../components/router/userContext/UserContext";
import json from "../../../../../components/jsondata/data.json";
import { FaChevronDown } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { post, get } from "../../../../../../src/api/api";

function UserLife() {
  const data = json;
  const { userData } = useUser();
  const [isEditable, setIsEditable] = useState(false);
  const [formData, setFormData] = useState({
    drink: "",
    smoke: "",
    diet: "",
    blood: "",
    bodytype: "",
    skintype: "",
  });

  

  useEffect(() => {
    const fetchUserLifeStyleDetails = async () => {
      try {
        const response = await get("user/user-lifestyle-details");
        if (response.success) {
          if (response.data.length === 0) {
            console.log("No lifestyle details found.");
          } else {
            const lifestyleDetails = response.data[0];
            setFormData({
              drink: lifestyleDetails.drink || "",
              smoke: lifestyleDetails.smoke || "",
              diet: lifestyleDetails.diet || "",
              blood: lifestyleDetails.blood || "",
              bodytype: lifestyleDetails.bodytype || "",
              skintype: lifestyleDetails.skintype || "",
            });
          }
        } else {
          toast.warn("Failed to fetch lifstyle details.");
        }
      } catch (error) {
        toast.error("Failed to fetch lifestyle details. Please try again.");
      }
    };

    fetchUserLifeStyleDetails();
  }, [userData]);

  const handleSave = async (e) => {
    e.preventDefault();
    const { drink, smoke, diet, blood } = formData;
    if (!drink || !smoke || !diet || !blood) {
      return toast.error("All fields are required");
    }
    try {
      const url = "/user/user-lifestyle";
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
    
    <div className="userLife-container">
      
      <div className="userLife-heading-container">
        <div className="userLife-heading">
          <Typography variant="h5">Life Style</Typography>
        </div>
        <div className="userLife-heading">
          <Typography variant="h5">Appearence</Typography>
        </div>
      </div>
      <form onSubmit={handleSave} style={{width:"100%"}}>

        <div className="userLife-content-container">
          <div className="userLife-leftcontent-container">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Select
                  displayEmpty
                  value={formData.drink}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      drink: e.target.value,
                    }))
                  }
                  IconComponent={() => (
                    <FaChevronDown className="userLife-icon" />
                  )}
                  className="userLife-select disabled-input"
                  name="drink"
                  renderValue={(selected) => selected || "Drink"}
                  disabled={!isEditable}
                >
                  <MenuItem value="" disabled>
                    Drink
                  </MenuItem>
                  <MenuItem value="yes">Yes</MenuItem>
                  <MenuItem value="no">No</MenuItem>
                  <MenuItem value="occasionaly">Occasionally</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                <Select
                  displayEmpty
                  value={formData.smoke}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, smoke: e.target.value }))
                  }
                  IconComponent={() => (
                    <FaChevronDown className="userLife-icon" />
                  )}
                  className="userLife-select disabled-input"
                  renderValue={(selected) => selected || "Smoke"}
                  name="smoke"
                  disabled={!isEditable}
                >
                  <MenuItem value="" disabled>
                    Smoke
                  </MenuItem>
                  <MenuItem value="yes">Yes</MenuItem>
                  <MenuItem value="no">No</MenuItem>
                  <MenuItem value="occasionaly">Occasionally</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                <Select
                  displayEmpty
                  value={formData.diet}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      diet: e.target.value,
                    }))
                  }
                  IconComponent={() => (
                    <FaChevronDown className="userLife-icon" />
                  )}
                  className="userLife-select disabled-input"
                  renderValue={(selected) => selected || "Diet"}
                  name="diet"
                  disabled={!isEditable}
                >
                  <MenuItem value="" disabled>
                    Diet
                  </MenuItem>
                  <MenuItem value="veg">veg</MenuItem>
                  <MenuItem value="non-veg">Non Veg</MenuItem>
                  <MenuItem value="occasionaly">Occasionally Nonveg</MenuItem>
                </Select>
              </Grid>
              {/* <Grid item xs={12}>
              <Select
                displayEmpty
                value={sunSign}
                onChange={(e) => setSunsign(e.target.value)}
                IconComponent={() => (
                  <FaChevronDown className="userLife-icon" />
                )}
                className="userLife-select"
                renderValue={(selected) => {
                  if (!selected) {
                    return "SunSign"; 
                  }
                  return selected; 
                }}
              >
                {data[7].sunsignStatus.map((item, index) => (
                  <MenuItem value={item} key={index}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </Grid> */}
            </Grid>
          </div>

          <div className="userLife-rightcontent-container">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Select
                  displayEmpty
                  value={formData.blood}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      blood: e.target.value,
                    }))
                  }
                  IconComponent={() => (
                    <FaChevronDown className="userLife-icon" />
                  )}
                  className="userLife-select disabled-input"
                  renderValue={(selected) => selected || "Blood"}
                  name="blood"
                  disabled={!isEditable}
                >
                  {data[8].bloodGroupStatus.map((item, index) => (
                    <MenuItem value={item} key={index}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={12}>
                <Select
                  displayEmpty
                  value={formData.bodytype}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      bodytype: e.target.value,
                    }))
                  }
                  IconComponent={() => (
                    <FaChevronDown className="userLife-icon" />
                  )}
                  className="userLife-select"
                  renderValue={(selected) => selected || "Body Type"}
                  name="bodytype"
                  disabled={!isEditable}
                >
                  <MenuItem value="" disabled>
                    Body Type
                  </MenuItem>
                  <MenuItem value="average">Average</MenuItem>
                  <MenuItem value="slim">Slim</MenuItem>
                  <MenuItem value="athletic">Athletic</MenuItem>
                  <MenuItem value="heavy">Heavy</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                <Select
                  displayEmpty
                  value={formData.skintype}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      skintype: e.target.value,
                    }))
                  }
                  IconComponent={() => (
                    <FaChevronDown className="userLife-icon" />
                  )}
                  className="userLife-select"
                  renderValue={(selected) => selected || "Skin Type"}
                  name="skintype"
                  disabled={!isEditable}
                >
                  <MenuItem value="" disabled>
                    Skin Type
                  </MenuItem>
                  <MenuItem value="fair">Fair</MenuItem>
                  <MenuItem value="very-fair">Very Fair</MenuItem>
                  <MenuItem value="wheatish">Wheatish</MenuItem>
                  <MenuItem value="dark">Dark</MenuItem>
                </Select>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className="userLife-btn">
          <Button
            variant="outlined"
            className="userabout-edit-btn"
            onClick={handleEditToggle}
          >
            {isEditable ? "Cancel" : "Edit"}
          </Button>
          <Button
            variant="contained"
            
            className="userLife-submit-btn"
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

export default UserLife;
