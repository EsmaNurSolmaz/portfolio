import React from "react";

function Footer() {
  return React.createElement(
    "footer",
    { className: "bg-black text-white py-4 mt-8" },
    React.createElement(
      "div",
      { className: "container mx-auto text-center px-4" },
      "© 2025 Esma Nur Solmaz. Tüm hakları saklıdır."
    )
  );
}

export default Footer;
