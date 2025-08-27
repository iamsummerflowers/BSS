import React from 'react';
import './LogoSection.css';
import logo from '../assets/bss-logo.jpg';

function LogoSection() {
  return (
  <section 
    className="h-fit w-full max-w-full mx-auto mt-10 bg-none relative z-20 opacity-80 "
    id="home">
      <img 
        src={logo}
        alt="company logo"
        className = "z-10 relative h-full w-fit max-w-8xl p-1 rounded-xl mt-8"
      />
      {/* <div className="text-center text-white z-10 px-4 sm:px-8"> */}
          {/* <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 font-bold leading-tight">Welcome to the Future</h1> */}
          {/* <p className="text-lg sm:text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">Experience the power of parallax scrolling</p> */}
      {/* </div> */}
  </section>
  );
}

export default LogoSection;