import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import projectsData from "../assets/ProjectsData";

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === parseInt(id));

  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const [modalImage, setModalImage] = useState("");
  const navigate = useNavigate(); 


  const openModal = (index) => {
    setModalIndex(index);
    setModalImage(project.images[index]);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImage("");
  };

  const prevImage = () => {
    const newIndex =
      (modalIndex - 1 + project.images.length) % project.images.length;
    setModalIndex(newIndex);
    setModalImage(project.images[newIndex]);
  };

  const nextImage = () => {
    const newIndex = (modalIndex + 1) % project.images.length;
    setModalIndex(newIndex);
    setModalImage(project.images[newIndex]);
  };

  useEffect(() => {
    if (!modalOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [modalOpen, modalIndex]);

  if (!project) return <div className="p-6">Proje bulunamadı.</div>;

  return (
    <div className="p-2 max-w-6xl mx-auto">
      <div className="mb-6 flex items-center justify-between">
  <button
    onClick={() => navigate("/projects")}
    className="font-bold hover:underline text-gray-300 text-sm"
  >
    ← Projelere Dön
  </button>

  <h1 className="text-3xl text-white font-extrabold text-center flex-1">
    {project.title}
  </h1>

  <div className="w-[120px]"></div>
</div>

      {project.image && (
        <div className="mb-6 flex justify-center">
          <img
            src={project.image}
            alt={project.title}
            className="w-6/12 rounded-lg shadow-md object-contain max-h-[300px]"
          />
        </div>
      )}

      {project.images && project.images.length > 0 && (
        <div className="flex justify-center space-x-3 mb-6">
          {project.images.map((img, index) => (
            <div key={index} className="flex-shrink-0 w-28 h-28 relative">
              <img
                src={img}
                alt={`${project.title} ${index + 1}`}
                className="w-full h-full rounded-md shadow-md cursor-pointer object-cover transform hover:scale-110 transition-transform duration-300"
                onClick={() => openModal(index)}
              />
            </div>
          ))}
        </div>
      )}

      {modalOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white bg-black/50 px-2 py-1 rounded-full font-bold hover:bg-black/70 transition"
            >
              ✕
            </button>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-black/50 px-2 py-1 rounded-full font-bold hover:bg-black/70 transition"
            >
              ‹
            </button>
            <img
              src={modalImage}
              alt="Modal"
              className="max-h-[60vh] max-w-[50vw] rounded-lg shadow-lg"
            />
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-black/50 px-2 py-1 rounded-full font-bold hover:bg-black/70 transition"
            >
              ›
            </button>
          </div>
        </div>
      )}

      {project.about && (
        <div className="mb-6">
          <h2 className="text-2xl text-white font-bold mb-2">Proje Hakkında</h2>
          <p className="text-gray-300 text-lg">{project.about}</p>
        </div>
      )}

      <div className="mb-6 flex flex-col md:flex-row md:space-x-6">
        {project.features && project.features.length > 0 && (
          <div className="flex-[2] mb-6 md:mb-0">
            <h2 className="text-2xl text-white font-bold mb-2">Özellikler</h2>
            <ul className="list-disc list-inside text-gray-300 text-lg space-y-1">
              {project.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {project.tech && project.tech.length > 0 && (
          <div className="flex-[1]">
            <h2 className="text-2xl text-white font-bold mb-2">Kullanılan Teknolojiler</h2>
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-gray-800 text-blue-200 px-3 py-1 rounded-full text-sm font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-start space-x-3 mt-4">
        {project.githubLink && (
          <button
            onClick={() => window.open(project.githubLink, "_blank")}
            className="text-white bg-gray-800 px-3 py-1 text-sm rounded font-bold hover:bg-gray-700 transition"
          >
            GitHub
          </button>
        )}
        {project.liveLink && (
          <button
            onClick={() => window.open(project.liveLink, "_blank")}
            className="text-white bg-blue-600 px-3 py-1 text-sm rounded font-bold hover:bg-blue-500 transition"
          >
            Canlı Demo
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;
