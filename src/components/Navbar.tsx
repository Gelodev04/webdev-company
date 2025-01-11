import React, { useEffect, useState } from "react";
import menu from "./images/menu.png";
import "./style/navbar.css";
import logo from "./images/logo.png";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const sidebarRef = React.useRef<HTMLDivElement>(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target as Node)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setIsSidebarOpen(false);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [lastScrollY]);

  return (
    <>
      <nav
        className={`fixed w-full transition-transform duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex navbar bg-[#ffffff] mt-3 mx-2 px-5 justify-between rounded-full items-center py-2 bg-opacity-[0.1] sticky top-3 backdrop-blur-lg">
          <div className="flex items-center gap-1">
            <img className="w-[55px]" src={logo} alt="logo" />
            <a
              href="#home"
              className="text-[1.8rem] font-semibold cursor-pointer tracking-widest text-gray-700"
            >
              WebCrafter
            </a>
          </div>
          <ul className="flex items-center">
            <li className="md:hidden">
              <img
                className="w-[25px] cursor-pointer"
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
            <li className="hidden md:block mx-2">
              <a href="#pricing" className="text-[#493CFF]">
                Pricing
              </a>
            </li>
            <li className="hidden md:block mx-2">
              <a href="#services" className="text-[#493CFF]">
                FAQ
              </a>
            </li>
            <li className="hidden md:block mx-2">
              <a href="#services" className="text-[#493CFF]">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Sidebar */}
        <div
          ref={sidebarRef}
          className={`fixed sidebar z-[9999] top-0 right-0 h-[100vh] w-[18rem] bg-white shadow-lg transform ${
            isSidebarOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out z-[9999]`}
        >
          <div className="flex items-center justify-between px-3 pl-3">
            <h1 className="text-center text-gray-700 text-[2rem] font-semibold tracking-wider">
              WebCrafter
            </h1>
            <button className=" " onClick={toggleSidebar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <ul className="mt-[20px] font-semibold tracking-wider text-gray-600">
            <a href="#home" className="">
              <li className="p-4 border-b border-gray-200">Home</li>
            </a>
            <a href="#aboutus" className="">
              <li className="p-4 border-b border-gray-200">About</li>
            </a>
            <a href="#services" className="">
              <li className="p-4 border-b border-gray-200">Services</li>
            </a>
            <a href="#pricing" className="">
              <li className="p-4 border-b border-gray-200">Pricing</li>
            </a>
            <a href="#faq" className="">
              <li className="p-4 border-b border-gray-200">FAQ</li>
            </a>
            <a href="#contact" className="">
              <li className="p-4 border-b border-gray-200">Contact</li>
            </a>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
