import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import DescriptionIcon from "@mui/icons-material/Description";
import GridViewIcon from "@mui/icons-material/GridView";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import RequestQuoteRoundedIcon from "@mui/icons-material/RequestQuoteRounded";
import SourceRoundedIcon from "@mui/icons-material/SourceRounded";
import HeadsetMicRoundedIcon from "@mui/icons-material/HeadsetMicRounded";
import ManageAccountsRoundedIcon from "@mui/icons-material/ManageAccountsRounded";
import React from "react";
import { grey } from "@mui/material/colors";
import { Link, NavLink, Outlet } from "react-router-dom";

const _grey = grey[200];

const DashBoard = () => {
  const getIcon = (name) => {
    switch (name) {
      case "Menu":
        return <MenuIcon />;
      case "DashBoard":
        return <GridViewIcon />;
      case "Shareholder":
        return <PeopleOutlineIcon />;
      case "Admin":
        return <PersonOutlineRoundedIcon />;
      case "Companies":
        return <BusinessRoundedIcon />;
      case "Request":
        return <RequestQuoteRoundedIcon />;
      case "Power of Attorney":
        return <SourceRoundedIcon />;
      case "Document":
        return <DescriptionIcon />;
      case "Support":
        return <HeadsetMicRoundedIcon />;
      case "Settings":
        return <ManageAccountsRoundedIcon />;
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{
          width: 180,
          height: 600,
          backgroundColor: "#ece9e924",
        }}
      >
        <Stack sx={{ height: "100vh" }}>
          {[
            "Menu",
            "DashBoard",
            "Shareholder",
            "Admin",
            "Companies",
            "Request",
            "Power of Attorney",
            "Document",
            "Support",
            "Settings",
          ].map((text, index) => (
            <NavLink
              activeClassName="is-active"
              to={`${text}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Stack
                orientation="vertical"
                variant="scrollable"
                key={text}
                disablePadding
                sx={{ borderRight: 1, borderColor: "divider" }}
              >
                <ListItemButton>
                  <ListItemIcon>{getIcon(text)}</ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </Stack>
              <Divider />
            </NavLink>
          ))}
        </Stack>
      </Stack>
      <Box>
        <Outlet />
      </Box>
    </Box>
  );
};

export default DashBoard;
