import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Select,
  MenuItem,
  FormControl,
  TextField,
  InputAdornment,
  Divider,
  Pagination,
  Stack,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CircleIcon from "@mui/icons-material/Circle";

import "./style/Notifications.css";

function Notifications() {
  const [userType, setUserType] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

 

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(1);
  };

  const [rows, setRows] = useState([
    {
      id: 1,
      details: "-",
      date: "-",
      fromdate: "-",
      todate: "-",
      news: "-",
      status: "pending",
    },
    {
      id: 2,
      details: "-",
      date: "-",
      fromdate: "-",
      todate: "-",
      news: "-",
      status: "pending",
    },
    {
      id: 3,
      details: "-",
      date: "-",
      fromdate: "-",
      todate: "-",
      news: "-",
      status: "pending",
    },
    {
      id: 4,
      details: "-",
      date:"-",
      fromdate: "-",
      todate: "-",
      news: "-",
      status: "pending",
    },
    {
      id: 6,
      details: "-",
      date: "-",
      fromdate: "-",
      todate: "-",
      news: "-",
      status: "pending",
    },
    {
      id: 7,
      details: "-",
      date: "-",
      fromdate: "-",
      todate: "-",
      news: "-",
      status: "pending",
    },
    {
      id: 8,
      details: "-",
      date: "-",
      fromdate: "-",
      todate: "-",
      news: "-",
      status: "pending",
    },
    {
      id: 9,
      details: "-",
      date: "-",
      fromdate: "-",
      todate: "-",
      news: "-",
      status: "pending",
    },
    {
      id: 10,
      details: "-",
      date: "-",
      fromdate: "-",
      todate: "-",
      news: "-",
      status: "pending",
    },
    {
      id: 11,
      details: "-",
      date: "-",
      fromdate: "-",
      todate: "-",
      news: "-",
      status: "pending",
    },
    {
      id: 12,
      details: "-",
      date: "-",
      fromdate: "-",
      todate: "-",
      news: "-",
      status: "pending",
    },
  ]);

  //   const toggleStatus = (id) => {
  //     setRows((prevRows) =>
  //       prevRows.map((row) =>
  //         row.id === id
  //           ? { ...row, status: row.status === "pending" ? "Pending" : "pending" }
  //           : row
  //       )
  //     );
  //   };

  const filteredRows = rows.filter(
    (row) =>
      (userType === "all" || row.todate.toLowerCase() === userType) &&
      Object.values(row).join(" ").toLowerCase().includes(searchTerm)
  );

  const startIndex = (page - 1) * rowsPerPage;
  const paginatedRows = filteredRows.slice(
    startIndex,
    startIndex + rowsPerPage
  );

  return (
    <div className="admin-user">
      <div
        className="admin-user-search"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "30px",
        }}
      >
        <Typography
          variant="h5"
          className="admin-user-heading"
          sx={{
            width: "510px",
          }}
        >
          Notofications
        </Typography>

        <TextField
          className="search-bar"
          variant="outlined"
          size="small"
          placeholder="Search here"
          onChange={handleSearchChange}
          sx={{
            borderBottom: "2px solid #000",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "none",
              },
            },
            width: "300px",
            height: "40px",
            // Adjust width as needed
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <TableContainer component={Paper} className="admin-user-table">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>News Id</TableCell>
              <TableCell>News Details</TableCell>
              <TableCell>From Date</TableCell>
              <TableCell>To Date</TableCell>
              <TableCell>Types of News</TableCell>
              
              <TableCell>Status</TableCell>
              {/* <TableCell>Change Status</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedRows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.details}</TableCell>
                <TableCell>{row.fromdate}</TableCell>
                <TableCell>{row.todate}</TableCell>
                <TableCell>{row.news}</TableCell>
                {/* <TableCell>{row.news}</TableCell> */}
                <TableCell>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <CircleIcon
                      sx={{
                        fontSize: "10px",
                        color: row.status === "pending" ? "red" : "green",
                      }}
                    />
                    {row.status}
                  </div>
                </TableCell>
                {/* <TableCell>
                  <Button
                    variant="contained"
                    color={row.status === "pending" ? "error" : "success"}
                    onClick={() => toggleStatus(row.id)}
                    startIcon={row.status === "pending" ? <CloseIcon /> : <CheckIcon />}
                  >
                    {row.status === "pending" ? "Cancel" : "Upgrade"}
                  </Button>
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div
        className="pagination-controls"
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "500px",
          alignItems: "center",
          marginTop: "10px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <Typography>Rows per page:</Typography>
          <Select
            value={rowsPerPage}
            onChange={handleChangeRowsPerPage}
            size="small"
            sx={{ marginLeft: "10px", width: "80px" }}
          >
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={25}>25</MenuItem>
          </Select>
        </div>
        <Stack spacing={2} sx={{ marginLeft: "auto" }}>
          <Pagination
            count={Math.ceil(filteredRows.length / rowsPerPage)}
            page={page}
            onChange={handleChangePage}
            shape="rounded"
            sx={{
              ".MuiPaginationItem-root.Mui-selected": {
                backgroundColor: "#CC5500",
                color: "white",
              },
            }}
          />
        </Stack>
      </div>
    </div>
  );
}

export default Notifications;
