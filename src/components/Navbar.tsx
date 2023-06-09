import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import EmailIcon from '@mui/icons-material/Email';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/Inbox';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Logo from '../assets/samglogo.svg';
import Avatar from '../assets/Avatar.png';
import '../styles/index.scss';
import { Outlet, Link, useLoaderData, useNavigate, redirect } from 'react-router-dom';
import {useAuthUser, useIsAuthenticated, useSignOut} from 'react-auth-kit';
import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import {  EmojiEmotions, Stream, RoomPreferences, Telegram } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import FeedIcon from '@mui/icons-material/Feed';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import type { Scrollbar as BaseScrollbar } from "smooth-scrollbar/scrollbar";
import {Scrollbar} from 'smooth-scrollbar-react';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { useSnapCarousel } from 'react-snap-carousel';
import Switch from "react-switch";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';






const drawerWidth = 180;

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

export default function Navbar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isAuthenticated = useIsAuthenticated();
  const auth = useAuthUser();
  const signOut = useSignOut();
  const navigate = useNavigate();

const [value, setValue] = React.useState(0);

const email = auth()?.email
const [firstName, setfirstName] = useState<string>("");


 const [theme, setTheme] = useState("light");

 const ThemeContext = createContext(null);


const toggleTheme = () => {
  setTheme((curr) => (curr === "light" ? "dark" : "light"));
};






      
useEffect(() => {
if (isAuthenticated()){
   
   
    axios.get(`${import.meta.env.VITE_SERVER_URL}api/user/${email}`,  {
      headers: { 'Content-Type': 'application/json'
  
              },
          withCredentials: true
  }
    ).then((res)=>{
      // console.log(res.data.user[0].first_name)
      setfirstName(res.data.user[0].first_name)
      // return (res.data.user)
    })
    
}}, [])
   
  
  



  

  

 
  

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <>
    <div id={theme}>
    
      <Toolbar  sx={{  marginTop: "-44px"}} />
      { isAuthenticated()?
      <span className='avatarm'><img src={Avatar}></img> <p>{firstName}</p></span>: <p></p>}

      <Divider />
      <nav className='navhov' aria-label="main navbar links" >
        <List >
          <ListItem  disablePadding>
          
              <Link className='navli' to="/"><ListItemText primary="Home" /></Link>
            
          </ListItem>
          <ListItem  disablePadding>
          
            <Link className='navli' to="free-predictions"><ListItemText primary="Free Predictions" /></Link>
            
          </ListItem>
          <ListItem  disablePadding>
          
            <Link className='navli' to="vip"> <ListItemText primary="View VIP Ticket"/></Link>
            
          </ListItem>
  


          <ListItem  disablePadding>
          
          <Link className='navli' to="about"> <ListItemText primary="About"/></Link>
          
        </ListItem>
          <ListItem  disablePadding>
          
          <Link className='navli' to="whytrustus"> <ListItemText primary="Why Trust Us?"/></Link>
          
        </ListItem>
          <ListItem  disablePadding>
          
            <Link className='navli' to="contact">  <ListItemText primary="Contact Us" /></Link>
            
          </ListItem>
          <ListItem  disablePadding>
        
            <Link className='navli' to="pricing"> <ListItemText primary="Join VIP" /></Link>
            
          </ListItem>
          {!isAuthenticated()?
          <><ListItem disablePadding sx={{ mr: -9, display: { sm: 'none' } }}>

                <Link className='navli' to="register"> <ListItemText primary="Register" /></Link>

              </ListItem><ListItem disablePadding sx={{ display: { sm: 'none' } }}>

                  <Link className='navli' to="login"> <ListItemText primary="Login" /></Link>

                </ListItem></>: <ListItem disablePadding sx={{ mr: -9 }}>

                  <button className="btn2" onClick={()=>{
                    signOut()
                    }} > <ListItemText primary="Sign Out" /></button>

                </ListItem>
}
        </List>

        
        {/* <span className='switch'>
        <Switch className='switch' uncheckedIcon={<LightModeIcon sx={{ color: "#C87711",height:'25px', width:'23px'}}/>} checkedIcon={<DarkModeIcon sx={{ color: "#035A04",height:'25px', width:'23px'}}/>} offColor='#035A04' onColor='#C87711' onChange={toggleTheme} checked ={theme === "dark"}></Switch>
        </span> */}
      </nav>
    </div>
  </>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
    <Box   sx={{  display: 'flex' }} id={theme}>
    
      <AppBar

      id={theme}
        position="absolute"
        sx={{backgroundColor:"whitesmoke",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          
        }}
      >
        <Toolbar className='headerbar' id={theme}>

          
          
         <a  href='/'><img className='errlogo headerlog' src={Logo}></img></a>

         
         
           <IconButton
           
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: -12, display: { sm: 'none' } }}
          >
            <MenuIcon className='iconButton'  sx={{color:'black', fontSize:'28px'}} />
          </IconButton>
          {  isAuthenticated() ? 
          <span className='avatar'><img src={Avatar}></img> <p>{firstName}</p></span>
          
          :


        <span className='regbtn'>
        <Link to="/register"><button className='btn2'>Sign Up</button></Link>
         <Link to="/login"><button className='btn3'>Log In</button></Link>
        </span>
        
        }


        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ color:"whitesmoke", width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="Navbar links"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
        id={theme}
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
      id={theme}
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />      

        <Outlet />
    
  
