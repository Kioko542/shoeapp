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
    <nav id="nav" className="bg-white fixed w-full p-2">
      <div className="container mx-auto flex items-center justify-between gap-[10px]">
        <button
          className="lg:hidden text-black focus:outline-none"
          onClick={toggleNavbar}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        <Link to="/" className="text-orange-500 font-bold text-lg md:ml-8 text-2xl">
          Dukani
        </Link>
        {/* Search input */}
        <div className="w-full lg:ml-[100px]">
        <input
          type="text"
          className="py-2 px-4  lg:w-[50%] rounded-full border bg-slate-200"
          placeholder="Search products, categories"
        />
        <button className="bg-black rounded py-2 ml-[30px] px-9 text-white hidden hover:bg-slate-600  md:inline-block lg:inline-block">
          Search
        </button>{" "}
        </div>
        {/* User Dropdown */}
        <div className="relative " onClick={stopPropagation}>
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
            <div className="flex flex-col  mx-4 justify-center space-y-4 text-center my-6">
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
        <div className="flex items-center lg:mx-8">
          <FaShoppingCart className="text-black  text-[20px]  cursor-pointer" />
          <h4 className="md:block">Cart</h4>
          {/* Add cart count or update logic here */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
