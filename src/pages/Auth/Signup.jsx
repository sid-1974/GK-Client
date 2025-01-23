import React, { useState } from "react";
import { TextField, Button, Grid, MenuItem, Typography } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import axios from "axios";
// import { useUser } from "../../components/router/userContext/UserContext";
function Signup() {
  const navigate = useNavigate();
  const [signupInfo, setSignupInfo] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
    userType: "user",
  });
  // const {setUser} = useUser()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const {
      fullName,
      phoneNumber,
      email,
      password,
      confirmPassword,
      userType,
    } = signupInfo;

    if (
      !fullName ||
      !phoneNumber ||
      !email ||
      !password ||
      !confirmPassword ||
      !userType
    ) {
      return toast.error("All fields are required");
    }

    try {
      const url = "http://localhost:3000/auth/signup";
      const response = await axios.post(url, signupInfo, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const { success, message, error } = response.data;

      if (success) {
        toast.success(message);
        // setUser(data)
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      } else if (error) {
        const details = error?.details?.[0]?.message || "Validation failed";
        toast.error(details);
      } else if (!success) {
        toast.error(message);
      }
    } catch (error) {
      if (error.response && error.response.data) {
        const backendMessage =
          error.response.data.message || "An error occurred";

        toast.error(backendMessage);
      } else {
        toast.error("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
        <Typography variant="h4" className="signup-title">
          Signup
        </Typography>
        <form className="signup-form" onSubmit={handleSignup}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Full Name"
                variant="standard"
                name="fullName"
                value={signupInfo.fullName}
                onChange={handleChange}
                fullWidth
                required
                InputProps={{
                  disableUnderline: true,
                  classes: { root: "custom-input" },
                }}
                className="signup-field"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Phone Number"
                variant="standard"
                name="phoneNumber"
                value={signupInfo.phoneNumber}
                onChange={handleChange}
                fullWidth
                required
                type="tel"
                InputProps={{
                  disableUnderline: true,
                  classes: { root: "custom-input" },
                }}
                className="signup-field"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                variant="standard"
                name="email"
                value={signupInfo.email}
                onChange={handleChange}
                fullWidth
                required
                type="email"
                InputProps={{
                  disableUnderline: true,
                  classes: { root: "custom-input" },
                }}
                className="signup-field"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                variant="standard"
                name="password"
                value={signupInfo.password}
                onChange={handleChange}
                fullWidth
                required
                type="password"
                InputProps={{
                  disableUnderline: true,
                  classes: { root: "custom-input" },
                }}
                className="signup-field"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Confirm Password"
                variant="standard"
                name="confirmPassword"
                value={signupInfo.confirmPassword}
                onChange={handleChange}
                fullWidth
                required
                type="password"
                InputProps={{
                  disableUnderline: true,
                  classes: { root: "custom-input" },
                }}
                className="signup-field"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                select
                label="User Type"
                name="userType"
                value={signupInfo.userType}
                onChange={handleChange}
                variant="standard"
                fullWidth
                required
                InputProps={{
                  disableUnderline: true,
                  classes: { root: "custom-input" },
                }}
                className="signup-field"
              >
                <MenuItem value="user">User</MenuItem>
                <MenuItem value="admin">Admin</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                className="signup-submit"
                type="submit"
              >
                Submit
              </Button>
            </Grid>
            <Grid item xs={12} className="signup-login-link">
              <Typography variant="body2">
                Already have an account? <Link to="/login">Login</Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Signup;
