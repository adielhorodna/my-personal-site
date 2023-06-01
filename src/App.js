// import logo from './logo.svg';
import { NavLink } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom'; 
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
// import HomePage from './HomePage';
import About from './About';
import Projects from './Projects';
import Blog from './Blog';
import Bottom from './Bottom';


// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'
import { Box, Link } from "@chakra-ui/react";
import HiddenFooter from './Bottom';


function App() {
  
  return (
    <ChakraProvider>
      <Box backgroundColor="white" marginBottom="400px"  >
      {/* zIndex="2"> */}
    <div className="App">

 <div className="nav-bar">
<h1>
  <NavLink to="/"> Adiel </NavLink>
</h1>
<nav>
  <ul>
    <li>
      <Link
      // to="/projects" Projects 
      fontSize="9xl"  
          fontWeight="bold"  
          display="inline-block"  
          _hover={{ color: "#B6D2B2" }}  
          mr="2"
          >
             <a href="/projects">PROJECTS</a>
</Link>
          {/* </NavLink> */}
    </li>


    <li>
      {/* <NavLink to="/about"> About </NavLink>*/}
      <Link
          fontSize="9xl"
          fontWeight="bold"
          display="inline-block"
          _hover={{ color: "#B6D2B2" }}
          mr="2"
        >
          <a href="/about">ABOUT</a>
        </Link>


    </li>
    <li>
      {/* <NavLink to="/blog"> Blog </NavLink> */}

      <Link
          fontSize="9xl"
          fontWeight="bold"
          display="inline-block"
          _hover={{ color: "#B6D2B2" }}
          mr="2"
        >
          <a href="/blog">BLOG</a>
        </Link>


    </li>
  </ul>
</nav>
 </div> 

  <Switch>
{/* <Router> */}
      {/* <Routes> */}
{/* 
        <Route exact path = "/">
          <HomePage/>
        </Route> */}
        
       
        <Route path = "/projects">
          <Projects/> 
        </Route>

        <Route path = "/about">
          <About/>
        </Route>  


        <Route path = "/blog">
          <Blog/>
        </Route>
        
        {/* </Routes> */}
      </Switch>
      {/* </Router> */}
      <HiddenFooter/>
    </div>
    </Box>
    </ChakraProvider>
  
  );
}

export default App;


