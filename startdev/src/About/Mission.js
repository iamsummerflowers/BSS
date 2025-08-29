import React, { useState } from 'react';
import './Mission.css';
import { Link } from 'react-router-dom';

function Mission() {

  return (
    <section className="h-screen bg-red-400 flex items-center relative">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="max-w-6xl mx-auto px-8 text-white relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">OUR MISSION</h2>
            <div className="max-w-4xl">
                <p className="text-lg leading-relaxed mb-6">
                    We exist to <strong>ensure ideas are brought to fruition</strong>. 
                    At Beyond Sight Solutions, we transform concepts into reality by creating clear pathways to success.
                    We empower businesses with strategic guidance, innovative digital solutions, and unwavering support that turns vision into tangible realities. 
                    Our commitment to excellence, integrity, and innovative solutioning is how we help our clients navigate challenges and unlock the full potential of their ideas in an ever-evolving digital landscape.
                </p>
                <p className="text-lg leading-relaxed">
                    We believe that <strong>every challenge</strong>, no matter how complex, <strong>has a solution waiting to be discovered. </strong>
                    Like a stubborn jar lid that finally gives way with the right technique, business obstacles are simply puzzles waiting for the right approach. 
                    Our team delights in those "aha!" moments when the insurmountable problem crumbles before creative thinking and strategic implementation. 
                    We've never met a business challenge we couldn't tackle—though some have certainly kept us up at night with coffee (or a glass of wine) and whiteboards before revealing their secrets!
                </p>
            </div>
        </div>
    </section>
  );
}

export default Mission;