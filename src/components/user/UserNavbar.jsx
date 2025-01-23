import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./UserNavbar.css";
import { useAuth } from "../router/authContext/AuthContext";
import { useUser } from "../router/userContext/UserContext";

function UserNavbar() {
  const { logout } = useAuth();
  const { userData } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userAboutDetails");
    logout();

    navigate("/login");
  };
  return (
    <>
      <AppBar position="fixed" className="usernavbar-container">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Typography
              variant="h6"
              component={Link}
              to="/"
              className="usernavbar-logo"
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
                className="usernavbar-logo-image"
                style={{
                  height: "25px",
                  marginRight: "3px",
                  marginLeft: "3px",
                }}
              />
              Kalyana
            </Typography>
          </div>

          <div>
            <h2>Welcome, {userData.fullName}</h2>
          </div>

          <div className="user-profile-section">
            <Button
              variant="contained"
              color="secondary"
              className="usernavbar-login-button"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default UserNavbar;
