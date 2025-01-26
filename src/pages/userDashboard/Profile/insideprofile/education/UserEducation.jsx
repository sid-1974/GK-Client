import React, { useState,useEffect } from "react";
import "./UserEducation.css";
import {
  Grid,
  Typography,
  TextField,
  Button,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import { useUser } from "../../../../../components/router/userContext/UserContext";
import { FaChevronDown } from "react-icons/fa";
import json from "../../../../../components/jsondata/data.json";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { post, get } from "../../../../../../src/api/api";

function UserEducation() {
  const data = json;
  const { userData } = useUser();
  const [isEditable, setIsEditable] = useState(false);
  const [formData, setFormData] = useState({
    qualification:"",
    occupation:"",
    incomeperannum:"",
    occupationcountry:"",
  });

  const handleEditToggle = () => {
    setIsEditable((prev) => !prev);
  };



  useEffect(() => {
    const fetchUserEducationDetails = async () => {
      try {
        const response = await get("user/user-education-details");
        if (response.success) {
          if (response.data.length === 0) {
            console.log("No education details found.");
            // toast.warn("No family details found. Please fill out the form.");
          } else {
            const educationDetails = response.data[0];
            setFormData({
              qualification: educationDetails.qualification || "",
              occupation: educationDetails.occupation || "",
              incomeperannum: educationDetails.incomeperannum || "",
              occupationcountry: educationDetails.occupationcountry || "",
            });
          }
        } else {
          toast.warn("Failed to fetch education details.");
        }
      } catch (error) {
        toast.error("Failed to fetch education details. Please try again.");
      }
    };

    fetchUserEducationDetails();
  }, [userData]);

  const handleSave = async (e) => {
    e.preventDefault();
    const { qualification, occupation, incomeperannum, occupationcountry } = formData;
    if (!qualification || !occupation || !incomeperannum || !occupationcountry) {
      return toast.error("All fields are required");
    }
    try {
      const url = "/user/user-education";

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
  

  return (
    <div className="usereducation-container">
      <div className="usereducation-heading">
        <Typography variant="h5">Eduction & Occupation</Typography>
      </div>
      <form onSubmit={handleSave}>
      <div className="usereducation-content-container">
        <Grid container spacing={2}>
          {/* qualification -------------------------------------- */}
          <Grid item xs={12}>
            <Select
              displayEmpty
              value={formData.qualification}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  qualification: e.target.value,
                }))
              }
              IconComponent={() => (
                <FaChevronDown className="usereducation-icon" />
              )}
              className="usereducation-select disabled-input"
              renderValue={(selected) => selected || "Qualification"}
              disabled={!isEditable}
              name="qualification"
            >
              {data[4].qualificationValues.map((item, index) => (
                <MenuItem value={item} key={index}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </Grid>

          {/* Occupation----------------------------------------------------- */}
          <Grid item xs={12}>
            <Select
              displayEmpty
              value={formData.occupation}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, occupation: e.target.value }))
              }
              IconComponent={() => (
                <FaChevronDown className="usereducation-icon" />
              )}
              className="usereducation-select disabled-input"
              renderValue={(selected) => selected || "Occupation"}
              disabled={!isEditable}
              name="occupation"
            >
              {data[3].occupationValues.map((item, index) => (
                <MenuItem value={item} key={index}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          {/* Income Per Annum---------------------------------------------------- */}
          <Grid item xs={12}>
            <Select
              displayEmpty
              value={formData.incomeperannum}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  incomeperannum: e.target.value,
                }))
              }
              IconComponent={() => (
                <FaChevronDown className="usereducation-icon" />
              )}
              className="usereducation-select disabled-input"
              renderValue={(selected) => selected || "Income Per Annum"}
              disabled={!isEditable}
              name="incomeperannum"
            >
              {data[2].incomeValues.map((item, index) => (
                <MenuItem value={item} key={index}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </Grid>
          {/* Occupation Country----------------------------------------------------- */}
          <Grid item xs={12}>
            <Select
              displayEmpty
              value={formData.occupationcountry}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  occupationcountry: e.target.value,
                }))
              }
              IconComponent={() => (
                <FaChevronDown className="usereducation-icon" />
              )}
              className="usereducation-select disabled-input"
              renderValue={(selected) => selected || "Occupation Country"}
              disabled={!isEditable}
              name="occupationcountry"
            >
              {data[10].countries.map((item, index) => (
                <MenuItem value={item} key={index}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </Grid>
        </Grid>
      </div>
      <div className="usereducation-btn">
      <Button
          variant="contained"
          color="primary"
          className="usereducation-submit-btn"
          disabled={!isEditable}
          type="submit"
        >
          Save
        </Button>
        <Button
          variant="outlined"
          className="userabout-edit-btn"
          onClick={handleEditToggle}
        >
          {isEditable ? "Cancel" : "Edit"}
        </Button>
        
      </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default UserEducation;
