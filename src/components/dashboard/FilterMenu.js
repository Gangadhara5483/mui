import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
export default function FilterMenu({ handleMenuItem }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // const handleMenuItem = (e)=> {
  //   console.log(e.target);
  // }
  return (
    <div>
      <Button
        sx={{ color: "black" }}
        variant="outlined"
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        startIcon={<FilterAltOutlinedIcon />}
        onClick={handleClick}
      >
        Filter
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => {
            handleMenuItem("All");
            handleClose();
          }}
        >
          All
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleMenuItem("Name");
            handleClose();
          }}
        >
          Name
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleMenuItem("CreatedBy");
            handleClose();
          }}
        >
          CreatedBy
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleMenuItem("CreatedOn");
            handleClose();
          }}
        >
          CreatedOn
        </MenuItem>
      </Menu>
    </div>
  );
}
