import React, { useState, useRef, useEffect } from 'react';
import './Video.css';


function Video({ scrollY }) {

  const videoBgRef = useRef(null);

  useEffect(() => {
    if (videoBgRef.current) {
        const videoSection = videoBgRef.current.closest('.video-section');
        const videoRect = videoSection.getBoundingClientRect();
        
        if (videoRect.top < window.innerHeight && videoRect.bottom > 0) {
            const videoOffset = (window.innerHeight - videoRect.top) * 0.8;
            videoBgRef.current.style.transform = `translateY(${-videoOffset}px)`;
        }
    }
}, [scrollY]);

  return (
    <section className="min-h-96 relative overflow-hidden flex items-center justify-center video-section">
        <div 
            ref={videoBgRef}
            className="video-bg absolute w-full bg-cover bg-center bg-no-repeat transition-transform duration-100 ease-out"
            style={{ top: '-120%', height: '340%' }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
        <div className="relative z-20 text-center text-white max-w-4xl px-4 sm:px-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 font-bold leading-tight">Immersive Experience</h2>
            <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-2xl mx-auto">Discover how motion and depth create engaging digital experiences that captivate your audience and tell your story in a completely new way.</p>
        </div>
    </section>
  );
}

export default Video;