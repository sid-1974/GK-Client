import React from "react";
import { Typography } from "@mui/material";
import "./styles/About.css";

function About() {
  return (
    <div>
      <div className="about-container">
        <div className="about-left-content">
          <Typography variant="h6">ALL ABOUT</Typography>
          <Typography
            variant="h2"
            component="h1"
            sx={{ marginBottom: "20px", fontWeight: "bold" }}
          >
            Girija Kalyana
          </Typography>
          <Typography variant="h4" >
            Established in March 26th 2012
          </Typography>

          <Typography
            variant="body1"
            component="p"
            sx={{ lineHeight: 1.6, color: "var(--text-color)" }}
          >
            Kiran Computers Pvt Ltd has grown from strength to provide the IT
            Solutions that meet the critical business requirements and fast
            growing enterprises. Service rendering processes at Kiran Computers
            Pvt Ltd conform to IT Standards. Our capabilities are backed by
            sound corporate resources.
          </Typography>
        </div>
        <div className="about-right-image"></div>
      </div>

      <div className="about-content">
        <Typography
          variant="h2"
          component="h1"
          sx={{ marginBottom: "30px", marginTop: "40px", fontWeight: "bold" }}
           className="about-title"
        >
          What We Do
        </Typography>
        <Typography
          variant="body1"
          component="p"
           className="about-text"
          sx={{ lineHeight: 2}}
        >
          We take pleasure in introducing our self as Kiran Computers Pvt Ltd
          engaged in Computer Sales & Services, Network and Data Solutions,
          Security Systems, Software Development and Business Process and other
          fields of Information Technology. We endeavour to furnish our precious
          clients superior services designed for to meet clients needs. We
          provide services from the latest technology available to contend our
          self in the global arena and to provide the best technology to our
          clients rather than be a passenger of time. Kiran Computers Pvt Ltd
          infrastructure has in par with latest available equipment. It has a
          team of experienced, well certified Customer Support Professionals,
          who with their in depth knowledge have achieved a high level of
          corporate satisfaction.
        </Typography>
      </div>
    </div>
  );
}

export default About;
