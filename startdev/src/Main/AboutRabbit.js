import React, { useState, useRef, useEffect } from 'react';
import './AbboutRabbit.css';
import rubix from '../assets/olav-ahrens.jpg';
import { Link } from 'react-router-dom';



function AbboutRabbit({ scrollY }) {

  const imageBgRef = useRef(null);
  // const imageUrl = 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
    const imageUrl = rubix;

  useEffect(() => {
      if (imageBgRef.current) {
          const imageSection = imageBgRef.current.closest('.image-section');
          const imageRect = imageSection.getBoundingClientRect();
          
          if (imageRect.top < window.innerHeight && imageRect.bottom > 0) {
              const imageOffset = (window.innerHeight - imageRect.top) * 0.2;
              imageBgRef.current.style.transform = `translateY(${-imageOffset}px)`;
          }
      }
  }, [scrollY]);

  const handleLearnMore = () => {
      const element = document.getElementById('services');
      if (element) {
          const offsetTop = element.offsetTop - 80;
          window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
          });
      }
  };

  return (
    <section className="h-screen min-h-80 relative overflow-hidden flex items-center image-section">
        <div 
            ref={imageBgRef}
            className="absolute w-full bg-cover bg-center bg-no-repeat transition-transform duration-100 ease-out"
            style={{ 
                top: '-10%', 
                height: '160%',
                backgroundImage: `url("${imageUrl}")`
            }}
        ></div>
        <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-slate-900 bg-opacity-90 z-10 flex items-center p-4 sm:p-8 lg:p-16">
            <div className="text-white max-w-lg mx-auto lg:mx-0">
                <h2 className="text-3xl sm:text-4xl lg:text-6xl mb-6 font-bold leading-tight">About Us</h2>
                <p className="text-base sm:text-2xl mb-8 opacity-90">
                  We believe in looking 
                    <span className="font-bold"> beyond the roadblocks and towards solutions. </span>
                  Our company provides tailored and affordable services aimed to help your business save time, resources, and energy as you navigate towards your intended vision. 
                </p>
                <button 
                    // onClick={handleLearnMore}
                    className="bg-blue-900 hover:bg-red-400 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
                >
                    <Link to="./about">Read More</Link>
                </button>
            </div>
        </div>
    </section>
  );
}

export default AbboutRabbit;