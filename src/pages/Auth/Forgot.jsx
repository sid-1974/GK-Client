import React, { useState } from "react";
import { TextField, Button, Typography, Grid } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import "./Forgot.css";

function Forgot() {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const handleSendOtp = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "http://localhost:3000/auth/forgot-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ identifier: email }),
        }
      );
      const data = await response.json();
      if (data.success) {
        toast.success("OTP sent successfully!");
        setIsOtpSent(true); 
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      toast.error("Failed to send OTP. Please try again.");
    }finally {
      setIsLoading(false); 
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:3000/auth/reset-password",
        {
          identifier: email,
          otp,
          newPassword,
          confirmPassword,
        }
      );
      if (response.data.success) {
        toast.success("Password reset successfully!");
        setTimeout(() => {
          navigate("/login"); 
        }, 3000);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Error resetting password:", error);
      toast.error("Failed to reset password. Please try again.");
    }
  };

  return (
    <div className="forgot-container">
      <div className="forgot-content">
        <Typography variant="h4" className="forgot-title">
          Forgot Password
        </Typography>
        <form className="forgot-form" onSubmit={handleResetPassword}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Enter your Email "
                variant="standard"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="forgot-field"
                InputProps={{
                  disableUnderline: true,
                  classes: { root: "custom-input" },
                }}
              />
            </Grid>

            <Grid item xs={12} container spacing={2}>
              <Grid item xs={8}>
                <TextField
                  label="Enter OTP"
                  variant="standard"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  fullWidth
                  required
                  className="forgot-field"
                  InputProps={{
                    disableUnderline: true,
                    classes: { root: "custom-input" },
                  }}
                />
              </Grid>

              <Grid item xs={4}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  className="otp-button"
                  onClick={handleSendOtp}
                  disabled={isLoading}
                >
                  Send OTP
                </Button>
              </Grid>
            </Grid>
            {isOtpSent && (
              <>
                <Grid item xs={12}>
                  <TextField
                    label="New Password"
                    type="password"
                    variant="standard"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    fullWidth
                    required
                    className="forgot-field"
                    InputProps={{
                      disableUnderline: true,
                      classes: { root: "custom-input" },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Confirm Password"
                    type="password"
                    variant="standard"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    fullWidth
                    required
                    className="forgot-field"
                    InputProps={{
                      disableUnderline: true,
                      classes: { root: "custom-input" },
                    }}
                  />
                </Grid>
              </>
            )}
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                className="forgot-button"
                type="submit"
                disabled={!isOtpSent}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Forgot;
