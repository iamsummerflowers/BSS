import React, { useState, useEffect } from 'react';
import logo from './assets/logoBrain.svg';
import './App.css';
import { Link } from 'react-router-dom';
import Header from './Header/Header.js';
import LogoSection from './Main/LogoSection.js';
import Video from './Main/Video.js';
import AboutRabbit from './Main/AboutRabbit.js';

import Footer from './Footer/Footer.js';


function App() {

  const [scrollY, setScrollY] = useState(0);
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
      let ticking = false;

      const handleScroll = () => {
          if (!ticking) {
              requestAnimationFrame(() => {
                  const scrollPosition = window.pageYOffset;
                  setScrollY(scrollPosition);
                  
                  // Determine current section based on scroll position
                  const sections = ['home', 'about', 'services', 'contact'];
                  const windowHeight = window.innerHeight;
                  
                  for (let i = sections.length - 1; i >= 0; i--) {
                      const element = document.getElementById(sections[i]);
                      if (element) {
                          const rect = element.getBoundingClientRect();
                          if (rect.top <= windowHeight / 2) {
                              setCurrentSection(sections[i]);
                              break;
                          }
                      }
                  }
                  
                  ticking = false;
              });
              ticking = true;
          }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className=" font-sans leading-relaxed flex flex-col justify-center">
      <Header scrollY={scrollY} currentSection={currentSection}/>
      <LogoSection />
      <Video scrollY={scrollY} />
      <AboutRabbit scrollY={scrollY} />
      <AboutRabbit scrollY={scrollY} />
      <Footer />
      <h1 className="text-3xl font-bold underline">Testing TailwindCSS</h1>
    </div>
  );
}

export default App;
