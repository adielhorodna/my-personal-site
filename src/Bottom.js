import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Box, Link, Text, HStack } from '@chakra-ui/react';







function Bottom (){
  return(

<footer>
<div class="footer-title"></div>
<p>SOFTWARE DEVELOPER</p>

<div>
  {/* target="-blank" to open links in a new tab */}
  <a target="_blank" rel="noopener noreferrer" href ="https://www.linkedin.com/in/adiel-eichenstein/"> LinkedIn </a>
  <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@adiel.eich">Medium </a>
  <a target="_blank" rel="noopener noreferrer" href="https://github.com/adielhorodna/">GitHub </a>
  </div>
{/* 
  <a href="#"
    ><img
      src="assets/icons/icons8-linkedin-circled.gif"
      alt="Linkedin"
      loading="lazy"
      class="socicon"
  /></a> */}

  <p> adiel.eich@gmail.com </p>
  </footer>
  )
}

  export default Bottom 