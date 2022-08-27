import React from "react";
import { ReactComponent as GithubLogo } from "../../images/github.svg";
import { ReactComponent as DemoIcon } from "../../images/demo.svg";
import { ReactComponent as TwitterLogo } from "../../images/twitter.svg";
import { Link } from "react-router-dom";
import IdolaIndustriesImg from "./idolaindustries.png";
import FalseIdolsImg from "./falseidols.png";
import JpgStoreImg from "./jpgstore.png";

export const Work = () => {
  const projects = [
    {
      title: "Personal Portfolio",
      repo: "https://github.com/spward/react-template-sean",
      demo: "http://localhost:3000",
      tag: "development",
      tools: ["React.Js", "SCSS", "Figma"],
      summary:
        "My personal portfolio was built to push myself. I wen't with different techniques to building a Single Page Application.",
      purpose:
        "I wanted to show off my technical skills through a simplistic and organized fashion.",
      difficulties:
        "The most challenging part of this project was deciding how I wanted to route and pass the data for my projects to the single project view.",
      solution:
        "The solution that I went with was using react-router-dom's useLocation and Link state passing to keep the project as modular as I could to allow for easy addition of any database.",
    },
    {
      title: "False Idols",
      demo: "http://www.falseidols.xyz",
      twitter: "https://twitter.com/FalseIdolsNFT",
      tag: "branding",
      tools: ["Illustrator", "Photoshop", "React.Js", "Procreate"],
      image: FalseIdolsImg,
      purpose:
        "The purpose of this project was to bridge the differences between both NFT's and the real world.",
      difficulties:
        "The difficulties that I have ran into on this project since the beginning is learning the blockchain. The concept of holding images directly on the blockchain for people to trade has been hard. I ran into an issue when we released this project that the metadata was incorrect causing the project to have issues at the beginning. I also had to learn how to market, design, and develop everything from generative art pieces to minting services.",
      solution:
        "The solution was for me to take hours of research to learn that their is a 721 standard to metadata that allowed me fix my metadata and update the blockchain to respond accordingly. I also took my branding experience from University and used them to iconically show off the 13 original characters drawn.",
    },
    {
      title: "Idola Industries",
      repo: "https://github.com/spward/react-template-sean",
      demo: "http://www.idolaindustries.com",
      twitter: "https://twitter.com/IdolaIndustries",
      tag: "branding",
      tools: ["Illustrator", "Photoshop", "React.Js", "SCSS", "Figma"],
      image: IdolaIndustriesImg,
      purpose:
        "Idola Industries is a global consumer goods company similar to Unilever. The purpose of this is to assist False Idols LLC in bridging Web3 to the real world.",
      difficulties:
        "The difficulties that I have ran into while developing this brand and website have been to get a wide audience following as well as background image positioning on the website. There was also an issue with the background images blending in with the text on mobile phones and causing it to be unreadable.",
      solution:
        "I solved the background positioning by using photoshop and editing and using the image in a way that it would view properly. With the unreadable text, for Mobile view only, I added a white transparent background to the text to contrast the background more with the foreground.",
    },
    {
      title: "React Template",
      repo: "https://github.com/spward/react-template-sean",
      tag: "development",
      tools: ["React.Js", "SCSS", "Terminal"],
      purpose:
        "I wanted to build a template that I could keep best practice in all of my future projects that I could continuously update to what I need and feel is best practice.",
      difficulties:
        "This is the first time I have wanted to create something that was open sourced and accessible for anyone to use. Part of my difficulties in this was adding all of the features that I feel are necessary to build a project without adding too much 'fluff' and causing the template to feel to clunky to use.",
      solution:
        "The solution that I taken for this is a solo developer approach. I have added an MIT license so that anyone that feels like their is a feature needed, they are able to contribute as well as I will actively be adding and completing 'issues' that are within the github repository to maintain the best practice and packages updated. I have also allocated set hours weekly to research and maintain best practice within the repository.",
    },
    {
      title: "Jpg.Store",
      demo: "https://www.jpg.store/",
      tag: "development",
      tools: ["React.Js", "SCSS"],
      image: JpgStoreImg,
      purpose:
        "The purpose of this was to update the Jpg.Store website with a clean and responsive Data section.",
      difficulties:
        "This was the first time that I had to interact with the Blockfrost API. I was running into issues with the Data not pulling appropriately and displaying incorrectly.",
      solution:
        "The solution for this was to take time to thoroughly learn how Blockfrost functioned as well as how the Blockchain works. I met with developers at Jpg.Store and they helped guide me through what was needed to finish the components. I then created a responsive component that showed the data in a clean format.",
    },
  ];

  return (
    <div className="work">
      {projects.map((project) => {
        const urlName = project.title.replace(/\s/g, "-").toLowerCase();

        return (
          <div className="card">
            <span className={`tag ${project.tag}`}>{project.tag}</span>

            <Link to={`/work/${urlName}`} state={{ project }}>
              <h2>{project.title}</h2>
            </Link>
            <div className="card-links">
              {project.repo && (
                <a href={project.repo}>
                  <GithubLogo className="icon github" />
                </a>
              )}
              {project.demo && (
                <a href={project.demo}>
                  <DemoIcon className="icon demo" />
                </a>
              )}
              {project.twitter && (
                <a href={project.twitter}>
                  <TwitterLogo className="icon twitter" />
                </a>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};
