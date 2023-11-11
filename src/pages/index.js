import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import MenuIcon from '@mui/icons-material/Menu';
import { useRouter } from 'next/router';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MainPage from '../../components/Home/MainPage';
import Footer from './../../components/footer'
const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact', 'Login'];

function DrawerAppBar(props) {
  const router = useRouter();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ backgroundColor: 'black', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
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
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <List>
          {navItems.map((item) => (
            <ListItem
              key={item}
              button
              onClick={() => {
                if (item === 'Login') {
                  router.push('/auth/signin');
                } else {
                  router.push(`/${item.toLowerCase()}`);
                }
                handleDrawerToggle();
              }}
            >
              <ListItemText primary={item} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div style={{ marginTop: "80px", flex: 1 }}>
        <MainPage />
      </div>
      <section>
        <div className='step'>
         <div className='step_heading'> අතිනත් Step</div>
         <div className='card'>
          <div className='cardtemp '>
            <div className='center flex'>
            <div className='oneinside'>1</div>
            <div  className='secondside'>2</div>
            </div>
           
          </div>
          <div className='cardtemp '>
            <div className='center flex'>
            <div className='oneinside'>1</div>
            <div  className='secondside'>2</div>
            </div>
           
          </div>
          <div className='cardtemp '>
            <div className='center flex'>
            <div className='oneinside'>1</div>
            <div  className='secondside'>2</div>
            </div>
           
          </div>
          <div className='cardtemp '>
            <div className='center flex'>
            <div className='oneinside'>1</div>
            <div  className='secondside'>2</div>
            </div>
           
          </div>
          <div className='cardtemp '>
            <div className='center flex'>
            <div className='oneinside'>1</div>
            <div  className='secondside'>2</div>
            </div>
           
          </div>
          <div className='cardtemp '>
            <div className='center flex'>
            <div className='oneinside'>1</div>
            <div  className='secondside'>2</div>
            </div>
           
          </div>
      
          
         </div>
        </div>
      </section>
      <section>
      <div className='contact-container'>
      <div className='contact_topic'>අපව සම්බන්ධ කරගන්න</div>
      <div></div>
      </div>
      </section>
     
     
        <Footer/>
       
     
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
