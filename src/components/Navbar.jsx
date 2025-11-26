import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return React.createElement(
    "nav",
  { className: "bg-black text-white py-4 shadow-md" },
    React.createElement(
      "div",
      { className: "container mx-auto flex justify-between items-center px-4" },
      React.createElement(
        Link,
        { to: "/", className: "font-bold text-xl" },
        "Esma Nur Solmaz"
      ),
      React.createElement(
        "div",
        { className: "space-x-6" },
        React.createElement(Link, { to: "/", className: "hover:text-blue-400 transition" }, "Hakkımda"),
        React.createElement(Link, { to: "/projects", className: "hover:text-blue-400 transition" }, "Projeler"),
        React.createElement(Link, { to: "/contact", className: "hover:text-blue-400 transition" }, "İletişim")
      )
    )
  );
}

export default Navbar;
