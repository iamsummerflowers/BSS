import React, { useState } from 'react';
import './ServiceHero.css';
import { Link } from 'react-router-dom';


function ServiceHero({ onGetStarted }) {

  return (
      <section className="h-screen bg-gradient-to-br from-indigo-500 via-purple-600 to-purple-700 flex items-center justify-center text-center text-white pt-20">
          <div className="max-w-4xl mx-auto px-6">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 opacity-1 animate-fade-in-up" 
                  style={{animationDelay: '0.3s'}}>
                  Our Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-1 animate-fade-in-up" 
                  style={{animationDelay: '0.5s'}}>
                  Transform your digital presence with our comprehensive web design and development solutions. From stunning visuals to powerful functionality.
              </p>
              <button 
                  onClick={onGetStarted}
                  className="inline-block px-8 py-4 bg-white/20 text-white rounded-full font-semibold text-lg hover:bg-white/30 transform hover:-translate-y-1 transition-all duration-300 border-2 border-white/30 opacity-1 animate-fade-in-up"
                  style={{animationDelay: '0.7s'}}
              >
                  Get Started Today
              </button>
          </div>
      </section>
  );
}

export default ServiceHero;