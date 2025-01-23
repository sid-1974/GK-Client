import React, { useState } from "react";
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
import { FaChevronDown } from "react-icons/fa";
import json from "../../../../../components/jsondata/data.json";

function UserEducation() {
  const data = json;
  const [qualification, setQualification] = useState("");
  const [occupation, setOccupation] = useState("");
  const [income, setIncome] = useState("");
  const [OccupationCountry, setOccupationCountry] = useState("");

  return (
    <div className="usereducation-container">
      <div className="usereducation-heading">
        <Typography variant="h5">Eduction & Occupation</Typography>
      </div>
      <div className="usereducation-content-container">
        <Grid container spacing={2}>

{/* qualification -------------------------------------- */}
          <Grid item xs={12}>
            <Select
              displayEmpty
              value={qualification}
              onChange={(e) => setQualification(e.target.value)}
              IconComponent={() => (
                <FaChevronDown className="usereducation-icon" />
              )}
              className="usereducation-select"
              renderValue={(selected) => {
                if (!selected) {
                  return "Qualification"; // Show placeholder when no value is selected
                }
                return selected; // Show selected value
              }}
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
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
              IconComponent={() => (
                <FaChevronDown className="usereducation-icon" />
              )}
              className="usereducation-select"
              renderValue={(selected) => {
                if (!selected) {
                  return "Occupation"; // Show placeholder when no value is selected
                }
                return selected; // Show selected value
              }}
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
              value={income}
              onChange={(e) => setIncome(e.target.value)}
              IconComponent={() => (
                <FaChevronDown className="usereducation-icon" />
              )}
              className="usereducation-select"
              renderValue={(selected) => {
                if (!selected) {
                  return "Income Per Annum"; // Show placeholder when no value is selected
                }
                return selected; // Show selected value
              }}
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
              value={OccupationCountry}
              onChange={(e) => setOccupationCountry(e.target.value)}
              IconComponent={() => (
                <FaChevronDown className="usereducation-icon" />
              )}
              className="usereducation-select"
              renderValue={(selected) => {
                if (!selected) {
                  return "Occupation Country"; // Show placeholder when no value is selected
                }
                return selected; // Show selected value
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
      <div className="usereducation-btn">
        <Button
          variant="outlined"
          color="secondary"
          className="usereducation-clear-btn"
        >
          Clear
        </Button>
        <Button
          variant="contained"
          color="primary"
          className="usereducation-submit-btn"
        >
          Save
        </Button>
      </div>
    </div>
  );
}

export default UserEducation;
