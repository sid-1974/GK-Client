import React, { useState, useEffect } from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { FaUserEdit } from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
import { IoListSharp } from "react-icons/io5";
import { FaUsersBetweenLines } from "react-icons/fa6";
import { RiUserSharedFill } from "react-icons/ri";
import { MdPersonSearch } from "react-icons/md";
import { useUser } from "../router/userContext/UserContext";
import { get } from "../../api/api";

import "./UserSidebar.css";

function UserSidebar() {
  const { userData } = useUser();
  const [userPhoto, setUserPhoto] = useState(null);

  useEffect(() => {
    const fetchUserPhoto = async () => {
      try {
        const response = await get("/user/user-image-details");
        if (response.success && response.data.length > 0) {
          setUserPhoto(response.data[0].image); // Assuming response includes `image` key
        } else {
          setUserPhoto(null);
        }
      } catch (error) {
        error("Failed to fetch user photo. Please try again.");
      }
    };

    fetchUserPhoto();
  }, [userData]);

  return (
    <Drawer className="user-sidebar" variant="permanent" anchor="left">
      <div className="userSidebar-profile-section">
        <div className="userSidebar-profile-pic-placeholder">
         
          {userPhoto ? (
            <img
              src={userPhoto}
              alt="User Profile"
              className="userSidebar-profile-pic"
            />
          ) : userData.fullName ? (
            userData.fullName.charAt(0).toUpperCase()
          ) : (
            "P"
          )}
        </div>
        <div className="UserSidebar-details">
          <Typography variant="body1" className="userSidebar-user-name">
            {userData.fullName}
          </Typography>

          {/* <Typography variant="body1" className="userSidebar-user-age">
              22 Years
            </Typography> */}
          <Typography variant="body1" className="userSidebar-user-id">
            User Id: {userData.userId}
          </Typography>
        </div>
      </div>
      {/* <hr  /> */}
      <List className="user-sidebar-lists">
        <ListItem button component={Link} to="/user">
          <MdDashboardCustomize
            fontSize="large"
            className="user-dashboard-icons"
          />
          <ListItemText primary="Dashboard" />
        </ListItem>
        {/* <hr /> */}
        <ListItem button component={Link} to="/user/profile">
          <FaUserEdit fontSize="large" className="user-dashboard-icons" />
          <ListItemText primary="Profile" />
        </ListItem>
        {/* <hr /> */}
        <ListItem button component={Link} to="/user/my-matches">
          <FaUsersBetweenLines
            fontSize="large"
            className="user-dashboard-icons"
          />
          <ListItemText primary="My Matches" />
        </ListItem>
        {/* <hr /> */}
        <ListItem button component={Link} to="/user/my-intrest">
          <RiUserSharedFill fontSize="large" className="user-dashboard-icons" />
          <ListItemText primary="My Intrest" />
        </ListItem>
        {/* <hr /> */}
        <ListItem button component={Link} to="/user/view-all">
          <IoListSharp className="user-dashboard-icons" />
          <ListItemText primary="View All" />
        </ListItem>
        {/* <hr /> */}
        <ListItem button component={Link} to="/user/search">
          <MdPersonSearch fontSize="large" className="user-dashboard-icons" />
          <ListItemText primary="Search" />
        </ListItem>
        {/* <hr /> */}
      </List>
    </Drawer>
  );
}

export default UserSidebar;
