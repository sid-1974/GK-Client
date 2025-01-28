import React, { useState } from "react";
import "./UserView.css";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Pagination,
} from "@mui/material";
import { useUser } from "../../../components/router/userContext/UserContext";

function UserView() {
  const { allUsers} = useUser();
  // console.log("Education Data in UserView:", allUsers);
  const rowsPerPage = 3; 
  const [page, setPage] = useState(1);

  // const filteredRows = Array.from({ length: 1});

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const currentRows = allUsers.slice(
    (page - 1) * rowsPerPage,
    page * rowsPerPage
  );

  return (
    <div className="user-view-container">
      <div className="user-view-heading">
        <Typography variant="h4">View All Profiles</Typography>
      </div>

      {/* first-row---------------------- */}
      <div className="user-view-image-cards">
     
      {currentRows.map((user) => (
        <Card className="user-card-view">
          <Typography className="premium">Premium</Typography>
          <CardContent>
            <img
              src={ user.photo[0].image ||"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDuOzF2QSWMG0oQr8Zqh6CMXs7xtxEu_xiaQ&s"}
              alt=""
              className="user-card-view-image"
            />

            <div className="user-card-view-username">
              <Typography variant="h5" className="user-card-view-name">
              {user.userDetails.fullName|| "N/A"}

              </Typography>
              <Typography variant="body1" className="user-card-view-name">
              {user.education && user.education[0]?.occupation || "N/A"}


              </Typography>
            </div>
            <div className="user-card-view-contetnt">
              <div className="user-card-view-detail">
                <Typography variant="h6" className="user-card-view-value">
                {user.userDetails.userId || "N/A"}
                </Typography>
                <Typography variant="body2" className="user-card-view-label">
                  ID
                </Typography>
              </div>
              <div className="user-card-view-detail">
                <Typography variant="h6" className="user-card-view-value">
                {user.age || "N/A"}

                </Typography>
                <Typography variant="body2" className="user-card-view-label">
                  Age
                </Typography>
              </div>
              <div className="user-card-view-detail">
                <Typography variant="h6" className="user-card-view-value">
                  {user.height.slice(0,4) || "N/A"}
                </Typography>
                <Typography variant="body2" className="user-card-view-label">
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
  ))}
      

       
      </div>

      {/* pagination----------------------- */}
      <div className="user-view-pagination">
        <Pagination
          count={Math.ceil(allUsers.length / rowsPerPage)}
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

export default UserView;
