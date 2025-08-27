import React, { useState } from 'react';
import './Mission.css';
import { Link } from 'react-router-dom';

function Mission() {

  return (
    <section id="mission" className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center relative">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="max-w-6xl mx-auto px-8 text-white relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Mission</h2>
            <div className="max-w-4xl">
                <p className="text-lg leading-relaxed mb-6">
                    We believe in the power of exceptional digital experiences to transform businesses and connect people. Our mission is to push the boundaries of what's possible on the web, creating immersive, engaging, and meaningful interactions that leave lasting impressions.
                </p>
                <p className="text-lg leading-relaxed">
                    Through innovative design, cutting-edge technology, and a deep understanding of user behavior, we craft digital solutions that don't just meet expectations—they exceed them.
                </p>
            </div>
        </div>
    </section>
  );
}

export default Mission;