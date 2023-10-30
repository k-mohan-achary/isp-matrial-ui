import React from 'react';
import Layout from './Layout/Layout';
import { Box,Typography,Table,TableContainer,Paper,TableHead,TableRow,TableCell,TableBody} from '@mui/material'; 

import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';


const Contact = () => {
  return (
    <div> 
      <div>
      <Layout >
         <Box className="contact" sx={{my:2}}>
          <Typography variant='h4'>
            Contact My Restaurant 
          </Typography>
          <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). </p>

         </Box> 



         <Box sx={{m:4, width:"600px",
          "@media (max-width:600px)":{
            width:"300px",
            m:1
          }
        
         }} className="contact-sec">
           <TableContainer component={Paper}>
            <Table area-label="contact table">
              <TableHead>
                <TableRow>
                  <TableCell sx={{bgcolor:'black',color:'white',}} align='center' >
                    Contact Detail 
                  </TableCell> 
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <SupportAgentIcon sx={{color:'goldenrod'}}/> ( +1800-000-000 )  
                  </TableCell> 
                </TableRow>   
                <TableRow>   
                  <TableCell>
                    <EmailIcon sx={{color:'skyblue'}}/> ( example@gmail.com )  
                  </TableCell> 
                </TableRow> 
                <TableRow> 
                  <TableCell>
                    <CallIcon sx={{color:'red'}}/> ( +91 90000 90000 )  
                  </TableCell> 
                </TableRow> 
              </TableBody>
               

            </Table> 
           </TableContainer>

         </Box>

        </Layout> 

      </div>
        
    </div> 
  )
}

export default Contact