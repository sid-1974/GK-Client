import React, { useState } from "react";
import "./MyMatches.css";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Pagination,
} from "@mui/material";
import { Link } from "react-router-dom";

function MyMatches() {
  const rowsPerPage = 3; // Adjust based on how many cards you want per page
  const [page, setPage] = useState(1);

  const filteredRows = Array.from({ length: 12 }); // Example array to represent your data

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const currentRows = filteredRows.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  return (
    <div className="user-Matches-container">
      <div className="user-Matches-heading">
        <Typography variant="h4">My Partner Preferences</Typography>
        <Link to="/user/profile" style={{ textDecoration: "none",marginTop:"-5px" }}>
          <Button variant="contained" sx={{ backgroundColor: "#ED7014" }}>
            Modify
          </Button>
        </Link>
      </div>

      {/* first-row---------------------- */}
      <div className="user-Matches-image-cards">
        <Card className="user-card-Matches">
          <CardContent>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDuOzF2QSWMG0oQr8Zqh6CMXs7xtxEu_xiaQ&s"
              alt=""
              className="user-card-Matches-image"
            />
            <div className="user-card-Matches-username">
              <Typography variant="h5" className="user-card-Matches-name">
                sid
              </Typography>
              <Typography variant="body1" className="user-card-Matches-name">
                software Developer
              </Typography>
            </div>
            <div className="user-card-Matches-contetnt">
              <div className="user-card-Matches-detail">
                <Typography variant="h6" className="user-card-Matches-value">
                  1234
                </Typography>
                <Typography variant="body2" className="user-card-Matches-label">
                  ID
                </Typography>
              </div>
              <div className="user-card-Matches-detail">
                <Typography variant="h6" className="user-card-Matches-value">
                  23
                </Typography>
                <Typography variant="body2" className="user-card-Matches-label">
                  Age
                </Typography>
              </div>
              <div className="user-card-Matches-detail">
                <Typography variant="h6" className="user-card-Matches-value">
                  5.10
                </Typography>
                <Typography variant="body2" className="user-card-Matches-label">
                  Height
                </Typography>
              </div>
            </div>

            <div className="view-more-button-container">
              <Button
                variant="contained"
                // color="#ED7014"
                sx={{ backgroundColor: "#ED7014" }}
                onClick={() => alert("View All clicked!")}
              >
                View More
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* card-Matches-2---------------------------------------------------- */}

        <Card className="user-card-Matches">
          <CardContent>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDuOzF2QSWMG0oQr8Zqh6CMXs7xtxEu_xiaQ&s"
              alt=""
              className="user-card-Matches-image"
            />
            <div className="user-card-Matches-username">
              <Typography variant="h5" className="user-card-Matches-name">
                sid
              </Typography>
              <Typography variant="body1" className="user-card-Matches-name">
                software Developer
              </Typography>
            </div>
            <div className="user-card-Matches-contetnt">
              <div className="user-card-Matches-detail">
                <Typography variant="h6" className="user-card-Matches-value">
                  1234
                </Typography>
                <Typography variant="body2" className="user-card-Matches-label">
                  ID
                </Typography>
              </div>
              <div className="user-card-Matches-detail">
                <Typography variant="h6" className="user-card-Matches-value">
                  23
                </Typography>
                <Typography variant="body2" className="user-card-Matches-label">
                  Age
                </Typography>
              </div>
              <div className="user-card-Matches-detail">
                <Typography variant="h6" className="user-card-Matches-value">
                  5.10
                </Typography>
                <Typography variant="body2" className="user-card-Matches-label">
                  Height
                </Typography>
              </div>
            </div>

            <div className="view-more-button-container">
              <Button
                variant="contained"
                // color="#ED7014"
                sx={{ backgroundColor: "#ED7014" }}
                onClick={() => alert("View All clicked!")}
              >
                View More
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* card-Matches-3---------------------------------------------------- */}

        <Card className="user-card-Matches">
          <CardContent>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDuOzF2QSWMG0oQr8Zqh6CMXs7xtxEu_xiaQ&s"
              alt=""
              className="user-card-Matches-image"
            />
            <div className="user-card-Matches-username">
              <Typography variant="h5" className="user-card-Matches-name">
                sid
              </Typography>
              <Typography variant="body1" className="user-card-Matches-name">
                software Developer
              </Typography>
            </div>
            <div className="user-card-Matches-contetnt">
              <div className="user-card-Matches-detail">
                <Typography variant="h6" className="user-card-Matches-value">
                  1234
                </Typography>
                <Typography variant="body2" className="user-card-Matches-label">
                  ID
                </Typography>
              </div>
              <div className="user-card-Matches-detail">
                <Typography variant="h6" className="user-card-Matches-value">
                  23
                </Typography>
                <Typography variant="body2" className="user-card-Matches-label">
                  Age
                </Typography>
              </div>
              <div className="user-card-Matches-detail">
                <Typography variant="h6" className="user-card-Matches-value">
                  5.10
                </Typography>
                <Typography variant="body2" className="user-card-Matches-label">
                  Height
                </Typography>
              </div>
            </div>

            <div className="view-more-button-container">
              <Button
                variant="contained"
                // color="#ED7014"
                sx={{ backgroundColor: "#ED7014" }}
                onClick={() => alert("View All clicked!")}
              >
                View More
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* second--row------------------------------------ */}

      <div className="user-Matches-image-cards">
        {/* {Intresetedusers.map((user, index) => ( */}
        <Card className="user-card-Matches">
          <CardContent>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDuOzF2QSWMG0oQr8Zqh6CMXs7xtxEu_xiaQ&s"
              alt=""
              className="user-card-Matches-image"
            />
            <div className="user-card-Matches-username">
              <Typography variant="h5" className="user-card-Matches-name">
                sid
              </Typography>
              <Typography variant="body1" className="user-card-Matches-name">
                software Developer
              </Typography>
            </div>
            <div className="user-card-Matches-contetnt">
              <div className="user-card-Matches-detail">
                <Typography variant="h6" className="user-card-Matches-value">
                  1234
                </Typography>
                <Typography variant="body2" className="user-card-Matches-label">
                  ID
                </Typography>
              </div>
              <div className="user-card-Matches-detail">
                <Typography variant="h6" className="user-card-Matches-value">
                  23
                </Typography>
                <Typography variant="body2" className="user-card-Matches-label">
                  Age
                </Typography>
              </div>
              <div className="user-card-Matches-detail">
                <Typography variant="h6" className="user-card-Matches-value">
                  5.10
                </Typography>
                <Typography variant="body2" className="user-card-Matches-label">
                  Height
                </Typography>
              </div>
            </div>

            <div className="view-more-button-container">
              <Button
                variant="contained"
                // color="#ED7014"
                sx={{ backgroundColor: "#ED7014" }}
                onClick={() => alert("View All clicked!")}
              >
                View More
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* card-Matches-2---------------------------------------------------- */}

        <Card className="user-card-Matches">
          <CardContent>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDuOzF2QSWMG0oQr8Zqh6CMXs7xtxEu_xiaQ&s"
              alt=""
              className="user-card-Matches-image"
            />
            <div className="user-card-Matches-username">
              <Typography variant="h5" className="user-card-Matches-name">
                sid
              </Typography>
              <Typography variant="body1" className="user-card-Matches-name">
                software Developer
              </Typography>
            </div>
            <div className="user-card-Matches-contetnt">
              <div className="user-card-Matches-detail">
                <Typography variant="h6" className="user-card-Matches-value">
                  1234
                </Typography>
                <Typography variant="body2" className="user-card-Matches-label">
                  ID
                </Typography>
              </div>
              <div className="user-card-Matches-detail">
                <Typography variant="h6" className="user-card-Matches-value">
                  23
                </Typography>
                <Typography variant="body2" className="user-card-Matches-label">
                  Age
                </Typography>
              </div>
              <div className="user-card-Matches-detail">
                <Typography variant="h6" className="user-card-Matches-value">
                  5.10
                </Typography>
                <Typography variant="body2" className="user-card-Matches-label">
                  Height
                </Typography>
              </div>
            </div>

            <div className="view-more-button-container">
              <Button
                variant="contained"
                // color="#ED7014"
                sx={{ backgroundColor: "#ED7014" }}
                onClick={() => alert("View All clicked!")}
              >
                View More
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* card-Matches-3---------------------------------------------------- */}

        <Card className="user-card-Matches">
          <CardContent>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDuOzF2QSWMG0oQr8Zqh6CMXs7xtxEu_xiaQ&s"
              alt=""
              className="user-card-Matches-image"
            />
            <div className="user-card-Matches-username">
              <Typography variant="h5" className="user-card-Matches-name">
                sid
              </Typography>
              <Typography variant="body1" className="user-card-Matches-name">
                software Developer
              </Typography>
            </div>
            <div className="user-card-Matches-contetnt">
              <div className="user-card-Matches-detail">
                <Typography variant="h6" className="user-card-Matches-value">
                  1234
                </Typography>
                <Typography variant="body2" className="user-card-Matches-label">
                  ID
                </Typography>
              </div>
              <div className="user-card-Matches-detail">
                <Typography variant="h6" className="user-card-Matches-value">
                  23
                </Typography>
                <Typography variant="body2" className="user-card-Matches-label">
                  Age
                </Typography>
              </div>
              <div className="user-card-Matches-detail">
                <Typography variant="h6" className="user-card-Matches-value">
                  5.10
                </Typography>
                <Typography variant="body2" className="user-card-Matches-label">
                  Height
                </Typography>
              </div>
            </div>

            <div className="view-more-button-container">
              <Button
                variant="contained"
                // color="#ED7014"
                sx={{ backgroundColor: "#ED7014" }}
                onClick={() => alert("View All clicked!")}
              >
                View More
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* third-row --------------------------------------- */}

      <div className="user-Matches-image-cards">
        {/* {Intresetedusers.map((user, index) => ( */}
        <Card className="user-card-Matches">
          <CardContent>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDuOzF2QSWMG0oQr8Zqh6CMXs7xtxEu_xiaQ&s"
              alt=""
              className="user-card-Matches-image"
            />
            <div className="user-card-Matches-username">
              <Typography variant="h5" className="user-card-Matches-name">
                sid
              </Typography>
              <Typography variant="body1" className="user-card-Matches-name">
                software Developer
              </Typography>
            </div>
            <div className="user-card-Matches-contetnt">
              <div className="user-card-Matches-detail">
                <Typography variant="h6" className="user-card-Matches-value">
                  1234
                </Typography>
                <Typography variant="body2" className="user-card-Matches-label">
                  ID
                </Typography>
              </div>
              <div className="user-card-Matches-detail">
                <Typography variant="h6" className="user-card-Matches-value">
                  23
                </Typography>
                <Typography variant="body2" className="user-card-Matches-label">
                  Age
                </Typography>
              </div>
              <div className="user-card-Matches-detail">
                <Typography variant="h6" className="user-card-Matches-value">
                  5.10
                </Typography>
                <Typography variant="body2" className="user-card-Matches-label">
                  Height
                </Typography>
              </div>
            </div>

            <div className="view-more-button-container">
              <Button
                variant="contained"
                // color="#ED7014"
                sx={{ backgroundColor: "#ED7014" }}
                onClick={() => alert("View All clicked!")}
              >
                View More
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* card-Matches-2---------------------------------------------------- */}

        <Card className="user-card-Matches">
          <CardContent>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDuOzF2QSWMG0oQr8Zqh6CMXs7xtxEu_xiaQ&s"
              alt=""
              className="user-card-Matches-image"
            />
            <div className="user-card-Matches-username">
              <Typography variant="h5" className="user-card-Matches-name">
                sid
              </Typography>
              <Typography variant="body1" className="user-card-Matches-name">
                software Developer
              </Typography>
            </div>
            <div className="user-card-Matches-contetnt">
              <div className="user-card-Matches-detail">
                <Typography variant="h6" className="user-card-Matches-value">
                  1234
                </Typography>
                <Typography variant="body2" className="user-card-Matches-label">
                  ID
                </Typography>
              </div>
              <div className="user-card-Matches-detail">
                <Typography variant="h6" className="user-card-Matches-value">
                  23
                </Typography>
                <Typography variant="body2" className="user-card-Matches-label">
                  Age
                </Typography>
              </div>
              <div className="user-card-Matches-detail">
                <Typography variant="h6" className="user-card-Matches-value">
                  5.10
                </Typography>
                <Typography variant="body2" className="user-card-Matches-label">
                  Height
                </Typography>
              </div>
            </div>

            <div className="view-more-button-container">
              <Button
                variant="contained"
                // color="#ED7014"
                sx={{ backgroundColor: "#ED7014" }}
                onClick={() => alert("View All clicked!")}
              >
                View More
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* card-Matches-3---------------------------------------------------- */}

        <Card className="user-card-Matches">
          <CardContent>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDuOzF2QSWMG0oQr8Zqh6CMXs7xtxEu_xiaQ&s"
              alt=""
              className="user-card-Matches-image"
            />
            <div className="user-card-Matches-username">
              <Typography variant="h5" className="user-card-Matches-name">
                sid
              </Typography>
              <Typography variant="body1" className="user-card-Matches-name">
                software Developer
              </Typography>
            </div>
            <div className="user-card-Matches-contetnt">
              <div className="user-card-Matches-detail">
                <Typography variant="h6" className="user-card-Matches-value">
                  1234
                </Typography>
                <Typography variant="body2" className="user-card-Matches-label">
                  ID
                </Typography>
              </div>
              <div className="user-card-Matches-detail">
                <Typography variant="h6" className="user-card-Matches-value">
                  23
                </Typography>
                <Typography variant="body2" className="user-card-Matches-label">
                  Age
                </Typography>
              </div>
              <div className="user-card-Matches-detail">
                <Typography variant="h6" className="user-card-Matches-value">
                  5.10
                </Typography>
                <Typography variant="body2" className="user-card-Matches-label">
                  Height
                </Typography>
              </div>
            </div>

            <div className="view-more-button-container">
              <Button
                variant="contained"
                // color="#ED7014"
                sx={{ backgroundColor: "#ED7014" }}
                onClick={() => alert("View All clicked!")}
              >
                View More
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* pagination----------------------- */}
      <div className="user-matches-pagination">
        <Pagination
          count={Math.ceil(filteredRows.length / rowsPerPage)}
          page={page}
          onChange={handleChangePage}
          shape="rounded"
          sx={{
            ".MuiPaginationItem-root.Mui-selected": {
              backgroundColor: "#CC5500", // Set selected page background color
              color: "white", // Ensure selected page number is white
            },
          }}
        />
      </div>
    </div>
  );
}

export default MyMatches;
