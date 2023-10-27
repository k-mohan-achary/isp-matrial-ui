import React, {useState} from 'react';
import {ButtonBase, Checkbox, MenuItem, Radio, Select, Switch, TextField, Box, Container, Grid, Hidden} from '@material-ui/core';  
const Ggrid = () => {
  return (
    <>
    <div>

     <div>
       <Grid container lg={12} spacing={2}>
         <Grid item lg={3} sm={6} xs={12} > <h2 style={{border:'1px solid red'}}>Hello 1</h2></Grid>
         <Grid item lg={3} sm={6} xs={12} > <h2 style={{border:'1px solid red'}}>Hello 2</h2></Grid>
         <Hidden only={['sm', 'md']} > <h2 style={{border:'1px solid red', flex:'1'}}>Hello 3</h2></Hidden>
         <Grid item lg={3} sm={6} xs={12} > <h2 style={{border:'1px solid red'}}>Hello 4</h2></Grid>
       </Grid>
     </div>
        
    </div> 
    </> 
  )
}

export default Ggrid;