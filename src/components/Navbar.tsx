"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-secondary mb-4 ">
        <div className="flex justify-between items-center p-6 h-5">
          <div className="text-2xl font-bold text-white">Digital Marketing</div>
          <button onClick={toggleMenu} className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 text-white"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          <div className="hidden md:flex justify-center space-x-4">
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
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-4 p-6">
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
        )}
      </nav>
    </>
  );
};

export default Navbar;
