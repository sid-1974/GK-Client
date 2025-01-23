import React, { useState } from 'react';
import './style/AdminProfile.css';
import { Button, Typography, Avatar } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

function AdminProfile() {
  const [image, setImage] = useState(null);

  const handleAddImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleDeleteImage = () => {
    setImage(null);
  };

  const user = {
    name: 'Siddarth',
    email: 'sid@gmail.com',
    number:'1234567890',
    password:'sid@123'
  };

  return (
    <div className="profile-container">
      <div className="profile-header">
        <Typography variant="h4">Profile</Typography>
      </div>
      <div className="profile-content">

        {/* Profile Image Section */}
        <div className="profile-image">
          {image ? (
            <img src={image} alt="Profile" className="profile-img" />
          ) : (
            <Avatar className="profile-avatar">
              {user.name.charAt(0).toUpperCase()}
            </Avatar>
          )}
          <div className="action-buttons">
            <Button
              variant="contained"
              component="label"
              className="add-btn"
              startIcon={<AddIcon />}
            >
              Add
              <input type="file" hidden onChange={handleAddImage} />
            </Button>
            <Button
              variant="contained"
              color="secondary"
              className="delete-btn"
              startIcon={<DeleteIcon />}
              onClick={handleDeleteImage}
            >
              Delete
            </Button>
          </div>
        </div>

        {/* Static Profile Info Section */}
        <div className="profile-info">
          <Typography variant="body1" className="info-text">
            <strong>Name:</strong> {user.name}
          </Typography>
          <Typography variant="body1" className="info-text">
            <strong>Email:</strong> {user.email}
          </Typography>
          <Typography variant="body1" className="info-text">
            <strong>Number:</strong> {user.number}
          </Typography>
          <Typography variant="body1" className="info-text">
            <strong>Password:</strong> {user.password}
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default AdminProfile;
