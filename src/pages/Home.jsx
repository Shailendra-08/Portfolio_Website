import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { myPic, myPicSmall }  from "../assets/index";
import { BsTwitterX } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiLinkedin } from "react-icons/si";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import About from "./About";
import Project from "./Projects";
import Resume from "./components/Resume";
import Contact from "./Contact";


const Home = () => {
  const variants = {
    initial: { y: 40, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 40 },
  };
  useEffect(() => {
    document.title = "Shailendra | Portfolio";
  }, []);

  const redirectToLinkedIn = () => {
    window.location.href =
      "https://www.linkedin.com/in/shailendra-mahadule-96955b200/";
  };

  const redirectToGithub = () => {
    window.location.href = "https://github.com/Shailendra-08";
  };

  const redirectToLeetCode = () => {
    window.location.href = "https://leetcode.com/Shailendra_08/";
  };

  const redirectToTwitter = () => {
    window.location.href = "https://twitter.com/Shailen64591797/";
  };



  return (

    <>
     <motion.div
      className="home"
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="left-home">
        <LazyLoadImage
          src={myPic}
          placeholderSrc={myPicSmall}
          effect="blur"
          className="img"
        />
        <div className="for-border"></div>
      </div>
      <div className="right-home">
        <h1>Hi I'm Shailendra Mahadule</h1>
        <h2>Developer | MERN | Flutter | Django</h2>

        <p className="intro">
          "An enthusiastic  Developer with hands-on experience in HTML, CSS,
          JavaScript, React, and Flutter for mobile application development.
          Can work in the team across multiple platforms. Let's connect and collaborate!"
        </p>

     

        <SiLinkedin
                  style={{color: 'blue', fontSize: "36px",margin:"10px" }}
                  className="icon"
                  onClick={redirectToLinkedIn}
                />
                <SiGithub
                  style={{color: 'gray', fontSize: "36px",margin:"10px" }}
                  className="icon"
                  onClick={redirectToGithub}
                />
                <SiLeetcode
                  style={{color: 'yellow', fontSize: "36px",margin:"10px" }}
                  className="icon"
                  onClick={redirectToLeetCode}
                />
                <BsTwitterX
                  style={{color: 'white', fontSize: "36px",margin:"10px" }}
                  className="icon"
                  onClick={redirectToTwitter}
                />







      </div>
    </motion.div>

    <Resume />

    <About />
    <Project />

    <Contact />
    
    
    </>
   
  );
};

export default Home;
