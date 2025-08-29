import React, { useState, useRef, useEffect } from 'react';
import './ServicesRabbit.css';
import rubix from '../assets/olav-ahrens.jpg';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';



function ServicesRabbit() {

    // const handleViewServices = () => {
    //     alert('Services page would open here!');
    // };

  return (
    <section className="h-1/3 min-h-96 relative overflow-hidden flex items-center justify-center" id="services">
        <div className="services-gradient absolute inset-0"></div>
        <div className="absolute inset-0 bg-green-700 bg-opacity-60 z-10"></div>
        <div className="relative z-20 text-center text-white max-w-4xl px-4 sm:px-8 mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6 font-bold leading-tight">How can we best help you?</h2>
            <p className="text-base sm:text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">Feel free to check out the many ways Beyond Sight Solutions can best serve your business.</p>
            <button 
                // onClick={handleViewServices}
                className="bg-green-900 hover:bg-green-100 hover:text-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto"
            >
                <HashLink to="./services/#servicehero">Take a Look!</HashLink>
            </button>
        </div>
    </section>
  );
}

export default ServicesRabbit;