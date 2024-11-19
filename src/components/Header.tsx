import React from 'react';
import { useLocation } from 'react-router-dom';
import call from '../assets/call.svg'; 
import Notifications from '../assets/Notifications.svg'; 
import Profile from '../assets/Profile.svg'; 
import menu from '../assets/menu.svg';
const Header = () => {
  const location = useLocation(); 

  return (
<header className="bg-white shadow font-poppins">
  {/* Top Section */}
  <div className="flex flex-wrap justify-between items-center px-4 sm:px-6 py-4 mx-0 sm:mx-4 ">
    {/* Left Section: Logo and Categories */}
    <div className="flex flex-col">
      <div className="text-lg font-bold">Logo</div>
    </div>

    {/* Middle Section: Search Bar */}
    <div className="flex-grow w-full sm:w-auto sm:mx-4 mt-3 sm:mt-0">
      <input
        type="text"
        placeholder="Search..."
        className="w-full px-4 py-2 border rounded-full bg-gray-100 text-sm focus:outline-none"
      />
    </div>

    {/* Right Section: Support & Register/Login */}
    <div className="flex items-center gap-4 mt-3 sm:mt-0">
    <div className="flex items-center gap-2">
  <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-orange-100">
    <img
      src={call}
      alt="Call Icon"
      className="w-full h-full object-contain"
    />
  </div>
  <div className="text-xs sm:text-sm">
    <p className="text-gray-500 text-[10px]">Have a question?</p>
    <a
      href="/support"
      className="text-orange-600 font-semibold hover:underline"
    >
      Contact Support
    </a>
  </div>
</div>


      {location.pathname === '/contact' ? (
        // Show images if on Contact Us page
        <div className="flex gap-2">
          <img
            src={Notifications}
            alt="Notifications Icon"
            className="h-8 w-8 sm:h-10 sm:w-10 rounded-full"
          />
          <img
            src={Profile}
            alt="Profile Icon"
            className="h-8 w-8 sm:h-10 sm:w-10 rounded-full"
          />
        </div>
      ) : (
        // Show Register/Login button for other pages
        <button className="bg-orange-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full hover:bg-orange-600 text-xs sm:text-sm">
          Register / Login
        </button>
      )}
    </div>
  </div>

  {/* Bottom Section */}
  <div className="border-t">
    <div className="flex flex-wrap justify-between items-center px-4 sm:px-6 py-6 text-sm">
      {/* Navigation Links */}
      <nav className="flex flex-wrap gap-4 sm:gap-8 text-gray-600 ml-0 sm:ml-4">
        <a
          href="/categories"
          className="flex items-center gap-2 hover:text-gray-900 font-semibold"
        >
          <img className="w-5 h-5" src={menu} alt="Categories" />
          All Categories
        </a>
        <a href="/blog" className="hover:text-gray-900">
          Blog
        </a>
        <a href="/contact" className="hover:text-gray-900">
          Contact us
        </a>
        <a href="/about" className="hover:text-gray-900">
          About us
        </a>
        <a href="/more" className="hover:text-gray-900">
          More
        </a>
      </nav>

      {/* Secondary Links */}
      <div className="flex gap-4 text-purple-600 mt-3 sm:mt-0 mr-0 sm:mr-4">
        <a href="/write-review" className="hover:underline">
          Write a Review
        </a>
        <a href="/vendor" className="hover:underline">
          Vendor
        </a>
      </div>
    </div>
  </div>
</header>

  );
};

export default Header;
