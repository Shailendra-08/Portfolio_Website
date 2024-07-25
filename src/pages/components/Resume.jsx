import React from "react";

import { MdOutlineSubdirectoryArrowRight } from "react-icons/md";
import { BsDownload } from "react-icons/bs";

const Resume = () => {
  const skills = [
    "JavaScript",
    "HTML5",
    "CSS3",
    "React.js",
    "Flutter",
    "Dart",
    "Node.js",
    "Express.js",
    "Redux.js",
    "JQuery",
    "Figma",
    "Github",
    "Scss",
    "Material UI",
    "Tailwind",
    "Bootstrap",
  ];

  return (
    <div className="resume">
      <div className="resume-heading">
        <h1 className="resume-title">
          Education{" "}
         
        </h1>
        
      </div>
     
      <hr />

      <h3 className="side-heading">B-Tech</h3>

      <p className="detail">
        <MdOutlineSubdirectoryArrowRight color="yellow" />
        Walchand college of Engineering, Sangli -
        <span className="year">2022 - 2025</span>
      </p>
      <p className="detail">
        {" "}
        <MdOutlineSubdirectoryArrowRight color="green" />
        Information Technology <span className="year">(8.5 CGPA) </span>
      </p>

      <h3 className="side-heading">Diploma</h3>

      <p className="detail">
        <MdOutlineSubdirectoryArrowRight color="yellow" />
        Government Polytechnic, Nagpur -
        <span className="year">2019 - 2022</span>
      </p>
      <p className="detail">
        {" "}
        <MdOutlineSubdirectoryArrowRight color="green" />
        Information Technology <span className="year">(92.75%)</span>
      </p>

      <h3 className="side-heading"> Schooling</h3>
      <p className="detail">
        <MdOutlineSubdirectoryArrowRight color="yellow" />
        Gujarati National High School, Gondia -
        <span className="year">2019</span>
      </p>

    </div>
  );
};


export default Resume;
