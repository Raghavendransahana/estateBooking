import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
const Navbar = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [show]);
  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div
        className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 
       lg:px-32 bg-transparent"
      >
        <img src={assets.logo} alt="Logo" />
        <ul className="hidden md:flex gap-7 text-white">
          <a
            href="#Header"
            className="cursor-pointer hover:text-gray-400 behaviour-smooth"
          >
            Home
          </a>
          <a href="#About" className="cursor-pointer hover:text-gray-400">
            About
          </a>
          <a href="#Projects" className="cursor-pointer hover:text-gray-400">
            Projects
          </a>
          <a
            href="#Testimonials"
            className="cursor-pointer hover:text-gray-400"
          >
            Testimonials
          </a>
        </ul>
        <button className="hidden md:block bg-white px-8 py-2 rounded">
          Signup
        </button>
        <div className="md:hidden">
          <img
            src={assets.menu_icon}
            onClick={() => setShow(true)}
            className="cursor-pointer w-7"
            alt="Menu"
          />
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-white transition-all ${
          show ? "w-full h-full" : "hidden"
        }`}
      >
        <ul className="md:hidden flex flex-col items-center gap-6 mt-10 text-2xl font-medium text-black">
          <div className="flex justify-end w-full p-6">
            <img
              src={assets.cross_icon}
              className="w-6 cursor-pointer"
              alt="Close"
              onClick={() => setShow(false)}
            />
          </div>
          <a
            href="#Header"
            className="px-4 py-2 rounded-full"
            onClick={() => setShow(false)}
          >
            Home
          </a>
          <a
            href="#About"
            className="px-4 py-2 rounded-full"
            onClick={() => setShow(false)}
          >
            About
          </a>
          <a
            href="#Projects"
            className="px-4 py-2 rounded-full"
            onClick={() => setShow(false)}
          >
            Projects
          </a>
          <a
            href="#Testimonials"
            className="px-4 py-2 rounded-full"
            onClick={() => setShow(false)}
          >
            Testimonials
          </a>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
