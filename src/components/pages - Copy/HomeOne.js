import { Container, Typography } from '@mui/material';
import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import Cake from './Cake';


const HomeOne = () => {
  return (
    <>
    <div>
        <Navbar/>
        <Container>
          <HeroSection/> 
          <Cake/>
        </Container>

    </div>
    
    </>
  )
}

export default HomeOne;