import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ id, title, description, image, githubLink, liveLink }) => {
  const navigate = useNavigate();

  return (
    <div
      className="group border rounded-lg shadow-lg overflow-hidden flex flex-col bg-gray-700 bg-opacity-30  hover:shadow-xl transition-shadow duration-300 cursor-pointer"
    >

      <div onClick={() => navigate(`/projects/${id}`)}>
        {image && (
          <div className="overflow-hidden flex items-center justify-center bg-black/5">
            <img
              src={image}
              alt={title}
              className="h-36 w-full object-contain transform scale-90 group-hover:scale-100 transition-transform duration-500 ease-in-out"
            />
          </div>
        )}

        <div className="p-4 flex flex-col flex-1 my-6">
          <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
          <p className="text-slate-200 text-sm flex-1 line-clamp-3">
            {description}
          </p>
        </div>
      </div>

      <div className="px-4 pb-4 flex space-x-3 -mt-4">
        {githubLink && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              window.open(githubLink, "_blank");
            }}
            className="text-white bg-gray-800 px-2 py-1 text-sm rounded font-bold hover:bg-gray-700 transition"
          >
            GitHub
          </button>
        )}

        {liveLink && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              window.open(liveLink, "_blank");
            }}
            className="text-white bg-blue-600 px-2 py-1 text-sm rounded font-bold hover:bg-blue-500 transition"
          >
            Canlı Demo
          </button>
        )}
      </div>

    </div>
  );
};

export default ProjectCard;
