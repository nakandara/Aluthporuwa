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
import Image from 'next/image'; // Import Image from next/image if using Next.js

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact", "Post", "MyAccount", "MyAdd"];

const LayoutSecond = ({ children }) => {
  const router = useRouter();
  const { user, setUser } = useToken();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorElUser, setAnchorElUser] = useState(null);

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
    localStorage.clear();
    setUser(null);
    router.push("/");
  };

  const loginAdminPostReview = () => {
    router.push("/postReview");
  };

  const handleClick = () => {
    router.push("/");
  };

  const settings = ["Profile", "MyAccount"];
  if (user && user.email === "pramodnakandara@gmail.com") {
    settings.push("AdminPostReview");
  }

  console.log(user?.name,'rrrrrrrrrrrrrrrr');

  return (
    <div>
      <AppBar
        component="nav"
        sx={{
          backgroundColor: "#022c17", // Dark background color
          color: "#fff", // White text color
        }}
      >
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
          {/* Replace Typography with Image */}
          <Box
  component="div"
  onClick={handleClick}
  sx={{
    flexGrow: 1,
    display: { xs: "none", sm: "block" },
    cursor: "pointer",
   
    alignItems: 'center', // Vertically align images
    gap: 0.5 // Adjusts the gap between images
  }}
>
  <Image 
    src="/media/letter-q_7548487.png" 
    alt="QuickAds Hub"
    width={25} // Adjust width as necessary
    height={25} // Adjust height as necessary
  />
  <Image 
    src="/media/letter-u_9511521.png" 
    alt="QuickAds Hub"
    width={15} // Adjust width as necessary
    height={15} // Adjust height as necessary
  />
    <Image 
    src="/media/letter-i_9511556.png" 
    alt="QuickAds Hub"
    width={15} // Adjust width as necessary
    height={15} // Adjust height as necessary
  />
    <Image 
    src="/media/letter-c_9511541.png" 
    alt="QuickAds Hub"
    width={15} // Adjust width as necessary
    height={15} // Adjust height as necessary
  />
    <Image 
    src="/media/letter-k_9511489.png" 
    alt="QuickAds Hub"
    width={15} // Adjust width as necessary
    height={15} // Adjust height as necessary
  />
   <Image 
    src="/media/letter-a_9511496.png" 
    alt="QuickAds Hub"
    width={15} // Adjust width as necessary
    height={15} // Adjust height as necessary
  />
   <Image 
    src="/media/letter-d_9511555.png" 
    alt="QuickAds Hub"
    width={15} // Adjust width as necessary
    height={15} // Adjust height as necessary
  />
   <Image 
    src="/media/letter-s_9511527.png" 
    alt="QuickAds Hub"
    width={15} // Adjust width as necessary
    height={15} // Adjust height as necessary
  />
</Box>



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
                  } else if (setting === "MyAccount") {
                    router.push(`myaccount`);
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
            <Avatar alt={user?.name?.toUpperCase()} src="/static/images/avatar/2.jpg" />
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
            backgroundColor: { xs: "#333", sm: "white" }, // Dark background on mobile
            color: { xs: "#fff", sm: "inherit" }, // Light text on mobile
          },
        }}
      >
        <List>
          {/* Replace Typography with Image */}
          <Box
            component="div"
            onClick={handleClick}
            className="lightning-border"
            sx={{ m: 3, fontFamily: "sans-serif", cursor: 'pointer' }}
          >
            <Image 
    src="/media/letter-q_7548487.png" 
    alt="QuickAds Hub"
    width={25} // Adjust width as necessary
    height={25} // Adjust height as necessary
  />
  <Image 
    src="/media/letter-u_9511521.png" 
    alt="QuickAds Hub"
    width={15} // Adjust width as necessary
    height={15} // Adjust height as necessary
  />
    <Image 
    src="/media/letter-i_9511556.png" 
    alt="QuickAds Hub"
    width={15} // Adjust width as necessary
    height={15} // Adjust height as necessary
  />
    <Image 
    src="/media/letter-c_9511541.png" 
    alt="QuickAds Hub"
    width={15} // Adjust width as necessary
    height={15} // Adjust height as necessary
  />
    <Image 
    src="/media/letter-k_9511489.png" 
    alt="QuickAds Hub"
    width={15} // Adjust width as necessary
    height={15} // Adjust height as necessary
  />
   <Image 
    src="/media/letter-a_9511496.png" 
    alt="QuickAds Hub"
    width={15} // Adjust width as necessary
    height={15} // Adjust height as necessary
  />
   <Image 
    src="/media/letter-d_9511555.png" 
    alt="QuickAds Hub"
    width={15} // Adjust width as necessary
    height={15} // Adjust height as necessary
  />
   <Image 
    src="/media/letter-s_9511527.png" 
    alt="QuickAds Hub"
    width={15} // Adjust width as necessary
    height={15} // Adjust height as necessary
  />
          </Box>
          {navItems.map((item) => (
            <ListItem
              key={item}
              button
              onClick={() => {
                router.push(`/${item.toLowerCase()}`);
                handleDrawerToggle();
              }}
              sx={{ color: { xs: "#fff", sm: "inherit" } }} // Light text color on mobile
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
              sx={{ color: { xs: "#fff", sm: "inherit" } }} // Light text color on mobile
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
              sx={{ color: { xs: "#fff", sm: "inherit" } }} // Light text color on mobile
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
