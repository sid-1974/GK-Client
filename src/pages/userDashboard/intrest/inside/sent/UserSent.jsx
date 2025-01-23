import React, { useState } from "react";
import "./UserSent.css";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Pagination,
} from "@mui/material";

function UserSent() {
  const rowsPerPage = 12; // Adjust based on how many cards you want per page
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
    <div>
      <div className="user-sent-image-cards">
        <Card className="user-card-sent">
          <CardContent>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDuOzF2QSWMG0oQr8Zqh6CMXs7xtxEu_xiaQ&s"
              alt=""
              className="user-card-sent-image"
            />
            <div className="user-card-sent-username">
              <Typography variant="h5" className="user-card-sent-name">
                sid
              </Typography>
              <Typography variant="body1" className="user-card-sent-name">
                software Developer
              </Typography>
            </div>
            <div className="user-card-sent-contetnt">
              <div className="user-card-sent-detail">
                <Typography variant="h6" className="user-card-sent-value">
                  1234
                </Typography>
                <Typography variant="body2" className="user-card-sent-label">
                  ID
                </Typography>
              </div>
              <div className="user-card-sent-detail">
                <Typography variant="h6" className="user-card-sent-value">
                  23
                </Typography>
                <Typography variant="body2" className="user-card-sent-label">
                  Age
                </Typography>
              </div>
              <div className="user-card-sent-detail">
                <Typography variant="h6" className="user-card-sent-value">
                  5.10
                </Typography>
                <Typography variant="body2" className="user-card-sent-label">
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

        {/* card-sent-2---------------------------------------------------- */}

        <Card className="user-card-sent">
          <CardContent>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDuOzF2QSWMG0oQr8Zqh6CMXs7xtxEu_xiaQ&s"
              alt=""
              className="user-card-sent-image"
            />
            <div className="user-card-sent-username">
              <Typography variant="h5" className="user-card-sent-name">
                sid
              </Typography>
              <Typography variant="body1" className="user-card-sent-name">
                software Developer
              </Typography>
            </div>
            <div className="user-card-sent-contetnt">
              <div className="user-card-sent-detail">
                <Typography variant="h6" className="user-card-sent-value">
                  1234
                </Typography>
                <Typography variant="body2" className="user-card-sent-label">
                  ID
                </Typography>
              </div>
              <div className="user-card-sent-detail">
                <Typography variant="h6" className="user-card-sent-value">
                  23
                </Typography>
                <Typography variant="body2" className="user-card-sent-label">
                  Age
                </Typography>
              </div>
              <div className="user-card-sent-detail">
                <Typography variant="h6" className="user-card-sent-value">
                  5.10
                </Typography>
                <Typography variant="body2" className="user-card-sent-label">
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

        {/* card-sent-3---------------------------------------------------- */}

       
      </div>
      <div className="user-sent-pagination">
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

export default UserSent;
