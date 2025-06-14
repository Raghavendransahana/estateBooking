import React from "react";
import Header from "./sections/Header";
import About from "./sections/About";
import Project from "./sections/Project";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
const App = () => {
  return (
    <div className="w-full overflow-hidden ">
      <Header />
      <About />
      <Project/>
      <Testimonials />
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
