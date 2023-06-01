import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { Box, Link, Text, HStack } from '@chakra-ui/react';


function HiddenFooter() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      if (scrollPosition + windowHeight >= documentHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      position="fixed"
      bottom= '0'
      width="100%"
      height="350px"
      padding= "20px"
      // minHeight="40vh"
      // overflow="hidden"
      zIndex="-1"
        // position="absolute"
        // bottom={isVisible ? "0" : "-400px"}
        // transition="bottom 0.7s ease-in-out"
        backgroundColor="#B6D2B2"
        color="black"
        textAlign="center"
     
      >
        {/* Hidden footer content */}
        <Box>
          <Text fontSize="9xl" fontWeight="bold" mb={4}>
            SOFTWARE DEVELOPER
          </Text>
          <HStack spacing={4}>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/adiel-eichenstein/"
            >
              LinkedIn
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://medium.com/@adiel.eich"
            >
              Medium
            </Link>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/adielhorodna/"
            >
              GitHub
            </Link>
          </HStack>
          <Text fontSize="2xl" fontWeight="bold" mt={4}>
            adiel.eich@gmail.com
          </Text>
        </Box>
      {/* </Box> */}

      {/* Your website content here */}
      {/* <Box pt="400px"> */}
        {/* Add padding-top equal to the height of the footer */}
        {/* Rest of your content */}
        {/* <div style={{ height: "2000px" }}>Scrollable Content</div> */}
      {/* </Box> */}
    </Box>
  );
}

export default HiddenFooter;



// function HiddenFooter() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     function handleScroll() {
//       const scrollPosition = window.pageYOffset;
//       const windowHeight = window.innerHeight;
//       const documentHeight = document.documentElement.scrollHeight;

//       if (scrollPosition + windowHeight >= documentHeight) {
//         setIsVisible(true);
//       } else {
//         setIsVisible(false);
//       }
//     }

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <Box
//       position="fixed"
//       bottom={isVisible ? "0" : "-4000px"}
//       transition="bottom 1s ease-in-out"
//       backgroundColor="#B6D2B2"
//       color= 'black'
//       width="100%"
//       height="400px"
//       textAlign= 'center'
//       // zIndex="9999"
//       zIndex="1"
//     >
//       {/* <Box> */}
//        <Text fontSize="8xl" fontWeight="bold" mb={4}>
//           SOFTWARE DEVELOPER
//          </Text>
//         <HStack spacing={4}>
//            <Link target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/adiel-eichenstein/">
//              LinkedIn
//           </Link>
//            <Link target="_blank" rel="noopener noreferrer" href="https://medium.com/@adiel.eich">
//              Medium
//            </Link>
//            <Link target="_blank" rel="noopener noreferrer" href="https://github.com/adielhorodna/">
//              GitHub
//            </Link>
//          </HStack>
//          <Text fontSize="2xl" fontWeight="bold" mt={4}>
//           adiel.eich@gmail.com
//          </Text>
//        </Box>
//     // </Box>
//   );
// }

// export default HiddenFooter;




// function Bottom ()  {
//   return (
//     <footer
//       style={{
//         // position: 'sticky',
//         left: 0,
//         bottom: 0,
//         width: '100%',
//         backgroundColor: '#B6D2B2',
//         color: 'black',
//         textAlign: 'center',
//         padding: '20px 0',
//         zIndex:-1,
//       }}
//     >
//       <Box>
//         <Text fontSize="8xl" fontWeight="bold" mb={4}>
//           SOFTWARE DEVELOPER
//         </Text>
//         <HStack spacing={4}>
//           <Link target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/adiel-eichenstein/">
//             LinkedIn
//           </Link>
//           <Link target="_blank" rel="noopener noreferrer" href="https://medium.com/@adiel.eich">
//             Medium
//           </Link>
//           <Link target="_blank" rel="noopener noreferrer" href="https://github.com/adielhorodna/">
//             GitHub
//           </Link>
//         </HStack>
//         <Text fontSize="2xl" fontWeight="bold" mt={4}>
//           adiel.eich@gmail.com
//         </Text>
//       </Box>
//     </footer>
//   );
// };

// export default Bottom;






// // // function Bottom (){
// // //   return(

// // // <footer>
// // // <div class="footer-title"></div>
// // // <p>SOFTWARE DEVELOPER</p>

// // // <div>
// // //   {/* target="-blank" to open links in a new tab */}
// // //   <a target="_blank" rel="noopener noreferrer" href ="https://www.linkedin.com/in/adiel-eichenstein/"> LinkedIn </a>
// // //   <a target="_blank" rel="noopener noreferrer" href="https://medium.com/@adiel.eich">Medium </a>
// // //   <a target="_blank" rel="noopener noreferrer" href="https://github.com/adielhorodna/">GitHub </a>
// // //   </div>

// // //   <p> adiel.eich@gmail.com </p>
// // //   </footer>
// // //   )
// // // }

// // //   export default Bottom 