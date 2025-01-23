import React, { useState } from "react";
import "./UserPreference.css";
import { Grid, Typography, Button, Select, MenuItem } from "@mui/material";
import json from "../../../../../components/jsondata/data.json";
import { FaChevronDown } from "react-icons/fa";

function UserPreference() {
  const data = json;
  const [caste, setCaste] = useState("");
  const [ageFrom, setAgeFrom] = useState("");
  const [heightFrom, setHeightFrom] = useState("");

  const [country, setCountry] = useState("");
  const [education, setEducation] = useState("");
  const [ageTo, setAgeTo] = useState("");
  const [heightTo, setHeightTo] = useState("");
  const [status, setStatus] = useState("");
  return (
    <div className="userPreference-container">
      
        <div className="userPreference-heading">
          <Typography variant="h5">Parents & Preference</Typography>
        </div>
      
      <div className="userPreference-content-container">
        <div className="userPreference-leftcontent-container">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Select
                displayEmpty
                value={caste}
                onChange={(e) => setCaste(e.target.value)}
                IconComponent={() => (
                  <FaChevronDown className="userPreference-icon" />
                )}
                className="userPreference-select"
                renderValue={(selected) => {
                  if (!selected) {
                    return "Caste Preference";
                  }
                  return selected;
                }}
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
                value={ageFrom}
                onChange={(e) => setAgeFrom(e.target.value)}
                IconComponent={() => (
                  <FaChevronDown className="userPreference-icon" />
                )}
                className="userPreference-select"
                renderValue={(selected) => {
                  if (!selected) {
                    return "Age Preference (From)";
                  }
                  return selected;
                }}
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
                value={heightFrom}
                onChange={(e) => setHeightFrom(e.target.value)}
                IconComponent={() => (
                  <FaChevronDown className="userPreference-icon" />
                )}
                className="userPreference-select"
                renderValue={(selected) => {
                  if (!selected) {
                    return "Height Preference (From)";
                  }
                  return selected;
                }}
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
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                IconComponent={() => (
                  <FaChevronDown className="userPreference-icon" />
                )}
                className="userPreference-select"
                renderValue={(selected) => {
                  if (!selected) {
                    return "Occupation Country";
                  }
                  return selected;
                }}
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
                value={education}
                onChange={(e) => setEducation(e.target.value)}
                IconComponent={() => (
                  <FaChevronDown className="userPreference-icon" />
                )}
                className="userPreference-select"
                renderValue={(selected) => {
                  if (!selected) {
                    return "Education Preference";
                  }
                  return selected;
                }}
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
                value={ageTo}
                onChange={(e) => setAgeTo(e.target.value)}
                IconComponent={() => (
                  <FaChevronDown className="userPreference-icon" />
                )}
                className="userPreference-select"
                renderValue={(selected) => {
                  if (!selected) {
                    return "Age Preference (To)";
                  }
                  return selected;
                }}
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
                value={heightTo}
                onChange={(e) => setHeightTo(e.target.value)}
                IconComponent={() => (
                  <FaChevronDown className="userPreference-icon" />
                )}
                className="userPreference-select"
                renderValue={(selected) => {
                  if (!selected) {
                    return "Height Preference (To)";
                  }
                  return selected;
                }}
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
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                IconComponent={() => (
                  <FaChevronDown className="userPreference-icon" />
                )}
                className="userPreference-select"
                renderValue={(selected) => {
                  if (!selected) {
                    return "Marrital Status";
                  }
                  return selected;
                }}
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
          
          className="userPreference-clear-btn"
        >
          Clear
        </Button>
        <Button
          variant="contained"
          
          className="userPreference-submit-btn"
        >
          Save
        </Button>
      </div>
    </div>
  );
}

export default UserPreference;
