import React from "react";
import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";

const Contact = () => {
  const contactItems = [
  {
    icon: <FiMail className="text-2xl text-gray-300" />,
    label: "Email",
    value: "esmanursolmaz@outlook.com",
    link: "mailto:esmanursolmaz@outlook.com",
    bgColor: "bg-blue-700"
  },
  {
    icon: <FiGithub className="text-2xl text-gray-300" />,
    label: "GitHub",
    value: "github.com/EsmaNurSolmaz",
    link: "https://github.com/EsmaNurSolmaz",
    bgColor: "bg-gray-800"
  },
  {
    icon: <FiLinkedin className="text-2xl text-gray-300" />,
    label: "LinkedIn",
    value: "linkedin.com/in/esma-nur-solmaz-020ab1288",
    link: "https://www.linkedin.com/in/esma-nur-solmaz-020ab1288/",
    bgColor: "bg-blue-900"
  }
];


  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-white">
        İletişim
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactItems.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center space-x-4 p-6 rounded-lg shadow-lg transform-gpu backface-hidden
                        hover:scale-105 transition-transform duration-300 ${item.bgColor}`}
          >
            <div className="flex-shrink-0">{item.icon}</div>
            <div className="text-white">
              <p className="font-bold">{item.label}</p>
              <p className="text-sm">{item.value}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