<div className='foot'>
  <div className='footer'>
      <span className='footertxt'>
      <span><p ><a href='/about'>About Us</a></p> <p><a href='/contact'>Contact Us</a></p></span>
      <span><p><a href='/privacy-policy'>Privacy Policy</a></p><p><a href='/termsofuse'>Terms Of Use</a></p></span>
      <span><p><a href='free-predictions'>Predictions</a></p><p>Today's Predictions</p></span>
      <span><p>Free Predictions</p><p><a href='faqs'>Betting Tips</a></p></span>
      </span>
      <span className='social-icons'>
        <a target='_blank' href='https://m.facebook.com/samgreentip'><FacebookIcon sx={{height: "44px", width: "44px", color: "white", margin: "18px"}}/></a>
       <a target='_blank' href='https://t.me/+Oni7J8ZYh3g1MzFk'><TelegramIcon sx={{height: "44px", width: "44px", color: "white", margin: "18px"}}/></a>
       <a target='_blank' href='https://wa.me/2347049976525'><WhatsAppIcon sx={{height: "44px", width: "44px", color: "white", margin: "18px"}}/></a>
      </span>
      <span className='copyright'><p>Copyright 2023 | SamGreen Tips</p></span>
  </div>
  </div>

  <div>
  <BottomNavigation
  value={value}
  onChange={(_event: any, newValue) => {
    setValue(newValue);
  }}
  sx={{
  marginBottom:'22px',
  borderRadius:'42px',
  marginRight: '-22px',
  paddingBottom: '20px',
  height:'63px',
  backgroundColor:"#C87711",
  position: 'fixed',
  bottom: '0',
  width: '90%',
  display:  { xs: "flex", sm: "flex", md: "none" }}}
>
  <BottomNavigationAction sx={{display: 'flex',
                              flexDirection: 'row', 
}} onClick={() => navigate('/')} label="Home"  icon={<HomeIcon sx={{ height: '31px', width: '30px'}} htmlColor='#035A04'/> }/>
  <BottomNavigationAction sx={{display: 'flex',
                              flexDirection: 'row', 
}} onClick={() => navigate('/free-predictions')} label="Tips"  icon={<TipsAndUpdatesIcon sx={{ height: '31px',width: '30px'}} htmlColor='#035A04'/> }/>
  <a target='_blank' href='https://punditville.com'> <BottomNavigationAction sx={{display: 'flex',
                              flexDirection: 'row', 
}} label="News" icon={<FeedIcon sx={{height: '31px', width: '30px'}} htmlColor='#035A04'  />} /></a>
  <BottomNavigationAction sx={{display: 'flex',
                              flexDirection: 'row', 
}} onClick={() => navigate('/vip')}label="VIP" icon={<AccountCircleIcon sx={{height: '31px', width: '30px'}} htmlColor='#035A04'  />} />

  </BottomNavigation>
  </div>

  
        
      </Box>
      
    </Box>
   
  </>
  );
}


