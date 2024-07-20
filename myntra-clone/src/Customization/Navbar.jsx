import React from "react";

const Navbar = ({ showAddDesign, showDesigns }) => {
  return (
    <nav className="navbar">
      <div className="container">
        <a href="#" onClick={showDesigns} className="text-white">
          Designs
        </a>
        <a href="#" onClick={showAddDesign} className="text-white">
          Add Design
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
