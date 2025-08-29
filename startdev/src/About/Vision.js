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
                <div className="max-w-4xl ml-auto text-left">
                    <p className="text-lg leading-relaxed mb-6">
                        We see a future where Beyond Sight Solutions stands as the trusted partner for visionaries at every stage of their journey
                         – where our collaborative problem-solving approach becomes the <strong>gold standard for business transformation</strong>,
                         and where our digital solutions are recognized not just for their aesthetic appeal but for their <strong>tangible contribution to business growth and sustainability.</strong>
                    </p>
                    <p className="text-lg leading-relaxed">
                        In this future, we've built a diverse global team united by our passion for solving complex challenges, celebrating the unique perspectives that lead to breakthrough solutions, 
                        and maintaining our founding commitment to integrity and excellence even as we scale.
                    </p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Vision;