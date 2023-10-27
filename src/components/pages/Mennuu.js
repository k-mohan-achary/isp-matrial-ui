import React from 'react';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import {Menu,MenuItem,Button} from '@material-ui/core';  


const Mennuu = () => {
    const [anchor,setAnchor] = React.useState(null);
    const openMenu=(event)=>{
        setAnchor(event.currentTarget)
    }
    const closeMenu=(event)=>{
        setAnchor(null)
    }
  return (
    <>
      <div>
        <h1>React Router</h1>
        <div>
            <Button onClick={openMenu}>Menus</Button>
            <Menu 
             open={anchor}
             onClose={closeMenu} 

            >
              <MenuItem onClick={closeMenu}><Link to='/'>Home</Link></MenuItem> 
              <MenuItem onClick={closeMenu}> <Link to='/about'>About</Link> </MenuItem> 

            </Menu>
        </div>



        <div style={{Padding:'10'}}>
          <Router> 
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/" element={<Homee />} />
            </Routes>
          </Router>
        </div>
      </div>
    </>
  )
}

export default Mennuu;

function Homee() {
  return (
    <h1>Home Page</h1>
  )
}

function About() {
  return (
    <h1>About Page</h1>
  )
}
