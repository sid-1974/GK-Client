import React from 'react';
import { TextField, Button, Grid } from '@mui/material';
import './styles/Contact.css';

function Contact() {
  return (
    <div className='contact-container'>
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="First Name"
              variant="outlined"
              fullWidth
              required
              className="contact-field"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Last Name"
              variant="outlined"
              fullWidth
              required
              className="contact-field"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Phone Number"
              variant="outlined"
              fullWidth
              required
              className="contact-field"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              required
              type="email"
              className="contact-field"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Description"
              variant="outlined"
              fullWidth
              multiline
              rows={4}
              required
              className="contact-field"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              className="submit-button"
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
    </div>
  );
}

export default Contact;
