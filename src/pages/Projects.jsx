  import React from "react";
  import ProjectCard from "../components/ProjectCard";
  import projectsData from "../assets/ProjectsData";
  import { Link } from "react-router-dom";


  const Projects = () => {
    return (
      <div className="p-14 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
       {projectsData.map((project) => (
        <ProjectCard {...project} />

      ))}
      </div>
    );
  };

  export default Projects;
