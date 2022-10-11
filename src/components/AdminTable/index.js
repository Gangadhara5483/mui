import * as React from "react";
import DataTable from "./Table";
import Button from "@mui/material/Button";
import "./AdminTable.css";
import {
  Box,
  Divider,
  FormControl,
  IconButton,
  InputBase,
  MenuItem,
  Paper,
  Select,
  Typography,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";

import AppBar from "@mui/material/AppBar";
import { styled, alpha } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Pdf from "react-to-pdf";
import FilterMenu from "../dashboard/FilterMenu";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "200px !important",
  border: "1px solid #80808052",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function AdminTable() {
  const [searchValue, setSearchValue] = React.useState("");
  const [isExported, setIsExported] = React.useState(false);

  const [filterData, setFilterData] = React.useState("Name");
  const [filt, setFilt] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const pdfRef = React.useRef();
  const [menuItem, setMenuItem] = React.useState()


  const handleChange = (event) => {
    setFilterData(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const hadleChange = (e) => {
    setSearchValue(e.target.value);
  };
  const exportPDF = () => {
    setIsExported(true);
  };

  return (
    <div style={{ width: "100%" }}>
      <Box>
        <AppBar
          position="static"
          sx={{ height: 84, backgroundColor: "#0660f6" }}
        >
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Admin
            </Typography>

            <Box>
              <Button
                variant="contained"
                style={{ border: "1px solid yellow", marginRight: "16px" }}
              >
                Manage Roles
              </Button>
              <Button
                variant="contained"
                style={{
                  background: " gold",
                  color: "black",
                  marginRight: "37px",
                }}
              >
                +Add Admin
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>

      <div>
        <Box
          sx={{
            position: "absolute",
            top: 122,
            left: 210,
            backgroundColor: "white",
            border: "1px solid #80808021",
            width: "100%",
            maxWidth: "calc(100vw - 292px)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              padding: "0 20px",
              alignItems: "center",
            }}
          >
            <Box>
              <h3>List of Admin</h3>
            </Box>
            <Box
              sx={{
                marginLeft: "auto",
                display: "flex",
              }}
            >
              <Box ml={0} mt={2}>
                <Search>
                  <SearchIconWrapper>
                    <SearchIcon />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ "aria-label": "search" }}
                    onChange={(e) => hadleChange(e)}
                  />
                </Search>
              </Box>
              <Box ml={3} mt={2}>
                <FilterMenu handleMenuItem={(item)=> setMenuItem(item)} />
                <FormControl sx={{ m: 1, minWidth: 120 }}></FormControl>
              </Box>
              <Box ml={3} mt={2}>
                {" "}
                <Pdf targetRef={pdfRef} filename="tavle-example.pdf">
                  {({ toPdf }) => (
                    <Button
                      sx={{ color: "black" }}
                      variant="outlined"
                      startIcon={<DescriptionOutlinedIcon />}
                      endIcon={<KeyboardArrowDownRoundedIcon />}
                      onClick={toPdf}
                    >
                      Export
                    </Button>
                  )}
                </Pdf>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              width: "100%",
              height: "100vh",
            }}
            ref={pdfRef}
          >
            <DataTable
              isPdfExported={isExported}
              searchValue={searchValue}
              filterByColumn={menuItem}
              filteredValue={filt ? filt : []}
              sx={{
                width: "92%",
                height: "100vh",
              }}
            />
          </Box>
          <Box></Box>
        </Box>
      </div>
    </div>
  );
}
