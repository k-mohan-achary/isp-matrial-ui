import React from 'react';
import {Container,  Hidden} from '@material-ui/core';  
import { Box, Button, Grid, Typography } from '@mui/material';
import cake from '../assets/cake.png';



const HeroSection = () => {
  return (
   <>
    <div>
        <Grid container direction="row" alignItems="center"> 
            <Grid item xs={12} sm={6} md={6} order={{xs:2,sm:1}}> 
                <Typography variant='h3' color='inherit'>
                    A Bliss in Every Byte 
                </Typography> 
                <Typography variant='h5' color='inherit'>
                    we Offer Tasty Cakes
                </Typography> 
                <Button variant='contained' size='large' sx={{borderRadius:5}}>
                    Call Us   
                </Button>
            </Grid>

            <Grid item xs={12} sm={6} md={6} justifyContent="center"  order={{xs:1,sm:2}}> 
                 <Box component="img" src={cake} />
            </Grid> 
        </Grid>
    </div>
   </>
  )
}

export default HeroSection