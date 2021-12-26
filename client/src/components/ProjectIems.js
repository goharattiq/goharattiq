import React from "react";
import { Link } from "react-router-dom";

const ProjectItems = ({ project }) => (
  <div className="item">
    <Link to="/">
      <img src={project.images[0]} alt="Project" />
    </Link>
    <a href={project.projectURL} className="btn-light">
      <i className="fas fa-eye" /> {project.name}
    </a>
    <a href={project.github} className="btn-dark">
      <i className="fab fa-github" /> Github
    </a>
  </div>
);

export default ProjectItems;
