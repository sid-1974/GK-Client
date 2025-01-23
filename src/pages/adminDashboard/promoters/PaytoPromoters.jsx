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

import "./style/PaytoPromoters.css";

function PaytoPromoters() {
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
    { id: 1, name: "John Doe", Tearnings: "Rs.", paid: "Rs.", payable: "Rs." },
    {
      id: 2,
      name: "Jane Smith",
      Tearnings: "Rs.",
      paid: "Rs.",
      payable: "Rs.",
    },
    {
      id: 3,
      name: "Alice Johnson",
      Tearnings: "Rs.",
      paid: "Rs.",
      payable: "Rs.",
    },
    { id: 4, name: "Bob Brown", Tearnings: "Rs.", paid: "Rs.", payable: "Rs." },
    {
      id: 6,
      name: "Charlie Davis",
      Tearnings: "Rs.",
      paid: "Rs.",
      payable: "Rs.",
    },
    {
      id: 7,
      name: "Charlie Davis",
      Tearnings: "Rs.",
      paid: "Rs.",
      payable: "Rs.",
    },
    {
      id: 8,
      name: "Charlie Davis",
      Tearnings: "Rs.",
      paid: "Rs.",
      payable: "Rs.",
    },
    {
      id: 9,
      name: "Charlie Davis",
      Tearnings: "Rs.",
      paid: "Rs.",
      payable: "Rs.",
    },
    {
      id: 10,
      name: "Charlie Davis",
      Tearnings: "Rs.",
      paid: "Rs.",
      payable: "Rs.",
    },
    {
      id: 11,
      name: "Charlie Davis",
      Tearnings: "Rs.",
      paid: "Rs.",
      payable: "Rs.",
    },
    {
      id: 12,
      name: "Charlie Davis",
      Tearnings: "Rs.",
      paid: "Rs.",
      payable: "Rs.",
    },
  ]);

  const filteredRows = rows.filter(
    (row) =>
      (userType === "all" || row.toLowerCase() === userType) &&
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
          Pay To Promoters
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
              <TableCell>Promoter Code</TableCell>
              <TableCell>Promoter Name</TableCell>
              <TableCell>Total Earnings</TableCell>
              <TableCell>Paid</TableCell>
              <TableCell>Payable</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedRows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.Tearnings}</TableCell>
                <TableCell>{row.paid}</TableCell>
                <TableCell>{row.payable}</TableCell>
                <TableCell>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        backgroundColor: "#CC5500",
                        color: "white",
                        "&:hover": { backgroundColor: "#B04A00" },
                      }}
                    >
                      Pay Now
                    </Button>
                  </div>
                </TableCell>
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

export default PaytoPromoters;
