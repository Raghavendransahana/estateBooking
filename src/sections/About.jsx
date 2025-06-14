import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center 
    container mx-auto sm:p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="About"
    >
      <div className="flex text-center items-center">
        <h1 className="text-3xl">
          ABOUT{" "}
          <span className="text-2xl block underline-offset-4 decoration-1 under font-light ">
            OUR BRAND
          </span>
          <p className="text-sm">
            Passionate About Properties,We are dedicated for your vision
          </p>
        </h1>
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start mb:gap-20">
        <img
          src={assets.brand_img}
          alt=""
          className="w-full sm:w-1/2 max-w-lg mr-40 mt-10"
        />

        <div className="flex flex-col item -center md:items-start mt-20 text-gray-600 ">
          <div className="grid grid-cols-2  gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p>Years of Experience</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">12+</p>
              <p>Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">20+</p>
              <p>Mn.Sq.Ft.Delivered</p>
            </div>
            <div>
              <p className="text-4xl font-medium text-gray-800">25+</p>
              <p>Ongoing Projects </p>
            </div>
          </div>
          <p className="my-10 max-w-lg">
            We are a team of passionate and
            <h6>footer information</h6> dedicated individuals who are committed
            to delivering exceptional results. With years
          </p>
          <button className="bg-blue-600 text-white p-4 rounded font-semibold">
            Learn more..
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
