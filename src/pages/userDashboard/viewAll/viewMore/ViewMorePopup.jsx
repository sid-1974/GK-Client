import React from "react";
import {
  Dialog,
  DialogContent,
  Button,
  Typography,
  IconButton,
  Toolbar,
  AppBar,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./ViewMorePopup.css";

const ViewMorePopup = ({ open, handleClose, user }) => {
  if (!user) return null;
  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
      <AppBar position="static" sx={{ backgroundColor: "#ED7014" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            User Details
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <DialogContent>
        <div className="dialog-content">
          <div className="dialog-image-content">
            <img
              src=""
              alt="User"
              style={{ width: "100%", marginTop: "10px", borderRadius: "8px" }}
            />
          </div>
          <div className="dialog-content-tabs">
            <Typography variant="h6">Name: </Typography>
            <Typography variant="body1">Occupation: </Typography>
            <Typography variant="body1">Age:</Typography>
            <Typography variant="body1">Height: </Typography>
            <Typography variant="body1">User ID: </Typography>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ViewMorePopup;
