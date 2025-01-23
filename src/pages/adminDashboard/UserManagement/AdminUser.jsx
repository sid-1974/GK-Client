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
import "./style/AdminUser.css";

function AdminUser() {
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
      usertype: "Premium",
      status: "Active",
      changestatus: "inactive",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      gender: "female",
      usertype: "Silver",
      status: "Active",
      changestatus: "inactive",
    },
    {
      id: 3,
      name: "Alice Johnson",
      email: "alice@example.com",
      gender: "female",
      usertype: "Free",
      status: "Active",
      changestatus: "active",
    },
    {
      id: 4,
      name: "Bob Brown",
      email: "bob@example.com",
      gender: "male",
      usertype: "Premium",
      status: "Active",
      changestatus: "inactive",
    },
    {
      id: 5,
      name: "Charlie Davis",
      email: "charlie@example.com",
      gender: "male",
      usertype: "Free",
      status: "Active",
      changestatus: "inactive",
    },
    {
      id: 6,
      name: "Charlie Davis",
      email: "charlie@example.com",
      gender: "male",
      usertype: "Free",
      status: "Active",
      changestatus: "inactive",
    },
    {
      id: 7,
      name: "Charlie Davis",
      email: "charlie@example.com",
      gender: "male",
      usertype: "Free",
      status: "Active",
      changestatus: "inactive",
    },
    {
      id: 8,
      name: "Charlie Davis",
      email: "charlie@example.com",
      gender: "male",
      usertype: "Free",
      status: "Active",
      changestatus: "inactive",
    },
    {
      id: 9,
      name: "Charlie Davis",
      email: "charlie@example.com",
      gender: "male",
      usertype: "Free",
      status: "Active",
      changestatus: "inactive",
    },
    {
      id: 10,
      name: "Charlie Davis",
      email: "charlie@example.com",
      gender: "male",
      usertype: "Free",
      status: "Active",
      changestatus: "inactive",
    },
    {
      id: 11,
      name: "Charlie Davis",
      email: "charlie@example.com",
      gender: "male",
      usertype: "Free",
      status: "Active",
      changestatus: "inactive",
    },
    {
      id: 12,
      name: "Charlie Davis",
      email: "charlie@example.com",
      gender: "male",
      usertype: "Free",
      status: "Active",
      changestatus: "inactive",
    },
  ]);

  const toggleStatus = (id) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === id
          ? { ...row, status: row.status === "Active" ? "Inactive" : "Active" }
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
    <div className="admin-user">

      
        <FormControl
          className="user-type-select"
          variant="outlined"
          size="large"
          sx={{
            width: "150px", // Adjust width of the box
            height: "50px", // Adjust height of the box
          }}
        >
          <InputLabel
            id="user-type-label"
            sx={{
              fontSize: "1.2rem", // Adjust label font size
              transform: "translate(14px, 14px) scale(4)", // Position label within the border
              "&.MuiInputLabel-shrink": {
                transform: "translate(14px, -8px) scale(0.75)", // Shrink position when focused or filled
              },
            }}
          >
            UserType
          </InputLabel>
          <Select
            labelId="user-type-label"
            value={userType}
            onChange={handleUserTypeChange}
            label="User Type"
            sx={{
              fontSize: "1rem", // Adjust font size inside Select
              height: "60px", // Match FormControl height
            }}
          >
            <MenuItem value="all">All Users</MenuItem>
            <MenuItem value="premium">Premium</MenuItem>
            <MenuItem value="silver">Silver</MenuItem>
            <MenuItem value="free">Free</MenuItem>
          </Select>
        </FormControl>
      
      {/* <Divider sx={{ marginTop: "-30px", width: "100%" }} /> */}
      <div
        className="admin-user-search"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "30px",
        }}
      >
        <Typography variant="h5" className="admin-user-heading">
          Users
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
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Usertype</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Change Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedRows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.gender}</TableCell>
                <TableCell>{row.usertype}</TableCell>
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
                        color: row.status === "Active" ? "green" : "red",
                      }}
                    />
                    {row.status}
                  </div>
                </TableCell>

                <TableCell>
                  <Button
                    variant="contained"
                    color={row.status === "Active" ? "error" : "success"}
                    onClick={() => toggleStatus(row.id)}
                  >
                    {row.status === "Active" ? "Deactivate" : "Activate"}
                  </Button>
                </TableCell>
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

export default AdminUser;
