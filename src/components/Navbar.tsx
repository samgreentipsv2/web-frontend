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
import Avatar from '../assets/Avatar.svg';
import '../styles/index.scss';
import { Outlet, Link, useLoaderData, useNavigate, redirect } from 'react-router-dom';
import {useAuthUser, useIsAuthenticated, useSignOut} from 'react-auth-kit';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Facebook from '../assets/Facebook.svg';
import Telegram from '../assets/Telegram.svg';
import Whatsapp from '../assets/Whatsapp.svg';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import {  EmojiEmotions, Stream, RoomPreferences } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';
import FeedIcon from '@mui/icons-material/Feed';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';






const drawerWidth = 240;

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

      
useEffect(() => {
if (isAuthenticated()){
   
   
    axios.get(`http://16.16.166.53/api/user/${email}`,  {
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
    <div>
    
      <Toolbar />
      { isAuthenticated()?
      <span className='avatarm'><img src={Avatar}></img> <p>{firstName}</p></span>: <p></p>}
      <Divider />
      <nav className='navhov' aria-label="main navbar links">
        <List >
          <ListItem  disablePadding>
          
              <Link className='navli' to="/"><ListItemText primary="Home" /></Link>
            
          </ListItem>
          <ListItem  disablePadding>
          
            <Link className='navli' to="free-predictions"><ListItemText primary="Free Predictions" /></Link>
            
          </ListItem>
          <ListItem  disablePadding>
          
            <Link className='navli' to="vip"> <ListItemText primary="VIP Ticket"/></Link>
            
          </ListItem>
  


          <ListItem  disablePadding>
          
            <Link className='navli' to="football-news">  <ListItemText primary="Football News" /></Link>
            
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
        
            <Link className='navli' to="pricing"> <ListItemText primary="Pricing" /></Link>
            
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
      </nav>
    </div>
  </>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
    <Box   sx={{  display: 'flex' }}>
    
      <AppBar
        position="fixed"
        sx={{backgroundColor:"whitesmoke",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          
        }}
      >
        <Toolbar className='headerbar'>
         <a  href='/'><img className='errlogo headerlog' src={Logo}></img></a>
           <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: -16, display: { sm: 'none' } }}
          >
            <MenuIcon sx={{color:'black', fontSize:'28px' }} />
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
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />

        <div><Outlet/></div>

  <div className='footer'>
      <span className='footertxt'>
      <span><p>About Us</p><p>Contact Us</p></span>
      <span><p>Privacy Policy</p><p>Terms Of Use</p></span>
      <span><p>Predictions</p><p>Today's Predictions</p></span>
      <span><p>Free Predictions</p><p>Betting Tips</p></span>
      </span>
      <span className='social-icons'>
        <a target='_blank' href='https://m.facebook.com/samgreentip'><img src={Facebook}/></a>
       <a target='_blank' href='https://t.me/+Oni7J8ZYh3g1MzFk'><img src={Telegram}/></a>
       <a target='_blank' href='https://wa.me/2347049976525'><img src={Whatsapp}/></a>
      </span>
      <span className='copyright'><p>Copyright 2023 | SamGreen Tips</p></span>
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
  <BottomNavigationAction sx={{display: 'flex',
                              flexDirection: 'row', 
}} onClick={() => navigate('/football-news')}label="News" icon={<FeedIcon sx={{height: '31px', width: '30px'}} htmlColor='#035A04'  />} />
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


