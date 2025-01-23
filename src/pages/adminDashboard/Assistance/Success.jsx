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
import './style/Success.css'

function Success() {
  const [userType, setUserType] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleUserTypeChange = (event) => {
    setUserType(event.target.value);
  };

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
    { id: 1, name: "John Doe", email: "john@example.com",number: "1234567890",caste:"-", usertype: "Premium",  },
    { id: 2, name: "Jane Smith", email: "jane@example.com",number: "-",caste:"-", usertype: "Silver",  },
    { id: 3, name: "Alice Johnson", email: "alice@example.com",number: "-", caste:"-",usertype: "Free",  },
    { id: 4, name: "Bob Brown", email: "bob@example.com",number: "1234567890",caste:"-", usertype: "Premium",  },
    { id: 6, name: "Charlie Davis", email: "charlie@example.com",number: "1234567890",caste:"-", usertype: "Free",  },
    { id: 7, name: "Charlie Davis", email: "charlie@example.com",number: "1234567890",caste:"-", usertype: "Free",  },
    { id: 8, name: "Charlie Davis", email: "charlie@example.com",number: "1234567890",caste:"-", usertype: "Free",  },
    { id: 9, name: "Charlie Davis", email: "charlie@example.com",number: "1234567890",caste:"-", usertype: "Free",  },
    { id: 10, name: "Charlie Davis", email: "charlie@example.com",number: "1234567890",caste:"-", usertype: "Free",  },
    { id: 11, name: "Charlie Davis", email: "charlie@example.com",number: "1234567890",caste:"-", usertype: "Free",  },
    { id: 12, name: "Charlie Davis", email: "charlie@example.com",number: "1234567890",caste:"-", usertype: "Free",  },
    
  ]);

//   const toggleStatus = (id) => {
//     setRows((prevRows) =>
//       prevRows.map((row) =>
//         row.id === id
//           ? { ...row, status: row.status === "Active" ? "Pending" : "Active" }
//           : row
//       )
//     );
//   };

  const filteredRows = rows.filter(
    (row) =>
      (userType === "all" || row.usertype.toLowerCase() === userType) &&
      Object.values(row).join(" ").toLowerCase().includes(searchTerm)
  );

  const startIndex = (page - 1) * rowsPerPage;
  const paginatedRows = filteredRows.slice(startIndex, startIndex + rowsPerPage);

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
          Success
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
              <TableCell>Number</TableCell>
              <TableCell>Caste</TableCell>
              <TableCell>Usertype</TableCell>
              {/* <TableCell>Satus</TableCell>
              <TableCell>Assistance</TableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedRows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.number}</TableCell>
                <TableCell>{row.caste}</TableCell>
                <TableCell>{row.usertype}</TableCell>
                {/* <TableCell>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <CircleIcon
                      sx={{
                        fontSize: "10px",
                        color: row.status === "Active" ? "green" : "red",
                      }}
                    />
                    {row.status}
                  </div>
                </TableCell> */}
                {/* <TableCell>
                  <Button
                    variant="contained"
                    color={row.status === "Active" ? "error" : "success"}
                    onClick={() => toggleStatus(row.id)}

                  >
                    {row.status === "Active" ? "Inactive" : "Active"}
                  </Button>
                </TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="pagination-controls" style={{ display: "flex", justifyContent: "space-between", gap: "500px", alignItems: "center", marginTop: "10px" }}>
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

export default Success;
