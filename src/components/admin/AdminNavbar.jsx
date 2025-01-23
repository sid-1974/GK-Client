import React  from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link,useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import NotificationsIcon from "@mui/icons-material/Notifications";

import "./AdminNavbar.css";
import { useAuth } from "../router/authContext/AuthContext";

function AdminNavbar() {
  const {logout} = useAuth()
  const navigate = useNavigate()
  const handleLogout=()=>{
   logout();
   navigate('/login')
  }

  return (
    <>
      <AppBar position="fixed" className="adminnavbar-container">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Typography
              variant="h6"
              component={Link}
              to="/"
              className="adminnavbar-logo"
              sx={{
                display: "flex",
                alignItems: "center",
                textDecoration: "none",
              }}
            >
              Girija
              <img
                src={logo}
                alt="logo"
                className="adminnavbar-logo-image"
                style={{
                  height: "25px",
                  marginRight: "3px",
                  marginLeft: "3px",
                }} // Adjust height and margin as needed
              />
              Kalyana
            </Typography>
          </div>

          <Typography variant="h6">Welcome! to Admin Dashboard</Typography>

          <div className="admin-profile-section">
            <Link to="/admin/notifications">
              <NotificationsIcon
                fontSize="large"
                className="nav-dashboard-icons"
              />
            </Link>

            <div className="adminnavbar-profile-pic-placeholder">S</div>
            <Typography variant="body1" className="adminnavbar-admin-name">
              Siddarth
            </Typography>

            {/* Show the first letter of the admin's name */}

            <Button
              onClick={handleLogout}
              variant="contained"
              color="secondary"
              className="adminnavbar-login-button"
            >
              Logout
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default AdminNavbar;
