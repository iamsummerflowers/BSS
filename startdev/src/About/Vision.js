import React, { useState } from 'react';
import './Vision.css';
import { Link } from 'react-router-dom';

function Vision() {

  return (
    <section id="vision" className="py-24 bg-yellow-800 flex items-center relative">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="max-w-6xl mx-auto px-8 text-white relative z-10">
            <div className="text-right">
                <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Vision</h2>
                <div className="max-w-4xl ml-auto">
                    <p className="text-lg leading-relaxed mb-6">
                        We envision a digital future where every interaction is meaningful, every experience is memorable, and every website tells a compelling story. Our goal is to be at the forefront of this transformation, leading the industry with innovative solutions that set new standards for web excellence.
                    </p>
                    <p className="text-lg leading-relaxed">
                        By 2030, we aim to have revolutionized how businesses connect with their audiences online, making the web a more engaging, accessible, and beautiful place for everyone.
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Vision;