import './App.css';
import { createTheme } from '@mui/material/styles';
import Navbar from './Komponenter/Navbar'
import AnimatedRoute from './Komponenter/AnimatedRoute'

import { green, yellow } from '@mui/material/colors';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: yellow[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

function App() {
  return (
<Router>
<Navbar/>
<AnimatedRoute/>

</Router>
);
}

export default App;
