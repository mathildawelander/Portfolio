import React, { useState } from 'react';
import {
    MemoryRouter,
    Route,
    Routes,
    Link,
    matchPath,
    useLocation,
  } from 'react-router-dom';
  import { StaticRouter } from 'react-router-dom/server';
import './menu.css';
import {motion, AnimatePresence} from "framer-motion";
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';

function Router(props) {
    const { children } = props;
    if (typeof window === 'undefined') {
      return <StaticRouter location="/drafts">{children}</StaticRouter>;
    }
  
    return (
      <MemoryRouter initialEntries={['/drafts']} initialIndex={0}>
        {children}
      </MemoryRouter>
    );
  }
  
  Router.propTypes = {
    children: PropTypes.node,
  };
  
  function useRouteMatch(patterns) {
    const { pathname } = useLocation();
  
    for (let i = 0; i < patterns.length; i += 1) {
      const pattern = patterns[i];
      const possibleMatch = matchPath(pattern, pathname);
      if (possibleMatch !== null) {
        return possibleMatch;
      }
    }
  
    return null;
  }
  

  function MyTabs() {
    // You need to provide the routes in descendant order.
    // This means that if you have nested routes like:
    // users, users/new, users/edit.
    // Then the order should be ['users/add', 'users/edit', 'users'].
    const routeMatch = useRouteMatch(['/', '/Master', '/projects', '/contact']);
    const currentTab = routeMatch?.pattern?.path;
  
    return (
      <Tabs value={currentTab}>
       
        <Tab classname="activetab" label="About" value="/" to="/" component={Link} />
        
        <Tab label="Master"  value="/Master" to="/Master" component={Link} />
        <Tab label="Projects"value="/projects"  to="/projects" component={Link} />
        <Tab label="Contact"  value="/contact" to="/contact" component={Link} />
      </Tabs>
    );
  }
  

  
  export default function Navbar() {
    return (

        <Box sx={{ width: '100%' }}>
          <Routes>
            <Route path="*"  />
          </Routes>
          <MyTabs />
        </Box>

    );
  }