import React, { useState } from "react";
import "./UserPrivacy.css";
import { Grid, Typography, Button, Select, MenuItem } from "@mui/material";
import { FaChevronDown } from "react-icons/fa";

function UserPrivacy() {
  const [all, setAll] = useState("");
   const [isEditable, setIsEditable] = useState(false);
  const [paidUsers, setPaidUsers] = useState("");
  const [requestUsers, setRequestUsers] = useState("");

  const handleEditToggle = () => {
    setIsEditable((prev) => !prev);
  };
  return (
    <div className="userprivacy-container">
      <div className="userprivacy-heading">
        <Typography variant="h5">Privacy & Settings</Typography>
      </div>
      <div className="userprivacy-content">
        <Grid container spacing={2}>
          <div className="userprivacy-subContent">
            <Grid item xs={12}>
              <Select
                displayEmpty
                value={all}
                onChange={(e) => setAll(e.target.value)}
                IconComponent={() => (
                  <FaChevronDown className="userPrivacy-icon" />
                )}
                className="userPrivacy-select"
              >
                <MenuItem value="" disabled>
                  Display photo for all
                </MenuItem>
                <MenuItem value="yes">Yes</MenuItem>
                <MenuItem value="no">No</MenuItem>
              </Select>
            </Grid>
          </div>

          <div className="userprivacy-subContent">
            <Grid item xs={12}>
              <Select
                displayEmpty
                value={paidUsers}
                onChange={(e) => setPaidUsers(e.target.value)}
                IconComponent={() => (
                  <FaChevronDown className="userPrivacy-icon" />
                )}
                className="userPrivacy-select"
              >
                <MenuItem value="" disabled>
                  Display Photo for paid users
                </MenuItem>
                <MenuItem value="yes">Yes</MenuItem>
                <MenuItem value="no">No</MenuItem>
              </Select>
            </Grid>
          </div>

          <div className="userprivacy-subContent">
            <Grid item xs={12}>
              <Select
                displayEmpty
                value={requestUsers}
                onChange={(e) => setRequestUsers(e.target.value)}
                IconComponent={() => (
                  <FaChevronDown className="userPrivacy-icon" />
                )}
                className="userPrivacy-select"
              >
                <MenuItem value="" disabled>
                  Display Photo for request users
                </MenuItem>
                <MenuItem value="yes">Yes</MenuItem>
                <MenuItem value="no">No</MenuItem>
              </Select>
            </Grid>
          </div>
        </Grid>
      </div>
      {/* button------------------------ */}
      <div className="userprivacy-btn">
        <Button
          variant="contained"
          className="userprivacy-submit-btn"
          disabled={!isEditable}
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
    </div>
  );
}

export default UserPrivacy;
