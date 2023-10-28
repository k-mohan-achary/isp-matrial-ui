import React, {useState} from 'react';
import {Tabs, Tab, AppBar} from '@material-ui/core';  


const Taabb = () => {
    const [value,setvalue] = React.useState(0);
    const handleTabs=(e, val)=>{
        console.log(val);
        setvalue(val)
    }
    function TabPanel(props) {
        const {children, value, index} =props
        return (
            <div>
                {
                    value==index &&(
                        <h1>{children}</h1>
                    )
                }
            </div>
        )

    }
  return (
   <>
     <div>
        {/* <h2>Tabs | Material UI</h2> */}
        <div className='container'>
          <AppBar position="static">
            <Tabs value={value} onChange={handleTabs}>
             <Tab label="Item One" /> 
             <Tab label="Item Teo" /> 
             <Tab label="Item Three" />  

            </Tabs>
          </AppBar>

           <TabPanel value={value} index={0}>
              Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
              Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
              Item Three
            </TabPanel>

        </div> 
        
     </div>
   </>
  )
}

export default Taabb;
