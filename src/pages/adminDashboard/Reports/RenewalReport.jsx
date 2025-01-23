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
  InputLabel,
  TextField,
  InputAdornment,
  Divider,
  Pagination,
  Stack,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CircleIcon from "@mui/icons-material/Circle";
import "./style/RenewalReport.css";

function RenewalReport() {
  const [userType, setUserType] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1); // Current page state
  const [rowsPerPage, setRowsPerPage] = useState(10); // Rows per page

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage); // Update current page
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value); // Update rows per page
    setPage(1); // Reset to first page
  };

  const [rows, setRows] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      gender: "male",
      Tdate: "-",
      status: "Pending",
      
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      gender: "female",
      Tdate: "-",
      status: "Pending",
      
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice@example.com",
      gender: "female",
      Tdate: "-",
      status: "Pending",
       },
    {
      id: 4,
      name: "Bob Brown",
      email: "bob@example.com",
      gender: "male",
      Tdate: "-",
      status: "Pending",
      
    },
    {
      id: 5,
      name: "Charlie Davis",
      email: "charlie@example.com",
      gender: "male",
      Tdate: "-",
      status: "Pending",
      
    },
    {
      id: 6,
      name: "Charlie Davis",
      email: "charlie@example.com",
      gender: "male",
      Tdate: "-",
      status: "Pending",
      
    },
    {
      id: 7,
      name: "Charlie Davis",
      email: "charlie@example.com",
      gender: "male",
      Tdate: "-",
      status: "Pending",
      
    },
    {
      id: 8,
      name: "Charlie Davis",
      email: "charlie@example.com",
      gender: "male",
      Tdate: "-",
      status: "Pending",
      
    },
    {
      id: 9,
      name: "Charlie Davis",
      email: "charlie@example.com",
      gender: "male",
      Tdate: "-",
      status: "Pending",
      
    },
    {
      id: 10,
      name: "Charlie Davis",
      email: "charlie@example.com",
      gender: "male",
      Tdate: "-",
      status: "Pending",
      
    },
    {
      id: 11,
      name: "Charlie Davis",
      email: "charlie@example.com",
      gender: "male",
      Tdate: "-",
      status: "Pending",
      
    },
    {
      id: 12,
      name: "Charlie Davis",
      email: "charlie@example.com",
      gender: "male",
      Tdate: "-",
      status: "Pending",
      
    },
  ]);

  const toggleStatus = (id) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === id
          ? { ...row, status: row.status === "Pending" ? "Inactive" : "Pending" }
          : row
      )
    );
  };

  const filteredRows = rows.filter(
    (row) =>
      (userType === "all" || row.usertype.toLowerCase() === userType) &&
      Object.values(row).join(" ").toLowerCase().includes(searchTerm)
  );

  const startIndex = (page - 1) * rowsPerPage;
  const paginatedRows = filteredRows.slice(
    startIndex,
    startIndex + rowsPerPage
  );

  return (
    <div className="report-user">

<div className="report-user-type-container">
  <div className="input-group">
    <label htmlFor="from-date" className="report-label">
      From:
    </label>
    <input
      id="from-date"
      type="date"
      className="report-user-type-select"
    />
  </div>
  <div className="input-group">
    <label htmlFor="to-date" className="report-label">
      To:
    </label>
    <input
      id="to-date"
      type="date"
      className="report-user-type-select"
    />
  </div>
  <button className="report-user-type-select-btn">Submit</button>
</div>


      {/* <Divider sx={{ marginTop: "-30px", width: "100%" }} /> */}
      <div
        className="report-user-search"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "30px",
        }}
      >
        <Typography variant="h5" className="admin-user-heading">
          Renewal-Reports
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
      <TableContainer component={Paper} className="report-user-table">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Transaction Date</TableCell>
              <TableCell>Status</TableCell>
              {/* <TableCell>Change Status</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedRows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.gender}</TableCell>
                <TableCell>{row.Tdate}</TableCell>
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
                        color: row.status === "Pending" ? "red" : "green",
                      }}
                    />
                    {row.status}
                  </div>
                </TableCell>

                {/* <TableCell>
                  <Button
                    variant="contained"
                    color={row.status === "Pending" ? "error" : "success"}
                    onClick={() => toggleStatus(row.id)}
                  >
                    {row.status === "Pending" ? "Deactivate" : "Activate"}
                  </Button>
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* pagination----------------------------------------------------------- */}
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
                backgroundColor: "#CC5500", // Set selected page background color
                color: "white", // Ensure selected page number is white
              },
            }}
          />
        </Stack>
      </div>
    </div>
  );
}

export default RenewalReport;
