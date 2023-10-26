import React, {useState}from 'react';
import Button from '@mui/material/Button';
import { Delete, Favorite, FavoriteBorder } from '@mui/icons-material';
import { BubtonGroup } from '@mui/material'; 
import {Checkbox, Radio} from '@material-ui/core'; 


const Home = () => {
    // const [color,setColor] = useState("primary");
    // const [disableBtn,setDisableBtn] = useState(false);
    const [name, setName] = useState([]);  
    const [gender,setGender] = useState("female");

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
          

          
          

        </div> 
    </>
  )
}

export default Home; 
