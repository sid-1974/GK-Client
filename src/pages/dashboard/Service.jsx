import React from "react";
import { Typography, Box, IconButton } from "@mui/material";
import { LuNewspaper, LuCoffee } from "react-icons/lu";
import { IoSearchOutline, IoCallOutline } from "react-icons/io5";
import { GrBook } from "react-icons/gr";
import { TbUsers } from "react-icons/tb";
import "./styles/Service.css";
import { ImArrowRight } from "react-icons/im";

function Service() {
  const services = [
    {
      icon: <LuNewspaper style={{ fontSize: "45px", color: "white" }} />,
      title: "SHARE YOUR RESPONSIBILITY",
      description:
        "A highly involved Relationship Manager understands your expectations and provides personalised assistance.",
      color: "#68b9e3",
    },
    {
      icon: <IoSearchOutline style={{ fontSize: "45px", color: "white" }} />,
      title: "EXPERT SEARCH WITHIN REACH",
      description:
        "Your Relationship Manager employs advanced tools and expert knowledge to find matching members from thousands of profiles.",
      color: "#c5ad4c",
    },
    {
      icon: <GrBook style={{ fontSize: "45px", color: "white" }} />,
      title: "SHORTLISTED MATCHES",
      description:
        "Your Relationship Manager contacts prospects on your behalf and ensures effective communication between you and your matches.",
      color: "#c66db9",
    },
    {
      icon: <IoCallOutline style={{ fontSize: "45px", color: "white" }} />,
      title: "INITIATE COMMUNICATION",
      description:
        "Your Relationship Manager carefully handpicks profiles that are most suitable for you and sends them for your review.",
      color: "#7cb64a",
    },
    {
      icon: <LuCoffee style={{ fontSize: "45px", color: "white" }} />,
      title: "MEET THE PROSPECTS",
      description:
        "Your Relationship Manager contacts prospects and facilitates a meeting based on mutual interest.",
      color: "#8891d3",
    },
    {
      icon: <TbUsers style={{ fontSize: "45px", }} />,
      title: "HAPPY ASSISTED MARRIAGES",
      description: "Assistance Service will be Started Shortly!",
      color: "#f5f5f5",
    },
  ];

  return (
    <div className="servicebody">
      <Typography variant="h4" className="service-title">
        ASSISTED SERVICE ADVANTAGES
      </Typography>
      <Box className="service-container">
        {services.map((service, index) => (
          <React.Fragment key={index}>
            <Box className="service-item">
              <div className="service-icon-container">
              <IconButton
                className="service-icon"
                style={{ backgroundColor: service.color }}
              >
                {service.icon}
              </IconButton>
              </div>
              <div className="service-title-container">
              <Typography variant="h6" className="service-title-text">
                {service.title}
              </Typography>
              <Typography variant="body2" className="service-description">
                {service.description}
              </Typography>
              </div>
            </Box>
            {index < services.length - 1 && ( // Add arrow between cards
              <Box className="arrow-container">
                < ImArrowRight  className="service-arrow-icon" />
              </Box>
            )}
          </React.Fragment>
        ))}
      </Box>
    </div>
  );
}

export default Service;
