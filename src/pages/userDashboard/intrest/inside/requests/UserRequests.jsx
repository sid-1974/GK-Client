import React, { useState } from "react";
import "./UserRequests.css";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Pagination,
} from "@mui/material";

function UserRequests() {
  const rowsPerPage = 12; 
  const [page, setPage] = useState(1);

  const filteredRows = Array.from({ length: 12 }); 

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const currentRows = filteredRows.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );
  return (
    <div>
      <div className="user-request-image-cards">
        <Card className="user-card-request">
          <CardContent>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDuOzF2QSWMG0oQr8Zqh6CMXs7xtxEu_xiaQ&s"
              alt=""
              className="user-card-request-image"
            />
            <div className="user-card-request-username">
              <Typography variant="h5" className="user-card-request-name">
                sid
              </Typography>
              <Typography variant="body1" className="user-card-request-name">
                software Developer
              </Typography>
            </div>
            <div className="user-card-request-contetnt">
              <div className="user-card-request-detail">
                <Typography variant="h6" className="user-card-request-value">
                  1234
                </Typography>
                <Typography variant="body2" className="user-card-request-label">
                  ID
                </Typography>
              </div>
              <div className="user-card-request-detail">
                <Typography variant="h6" className="user-card-request-value">
                  23
                </Typography>
                <Typography variant="body2" className="user-card-request-label">
                  Age
                </Typography>
              </div>
              <div className="user-card-request-detail">
                <Typography variant="h6" className="user-card-request-value">
                  5.10
                </Typography>
                <Typography variant="body2" className="user-card-request-label">
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

        {/* card-request-2---------------------------------------------------- */}

       

        {/* card-request-3---------------------------------------------------- */}

       
      </div>
      <div className="user-request-pagination">
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

export default UserRequests;
