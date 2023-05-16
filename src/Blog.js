import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';


function Blog(){
    return (
        <div>
        <div>
        <p> 01 </p>
        <p>Ah, the first blog post</p>
        <p> 2 min read</p>
        </div>
       
        <div>
         <p> 02 </p>
         <p>Ternary Expressions | Conditional Operator</p>
         <p> 1 min read</p>
         </div>
       
         <div class="blog-title-number">
           <p> 03 </p>
           <p>Testing, testing, 123</p>
           <p> 1 min read</p>
           </div>
       
           <div class="blog-title-number">
             <p> 04 </p>
             <p>Validations, Am I right?</p>
             <p> 2 min read</p>
             </div>
             </div>
    )
}
export default Blog;



