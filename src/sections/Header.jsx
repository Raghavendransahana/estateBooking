import React from "react";
import Navbar from "../components/Navbar";

const Header = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/header_img.png')" }}
      id="header"
    >
      <Navbar />
      <div className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white">
        <h2 className="text-3xl sm:text-6xl md:text-[56px] inline-block max-w-3x font-semibold pt-20 poppins-bold-italic">
          EXPLORE YOUR DREAM HOME
        </h2>
        <div className="mt-16 flex sm:items-start justify-center">
          <a
            href="#Projects"
            className="border border-t-stone-50 px-8 py-3 rounded hover:bg-blue-950 hover:text-yellow-300"
          >
            Projects
          </a>
          <a
            href="#Contact"
            className="border border-t-stone-50 px-8 py-3 rounded hover:bg-blue-950 hover:text-yellow-300"
          >
            Contact us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
