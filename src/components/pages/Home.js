import React from 'react';
import Layout from './Layout/Layout';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import banner from '../assets/banner.jpeg'

const Home = () => {
  return (
   <>
    <div> 
        <Layout>
          <div className='home'>
            <div className='headerContainer'>
                <h1>Food Website</h1>
                <p>Best Food in India</p> 
                <Link to="./menu">
                 <Button>
                   Order Now
                 </Button> 
                </Link>
            </div>
          </div>
        </Layout> 
    </div> 
   </> 
  )
}

export default Home