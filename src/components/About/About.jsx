import React from "react";

export const About = () => {
  const designSkills = [
    "Photoshop",
    "Illustrator",
    "Figma",
    "Adobe XD",
    "Zeplin",
  ];
  const developSkills = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React.js",
    "SASS",
    "Vue.JS",
    "Node.JS",
  ];

  const experience = [
    {
      company: "False Idols",
      position: "Founder",
      duration: "January 2022 - Current",
    },
    {
      company: "RadixBay",
      position: "Web Consultant",
      duration: "April 2021 - Current",
    },

    {
      company: "jpg.store",
      position: "Web3 Developer",
      duration: "February 2022",
    },
    {
      company: "krypto media one",
      position: "Web Developer",
      duration: "January 2017 - June 2020",
    },
  ];
  return (
    <div className="about">
      <div className="career">
        <h2>My career so far</h2>
        <p>
          Throughout my time at Coastal Carolina University, I was working as a
          freelance designer and developer. During this time, I was invited to
          represent CCU at the Carolina Design Clash, which is a south eastern
          design competition where my team won first place.
        </p>
      </div>
      <div className="skills">
        <h2>Skills</h2>
        <h3>Design</h3>
        <div className="skills-list">
          {designSkills.map((skill) => (
            <p>{skill}</p>
          ))}
        </div>
        <h3>Development</h3>
        <div className="skills-list">
          {developSkills.map((skill) => (
            <p>{skill}</p>
          ))}
        </div>
      </div>
      <div className="experience">
        <h2>Experience</h2>
        {experience.map((exp) => (
          <div className="experience-container">
            <h3>{exp.company}</h3>
            <h4>
              {exp.position} <span>({exp.duration})</span>
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};
