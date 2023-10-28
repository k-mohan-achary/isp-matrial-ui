import React from 'react';
import { Typography,Card,CardMedia,CardContent } from '@mui/material';


const Cake = () => {
  return (
    <>
    <div>
        <div>
            <Typography variant='h4' mt={6} mb={6}>
                Cakes -

            </Typography>
            <Card sx={{ maxWidth: 345 }}>
            
                <CardMedia
                component="img"
                height="200"
                image=" https://v4.mui.com/static/logo.png"
                alt="green iguana"
                />
                <CardContent> 
                <Typography  variant="h5" >
                    Lizard
                </Typography> 
                </CardContent>  
            </Card>
        </div>
        
    </div>
    </>
  )
}

export default Cake