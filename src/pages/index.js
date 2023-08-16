// import { useSession, signIn, signOut } from "next-auth/react";
// import { useRouter } from "next/router";
// import axios from "axios";
// import Usermap from "../../components/Home/Usermap";
// import LayOut from "../../components/Layout";
// import Sidebar from "../../components/Sidebar";
// import { useState } from "react";

// export default function Component() {
//   const [genderMale, setGenderMale] = useState({name:"male"});
//   const [loginD, setLoginD] = useState(true);
//   const { data: session } = useSession();
//   const router = useRouter();

//   if (loginD) {
//     return (
//       <>
//         <LayOut>gdgdgd</LayOut>
//       </>
//     );
//   }

//   const handleSignIn = async (e) => {
   
//    console.log(genderMale);
   
//     try {
//       console.log(process.env.BASE_URL);
//       const response = await axios.post(
//         "http://localhost:8080/api/createGender",
//         genderMale
//       );
//       console.log(response);
//     } catch (error) {}
//     router.push(`/auth/signin?callbackUrl=${router.asPath}`);
  
   
//   };

//   return (
//     <>
//       <div className="gender">
//         <div>Are you</div>
//         <br />
//         <button className="male" onClick={handleSignIn}>
//           Male
//         </button>{" "}
//         Or
//         <button className="female" onClick={handleSignIn}>
//           Female
//         </button>{" "}
//         ?
//       </div>
//     </>
//   );
// }



import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import { useRouter } from 'next/router'; // Import the useRouter hook

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact', 'Login'];

function DrawerAppBar(props) {
  const router = useRouter(); // Use the useRouter hook
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MUI
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{ color: '#fff' }}
                onClick={() => {
                  if (item === 'Login') {
                    router.push('/auth/signin');
                  } else {
                    router.push(`/${item.toLowerCase()}`);
                  }
                }}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      {/* ... */}
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
