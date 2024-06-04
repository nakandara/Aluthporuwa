import Layout from "../../components/Layout";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { useToken } from "../../src/context/TokenContext";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter } from "next/router";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Tooltip from "@mui/material/Tooltip";
import Footer from "../../components/footer";
import YourPost from "../Your-post/YourPost";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact", "Post", "MyAccount", "MyAdd"];
const settings = ["Profile", "Account", "Dashboard", "Logout", "AdminPostReview"];

const LayoutSecond = ({ children }) => {
  const router = useRouter();
  const { user } = useToken();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);

  console.log(user, '333333333333');

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const container = typeof window !== "undefined" ? window.document.body : undefined;

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleLogout = () => {
    // Clear local storage data here
    localStorage.clear();

    // Redirect to the home page
    router.push("/");
  };

  const loginAdminPostReview = () => {
    router.push("/postReview");
  };

  const handleClick = () => {
    router.push("/");
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            onClick={handleClick}
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              cursor: "pointer",
            }}
          >
            QuickAds Hub
          </Typography>

          <YourPost />

          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem
                key={setting}
                onClick={() => {
                  if (setting === "Logout") {
                    handleLogout(); // Call the logout function
                  } else if (setting === "AdminPostReview") {
                    loginAdminPostReview();
                  } else {
                    handleCloseUserMenu();
                  }
                }}
              >
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{ color: "#fff" }}
                onClick={() => {
                  router.push(`/${item.toLowerCase()}`);
                }}
              >
                {item}
              </Button>
            ))}
            {user ? (
              <Button
                sx={{ color: "#fff" }}
                onClick={handleLogout}
              >
                Logout
              </Button>
            ) : (
              <Button
                sx={{ color: "#fff" }}
                onClick={() => router.push("/auth/signin")}
              >
                Login
              </Button>
            )}
          </Box>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>

      <Drawer
        container={container}
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <List>
          <Typography
            variant="h6"
            component="div"
            onClick={handleClick}
            sx={{ m: 3, fontFamily: "sans-serif" }}
          >
            QuickAds Hub
          </Typography>
          {navItems.map((item) => (
            <ListItem
              key={item}
              button
              onClick={() => {
                router.push(`/${item.toLowerCase()}`);
                handleDrawerToggle();
              }}
            >
              <ListItemText primary={item} />
            </ListItem>
          ))}
          {user ? (
            <ListItem
              button
              onClick={() => {
                handleLogout();
                handleDrawerToggle();
              }}
            >
              <ListItemText primary="Logout" />
            </ListItem>
          ) : (
            <ListItem
              button
              onClick={() => {
                router.push("/auth/signin");
                handleDrawerToggle();
              }}
            >
              <ListItemText primary="Login" />
            </ListItem>
          )}
        </List>
      </Drawer>
      {children}
      <Footer />
    </div>
  );
};

export default LayoutSecond;
