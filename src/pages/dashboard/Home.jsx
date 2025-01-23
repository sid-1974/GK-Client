import React from "react";
import { Typography, Card, CardMedia, CardContent } from "@mui/material";
import { AccountCircle, Link, Forum } from "@mui/icons-material";
import "./styles/Home.css";

function Home() {
  return (
    <div>
      {/* Home Section ---------------------------------*/}
      <div className="home-container">
        <div className="left-content">
          <Typography
            variant="h2"
            component="h1"
            sx={{ marginBottom: "20px", fontWeight: "bold" }}
          >
            Girija Kalyana
          </Typography>

          <Typography
            variant="body1"
            component="p"
            sx={{ lineHeight: 1.6, color: "var(--text-color)" }}
          >
            Experience the elegance and traditions of Indian weddings. Celebrate
            love, culture, and togetherness in a way that creates memories for a
            lifetime. Join us in creating beautiful moments for your special
            day.
          </Typography>
        </div>
        <div className="right-image"></div>
      </div>

      {/* Cards Section -----------------------------*/}
      <div className="cards-section">
        <Typography variant="h4" component="h2" className="cards-heading">
          Profiles
        </Typography>
        <div className="cards-container">
          {/* Card 1 */}
          <Card className="custom-card">
            <CardMedia
              component="img"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDuOzF2QSWMG0oQr8Zqh6CMXs7xtxEu_xiaQ&s"
              alt="Service 1"
              className="card-image"
            />
            <CardContent className="card-content">
              <Typography
                variant="h6"
                component="h3"
                className="card-content-h3"
              >
                Profile-1
              </Typography>
              <Typography variant="body2">
                Expert planning to ensure your big day goes perfectly. From
                decor to traditions, we cover it all.
              </Typography>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="custom-card">
            <CardMedia
              component="img"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDuOzF2QSWMG0oQr8Zqh6CMXs7xtxEu_xiaQ&s"
              alt="Service 2"
              className="card-image"
            />
            <CardContent className="card-content">
              <Typography variant="h6" component="h3">
                Profile-2
              </Typography>
              <Typography variant="body2">
                Capture every beautiful moment of your wedding with our
                professional photography services.
              </Typography>
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card className="custom-card">
            <CardMedia
              component="img"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDuOzF2QSWMG0oQr8Zqh6CMXs7xtxEu_xiaQ&s"
              alt="Service 3"
              className="card-image"
            />
            <CardContent className="card-content">
              <Typography
                variant="h6"
                component="h3"
                className="card-content-h3"
              >
                Profile-3
              </Typography>
              <Typography variant="body2">
                Delicious and authentic cuisine that will leave your guests
                delighted and satisfied.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
      {/* working section-------------------------- */}
      <div className="work-container">
        <div className="how-it-work-container">
          <Typography
            variant="h2"
            component="h2"
            className="how-it-works-heading"
          >
            How It Works?
          </Typography>

          <Typography variant="body1" className="how-it-works-content">
            Register and Find Your Special Someone Matches Within Your
            Community.
          </Typography>
        </div>
        <div className="work-item-container">
          <div className="work-item">
            <AccountCircle className="work-logo" />{" "}
            {/* Replace image with an icon */}
            <Typography variant="h6" component="h3" className="work-heading">
              SignUp
            </Typography>
            <Typography variant="body2" className="work-content">
              Description of the first service. This could be about the details
              and value of the service offered.
            </Typography>
          </div>

          <div className="work-item">
            <Link className="work-logo" /> {/* Replace image with an icon */}
            <Typography variant="h6" component="h3" className="work-heading">
              Connect
            </Typography>
            <Typography variant="body2" className="work-content">
              Description of the second service. Here, you can explain how this
              service will benefit the user.
            </Typography>
          </div>

          <div className="work-item">
            <Forum className="work-logo" />
            {/* Replace image with an icon */}
            <Typography variant="h6" component="h3" className="work-heading">
              Interact
            </Typography>
            <Typography variant="body2" className="work-content">
              Description of the third service. This section can describe the
              unique aspects of this offering.
            </Typography>
          </div>
        </div>
      </div>

      <div className="register-container">
        <h1 className="register-heading">Register Now</h1>
        <h4 className="register-subheading">
          Register and Update Your Profile Right Now!
        </h4>
        <button className="register-button">Register</button>
      </div>
    </div>
  );
}

export default Home;