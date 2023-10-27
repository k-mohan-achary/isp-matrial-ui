// import './App.css';
import Home from './components/pages/Home'; 
import HomeOne from './components/pages/HomeOne';
import Mennuu from './components/pages/Mennuu';
// import Redils from './components/pages/Redils';

import { createTheme,ThemeProvider } from '@mui/material/styles'; 
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
    <ThemeProvider theme={theme}>
      <HomeOne/>
    </ThemeProvider> 

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
