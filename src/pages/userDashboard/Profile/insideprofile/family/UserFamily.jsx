import React, { useEffect, useState } from "react";
import "./UserFamily.css";
import {
  Grid,
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import { useUser } from "../../../../../components/router/userContext/UserContext";
import json from "../../../../../components/jsondata/data.json";
import { FaChevronDown } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { post, get } from "../../../../../../src/api/api";

function UserFamily() {
  const data = json;
  const { userData } = useUser();
  const [isEditable, setIsEditable] = useState(false);
  const [formData, setFormData] = useState({
    father:"",
    mother:"",
    sibling1:"",
    sibling2:"",
    religion:"",
    caste:"",
    subcaste:"",
    nakshatra:"",
    gotra:"",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    setFormData((prev) => ({ ...prev, [name]: value }));
    
  };
  

  useEffect(() => {
    const fetchUserFamilyDetails = async () => {
      try {
        const response = await get("user/user-family-details");
        if (response.success) {
          if (response.data.length === 0) {
            console.log("No family details found.");
            // toast.warn("No family details found. Please fill out the form.");
          } else {
            const familyDetails = response.data[0];
            setFormData({
              father: familyDetails.father || "",
              mother: familyDetails.mother || "",
              sibling1: familyDetails.sibling1 || "",
              sibling2: familyDetails.sibling2 || "",
              religion: familyDetails.religion || "",
              caste: familyDetails.caste || "",
              subcaste: familyDetails.subcaste || "",
              nakshatra: familyDetails.nakshatra || "",
              rashi: familyDetails.rashi|| "",
              gotra: familyDetails.gotra || "",
            });
          }
        } else {
          toast.warn("Failed to fetch family details.");
        }
      } catch (error) {
        toast.error("Failed to fetch family details. Please try again.");
      }
    };
  
    fetchUserFamilyDetails();
  }, [userData]);
  // useEffect(() => {
  //   console.log("Updated formData:", formData);
  // }, [formData]);
  
 

  const handleSave = async (e) => {
    e.preventDefault();
    const {
      father,
      mother,
      religion,
      caste,
      rashi,
    } = formData;
    if (
      !father ||
      !mother ||
      !religion ||
      !caste ||
      !rashi 
    ) {
      return toast.error("All fields are required");
    }
    try {
      const url = "/user/user-family";
     
      const response = await post(url, formData);
       
      const { success, message } = response;
      
      if (success) {
        // localStorage.setItem("userFamilyDetails ", JSON.stringify(formData));
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
    <div className="userfamily-container">
      <div className="userfamily-heading-container">
        <div className="userfamily-heading">
          <Typography variant="h5">Family</Typography>
        </div>
        <div className="userfamily-heading">
          <Typography variant="h5">Religious Background</Typography>
        </div>
      </div>
      <form onSubmit={handleSave}>
        <div className="userfamily-content-container">
          <div className="userfamily-leftcontent-container">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Father"
                  variant="outlined"
                  fullWidth
                  className="userfamily-input disabled-input"
                  disabled={!isEditable}
                  value={formData.father}
                  onChange={handleInputChange}
                  name="father"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Mother"
                  variant="outlined"
                  fullWidth
                  className="userfamily-input disabled-input"
                  disabled={!isEditable}
                  value={formData.mother}
                  onChange={handleInputChange}
                  name="mother"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Sibling-1"
                  variant="outlined"
                  fullWidth
                  className="userfamily-input disabled-input"
                  disabled={!isEditable}
                  value={formData.sibling1}
                  onChange={handleInputChange}
                  name="sibling1"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Sibling-2"
                  variant="outlined"
                  fullWidth
                  className="userfamily-input disabled-input"
                  disabled={!isEditable}
                  value={formData.sibling2}
                  onChange={handleInputChange}
                  name="sibling2"
                />
              </Grid>
            </Grid>
          </div>

          <div className="userfamily-rightcontent-container">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Select
                  displayEmpty
                  value={formData.religion}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, religion: e.target.value }))
                  }
                  IconComponent={() => (
                    <FaChevronDown className="userfamily-icon" />
                  )}
                  className="userfamily-input  disabled-input"
                  disabled={!isEditable}
                  renderValue={(selected) => selected || "Religion"}
                  name="religion"
                >
                  <MenuItem value="" disabled>
                    Religion
                  </MenuItem>
                  <MenuItem value="hindu">Hindu</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={12}>
                <Select
                  displayEmpty
                  value={formData.caste}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, caste: e.target.value }))
                  }
                  IconComponent={() => (
                    <FaChevronDown className="userfamily-icon" />
                  )}
                  className="userfamily-input  disabled-input"
                  disabled={!isEditable}
                  renderValue={(selected) => selected || "Caste"}
                  name="caste"
                >
                  {data[0].casteValues.map((item, index) => (
                    <MenuItem value={item} key={index}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Sub-Caste"
                  variant="outlined"
                  fullWidth
                  className="userfamily-input disabled-input"
                  disabled={!isEditable}
                  value={formData.subcaste}
                  onChange={handleInputChange}
                  name="subcaste"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Nakshatra"
                  variant="outlined"
                  fullWidth
                  className="userfamily-input disabled-input"
                  disabled={!isEditable}
                  value={formData.nakshatra}
                  onChange={handleInputChange}
                  name="nakshatra"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Rashi"
                  variant="outlined"
                  fullWidth
                  className="userfamily-input disabled-input"
                  disabled={!isEditable}
                  value={formData.rashi}
                  onChange={handleInputChange}
                  name="rashi"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Gotra"
                  variant="outlined"
                  fullWidth
                  className="userfamily-input disabled-input"
                  disabled={!isEditable}
                  value={formData.gotra}
                  onChange={handleInputChange}
                  name="gotra"
                />
              </Grid>
            </Grid>
          </div>
        </div>
        <div className="userabout-btn">
          <Button
            variant="outlined"
            className="userabout-edit-btn"
            onClick={handleEditToggle}
          >
            {isEditable ? "Cancel" : "Edit"}
          </Button>
          <Button
            variant="contained"
            color="primary"
            className="userabout-submit-btn"
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

export default UserFamily;
