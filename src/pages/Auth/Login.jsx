import React, { useState } from "react";
import { TextField, Button, Typography, Grid } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Login.css";
import { useAuth } from "../../components/router/authContext/AuthContext";
import axios from "axios";
import { useUser } from "../../components/router/userContext/UserContext";
import TokenService from "../../api/TokenService";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    identifier: "",
    password: "",
  });
  const { setUserData } = useUser();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { identifier, password } = loginInfo;
   

    if (!identifier || !password) {
      return toast.error("All fields are required");
    }

    try {
      const url = "http://localhost:3000/auth/login";
      const response = await axios.post(url, {
        identifier,
        password,
      });

      const { success, message, error, token, user,userType } = response.data;
     
      if (success) {
        
        toast.success(message);
        
        localStorage.setItem("token", token);
        
        TokenService.setToken(token)
       console.log(token)
        
        localStorage.setItem("user", JSON.stringify(user));
        
        login(token);
        setUserData(user);
        
        if (userType === "admin") {
         
          setTimeout(()=>{ navigate("/admin");},1000)
        
        } else {
         
          setTimeout(()=>{ navigate("/user");},1000)
        }
      } else if (error) {
        toast.error(error.message || "Login failed");
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
    <div className="login-container">
      <div className="login-content">
        <Typography variant="h4" className="login-title">
          Login
        </Typography>
        <form className="login-form" onSubmit={handleLogin}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Email or Phone Number"
                variant="standard"
                name="identifier"
                value={loginInfo.identifier}
                onChange={handleChange}
                fullWidth
                required
                className="login-field"
                InputProps={{
                  disableUnderline: true,
                  classes: { root: "custom-input" },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Password"
                type="password"
                variant="standard"
                name="password"
                value={loginInfo.password}
                onChange={handleChange}
                fullWidth
                required
                className="login-field"
                InputProps={{
                  disableUnderline: true,
                  classes: { root: "custom-input" },
                }}
              />
            </Grid>
            <Grid item xs={12} className="forgot-password-link">
              <Typography variant="body2">
                <Link to="/forgot-password">Forgot Password?</Link>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                className="login-button"
                type="submit"
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} className="login-signup-link">
              <Typography variant="body2">
                New user? <Link to="/signup">Signup</Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;
