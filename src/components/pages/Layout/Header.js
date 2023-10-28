import React,{useState} from 'react';
import '../../stylesheet/headerStyle.css';
import { AppBar, Box, Divider, Drawer, Icon, IconButton, Toolbar, Typography } from '@mui/material';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';



const Header = () => {

    const [mobileOpen,setMobileOpen] = useState(false);

    const handleDrawerToggle =()=>{
        setMobileOpen(!mobileOpen)
    }
    
    const drawer =  (
        <Box onClick={handleDrawerToggle} sx={{textAlign:'center'}}>
            <Typography color={"goldenrod"} variant='h6' component='div' sx={{flexGrow:1,my:2}}>
                <FastfoodIcon/> 
                My Restaurant 
            </Typography>
            <Divider/>  
            {/* <Box sx={{ display: { xs: "none", sm: "block" } }}> */}
                <ul className='mobile-navigation'>
                <li><Link to={'/'}> Home</Link></li>
                <li><Link to={'/about'}> About</Link></li>
                <li><Link to={'/menu'}> Menu</Link></li>
                <li><Link to={'/contact'}> Contact</Link></li> 
                </ul>
            {/* </Box>  */}
        </Box>
    )



  return (
    <>
    <div>
        <div>
            <Box>
             <AppBar position='static' component={'nav'} sx={{bgcolor:'black'}}>
                <Toolbar> 
                    <IconButton color='inherit' area-label='open drawer' edge='start' sx={{mr:2, display:{sm:"none"}}} onClick={handleDrawerToggle}> 
                        <MenuIcon/> 
                    </IconButton>  
                    <Typography color={"goldenrod"} variant='h6' component='div' sx={{flexGrow:1}}>
                        <FastfoodIcon/> 
                        My Restaurant 
                    </Typography>
                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                      <ul className='navigation-menu'>
                        <li><Link to={'/'}> Home</Link></li>
                        <li><Link to={'/about'}> About</Link></li>
                        <li><Link to={'/menu'}> Menu</Link></li>
                        <li><Link to={'/contact'}> Contact</Link></li> 
                      </ul>
                    </Box>
                </Toolbar>
             </AppBar>
             <Box component={'nav'} >
                <Drawer variant='temporary' open={mobileOpen} onClose={handleDrawerToggle}
                 sx={{
                    display: { xs: "block", sm: "none" },
                    "& .MuiDrawer-paper": {
                      boxSizing: "border-box",
                      width: "240px",
                    },
                  }}
                >
                    {drawer} 
                </Drawer> 
             </Box>
             {/* <Box sx={{margin:'18px'}}> </Box> */}

            </Box>
        </div>
    </div>    
    </>
  )
}

export default Header;