import React, { useEffect } from "react";
import menu from "./images/menu.png";
import "./style/navbar.css";
import logo from "./images/logo.png";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const sidebarRef = React.useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSidebarOpen]);
  
  return (
    <>
      <nav className="flex navbar  bg-[#ffffff] mt-3 mx-2 px-5 justify-between rounded-full items-center py-2 bg-opacity-[0.5] sticky top-3 backdrop-blur-md">
        <div className="flex items-center gap-1">
        <img className="w-[55px]" src={logo} alt="logo" />
        <a href="#home" className="text-[1.8rem] font-semibold cursor-pointer tracking-widest text-[#493CFF]">
          WebCrafter
        </a>
        </div>
        <ul className="flex items-center">
          <li className="md:hidden">
            <img
              className="w-[28px] cursor-pointer"
              src={menu}
              alt="Menu"
              onClick={toggleSidebar}
            />
          </li>
          <li className="hidden md:block mx-2">
            <a href="#home" className="text-[#493CFF]">
              Home
            </a>
          </li>
          <li className="hidden md:block mx-2">
            <a href="#aboutus" className="text-[#493CFF]">
              About
            </a>
          </li>
          <li className="hidden md:block mx-2">
            <a href="#services" className="text-[#493CFF]">
              Services
            </a>
          </li>
        </ul>
      </nav>


      {/* Sidebar */}
      <div
      ref={sidebarRef}
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <button
          className="absolute top-4 right-4 text-gray-700"
          onClick={toggleSidebar}
        >
          Close
        </button>
        <ul className="mt-16">
          <li className="p-4 border-b border-gray-200">
            <a href="#home" className="text-[#493CFF]">
              Home
            </a>
          </li>
          <li className="p-4 border-b border-gray-200">
            <a href="#aboutus" className="text-[#493CFF]">
              About
            </a>
          </li>
          <li className="p-4 border-b border-gray-200">
            <a href="#services" className="text-[#493CFF]">
              Services
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
