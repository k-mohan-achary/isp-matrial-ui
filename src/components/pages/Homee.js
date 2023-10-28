import React, {useState}from 'react';
import Button from '@mui/material/Button';
import { Delete, Favorite, FavoriteBorder } from '@mui/icons-material';
import { BubtonGroup } from '@mui/material'; 
import {ButtonBase, Checkbox, MenuItem, Radio, Select, Switch, TextField, Box, Container, Grid} from '@material-ui/core'; 
import Ggrid from './Ggrid';
import Taabb from './Taabb';


const Homee = () => {
    // const [color,setColor] = useState("primary");
    // const [disableBtn,setDisableBtn] = useState(false);
    const [name, setName] = useState([]);  
    const [gender,setGender] = useState("female");
    const [cource,SetCource] = React.useState(2)

    function cusMe(){
        // setDisableBtn(true);
        // setColor("secondary");
        // alert("Button Was Clicked by me"); 
    }
    function getValue(e){   
        let data = name;
        data.push(e.target.value);
        console.log(data); 
    }

    const testFunction=(e)=>{
        console.log(e.target.value);
        setGender(e.target.value);
    }
    const updateValue=(e,val)=>{
      console.log(e.target.value);
      SetCource(e.target.value);

    }
    const getData=(e)=>{
      console.log(e.target.value)
    }
    const getVal=(e,val)=>{
      console.log(val);
    }

    return (
    <>
        <div>
          <h1>Material Ui</h1> 
          {/* <Button variant="outlined" color={color}  disabled={disableBtn} size='medium' 
          endIcon={<Delete/>}
          onClick={()=>{cusMe()} }> Hello world </Button>   */}

          {/* <ButtonGroup variant='outlined' orientation='vertical'>
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>  */} 

          {/* checkbox */}
          {/* <Checkbox color='primary' value="anil"  onChange={(e)=>{getValue(e)}}/>
          <Checkbox color='primary' value="sam"   onChange={(e)=>{getValue(e)}}/>
          <Checkbox color='primary' value="sidhu" onChange={(e)=>{getValue(e)}}/>
          <Checkbox color='primary' value="Peter" indeterminate onChange={(e)=>{getValue(e)}}/>


          <Checkbox color='primary' 
          value="Peter"  
          icon={<FavoriteBorder/>} 
          checkedIcon={<Favorite/>}
          onChange={(e)=>{getValue(e)}}/> */}


          {/* radio button */}
          <div> 
            <Radio value='male' 
              onChange={testFunction}
              checked={gender==="male"}
            /> 
            <span>Male</span> 
          </div>
          <div> 
            <Radio value='female' 
              onChange={testFunction}
              checked={gender==="female"}
            /> 
            <span>Female</span> 
          </div>

        {/* select box test */}
          <div>
            <Select value={cource} displayEmpty onChange={updateValue}> 
              <MenuItem value=''>Select Cource</MenuItem>
              <MenuItem value={1}>Node</MenuItem> 
              <MenuItem value={2}>PHP</MenuItem>
              <MenuItem value={3}>Js</MenuItem>
              <MenuItem value={4}>React</MenuItem> 
              <MenuItem value={5}>Java</MenuItem> 
            </Select>
          </div> 
          <br/><br/><br/> 
          {/* text box */}
          <div >
            <TextField 
             label="Enter Name"
             color='secondary'
             variant='outlined'
            //  type='number'
             onChange={getData}
            />
          </div>

          <br/><br/><br/> 
          {/* switch */}
          <div>
            <h3>Switch</h3>
            <Switch color='primary'
             onChange={getVal} 
            /> 
          </div>

          <br/><br/><br/> 
          {/* box */}
          <div>
            <h3>Layout | Box</h3>  
            <Box>
             <Button componennt='span' clone style={{color:'red'}}> Hello World </Button>
            </Box> 
          </div>

          <br/><br/><br/>
          <h3>container</h3>
          {/* container */}
          <div style={{textAlign:'left'}}>
            
            <Container style={{border:'1px solid red '}} maxWidth='md'>
             <h3>container</h3> 
            </Container>
          </div>

          <br/><br/><br/>
          {/* grid */} 
          <h3>Grid</h3> 
          <div style={{  }}>  
          <Grid container item lg={12} spacing={2} > 
            <Grid item lg={6} md={6} sm={12} xs={12}> <h2 style={{border:'1px solid blue'}}>hello</h2> </Grid> 
            <Grid item lg={6} md={6} sm={12} xs={12}> <h2 style={{border:'1px solid blue'}}>hello 2</h2> </Grid> 
            {/* <Grid item lg={12} md={6}> <h2>hello</h2> </Grid>  */}
          </Grid> 
          </div>

          <br/><br/><br/>
          {/* grid */} 
          <h3> Hidden | Grid</h3> 
          <div style={{  }}>  
          <Ggrid/> 
          </div>

          <br/><br/><br/>
          {/* grid */} 
          <h3> Tabs | Material UI</h3> 
          <div style={{  }}>   
           <Taabb/>
          </div>


          
          

        </div> 
    </>
  )
}

export default Homee; 
