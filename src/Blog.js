import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Box, Link } from "@chakra-ui/react";


function Blog(){
    return (
        <div>
        <div>
        <p 
        style = {{fontSize:"6rem",
        fontWeight:"bold",}}  
        display="inline-block"  
        mr="2"
        > 
        01 </p>
        <Link textDecoration="underline">
        <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@adiel.eich/ah-the-first-blog-post-25b5cb7324a9"> Ah, the first blog post</a>
        </Link>
        <p style={{fontSize:"1rem", color: "#B6D2B2"}}  > 2 min read</p>
       
        </div>
       
        <div>
         <p
          style = {{fontSize:"6rem",
          fontWeight:"bold",}}  
          display="inline-block"  
          mr="2"
          > 
         02 </p>


         <Link textDecoration="underline">
        <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@adiel.eich/ternary-expressions-conditional-ternary-operator-445825abb84e"> Ternary Expressions | Conditional Operator</a>
        </Link>
        
         <p style={{fontSize:"1rem", color: "#B6D2B2"}}> 1 min read</p>
         </div>
       
         <div class="blog-title-number">
           <p style = {{fontSize:"6rem",
          fontWeight:"bold",}}  
          display="inline-block"  
          mr="2"
          > 03 </p>
          <Link textDecoration="underline">
        <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@adiel.eich/testing-testing-123-7feb8298cfd7"> Testing, testing, 123</a>
        </Link>
    
           <p style={{fontSize:"1rem", color: "#B6D2B2"}}> 1 min read</p>
           </div>
       
           <div class="blog-title-number">
             <p style = {{fontSize:"6rem",
          fontWeight:"bold",}}  
          display="inline-block"  
          mr="2"> 04 </p>

        <Link textDecoration="underline">
        <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@adiel.eich/validations-7750a0452941"> Validations, Am I right?</a>
        </Link>

             <p style={{fontSize:"1rem", color: "#B6D2B2"}}> 2 min read</p>
             </div>
             </div>
    )
}
export default Blog;



