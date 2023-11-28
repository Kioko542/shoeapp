// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaShoppingCart, 
  FaSearch,
} from "react-icons/fa";
import UserDropdown from "./Dropdown";
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
    // Close the user dropdown when opening the off-canvas menu
    setIsUserDropdownOpen(false);
  };

  const toggleUserDropdown = () => {
    setIsUserDropdownOpen(!isUserDropdownOpen);
    // Close the off-canvas menu when opening the user dropdown
    setIsOpen(false);
  };

  const stopPropagation = (e) => {
    if (isUserDropdownOpen) {
      e.stopPropagation();
    }
  };

  return (
    <nav id="nav" className="bg-white  fixed w-full p-4">
      <div className="container mx-auto flex items-center justify-between gap-[30px] ">
        <button
          className="lg:hidden text-black focus:outline-none"
          onClick={toggleNavbar}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <Link to="/" className="text-orange-500 font-bold text-lg">
          Dukani
        </Link>
        {/* Search input */}
        <input
          type="text"
          className="py-2 px-4 sm:w-full lg:w-[50%] border bg-slate-300/50  rounded-full shadow-lg"
          placeholder="Search products, categories"
        />
        <button className="bg-[#a2a8d3] py-2 rounded-full px-9 text-white hidden lg:inline-block">
          Search
        </button>{" "}

        {/* User Dropdown */}
        <div className="relative" onClick={stopPropagation}>
          <UserDropdown
            isOpen={isUserDropdownOpen}
            toggleUserDropdown={toggleUserDropdown}
          />
        </div>
        {/* Off-Canvas Menu */}
        {isOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-gray-800 bg-opacity-75 w-[50%] z-50"
            onClick={toggleNavbar}
          >
            <div className="flex justify-end p-4">
              <button className="text-black focus:outline-none">
                <FaTimes />
              </button>
            </div>
            <div className="flex flex-col mx-4 justify-center space-y-4 text-center my-6">
              <Link to="/" className="text-white">
                Home
              </Link>
              <Link to="/about" className="text-white">
                About
              </Link>
              <Link to="/contact" className="text-white">
                Contact
              </Link>
            </div>
          </div>
        )}
        {/* Cart Icon */}
        <div className="flex items-center ">
          <FaShoppingCart className="text-black mx-3 text-[25px] cursor-pointer" />
          <h4 className="hidden lg:inline-block md:block">Cart</h4>
          {/* Add cart count or update logic here */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
