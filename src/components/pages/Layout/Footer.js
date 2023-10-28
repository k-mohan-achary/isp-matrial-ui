import React from 'react'; 
import '../../stylesheet/footer.css';
import { Box, Typography } from '@mui/material';

import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <>
    <div>  
      <Box sx={{textAlign:'center',bgcolor:"#1a1a19", color:"#fff", p:3}}>
        <Box className="icon" sx={{my:3,}}>
            <FacebookIcon/>
            <InstagramIcon/> 
            <TwitterIcon/>
            <LinkedInIcon/> 
        </Box>
        <Typography variant='h5' className='foot'>
            All Right Reserved &copy; Techinfo
        </Typography>
      </Box>
    </div>
    </>
  )
}

export default Footer;