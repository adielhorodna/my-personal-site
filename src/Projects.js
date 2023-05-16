import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';




function Projects () {
    
    return (
        <section class="projects" id="projects">
 
  <div class="projects-container">
    <div class="project-container project-card">
    
      <h3 class="project-title">1st Year</h3>
      <h4 class="project-languages"> HTML|CSS|JAVASCRIPT|REACT|RUBY|RAILS|CHAKRA UI </h4>
      <p class="project-details">
        A site for new mothers to see baby milestones and tips for each month, have the ability to post to support other mothers, and jot down personal memories all through their baby’s first year. 

        <ul>
          <li> Developed a full-stack web application using a combination of JavaScript, React.js, Ruby, and Ruby on Rails.</li>
        <li>Implemented security measures such as custom authentication and authorization functionality, to protect sensitive user data and prevent unauthorized access. </li>
       <li> Built APIs using Ruby on Rails and the MVC pattern. </li> 
       <li> Created custom serializers and validations throughout the application. </li> 
       <li>Utilized ChakraUI to develop UI and UX design that provides a seamless user experience while navigating the application.</li> 
      </ul>
      </p>
      <a href="#" target="_blank" class="project-link">Check it Out</a>
    </div>

    <div class="project-container project-card">
   
      <h3 class="project-title"> StayOver</h3>
      <h4 class="project-languages"> HTML|CSS|JAVASCRIPT|REACT|RUBY </h4>
      <p class="project-details">
        StayOver is a site that allows a user to find and book home accommodations.
<ul>
<li> Authenticated users at login inorder to successfully enter the app.</li>
   <li>Designed and implemented search and filter functionalities using React and JavaScript, allowing users to easily find and sort data. </li> 
    <li>Integrated Ruby and Sinatra to create a robust backend, allowing for efficient data storage and retrieval. </li>
   <li>Used custom CSS to create a clean UI and responsive design. </li> 
      </ul>
      </p>
      <a href="#" target="_blank" class="project-link">Check it Out</a>
    </div>

    <div class="project-container project-card">
   
      <h3 class="project-title">Pick a Pup</h3>
      <h4> HTML|CSS|JAVASCRIPT|REACT </h4>
      <p class="project-details">
        An app where you can adopt puppies from the Animal Adoption Center. 
<ul>
 <li> Created positive user experiences with responsive and dynamic design techniques, using React.js.</li> 
 <li> Utilized Javascript to manipulate and display data from the db.json file, providing real-time updates and seamless integration within the application. </li>
 <li> Used mostly custom CSS to create a clean and fun design.</li>
</ul>
      </p>
      <a href="#" target="_blank" class="project-link">Check it Out</a>
    </div>
  </div>
</section>

    );
}
    export default Projects;




