import React, {  useState } from "react";
import { assets, projectsData } from "../assets/assets";

const Project = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
//   const [showw, setShow] = useState(1);

//   useEffect(()=>{
//     const show1 =() =>{
        
//         if(window.innerWidth >=1024){
//              setShow(projectsData.length);
//         }
//         else{
//             setShow(1);
//         }
//     }
// },[])
  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    )
  };

  return (
    <div
      className="flex flex-col items-center justify-center 
    container mx-auto sm:p-14 md:px-20 lg:px-32 w-full overflow-hidden"
      id="Projects"
    >
      <div className="flex text-center items-center mt-3">
        <h1 className="text-3xl">
          PROJECTS
          <span className="text-2xl block underline-offset-4 decoration-1 under font-light ">
            OUR BRAND
          </span>
          <p className="text-sm">
            Passionate About Properties,We are dedicated for your vision
          </p>
        </h1>
      </div>
      <div className="flex justify-end items-center mb-8 mt-3">
        <button
          onClick={prevProject}
          className="bg-lime-100 text-white p-4 rounded font-semibold mr-3"
          aria-label="previous">
          <img src={assets.left_arrow} alt="" />{" "}
        </button>
        <button
          onClick={nextProject}
          className="bg-lime-100 text-white p-4 rounded font-semibold"
          aria-label="next"
        >
          <img src={assets.right_arrow} alt="" />{" "}
        </button>
      </div>
      <div className="overflow-hidden">
        <div
          className="flex gap-8 transition-tranform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${
              (currentIndex * 100) / projectsData.length
            }%)`,
          }}
        >
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-full sm:w-1/4 "
            >
              <img src={project.image} alt="" className="w-full h-auto mb-14" />
              <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                <div className="inline-block bg-white w-3/4 px-4 py-2 shawdow-md">
                  <h2 className="text-xl font-semibold text-gray-800">
                    {project.title}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    {project.price} <span>|</span>
                    {project.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
