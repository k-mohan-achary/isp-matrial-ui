import React from 'react';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';



const Navbar = () => {
  return (
    <>
     <div>
        <div>
          <AppBar position='static'> 
            <Toolbar>
              <Typography variant='h6' flexGrow={1}>
                Blissful Type 
              </Typography>
              <Button variant='text' color='inherit' startIcon={<LoginIcon/>}>
                Login 
              </Button> 
              <Button variant='text' color='inherit' endIcon={<LogoutIcon/>}> 
                Logout
              </Button> 
            </Toolbar>
             
          </AppBar>
        </div>
     </div>
    </>
  )
}

export default Navbar;