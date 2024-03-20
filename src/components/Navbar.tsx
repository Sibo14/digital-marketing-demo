import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="bg-secondary ">
        <div className="flex justify-between items-center p-6 h-5">
          <div className="text-2xl font-bold text-white">Digital Marketing</div>
          <div className="flex justify-center space-x-4">
            <a
              href="#"
              className="text-white hover:bg-white rounded-lg p-2 hover:text-black"
            >
              Pricing
            </a>
            <a
              href="#"
              className="text-white hover:bg-white rounded-lg p-2 hover:text-black"
            >
              About
            </a>
            <a
              href="#"
              className="text-white hover:bg-white rounded-lg p-2 hover:text-black"
            >
              Contact Us
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
