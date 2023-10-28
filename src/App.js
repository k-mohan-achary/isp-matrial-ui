// import './App.css';
import './components/stylesheet/style.css'
import { BrowserRouter, Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Homee from './components/pages/Homee'; 
import HomeOne from './components/pages/HomeOne';
import Layout from './components/pages/Layout/Layout';
import Mennuu from './components/pages/Mennuu';
// import Redils from './components/pages/Redils'; 
import { createTheme,ThemeProvider } from '@mui/material/styles'; 
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Menu from './components/pages/Menu';
import PagenotFound from './components/pages/PagenotFound';



let theme = createTheme({
  palette: {
    primary: {
      main: '#864313', 
    }, 
  },
});


function App() {
  return (
    <> 
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/menu" element={<Menu/>} />
            <Route path="*" element={<PagenotFound/>} /> 
          </Routes>        
        </BrowserRouter>
      </div>
   

    {/* <ThemeProvider theme={theme}>
      <HomeOne/>
    </ThemeProvider>  */}

    {/* <div className="App"> */}
        {/* <Home/>  */}
        {/* <Redils/> */}
        {/* <Mennuu/> */}
        {/* <HomeOne/> */}
     {/* </div> */}
    
    </> 
  );
}

export default App;
