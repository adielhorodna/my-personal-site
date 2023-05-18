import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
// import myImage from './Adiel-Headshot-DSC04502-Edit.png';

function About () {

    return (
        <section class="about" id="about">
            <img src = "/Adiel-Headshot-DSC04502-Edit.png" alt = "profile photo"></img>
        <img
          src="assets/images/wfh_1.svg"
          alt="adiel-photo"
          loading="lazy"
          class="hero-img"
        />
        <div class="">
          <h2 class="bio-title">About Me</h2>
          <p class="bio-text">
            As a recent graduate in Full Stack Software Engineering,
             I possess natural leadership skills coupled with a profound 
             love for teamwork, organization, and planning. My passion for
              collaboration, coupled with a strong work ethic, allows me to
               excel in a team-oriented environment while contributing to the 
               overall success of the organization.
  
  I have a proven track record of being a great team member, consistently 
  bringing a positive attitude, and being committed to achieving shared 
  objectives. My ability to communicate effectively with individuals at 
  all levels enables me to build lasting relationships and facilitate
  productive teamwork.  
  
  I am currently seeking an opportunity to leverage my skills and 
  expertise in a challenging and dynamic environment. With a strong desire
   to contribute my talents and knowledge, I am confident in my ability 
   to make a significant impact and help drive success within the 
   organization.
          </p>
        </div>
  </section>
    )
}
    export default About

   