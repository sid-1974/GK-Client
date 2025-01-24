import React, { useState, useEffect } from "react";
import "./UserPreference.css";
import { Grid, Typography, Button, Select, MenuItem } from "@mui/material";
import json from "../../../../../components/jsondata/data.json";
import { useUser } from "../../../../../components/router/userContext/UserContext";
import { FaChevronDown } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { post, get } from "../../../../../../src/api/api";

function UserPreference() {
  const data = json;
  const { userData } = useUser();
  const [isEditable, setIsEditable] = useState(false);
  const [formData, setFormData] = useState({
    castepreference: "",
    agepreferencefrom: "",
    heightpreferencefrom: "",
    occupationcountrypreference: "",
    educationpreference: "",
    agepreferenceto: "",
    heightpreferenceto: "",
    maritalStatuspreference: "",
  });

  useEffect(() => {
    const fetchUserPreferenceDetails = async () => {
      try {
        const response = await get("user/user-preference-details");
        if (response.success) {
          if (response.data.length === 0) {
          } else {
            const PreferenceDetails = response.data[0];
            setFormData({
              castepreference: PreferenceDetails.castepreference || "",
              agepreferencefrom: PreferenceDetails.agepreferencefrom || "",
              heightpreferencefrom:
                PreferenceDetails.heightpreferencefrom || "",
              occupationcountrypreference:
                PreferenceDetails.occupationcountrypreference || "",
              educationpreference: PreferenceDetails.educationpreference || "",
              agepreferenceto: PreferenceDetails.agepreferenceto || "",
              heightpreferenceto: PreferenceDetails.heightpreferenceto || "",
              maritalStatuspreference:
              PreferenceDetails.maritalStatuspreference || "",
            });
          }
        } else {
          toast.warn("Failed to fetch preference details.");
        }
      } catch (error) {
        toast.error("Failed to fetch preferencedetails. Please try again.");
      }
    };

    fetchUserPreferenceDetails();
  }, [userData]);

  const handleSave = async (e) => {
    e.preventDefault();
    const {
      castepreference,
      agepreferencefrom,
      heightpreferencefrom,
      occupationcountrypreference,
      educationpreference,
      agepreferenceto,
      heightpreferenceto,
      maritalStatuspreference,
    } = formData;
    if (
      !castepreference ||
      !agepreferencefrom ||
      !heightpreferencefrom ||
      !occupationcountrypreference ||
      !educationpreference ||
      !agepreferenceto ||
      !heightpreferenceto ||
      !maritalStatuspreference
    ) {
      return toast.error("All fields are required");
    }
    try {
      const url = "/user/user-preference";
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
    <div className="userPreference-container">
      <div className="userPreference-heading">
        <Typography variant="h5">Parents & Preference</Typography>
      </div>
      <form onSubmit={handleSave} style={{ width: "100%" }}>
        <div className="userPreference-content-container">
          <div className="userPreference-leftcontent-container">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Select
                  displayEmpty
                  value={formData.castepreference}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      castepreference: e.target.value,
                    }))
                  }
                  IconComponent={() => (
                    <FaChevronDown className="userPreference-icon" />
                  )}
                  className="userPreference-select disabled-input"
                  renderValue={(selected) => selected || "Caste Preference"}
                  name="castepreference"
                  disabled={!isEditable}
                >
                  {data[0].casteValues.map((item, index) => (
                    <MenuItem value={item} key={index}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              {/* age------------------------------------ */}
              <Grid item xs={12}>
                <Select
                  displayEmpty
                  value={formData.agepreferencefrom}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      agepreferencefrom: e.target.value,
                    }))
                  }
                  IconComponent={() => (
                    <FaChevronDown className="userPreference-icon" />
                  )}
                  className="userPreference-select disabled-input"
                  name="agepreferencefrom"
                  renderValue={(selected) => selected || "Age Preference (From"}
                  disabled={!isEditable}
                >
                  {data[9].minAge.map((item, index) => (
                    <MenuItem value={item} key={index}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              {/* height--------------------------------- */}
              <Grid item xs={12}>
                <Select
                  displayEmpty
                  value={formData.heightpreferencefrom}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      heightpreferencefrom: e.target.value,
                    }))
                  }
                  className="userPreference-select disabled-input"
                  renderValue={(selected) =>
                    selected || "Height Preference (From)"
                  }
                  name="heightpreferencefrom"
                  disabled={!isEditable}
                >
                  {data[5].heightValues.map((item, index) => (
                    <MenuItem value={item} key={index}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              {/* country--------------------------------------- */}
              <Grid item xs={12}>
                <Select
                  displayEmpty
                  value={formData.occupationcountrypreference}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      occupationcountrypreference: e.target.value,
                    }))
                  }
                  IconComponent={() => (
                    <FaChevronDown className="userPreference-icon" />
                  )}
                  className="userPreference-select disabled-input"
                  name="occupationcountrypreference"
                  renderValue={(selected) => selected || "Occupation Country"}
                  disabled={!isEditable}
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

          <div className="userPreference-rightcontent-container">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Select
                  displayEmpty
                  value={formData.educationpreference}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      educationpreference: e.target.value,
                    }))
                  }
                  IconComponent={() => (
                    <FaChevronDown className="userPreference-icon" />
                  )}
                  className="userPreference-select disabled-input"
                  name="educationpreference"
                  disabled={!isEditable}
                  renderValue={(selected) => selected || "Education Preference"}
                >
                  {data[4].qualificationValues.map((item, index) => (
                    <MenuItem value={item} key={index}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              {/* ageTO------------------------------ */}
              <Grid item xs={12}>
                <Select
                  displayEmpty
                  value={formData.agepreferenceto}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      agepreferenceto: e.target.value,
                    }))
                  }
                  IconComponent={() => (
                    <FaChevronDown className="userPreference-icon" />
                  )}
                  className="userPreference-select disabled-input"
                  name="agepreferenceto"
                  renderValue={(selected) => selected || "Age Preference (To)"}
                  disabled={!isEditable}
                >
                  {data[9].minAge.map((item, index) => (
                    <MenuItem value={item} key={index}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              {/* heightT0------------------- --- */}
              <Grid item xs={12}>
                <Select
                  displayEmpty
                  value={formData.heightpreferenceto}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      heightpreferenceto: e.target.value,
                    }))
                  }
                  IconComponent={() => (
                    <FaChevronDown className="userPreference-icon" />
                  )}
                  className="userPreference-select disabled-input"
                  name="heightpreferenceto"
                  renderValue={(selected) =>
                    selected || "Height Preference (To)"
                  }
                  disabled={!isEditable}
                >
                  {data[5].heightValues.map((item, index) => (
                    <MenuItem value={item} key={index}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
              {/* Marrital Status------------------------ */}
              <Grid item xs={12}>
                <Select
                  displayEmpty
                  value={formData.maritalStatuspreference}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      maritalStatuspreference: e.target.value,
                    }))
                  }
                  IconComponent={() => (
                    <FaChevronDown className="userPreference-icon" />
                  )}
                  className="userPreference-select disabled-input"
                  name="maritalStatuspreference"
                  renderValue={(selected) => selected || "Marrital Status"}
                  disabled={!isEditable}
                >
                  {data[6].marritalStatus.map((item, index) => (
                    <MenuItem value={item} key={index}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className="userPreference-btn">
          <Button
            variant="outlined"
            className="userabout-edit-btn"
            onClick={handleEditToggle}
          >
            {isEditable ? "Cancel" : "Edit"}
          </Button>
          <Button
            variant="contained"
            className="userPreference-submit-btn"
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

export default UserPreference;
