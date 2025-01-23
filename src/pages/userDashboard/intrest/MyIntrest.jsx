import React, { useState } from "react";
import "./MyIntrest.css";
import { Typography, Tabs, Tab, Box } from "@mui/material";
import UserAccepted from "./inside/accepted/UserAccepted";
import UserRequests from "./inside/requests/UserRequests";
import UserSent from "./inside/sent/UserSent";
import UserPending from "./inside/pending/UserPending";

function MyIntrest() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderContent = () => {
    switch (value) {
      case 0:
        return <UserAccepted/>;
      case 1:
        return <UserRequests/>;
      case 2:
        return <UserSent/>;
      case 3:
        return <UserPending/>;

      default:
        return null;
    }
  };
  return (
    <div className="userIntrest-dashboard-container">
      <div className="userIntrest-dashboard-heading">
        <Typography variant="h4">Interested Profile</Typography>
      </div>
      <div className="userIntrest-sub-container">
        <div className="tabs-list">
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            className="userIntrest-tabs"
          >
            <Tab className="action-list-1" label="Accepted(3)" />
            <Tab className="action-list-2" label="Requests(1)" />
            <Tab className="action-list-3" label="Sent(2)" />
            <Tab className="action-list-4" label="Pending(3)" />
          </Tabs>
        </div>
        <div className="userIntrest-action-content">{renderContent()}</div>
      </div>
    </div>
  );
}

export default MyIntrest;
