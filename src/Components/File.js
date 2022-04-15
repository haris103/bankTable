import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import "./File.css";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SearchIcon from "@mui/icons-material/Search";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import DataTable from "react-data-table-component";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import axios from "axios";
import Allbanks from "./Allbanks";
import Favouritebanks from "./Favouritebanks";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Iconbtn from "./Iconbtn";
import Iconbtn2 from "./Iconbtn2";

export default function File() {
  const [responsee, setResponse] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [BranchName, setBranchName] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://vast-shore-74260.herokuapp.com/banks?city=MUMBAI")
      .then(function(response) {
        setResponse(response.data);
        setFilteredData(response.data);
        console.log("RESPONSE FROM API", response);
      })
      .catch(function(error) {
        console.log(error);
      });
    localStorage.setItem("Soar-token", { str: "hasbjdbaskdbkasbd" });
  }, []);

  const handleBranchName = (e) => {
    setBranchName(e.target.value);
    const filter = responsee.filter((item, index) => {
      const itemData = item.branch
        ? item.branch.toUpperCase()
        : "".toUpperCase();
      const textData = e.target.value.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setFilteredData(filter);
  };
  const handleBranchName2 = (e) => {
    setBranchName(e.target.value);
    const filter = responsee.filter((item, index) => {
      const itemData = item.bank_name
        ? item.bank_name.toUpperCase()
        : "".toUpperCase();
      const textData = e.target.value.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setFilteredData(filter);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    const filter = responsee.filter((item, index) => {
      const itemData = item.bank_name
        ? item.bank_name.toUpperCase()
        : "".toUpperCase();
      const textData = e.target.value.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    setFilteredData(filter);
    // console.log("FILTERED DATA", filter);
  };

  const columns = [
    {
      name: "Bank",
      selector: (row) => row["bank_name"],
      sortable: true,
      reorder: true,
    },
    {
      name: "IFSC",
      selector: (row) => row["ifsc"],
      // selector: "ifsc",
      sortable: true,
      reorder: true,
    },
    {
      name: "Branch",
      // selector: "branch",
      selector: (row) => row["branch"],
      sortable: true,
      reorder: true,
    },
    {
      name: "Click and save your favourite banks",
      button: true,
      cell: (r) => <Iconbtn item={r} />,
    },
    {
      name: "Branch ID",
      // selector: "bank_id",
      selector: (row) => row["bank_id"],
      sortable: true,
      reorder: true,
    },
    {
      name: "Address",
      // selector: "address",
      selector: (row) => row["address"],
      sortable: true,
      reorder: true,
    },
  ];

  // const columns2 = [
  //   {
  //     name: "Bank",
  //     selector: (row) => row["bank_name"],
  //     sortable: true,
  //     reorder: true,
  //   },
  //   {
  //     name: "IFSC",
  //     selector: (row) => row["ifsc"],
  //     // selector: "ifsc",
  //     sortable: true,
  //     reorder: true,
  //   },
  //   {
  //     name: "Branch",
  //     // selector: "branch",
  //     selector: (row) => row["branch"],
  //     sortable: true,
  //     reorder: true,
  //   },
  //   {
  //     name: "Branch ID",
  //     // selector: "bank_id",
  //     selector: (row) => row["bank_id"],
  //     sortable: true,
  //     reorder: true,
  //   },
  //   {
  //     name: "Address",
  //     // selector: "address",
  //     selector: (row) => row["address"],
  //     sortable: true,
  //     reorder: true,
  //   },
  //   {
  //     name: "Favourites",
  //     button: true,
  //     cell: (r) => <Iconbtn2 item={r} />,
  //   },
  // ];

  // const dataa = [
  //   {
  //     bank_name: "Meezan",
  //     ifsc: "8888",
  //     branch: "pppppppppppppp",
  //     bank_id: "1233",
  //     address: "ooooooooooooo",
  //   },
  //   {
  //     bank_name: "Meezan",
  //     ifsc: "8888",
  //     branch: "pppppppppppppp",
  //     bank_id: "1233",
  //     address: "ooooooooooooo",
  //   },
  //   {
  //     bank_name: "Meezan",
  //     ifsc: "8888",
  //     branch: "pppppppppppppp",
  //     bank_id: "1233",
  //     address: "ooooooooooooo",
  //   },
  //   {
  //     bank_name: "Meezan",
  //     ifsc: "8888",
  //     branch: "pppppppppppppp",
  //     bank_id: "1233",
  //     address: "ooooooooooooo",
  //   },
  //   {
  //     bank_name: "HBL",
  //     ifsc: "8888",
  //     branch: "pppppppppppppp",
  //     bank_id: "1233",
  //     address: "ooooooooooooo",
  //   },
  //   {
  //     bank_name: "HBL",
  //     ifsc: "8888",
  //     branch: "pppppppppppppp",
  //     bank_id: "1233",
  //     address: "ooooooooooooo",
  //   },
  //   {
  //     bank_name: "HBL",
  //     ifsc: "8888",
  //     branch: "pppppppppppppp",
  //     bank_id: "1233",
  //     address: "ooooooooooooo",
  //   },
  //   {
  //     bank_name: "HBL",
  //     ifsc: "8888",
  //     branch: "pppppppppppppp",
  //     bank_id: "1233",
  //     address: "ooooooooooooo",
  //   },
  //   {
  //     bank_name: "UBL",
  //     ifsc: "8888",
  //     branch: "pppppppppppppp",
  //     bank_id: "1233",
  //     address: "ooooooooooooo",
  //   },
  //   {
  //     bank_name: "UBL",
  //     ifsc: "8888",
  //     branch: "pppppppppppppp",
  //     bank_id: "1233",
  //     address: "ooooooooooooo",
  //   },
  //   {
  //     bank_name: "UBL",
  //     ifsc: "8888",
  //     branch: "pppppppppppppp",
  //     bank_id: "1233",
  //     address: "ooooooooooooo",
  //   },
  //   {
  //     bank_name: "UBL",
  //     ifsc: "8888",
  //     branch: "pppppppppppppp",
  //     bank_id: "1233",
  //     address: "ooooooooooooo",
  //   },
  //   {
  //     bank_name: "UBL",
  //     ifsc: "8888",
  //     branch: "pppppppppppppp",
  //     bank_id: "1233",
  //     address: "ooooooooooooo",
  //   },

  //   {
  //     bank_name: "UBL",
  //     ifsc: "8888",
  //     branch: "pppppppppppppp",
  //     bank_id: "1233",
  //     address: "ooooooooooooo",
  //   },
  // ];

  // const history = useHis
  return (
    <>
      <Typography
        variant="h6"
        sx={{ borderBottom: 1, display: "flex", justifyContent: "center" }}
      >
        React application with over 3000+ entries using React, Redux, Material
        UI & React Data Table:)
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "row", flexGrow: 1 }}>
        <Grid sx={{ backgroundColor: "" }} md={3} item={true}>
          <Box sx={{ margin: 1, backgroundColor: "" }}>
            <ButtonGroup
              orientation="vertical"
              aria-label="vertical contained button group"
              variant="text"
              fullWidth
            >
              <Link to="/">
                <Button>All Banks</Button>
              </Link>
              <Link to="/favourites">
                <Button>Your saved and favourite banks</Button>
              </Link>
            </ButtonGroup>
          </Box>
        </Grid>
        <Grid sx={{ backgroundColor: "" }} md={9} item={true}>
          <Box
            sx={{
              backgroundColor: "",
              height: 100,
              display: "flex",
              flexDirection: "row",
              borderBottom: 1,
            }}
          >
            <Grid
              variant="h4"
              md={6}
              p={2}
              sx={{
                backgroundColor: "",
                display: "flex",
                justifyContent: "start",
                alignItems: "center",
              }}
            >
              {/* Selected Bank/Category: {BranchName}.{search}
              <FavoriteBorderIcon /> */}
            </Grid>
            {/* SEARCH GRID */}
            <Grid
              variant="h4"
              md={6}
              p={2}
              sx={{
                backgroundColor: "",
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box sx={{ padding: 1 }}>
                <FormControl sx={{ width: 160 }}>
                  <InputLabel id="demo-simple-select-label">
                    Select Bank
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={inputValue1}
                    label="Age"
                    onChange={handleBranchName2}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="STANDARD CHARTERED BANK">
                      STANDARD CHARTERED BANK
                    </MenuItem>
                    <MenuItem value="AHMEDABAD MERCANTILE COOPERATIVE BANK">
                      AHMEDABAD MERCANTILE COOPERATIVE BANK
                    </MenuItem>
                    <MenuItem value="ALLAHABAD BANK">ALLAHABAD BANK</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ padding: 1 }}>
                <FormControl sx={{ width: 160 }}>
                  <InputLabel id="demo-simple-select-label">
                    Select Branches
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={inputValue}
                    label="Age"
                    onChange={handleBranchName}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value="AIROLA">AIROLA</MenuItem>
                    <MenuItem value="ANDHERI">ANDHERI</MenuItem>
                    <MenuItem value="BANDRA">BANDRA</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box sx={{ padding: 1 }}>
                <FormControl variant="standard">
                  <InputLabel htmlFor="input-with-icon-adornment">
                    Search Banks
                  </InputLabel>
                  <Input
                    id="input-with-icon-adornment"
                    onChange={handleSearch}
                    startAdornment={
                      <InputAdornment position="start">
                        <SearchIcon />
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </Box>
            </Grid>
          </Box>

          {/* TABLE GRID */}
          <Box sx={{ backgroundColor: "", height: 450, borderBottom: 1 }}>
            <Routes>
              {/* ALL BANKS ROUTE */}
              <Route
                path="/"
                element={
                  <Allbanks
                    title="All Banks List"
                    columns={columns}
                    data={filteredData}
                  />
                }
              />
              {/* ALL FAVOURITE BANKS ROUTE */}
              <Route
                path="/favourites"
                element={
                  <Favouritebanks
                    title="All Favourite Banks List"
                    // columns={columns2}
                    // data={filteredData}
                  />
                }
              />
            </Routes>
          </Box>
        </Grid>
      </Box>
    </>
  );
}
