// UserDropdown.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle, FaChevronDown, } from 'react-icons/fa';
import { FaSignOutAlt } from 'react-icons/fa'
const UserDropdown = ({ isOpen, toggleUserDropdown }) => {
  return (
    <div className="relative">
      <div
        className="flex items-center cursor-pointer gap-2"
        onClick={toggleUserDropdown}
      >
        <div className='flex items-center justify-center'>
        <FaUserCircle className="user mr-2" />
        <span className="text-sm font-semibold">User</span>
        <FaChevronDown className="ml-2" />
        </div>
      </div>

      {/* Dropdown Content */}
      {isOpen && (
        <div
          className="fixed top-0 right-0 mt-20 text-white bg-gray-800 flex flex-col p-6 justify-center  rounded shadow gap-4"
          style={{ zIndex: 100 }}
        >
          <Link to="/signin" className="block px-4 py-2 text-sm">
            Sign In
          </Link>
          <Link to="/myaccount" className="block px-4 py-2 text-sm">
            My Account
          </Link>
          <Link to="/orders" className="block px-4 py-2 text-sm">
            Orders
          </Link>
          <Link to="/saveditems" className="block px-4 py-2 text-sm">
            Saved Items
          </Link>
          <div className='flex items-center justify-center pb-6'>
          <FaSignOutAlt />
          <button className="block  text-sm">Logout</button>

          </div>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
