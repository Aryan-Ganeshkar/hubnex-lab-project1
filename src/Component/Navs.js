

import React, { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navs = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img
              className="text-white text-lg cursor-pointer font-bold"
              src={logo}
              alt="Logo"
            />

          </div>
          <div className="hidden md:block">
            <div className=" flex items-baseline space-x-10 ">
              <div className="space-x-10 lg:me-40">
                <Link to="/brands">
                  <a className="text-[#8E8E8E] hover:text-[#5C27C0] hover:underline hover:decoration-[#5C27C0]  cursor-pointer">
                    Talent finder
                  </a>
                </Link>
                <Link to="/customer">
                  <a className="text-[#8E8E8E] hover:text-[#5C27C0] hover:underline hover:decoration-[#5C27C0] cursor-pointer">
                    For Recruiters
                  </a>
                </Link>
                <Link to="/succes">
                  <a className="text-[#5C27C0] font-bold cursor-pointer hover:underline hover:decoration-[#5C27C0]">
                    For Employees
                  </a>
                </Link>
                <Link to="/accordion">
                  <a className="text-[#8E8E8E] hover:text-[#5C27C0] cursor-pointer hover:underline hover:decoration-[#5C27C0]">
                    About Us
                  </a>
                </Link>
                <Link to="/card">
                  <a className="text-[#8E8E8E] hover:text-[#5C27C0] cursor-pointer hover:underline hover:decoration-[#5C27C0]">
                    Company
                  </a>
                </Link>
              </div>

              <div>
                
                  <button className="text-[#5C27C0] font-medium rounded-lg text-sm px-8 py-2 text-center border-2 border-[#5C27C0] dark:hover:bg-gray-200  mx-1 lg:mx-2">
                    Log In
                  </button>

                <Link to="/card">
                  <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700">
                    Get started
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
            >
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-4 pt-2 pb-3 space-y-1 sm:px-3">
          <div className="flex flex-col justify-center">
            <Link to="/brands">
              <a className="text-[#8E8E8E] hover:text-[#5C27C0] hover:underline hover:decoration-[#5C27C0]  cursor-pointer">
                Talent finder
              </a>
            </Link>
            <Link to="/customer">
              <a className="text-[#8E8E8E] hover:text-[#5C27C0] hover:underline hover:decoration-[#5C27C0] cursor-pointer">
                For Recruiters
              </a>
            </Link>
            <Link to="/succes">
              <a className="text-[#5C27C0] font-bold cursor-pointer hover:underline hover:decoration-[#5C27C0]">
                For Employees
              </a>
            </Link>
            <Link to="/accordion">
              <a className="text-[#8E8E8E] hover:text-[#5C27C0] cursor-pointer hover:underline hover:decoration-[#5C27C0]">
                About Us
              </a>
            </Link>
            <Link to="/card">
              <a className="text-[#8E8E8E] hover:text-[#5C27C0] cursor-pointer hover:underline hover:decoration-[#5C27C0]">
                Company
              </a>
            </Link>
          </div>

          <div>
            
              <button className="text-[#5C27C0] font-medium rounded-lg text-sm px-8 py-2 text-center border-2 border-[#5C27C0] dark:hover:bg-gray-200  mx-1 lg:mx-2">
                Log In
              </button>
      
            <Link to="/card">
              <button className="text-white bg-blue-700  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-3 text-center dark:bg-blue-600
            hover:bg-blue-700">
            Get started
          </button>
        </Link>
      </div>
    </div>
  </div>
</nav>
);
};

export default Navs;
