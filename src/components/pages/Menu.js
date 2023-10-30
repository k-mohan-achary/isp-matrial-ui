import React from 'react';
import { MenuList } from '../data/data'; 

import Layout from './Layout/Layout';
import {Box,Typography,Card,CardActionArea,CardMedia,CardContent} from '@mui/material'; 


const Menu = () => { 
  return (
    <div> 
        <Layout> 
         <Box sx={{display:'flex', flexWrap:'wrap', justifyContent:'center'}}>  
           {
            MenuList.map(menu=>(
              <Card sx={{maxWidth:'390px',display:'flex',m:2 }}>
                <CardActionArea>
                  <CardMedia sx={{minHeight:"400px"}} component={"img"} src={menu.image} alt={menu.name}/>
                  <CardContent>
                    <Typography variant='h5' gutterBottom component={'div'}>
                      {menu.name} 
                    </Typography> 
                    <Typography variant='body-2'> 
                      {menu.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            )) 
           }
         </Box>
        </Layout> 
    </div> 
  )
}

export default Menu