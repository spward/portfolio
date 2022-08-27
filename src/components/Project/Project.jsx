import React from "react";
import { useLocation } from "react-router-dom";
import { ReactComponent as GithubLogo } from "../../images/github.svg";
import { ReactComponent as DemoIcon } from "../../images/demo.svg";
import { ReactComponent as TwitterLogo } from "../../images/twitter.svg";

export const Project = () => {
  const location = useLocation();
  const { project } = location.state;

  return (
    <div className="project">
      {project.image && <img src={project.image} alt={project.title} />}
      <div className="project-header">
        <h2>{project.title}</h2>
        <span className={`tag ${project.tag}`}>{project.tag}</span>
      </div>
      <div className="project-content">
        <div className="project-links">
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
        <h3>Contributions</h3>
        <div className="tools">
          {project.tools.map((tool) => (
            <span className="tool">{tool}</span>
          ))}
        </div>
        <h3>Purpose</h3>
        <p>{project.purpose}</p>
        <h3>Difficulties</h3>
        <p>{project.difficulties}</p>
        <h3>Solution</h3>
        <p>{project.solution}</p>
      </div>
    </div>
  );
};
