import React, { useState } from "react";
import "./UserLife.css";
import {
  Grid,
  Typography,
  Button,
  Select,
  MenuItem,
} from "@mui/material";
import json from "../../../../../components/jsondata/data.json";
import { FaChevronDown } from "react-icons/fa";

function UserLife() {
  const data = json;
  const [drink, setDrink] = useState("");
  const [smoke, setSmoke] = useState("");
  const [diet, setDiet] = useState("");
  const [sunSign, setSunsign] = useState("");
  const [blood, setBlood] = useState("");
  const [bodyType, setBodyType] = useState("");
  const [skinType, setskinType] = useState("");
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
      <div className="userLife-content-container">
        <div className="userLife-leftcontent-container">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Select
                displayEmpty
                value={drink}
                onChange={(e) => setDrink(e.target.value)}
                IconComponent={() => (
                  <FaChevronDown className="userLife-icon" />
                )}
                className="userLife-select"
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
                value={smoke}
                onChange={(e) => setSmoke(e.target.value)}
                IconComponent={() => (
                  <FaChevronDown className="userLife-icon" />
                )}
                className="userLife-select"
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
                value={diet}
                onChange={(e) => setDiet(e.target.value)}
                IconComponent={() => (
                  <FaChevronDown className="userLife-icon" />
                )}
                className="userLife-select"
              >
                <MenuItem value="" disabled>
                  Diet
                </MenuItem>
                <MenuItem value="veg">veg</MenuItem>
                <MenuItem value="non-veg">Non Veg</MenuItem>
                <MenuItem value="occasionaly">Occasionally Nonveg</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={12}>
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
            </Grid>
            <Grid item xs={12}>
            <Select
                displayEmpty
                value={blood}
                onChange={(e) => setBlood(e.target.value)}
                IconComponent={() => (
                  <FaChevronDown className="userLife-icon" />
                )}
                className="userLife-select"
                renderValue={(selected) => {
                  if (!selected) {
                    return "Blood Group"; 
                  }
                  return selected; 
                }}
              >
                {data[8].bloodGroupStatus.map((item, index) => (
                  <MenuItem value={item} key={index}>
                    {item}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
        </div>

        <div className="userLife-rightcontent-container">
          <Grid container spacing={2}>
            <Grid item xs={12}>
            <Select
                displayEmpty
                value={bodyType}
                onChange={(e) => setBodyType(e.target.value)}
                IconComponent={() => (
                  <FaChevronDown className="userLife-icon" />
                )}
                className="userLife-select"
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
                value={skinType}
                onChange={(e) => setskinType(e.target.value)}
                IconComponent={() => (
                  <FaChevronDown className="userLife-icon" />
                )}
                className="userLife-select"
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
          color="secondary"
          className="userLife-clear-btn"
        >
          Clear
        </Button>
        <Button
          variant="contained"
          color="primary"
          className="userLife-submit-btn"
        >
          Save
        </Button>
      </div>
    </div>
  );
}

export default UserLife;
