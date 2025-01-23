import React from "react";
import "./style/UserDashboard.css";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { FaUsers } from "react-icons/fa";


function UserDashboard() {

  return (
    <div className="user-dashboard-container">
      <div className="user-dashboard-heading">
        <Typography variant="h4">Dashboard</Typography>
      </div>

      {/* small card---  1 ----------------------------==========--Intrested Profile==============----------------- */}
      <div className="user-dashboard-small-card-container">

          <Card  className="user-dashboard-small-card">
            <CardContent>
              <div className="small-card-content">
                <div className="small-card-left">
                  <Typography variant="h4">2</Typography>
                  <Typography variant="body2">Intrested Profile</Typography>
                </div>
                <div className="small-card-icon"><FaUsers style={{ fontSize: "50px", color: "#ED7014" }} /></div>
              </div>
              <div className="view-all-button-container">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => alert("View All clicked!")}
                >
                  View All
                </Button>
              </div>
            </CardContent>
          </Card>
       
      {/* small card---  1 ----------------------------------------------- */}
      
          <Card  className="user-dashboard-small-card">
            <CardContent>
              <div className="small-card-content">
                <div className="small-card-left">
                  <Typography variant="h4">2</Typography>
                  <Typography variant="body2">Request Sent</Typography>
                </div>
                <div className="small-card-icon"><FaUsers style={{ fontSize: "50px", color: "#ED7014" }} /></div>
              </div>
              <div className="view-all-button-container">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => alert("View All clicked!")}
                >
                  View All
                </Button>
              </div>
            </CardContent>
          </Card>
        {/* ))} */}
      {/* </div> */}
      {/* small card---  1 ----------------------------------------------- */}
      {/* <div className="user-dashboard-small-card-container"> */}
        {/* {cards.map((card, index) => ( */}
          <Card  className="user-dashboard-small-card">
            <CardContent>
              <div className="small-card-content">
                <div className="small-card-left">
                  <Typography variant="h4">500</Typography>
                  <Typography variant="body2">Recent Register</Typography>
                </div>
                <div className="small-card-icon"><FaUsers style={{ fontSize: "50px", color: "#ED7014" }} /></div>
              </div>
              <div className="view-all-button-container">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => alert("View All clicked!")}
                >
                  View All
                </Button>
              </div>
            </CardContent>
          </Card>
        {/* ))} */}
      </div>

      {/* Recent Register=============================== ----------------------==================----------------------- */}
      <div className="user-dashboard-imagecard-container">
        <div className="user-dashboard-card-heading">
          <Typography variant="h4">Recent Register</Typography>
        </div>
        {/* card-1---------------------------------------------------- */}
        <div className="user-dashboard-image-cards">
          {/* {Intresetedusers.map((user, index) => ( */}
            <Card  className="user-card">
              <CardContent>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDuOzF2QSWMG0oQr8Zqh6CMXs7xtxEu_xiaQ&s"
                  alt=""
                  className="user-card-image"
                />
                <div className="user-card-username">
                  <Typography variant="h5" className="user-card-name">
                    sid
                  </Typography>
                  <Typography variant="body1" className="user-card-name">
                    software Developer
                  </Typography>
                </div>
                <div className="user-card-contetnt">
                  <div className="user-card-detail">
                    <Typography variant="h6" className="user-card-value">
                      1234
                    </Typography>
                    <Typography variant="body2" className="user-card-label">
                      ID
                    </Typography>
                  </div>
                  <div className="user-card-detail">
                    <Typography variant="h6" className="user-card-value">
                      23
                    </Typography>
                    <Typography variant="body2" className="user-card-label">
                      Age
                    </Typography>
                  </div>
                  <div className="user-card-detail">
                    <Typography variant="h6" className="user-card-value">
                      5.10
                    </Typography>
                    <Typography variant="body2" className="user-card-label">
                      Height
                    </Typography>
                  </div>
                </div>

                <div className="view-more-button-container">
                <Button
                  variant="contained"
                  // color="#ED7014"
                  sx={{backgroundColor:"#ED7014"}}
                  onClick={() => alert("View All clicked!")}
                >
                  View More
                </Button>
              </div>
              </CardContent>
            </Card>
         
        {/* card-2---------------------------------------------------- */}
       
            <Card  className="user-card">
              <CardContent>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDuOzF2QSWMG0oQr8Zqh6CMXs7xtxEu_xiaQ&s"
                  alt=""
                  className="user-card-image"
                />
                <div className="user-card-username">
                  <Typography variant="h5" className="user-card-name">
                    sid
                  </Typography>
                  <Typography variant="body1" className="user-card-name">
                    software Developer
                  </Typography>
                </div>
                <div className="user-card-contetnt">
                  <div className="user-card-detail">
                    <Typography variant="h6" className="user-card-value">
                      1234
                    </Typography>
                    <Typography variant="body2" className="user-card-label">
                      ID
                    </Typography>
                  </div>
                  <div className="user-card-detail">
                    <Typography variant="h6" className="user-card-value">
                      23
                    </Typography>
                    <Typography variant="body2" className="user-card-label">
                      Age
                    </Typography>
                  </div>
                  <div className="user-card-detail">
                    <Typography variant="h6" className="user-card-value">
                      5.10
                    </Typography>
                    <Typography variant="body2" className="user-card-label">
                      Height
                    </Typography>
                  </div>
                </div>

                <div className="view-more-button-container">
                <Button
                  variant="contained"
                  // color="#ED7014"
                  sx={{backgroundColor:"#ED7014"}}
                  onClick={() => alert("View All clicked!")}
                >
                  View More
                </Button>
              </div>
              </CardContent>
            </Card>
       
        {/* card-3---------------------------------------------------- */}
        
            <Card  className="user-card">
              <CardContent>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDuOzF2QSWMG0oQr8Zqh6CMXs7xtxEu_xiaQ&s"
                  alt=""
                  className="user-card-image"
                />
                <div className="user-card-username">
                  <Typography variant="h5" className="user-card-name">
                    sid
                  </Typography>
                  <Typography variant="body1" className="user-card-name">
                    software Developer
                  </Typography>
                </div>
                <div className="user-card-contetnt">
                  <div className="user-card-detail">
                    <Typography variant="h6" className="user-card-value">
                      1234
                    </Typography>
                    <Typography variant="body2" className="user-card-label">
                      ID
                    </Typography>
                  </div>
                  <div className="user-card-detail">
                    <Typography variant="h6" className="user-card-value">
                      23
                    </Typography>
                    <Typography variant="body2" className="user-card-label">
                      Age
                    </Typography>
                  </div>
                  <div className="user-card-detail">
                    <Typography variant="h6" className="user-card-value">
                      5.10
                    </Typography>
                    <Typography variant="body2" className="user-card-label">
                      Height
                    </Typography>
                  </div>
                </div>

                <div className="view-more-button-container">
                <Button
                  variant="contained"
                  // color="#ED7014"
                  sx={{backgroundColor:"#ED7014"}}
                  onClick={() => alert("View All clicked!")}
                >
                  View More
                </Button>
              </div>
              </CardContent>
            </Card>
        
        </div>
      </div>

      {/* Request Sent========================================================================== */}
      <div className="user-dashboard-imagecard-container">
        <div className="user-dashboard-card-heading">
          <Typography variant="h4">Request Sent</Typography>
        </div>
        {/* card-1---------------------------------------------------- */}
        <div className="user-dashboard-image-cards">
          
            <Card  className="user-card">
              <CardContent>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDuOzF2QSWMG0oQr8Zqh6CMXs7xtxEu_xiaQ&s"
                  alt=""
                  className="user-card-image"
                />
                <div className="user-card-username">
                  <Typography variant="h5" className="user-card-name">
                    sid
                  </Typography>
                  <Typography variant="body1" className="user-card-name">
                    software Developer
                  </Typography>
                </div>
                <div className="user-card-contetnt">
                  <div className="user-card-detail">
                    <Typography variant="h6" className="user-card-value">
                      1234
                    </Typography>
                    <Typography variant="body2" className="user-card-label">
                      ID
                    </Typography>
                  </div>
                  <div className="user-card-detail">
                    <Typography variant="h6" className="user-card-value">
                      23
                    </Typography>
                    <Typography variant="body2" className="user-card-label">
                      Age
                    </Typography>
                  </div>
                  <div className="user-card-detail">
                    <Typography variant="h6" className="user-card-value">
                      5.10
                    </Typography>
                    <Typography variant="body2" className="user-card-label">
                      Height
                    </Typography>
                  </div>
                </div>

                <div className="view-more-button-container">
                <Button
                  variant="contained"
                  // color="#ED7014"
                  sx={{backgroundColor:"#ED7014"}}
                  onClick={() => alert("View All clicked!")}
                >
                  View More
                </Button>
              </div>
              </CardContent>
            </Card>
       
        {/* card-2---------------------------------------------------- */}
       
            <Card  className="user-card">
              <CardContent>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDuOzF2QSWMG0oQr8Zqh6CMXs7xtxEu_xiaQ&s"
                  alt=""
                  className="user-card-image"
                />
                <div className="user-card-username">
                  <Typography variant="h5" className="user-card-name">
                    sid
                  </Typography>
                  <Typography variant="body1" className="user-card-name">
                    software Developer
                  </Typography>
                </div>
                <div className="user-card-contetnt">
                  <div className="user-card-detail">
                    <Typography variant="h6" className="user-card-value">
                      1234
                    </Typography>
                    <Typography variant="body2" className="user-card-label">
                      ID
                    </Typography>
                  </div>
                  <div className="user-card-detail">
                    <Typography variant="h6" className="user-card-value">
                      23
                    </Typography>
                    <Typography variant="body2" className="user-card-label">
                      Age
                    </Typography>
                  </div>
                  <div className="user-card-detail">
                    <Typography variant="h6" className="user-card-value">
                      5.10
                    </Typography>
                    <Typography variant="body2" className="user-card-label">
                      Height
                    </Typography>
                  </div>
                </div>

                <div className="view-more-button-container">
                <Button
                  variant="contained"
                  // color="#ED7014"
                  sx={{backgroundColor:"#ED7014"}}
                  onClick={() => alert("View All clicked!")}
                >
                  View More
                </Button>
              </div>
              </CardContent>
            </Card>
         
        {/* card-3---------------------------------------------------- */}
       
            <Card  className="user-card">
              <CardContent>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDuOzF2QSWMG0oQr8Zqh6CMXs7xtxEu_xiaQ&s"
                  alt=""
                  className="user-card-image"
                />
                <div className="user-card-username">
                  <Typography variant="h5" className="user-card-name">
                    sid
                  </Typography>
                  <Typography variant="body1" className="user-card-name">
                    software Developer
                  </Typography>
                </div>
                <div className="user-card-contetnt">
                  <div className="user-card-detail">
                    <Typography variant="h6" className="user-card-value">
                      1234
                    </Typography>
                    <Typography variant="body2" className="user-card-label">
                      ID
                    </Typography>
                  </div>
                  <div className="user-card-detail">
                    <Typography variant="h6" className="user-card-value">
                      23
                    </Typography>
                    <Typography variant="body2" className="user-card-label">
                      Age
                    </Typography>
                  </div>
                  <div className="user-card-detail">
                    <Typography variant="h6" className="user-card-value">
                      5.10
                    </Typography>
                    <Typography variant="body2" className="user-card-label">
                      Height
                    </Typography>
                  </div>
                </div>

                <div className="view-more-button-container">
                <Button
                  variant="contained"
                  // color="#ED7014"
                  sx={{backgroundColor:"#ED7014"}}
                  onClick={() => alert("View All clicked!")}
                >
                  View More
                </Button>
              </div>
              </CardContent>
            </Card>
          {/* ))} */}
        </div>
      </div>
      <div className="user-dashboard-imagecard-container">
        <div className="user-dashboard-card-heading">
          <Typography variant="h4">Intrested Profile</Typography>
        </div>
        {/* card-1---------------------------------------------------- */}
        <div className="user-dashboard-image-cards">
          {/* {Intresetedusers.map((user, index) => ( */}
            <Card  className="user-card">
              <CardContent>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDuOzF2QSWMG0oQr8Zqh6CMXs7xtxEu_xiaQ&s"
                  alt=""
                  className="user-card-image"
                />
                <div className="user-card-username">
                  <Typography variant="h5" className="user-card-name">
                    sid
                  </Typography>
                  <Typography variant="body1" className="user-card-name">
                    software Developer
                  </Typography>
                </div>
                <div className="user-card-contetnt">
                  <div className="user-card-detail">
                    <Typography variant="h6" className="user-card-value">
                      1234
                    </Typography>
                    <Typography variant="body2" className="user-card-label">
                      ID
                    </Typography>
                  </div>
                  <div className="user-card-detail">
                    <Typography variant="h6" className="user-card-value">
                      23
                    </Typography>
                    <Typography variant="body2" className="user-card-label">
                      Age
                    </Typography>
                  </div>
                  <div className="user-card-detail">
                    <Typography variant="h6" className="user-card-value">
                      5.10
                    </Typography>
                    <Typography variant="body2" className="user-card-label">
                      Height
                    </Typography>
                  </div>
                </div>

                <div className="view-more-button-container">
                <Button
                  variant="contained"
                  // color="#ED7014"
                  sx={{backgroundColor:"#ED7014"}}
                  onClick={() => alert("View All clicked!")}
                >
                  View More
                </Button>
              </div>
              </CardContent>
            </Card>
          {/* ))} */}
        {/* </div> */}
        {/* card-3---------------------------------------------------- */}
        {/* <div className="user-dashboard-image-cards"> */}
          {/* {Intresetedusers.map((user, index) => ( */}
            <Card  className="user-card">
              <CardContent>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDuOzF2QSWMG0oQr8Zqh6CMXs7xtxEu_xiaQ&s"
                  alt=""
                  className="user-card-image"
                />
                <div className="user-card-username">
                  <Typography variant="h5" className="user-card-name">
                    sid
                  </Typography>
                  <Typography variant="body1" className="user-card-name">
                    software Developer
                  </Typography>
                </div>
                <div className="user-card-contetnt">
                  <div className="user-card-detail">
                    <Typography variant="h6" className="user-card-value">
                      1234
                    </Typography>
                    <Typography variant="body2" className="user-card-label">
                      ID
                    </Typography>
                  </div>
                  <div className="user-card-detail">
                    <Typography variant="h6" className="user-card-value">
                      23
                    </Typography>
                    <Typography variant="body2" className="user-card-label">
                      Age
                    </Typography>
                  </div>
                  <div className="user-card-detail">
                    <Typography variant="h6" className="user-card-value">
                      5.10
                    </Typography>
                    <Typography variant="body2" className="user-card-label">
                      Height
                    </Typography>
                  </div>
                </div>

                <div className="view-more-button-container">
                <Button
                  variant="contained"
                  // color="#ED7014"
                  sx={{backgroundColor:"#ED7014"}}
                  onClick={() => alert("View All clicked!")}
                >
                  View More
                </Button>
              </div>
              </CardContent>
            </Card>
          {/* ))} */}
        {/* </div> */}
        {/* card-3---------------------------------------------------- */}
        {/* <div className="user-dashboard-image-cards"> */}
          {/* {Intresetedusers.map((user, index) => ( */}
            <Card  className="user-card">
              <CardContent>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDuOzF2QSWMG0oQr8Zqh6CMXs7xtxEu_xiaQ&s"
                  alt=""
                  className="user-card-image"
                />
                <div className="user-card-username">
                  <Typography variant="h5" className="user-card-name">
                    sid
                  </Typography>
                  <Typography variant="body1" className="user-card-name">
                    software Developer
                  </Typography>
                </div>
                <div className="user-card-contetnt">
                  <div className="user-card-detail">
                    <Typography variant="h6" className="user-card-value">
                      1234
                    </Typography>
                    <Typography variant="body2" className="user-card-label">
                      ID
                    </Typography>
                  </div>
                  <div className="user-card-detail">
                    <Typography variant="h6" className="user-card-value">
                      23
                    </Typography>
                    <Typography variant="body2" className="user-card-label">
                      Age
                    </Typography>
                  </div>
                  <div className="user-card-detail">
                    <Typography variant="h6" className="user-card-value">
                      5.10
                    </Typography>
                    <Typography variant="body2" className="user-card-label">
                      Height
                    </Typography>
                  </div>
                </div>

                <div className="view-more-button-container">
                <Button
                  variant="contained"
                  // color="#ED7014"
                  sx={{backgroundColor:"#ED7014"}}
                  onClick={() => alert("View All clicked!")}
                >
                  View More
                </Button>
              </div>
              </CardContent>
            </Card>
          {/* ))} */}
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
