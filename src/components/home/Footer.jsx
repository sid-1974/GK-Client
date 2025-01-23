import React from 'react';
import { TextField, Button } from '@mui/material';
import './Footer.css';

function Footer() {
  return (
    <>
    <div className="footer">
      <div className="footer-column">
        <h1>Girija Kalyana</h1>
        <p>Leading innovation in tech and design.</p>
      </div>
      <div className="footer-column footer-links">
        <h1>Links</h1>
        <p>About Us</p>
        <p>Services</p>
        <p>Promoter</p>
        <p>Privacy Policy</p>
        <p>Terms & Conditions</p>
        <p>Cancellation Policy</p>
      </div>
      <div className="footer-column">
        <h1>Contact Us</h1>
        <p>Email: info@example.com</p>
        <p>Instagram: @example</p>
        <p>Twitter: @example</p>
      </div>
      <div className="footer-column">
        <h1>Subscribe</h1>
        <TextField 
          variant="outlined" 
          label="Enter your email" 
          size="small" 
          className="footer-input" 
        />
        <Button variant="contained" color="primary" className="footer-button">
          Submit
        </Button>
      </div>

    </div>

    <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} Girija Kalyana. All rights reserved.</p>
      </div>
    </>

  );
}

export default Footer;
