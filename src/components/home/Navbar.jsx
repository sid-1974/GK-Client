import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import logo from '../../assets/images/logo.png'
import './Navbar.css'; 

function Navbar() {
  return (
    <AppBar position="fixed"  className="navbar-container">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left: Logo */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          className="navbar-logo"
          sx={{ display: "flex", alignItems: "center", textDecoration: "none" }}
        >
          Girija
          <img
            src={logo} // Replace with your image path
            alt="logo"
            className="navbar-logo-image"
            style={{ height: "25px", marginRight: "3px",marginLeft:"3px" }} // Adjust height and margin as needed
          /> Kalyana
        </Typography>

        {/* Middle: Navigation Links */}
        <Box sx={{ display: "flex", gap: "20px" }} className="navbar-links">
          <Button component={Link} to="/" className="navbar-button">
            Home
          </Button>
          <Button component={Link} to="/about" className="navbar-button">
            About
          </Button>
          <Button component={Link} to="/services" className="navbar-button">
            Services
          </Button>
          <Button component={Link} to="/privacy" className="navbar-button">
            Privacy
          </Button>
          <Button component={Link} to="/contact" className="navbar-button">
            Contact
          </Button>
        </Box>

        {/* Right: Login Button */}
        <Button
          component={Link}
          to="/signup"
          variant="contained"
          color="secondary"
          className="navbar-login-button"
        >
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
