import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom";
import About from '../pages/About';
import Projects from '../pages/Projects';
import Contacts from '../pages/Contact';
import Master from '../pages/Master';
import {AnimatePresence} from 'framer-motion';

function AnimatedRoute() {
    const location = useLocation();
  return (
    <AnimatePresence>
        <Routes location ={location} key={location.pathname}>
      <Route exact  path= "/" element={<About/>}/>
    <Route exact  path= "/Master" element={<Master/>}/>
    <Route exact  path= "/projects" element={<Projects/>}/>
<Route exact  path= "/contact" element={<Contacts/>}/>
</Routes>

    </AnimatePresence>
  )
}

export default AnimatedRoute
