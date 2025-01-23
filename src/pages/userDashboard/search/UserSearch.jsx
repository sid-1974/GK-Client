import React, { useState } from "react";
import "./UserSearch.css";
import {
  Grid,
  Typography,
  Button,
  Select,
  MenuItem,
  TextField,
  InputAdornment,
} from "@mui/material";
import json from "../../../components/jsondata/data.json";
import { FaChevronDown } from "react-icons/fa";
import SearchIcon from "@mui/icons-material/Search";

function UserSearch() {
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
    <div className="user-search-container">
      <div className="user-search-heading">
        <Typography variant="h4">Profile Based On Preference</Typography>
        <TextField
          className="search-bar"
          variant="outlined"
          size="small"
          placeholder="Search User Id"
          // onChange={handleSearchChange}
          sx={{
            borderBottom: "2px solid #000",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "none",
              },
            },
            width: "300px",
            height: "40px",
            // Adjust width as needed
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div className="usersearch-container-1">
        <div className="usersearch-marriage-status">
          <Typography>First Marriage:</Typography>
          <div>
            <label>
              <input
                type="radio"
                name="marriageStatus"
                value="yes"
                style={{ marginRight: "5px" }}
              />
              Yes
            </label>
            <label style={{ marginLeft: "10px" }}>
              <input
                type="radio"
                name="marriageStatus"
                value="no"
                style={{ marginRight: "5px" }}
              />
              No
            </label>
          </div>
        </div>
        <div className="userSearch-content-container">
          <div className="userSearch-leftcontent-container">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Select
                  displayEmpty
                  value={caste}
                  onChange={(e) => setCaste(e.target.value)}
                  IconComponent={() => (
                    <FaChevronDown className="userSearch-icon" />
                  )}
                  className="userSearch-select"
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
                    <FaChevronDown className="userSearch-icon" />
                  )}
                  className="userSearch-select"
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
                    <FaChevronDown className="userSearch-icon" />
                  )}
                  className="userSearch-select"
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
                    <FaChevronDown className="userSearch-icon" />
                  )}
                  className="userSearch-select"
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

          <div className="userSearch-rightcontent-container">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Select
                  displayEmpty
                  value={education}
                  onChange={(e) => setEducation(e.target.value)}
                  IconComponent={() => (
                    <FaChevronDown className="userSearch-icon" />
                  )}
                  className="userSearch-select"
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
                    <FaChevronDown className="userSearch-icon" />
                  )}
                  className="userSearch-select"
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
                    <FaChevronDown className="userSearch-icon" />
                  )}
                  className="userSearch-select"
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
                    <FaChevronDown className="userSearch-icon" />
                  )}
                  className="userSearch-select"
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
        <div className="userSearch-btn">
          <Button variant="outlined" className="userSearch-clear-btn">
            Clear
          </Button>
          <Button variant="contained" className="userSearch-submit-btn">
            Save
          </Button>
        </div>
      </div>
    </div>
  );
}

export default UserSearch;
