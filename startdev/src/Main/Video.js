import React, { useState, useRef, useEffect } from 'react';
import './Video.css';
import video from '../assets/ami-Bornstein.mp4';



function Video({ scrollY }) {

  const videoBgRef = useRef(null);

  useEffect(() => {
    if (videoBgRef.current) {
        const videoSection = videoBgRef.current.closest('.video-section');
        const videoRect = videoSection.getBoundingClientRect();
        
        if (videoRect.top < window.innerHeight && videoRect.bottom > 0) {
            const videoOffset = (window.innerHeight - videoRect.top) * 0.4;
            videoBgRef.current.style.transform = `translateY(${-videoOffset}px)`;
        }
    }
}, [scrollY]);

  return (
    <section className="w-screen max-w-8xl min-h-80 h-5/6 flex flex-col align-center justify-center my-0 video-section bg-blue-400" id="about">
        <video 
            ref={videoBgRef}
            className="absolute w-full h-80 mx-0 p-auto object-cover transition-transform duration-100 ease-out"
            style={{ minWidth: '100%', minHeight: '100%' }}
            autoPlay
            muted
            loop
            playsInline
        >
            <source src={video} type="video/mp4" />
            <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
            {/* <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
            <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" /> */}
        </video>
        {/* Fallback background image if video fails to load */}
        {/* <div className="video-bg absolute w-full h-full bg-cover bg-center bg-no-repeat opacity-0"></div> */}
        {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div> */}
        <div className="relative z-20 text-center text-black my-auto px-4 sm:px-8 bg-none" >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 font-bold leading-tight">IDENTIFY | ASSESS | RESOLVE | GROW</h2>
            <p className="text-base sm:text-lg md:text-xl opacity-90 max-w-2xl mx-auto">Let's Solve It Together.</p>
        </div>
    </section>
  );
}

export default Video;