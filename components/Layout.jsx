import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import Container from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import AddHomeIcon from "@mui/icons-material/AddHome";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import { useRouter } from "next/router";
import Newsidebarandhome from "../components/newsidebarandhome";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import Menu from "@mui/material/Menu";
import { useMediaQuery } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import YourPost from "./Your-post/YourPost";
import Footer from './footer'

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact", "Login", "MyAccount"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,

    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Layout = ({ children }) => {
  const router = useRouter();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [menuOpen, setMenuOpen] = React.useState(false);

  const dialogStyle = {
    width: "80%",
    height: "80%", // Default width for larger screens
    maxWidth: "none", // Remove the max-width constraint
  };
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleLogout = () => {
    // Clear local storage data here
    localStorage.clear();

    // Redirect to the home page
    router.push("/");
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const getIconForItem = (item) => {
    switch (item) {
      case "Home":
        return <AddHomeIcon />;
      case "About":
        return <FolderSharedIcon />;
      case "Contact":
        return <AddIcCallIcon />;
      case "Login":
        return <FolderSharedIcon />;
      case "MyAccount":
        return <FolderSharedIcon />;

      default:
        return null;
    }
  };

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="right" ref={ref} {...props} />;
  });
  const handleOpen = () => {
    setMenuOpen(true);
  };

  const handleClose = () => {
    setMenuOpen(false);
  };

  const OpenMenu = () => {
    handleOpen();
    console.log("open");
  };

  // Function to close the menu
  const CloseMenu = () => {
    handleOpen();
  };

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              onClick={OpenMenu}
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div"></Typography>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{ p: 0, left: "75%", position: "absolute", top: 10 }}
                >
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
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
                      } else {
                        handleCloseUserMenu();
                      }
                    }}
                  >
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </AppBar>

        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {navItems.map((item) => (
              <ListItem
                key={item}
                button
                onClick={() => {
                  if (item === "Login") {
                    router.push("/auth/signin");
                  } else {
                    router.push(`/${item.toLowerCase()}`);
                  }
                  handleDrawerToggle();
                }}
              >
                <ListItemIcon>{getIconForItem(item)}</ListItemIcon>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>

        <Main open={open}>{children}</Main>
        
      </Box>
      <div ><Footer/></div>
      <Dialog
        open={menuOpen}
        onClose={CloseMenu}
        disableScrollLock
        PaperProps={{ style: dialogStyle }}
        className="profile_InfoPopup"
        TransitionComponent={Slide} // Use the Slide transition
        transitionDuration={600} // Adjust the duration as needed
       // Slide from right
      >
        <div className="profile_InfoPopup_one">
          <div className="profile_InfoPopup_five">
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </div>
          <div className="hedding_menu">MENU</div>
          <div>
            <List>
              {navItems.map((item) => (
                <ListItem
                  key={item}
                  button
                  onClick={() => {
                    if (item === "Login") {
                      router.push("/auth/signin");
                    } else {
                      router.push(`/${item.toLowerCase()}`);
                    }
                    handleDrawerToggle();
                  }}
                >
                  <ListItemIcon>{getIconForItem(item)}</ListItemIcon>
                  <ListItemText primary={item} />
                </ListItem>
              ))}
            </List>
          </div>
          <div className="profile_InfoPopup_four">
            <div className="profile_InfoPopup_two">1</div>
            <div className="profile_InfoPopup_three">2</div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Layout;
