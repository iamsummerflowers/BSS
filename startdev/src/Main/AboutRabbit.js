import React, { useState, useRef, useEffect } from 'react';
import './AbboutRabbit.css';

function AbboutRabbit({ scrollY }) {

  const imageBgRef = useRef(null);

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
    <section className="min-h-96 relative overflow-hidden flex items-center image-section">
        <div 
            ref={imageBgRef}
            className="image-bg absolute w-full bg-cover bg-center bg-no-repeat transition-transform duration-100 ease-out"
            style={{ top: '-30%', height: '160%' }}
        ></div>
        <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-slate-900 bg-opacity-90 z-10 flex items-center p-4 sm:p-8 lg:p-16">
            <div className="text-white max-w-lg mx-auto lg:mx-0">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 font-bold leading-tight">Transform Your Vision</h2>
                <p className="text-base sm:text-lg mb-8 opacity-90">We create stunning digital experiences that combine beautiful design with cutting-edge technology. Our team specializes in bringing your ideas to life through innovative web solutions.</p>
                <button 
                    onClick={handleLearnMore}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
                >
                    Learn More
                </button>
            </div>
        </div>
    </section>
  );
}

export default AbboutRabbit;