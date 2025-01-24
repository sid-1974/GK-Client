import React, { useState,useEffect } from "react";
import {
  Grid,
  Select,
  MenuItem,
  FormControl,
  Typography,
  TextField,
  Button,
  
} from "@mui/material";
import { FaChevronDown } from "react-icons/fa";
import "./UserAbout.css";
import { useUser } from "../../../../../components/router/userContext/UserContext";
import json from "../../../../../components/jsondata/data.json";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { post,get } from "../../../../../api/api";

function UserAbout() {
  const data = json;
  const { userData } = useUser();
  const [isEditable, setIsEditable] = useState(false);
  const [formData, setFormData] = useState({
    address: "",
    pincode: "",
    city: "",
    state: "",
    country: "",
    age: "",
    dateOfBirth: "",
    height: "",
    gender: "",
    language: "",
    maritalStatus: "",
  });



  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    setFormData((prev) => ({ ...prev, [name]: value }));
    
  };

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await get("/user/user-about-details");
        if (response.success) {
          // console.log(response,"mappppppp")
          
          setFormData(response.data);

          // localStorage.setItem("userAboutDetails", JSON.stringify(response.data));
        } else {
         
          setFormData({
            address: "",
            pincode: "",
            city: "",
            state: "",
            country: "",
            age: "",
            dateOfBirth: "",
            height: "",
            gender: "",
            language: "",
            maritalStatus: "",
          });
          // localStorage.removeItem("userAboutDetails");
        }
      } catch (error) {
        toast.error(error.message );
      }
    };
  
   
    // const storedDetails = localStorage.getItem("userAboutDetails");
    // if (storedDetails) {
    //   const parsedDetails = JSON.parse(storedDetails);
    //   if (parsedDetails.userId !== userData.id) {
    //     localStorage.removeItem("userAboutDetails");
    //     fetchUserDetails();
    //   } else {
    //     setFormData(parsedDetails);
    //   }
    // } else {
      fetchUserDetails();
    // }
  }, [userData]); 
  
  
  
  
  const handleSave = async (e) => {
    e.preventDefault();
    const {
      
      age,
      address,
      pincode,
      city,
      state,
      country,
      dateOfBirth,
      height,
      gender,
      language,
      maritalStatus,
    } = formData;

    const isAny = !age ||
    !address ||
    !pincode ||
    !city ||
    !state ||
    !country ||
    !dateOfBirth ||
    !height ||
    !gender ||
    !language ||
    !maritalStatus
   
    if (isAny) {
      return toast.error("All fields are required");
    }

    try {
      const url = "/user/user-about"; 
      const response = await post(url, formData )
      
      const { success, message } = response;
      
      if (success) {
        // localStorage.setItem("userAboutDetails", JSON.stringify(formData));
        toast.success(message)
        setIsEditable(false); 
      }  else {
        toast.error(message );
      }
    } catch (error) {
      
      toast.error("An error occurred. Please try again.");
    }
  };

  const handleEditToggle = () => {
    setIsEditable((prev) => !prev);
  };

  return (
    <div className="userabout-container">
      <div className="userabout-heading">
        <Typography variant="h5">Personal Information</Typography>
      </div>
      <form onSubmit={handleSave}>
      <div className="userabout-content-container">
        <div className="userabout-leftcontent-container">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Full Name"
                variant="outlined"
                fullWidth
                className="userabout-input disabled-input"
                value={userData?.fullName || "Full Name"}
                disabled={!isEditable}
                name="fullName"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Phone No."
                variant="outlined"
                fullWidth
                className="userabout-input disabled-input"
                value={userData.phoneNumber || "Phone No."}
                disabled={!isEditable}
                name="phoneNumber"

              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Address"
                variant="outlined"
                fullWidth
                className="userabout-input  disabled-input"
                disabled={!isEditable}
                value={formData.address}
                onChange={handleInputChange}
                name="address"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Pin Code"
                variant="outlined"
                fullWidth
                className="userabout-input  disabled-input"
                disabled={!isEditable}
                value={formData.pincode}
                onChange={handleInputChange}
                name="pincode"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="City"
                variant="outlined"
                fullWidth
                className="userabout-input  disabled-input"
                disabled={!isEditable}
                value={formData.city}
                onChange={handleInputChange}
                name="city"
              />
            </Grid>
            <Grid item xs={12}>
              <Select
                // label="State"
                displayEmpty
                value={formData.state}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, state: e.target.value }))
                }
                IconComponent={() => (
                  <FaChevronDown className="userabout-icon" />
                )}
                className="userabout-select  disabled-input"
                disabled={!isEditable}
                renderValue={(selected) => selected || "State"}
                name="state"
              >
                {data[12].states.map((item, index) => (
                  <MenuItem value={item} key={index}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12}>
              <Select
                displayEmpty
                value={formData.country}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, country: e.target.value }))
                }
                IconComponent={() => (
                  <FaChevronDown className="userabout-icon" />
                )}
                className="userabout-select  disabled-input"
                disabled={!isEditable}
                renderValue={(selected) => selected || "Country"}
                name="country"
              >
                <MenuItem value="" disabled>
                    Country
                  </MenuItem>
                  <MenuItem value="india">India</MenuItem>
                  
              </Select>
            </Grid>
          </Grid>
        </div>
        <div className="userabout-rightcontent-container">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Age"
                variant="outlined"
                fullWidth
                className="userabout-input  disabled-input"
                disabled={!isEditable}
                value={formData.age}
                onChange={handleInputChange}
                name="age"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="DOB"
                placeholder="dd/mm/yyyy"
                variant="outlined"
                fullWidth
                className="userabout-input  disabled-input"
                disabled={!isEditable}
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                name="dateOfBirth"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email Id"
                variant="outlined"
                fullWidth
                className="userabout-input disabled-input"
                value={userData.email}
                disabled={!isEditable}
                name="email"
              />
            </Grid>
            <Grid item xs={12}>
              <Select
                displayEmpty
                value={formData.height}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, height: e.target.value }))
                }
                IconComponent={() => (
                  <FaChevronDown className="userabout-icon" />
                )}
                className="userabout-select  disabled-input"
                disabled={!isEditable}
                renderValue={(selected) => selected || "Height"}
                name="height"
              >
                {data[5].heightValues.map((item, index) => (
                  <MenuItem value={item} key={index}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth className="userabout-form-control">
                <Select
                  displayEmpty
                  value={formData.gender}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, gender: e.target.value }))
                  }
                  renderValue={(selected) => selected || "Gender"}
                  IconComponent={() => (
                    <FaChevronDown className="userabout-icon" />
                  )}
                  className="userabout-select  disabled-input"
                  disabled={!isEditable}
                  name="gender"
                >
                  <MenuItem value="" disabled>
                    Gender
                  </MenuItem>
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Select
                displayEmpty
                value={formData.language}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, language: e.target.value }))
                }
                IconComponent={() => (
                  <FaChevronDown className="userabout-icon" />
                )}
                className="userabout-select  disabled-input"
                disabled={!isEditable}
                renderValue={(selected) => selected || "Language"}
                name="language"
              >
                {data[11].languages.map((item, index) => (
                  <MenuItem value={item} key={index}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
            <Grid item xs={12}>
              <Select
                displayEmpty
                value={formData.maritalStatus}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    maritalStatus: e.target.value,
                  }))
                }
                IconComponent={() => (
                  <FaChevronDown className="userabout-icon" />
                )}
                className="userabout-select  disabled-input"
                disabled={!isEditable}
                renderValue={(selected) => selected || "Marital Status"}
                name="maritalStatus"
              >
                <MenuItem value="" disabled>
                  MaritalStatus
                </MenuItem>
                <MenuItem value="single">Single</MenuItem>
                <MenuItem value="married">Married</MenuItem>
              </Select>
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

export default UserAbout;
