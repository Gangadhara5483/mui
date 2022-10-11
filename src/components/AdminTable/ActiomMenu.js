import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import { Box, Divider } from "@mui/material";
import { Stack } from "@mui/system";
export default function ActionMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        ...
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
        <MenuItem onClick={handleClose}>
          <Box>
            <Stack direction="row" spacing={8}>
              <Box>View</Box>
              <Box>
                <KeyboardArrowRightIcon />
              </Box>
            </Stack>
          </Box>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <Stack direction="row" spacing={5}>
            <Box>Remove</Box>
            <Box>
              <DeleteForeverOutlinedIcon />
            </Box>
          </Stack>
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <Stack direction="row" spacing={5}>
            <Box>Delegate</Box>
            <Box>
              <CoPresentIcon />
            </Box>
          </Stack>
        </MenuItem>
      </Menu>
    </div>
  );
}
