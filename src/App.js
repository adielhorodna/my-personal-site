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

function App() {
  return (
    <div className="App">

 <div className="nav-bar">
<h1>
  <NavLink to="/"> Adiel </NavLink>
</h1>
<nav>
  <ul>
    <li>
      <NavLink to="/projects"> Projects </NavLink>
    </li>
    <li>
      <NavLink to="/about"> About </NavLink>
    </li>
    <li>
      <NavLink to="/blog"> Blog </NavLink>
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
    </div>
  );
}
export default App;


