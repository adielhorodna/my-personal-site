import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';



import { Box, Text, Image, VStack } from '@chakra-ui/react';

function About() {
  return (

    <Box id="about" textAlign="center" maxW="500px" mx="auto">
      <Text as="h1" fontWeight="bold" fontSize="8xl" textAlign="left" mb={4}>
        HI
      </Text>
      <Text textAlign="left" mb={4}>
        My name is Adiel Eichenstein. I am a Full Stack Software Engineer and Web
        Developer. I possess natural leadership skills coupled with a profound
        love for teamwork, organization, and planning.
      </Text>
      <Text textAlign="left" mb={4}>
        I have experience with a range of technologies, including HTML, CSS,
        JavaScript, React, Ruby, and Ruby on Rails. My passion for collaboration,
        coupled with a strong work ethic, allows me to excel in team-oriented
        environments.
      </Text>
      <Text textAlign="left" mb={4}>
        If you're seeking a dedicated and skilled professional to join your team or
        tackle a freelance project, I would love to hear from you.
      </Text>
      <Text textAlign= "left" mb={8}>Let's chat.</Text>


      <Image
        src="https://raw.githubusercontent.com/adielhorodna/my-personal-site/main/Adiel-Headshot-DSC04502-Edit.png"
        alt="profile photo"
        boxSize="300px"
        mb={4}
        m1="auto"
      />
      </Box>
  
  );
}

export default About;



















// function About () {

//     return (
//         <section className="about" id="about">
//             <img src = "https://raw.githubusercontent.com/adielhorodna/my-personal-site/main/Adiel-Headshot-DSC04502-Edit.png" alt = "profile photo"/>


//             <p> HI</p>
//             <p> My name is Adiel Eichenstein. 
//             I am a  Full Stack Software Engineer and Web Developer.
//              I possess natural leadership skills coupled with a profound 
//              love for teamwork, organization, and planning. </p>

//              <p>I have experience using a  range of technologies, 
//                including HTML, CSS, JavaScript, React, Ruby, and Ruby on Rails.
//                My passion for collaboration, coupled with a strong work ethic, allows me to
//                excel in team-oriented environments. </p>

//  <p> If you're seeking a dedicated and skilled professional to join
//   your team or tackle a freelance project, I would love to hear from you. </p>

//   <p> Let's chat.</p>

//   </section>

//     )
// }
//     export default About

   