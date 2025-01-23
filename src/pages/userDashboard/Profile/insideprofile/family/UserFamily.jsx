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
import { post, get } from "../../../../../api/api";

function UserFamily() {
  const data = json;
  const { userData } = useUser();
  const [isEditable, setIsEditable] = useState(false);
  const [religion, setReligion] = useState("");
  const [caste, setCaste] = useState("");
  const handleEditToggle = () => {
    setIsEditable((prev) => !prev);
  };

  const [formData, setFormData] = useState({
    father: "",
    mother: "",
    sibling1: "",
    sibling2: "",
    religion: "",
    caste: "",
    subcaste: "",
    nakshatra: "",
    gotra: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    const fetchUserFamilyDetails = async () => {
      try {
        const response = await get("/user/user-family-details");
        if (response.success) {
          setFormData(response.data);
          localStorage.setItem(
            "userFamilyDetails",
            JSON.stringify(response.data)
          );
        } else {
          setFormData({
            father: "",
            mother: "",
            sibling1: "",
            sibling2: "",
            religion: "",
            caste: "",
            subcaste: "",
            nakshatra: "",
            gotra: "",
          });
          localStorage.removeItem("userFamilyDetails");
        }
      } catch (error) {
        toast.error(error.message);
      }
    };
    const storedDetails = localStorage.getItem("userFamilyDetails");
    if (storedDetails) {
      const parsedDetails = JSON.parse(storedDetails);
      if (parsedDetails.userId !== userData.id) {
        localStorage.removeItem("userFamilyDetails");
        fetchUserFamilyDetails();
      } else {
        setFormData(parsedDetails);
      }
    } else {
      fetchUserFamilyDetails();
    }
  }, [userData]);

  const handleSave = async (e) => {
    e.preventDefault();
    const {
      father,
      mother,
      sibling1,
      sibling2,
      religion,
      caste,
      subcaste,
      nakshatra,
      rashi,
      gotra,
    } = formData;
    if (
      !father ||
      !mother ||
      // !sibling1 ||
      // !sibling2 ||
      !religion ||
      !caste ||
      // !subcaste ||
      // !nakshatra ||
      !rashi 
      // !gotra
    ) {
      return toast.error("All fields are required");
    }
    try {
      const url = "/user/user-family";
      const response = await post(url, formData);

      const { success, message } = response;

      if (success) {
        localStorage.setItem("userFamilyDetails ", JSON.stringify(formData));
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
                  className="userfamily-input"
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
                  className="userfamily-input"
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
                  className="userfamily-input"
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
                  className="userfamily-input"
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
                  className="userfamily-input"
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
                  className="userfamily-input"
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
                  className="userfamily-input"
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
                  className="userfamily-input"
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
