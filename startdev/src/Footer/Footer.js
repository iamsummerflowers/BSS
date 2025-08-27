import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { VscGithub } from "react-icons/vsc";


function Footer() {

  const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
          const offsetTop = element.offsetTop - 80;
          window.scrollTo({
              top: offsetTop,
              behavior: 'smooth'
          });
      }
  };

  const handleEmailClick = () => {
      window.location.href = 'mailto:hello@parallaxsite.com';
  };
  
  const currentYear = new Date().getFullYear();
    return (
      <footer className="bg-slate-900 text-white py-12 sm:py-16 px-4 sm:px-8 text-center" id="contact">
          <div className="max-w-6xl mx-auto">
              <h3 className="text-xl sm:text-2xl mb-4 font-bold">Get In Touch</h3>
              <p className="opacity-80 mb-8 text-sm sm:text-base max-w-2xl mx-auto">Ready to start your next project? Let's create something amazing together.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-8">
                  <a onClick={() => scrollToSection('home')} className="text-white hover:text-blue-400 transition-colors cursor-pointer py-2 sm:py-0">Home</a>
                  <a onClick={() => scrollToSection('about')} className="text-white hover:text-blue-400 transition-colors cursor-pointer py-2 sm:py-0">About</a>
                  <a onClick={() => scrollToSection('services')} className="text-white hover:text-blue-400 transition-colors cursor-pointer py-2 sm:py-0">Services</a>
                  <a onClick={handleEmailClick} className="text-white hover:text-blue-400 transition-colors cursor-pointer py-2 sm:py-0">Contact</a>
              </div>
              <div className="border-t border-slate-700 pt-6 sm:pt-8 opacity-60">
                  <p className="text-sm sm:text-base">&copy; {currentYear} Beyond Sight Solutions. All rights reserved.</p>
              </div>
          </div>
      </footer>
    );
  }
  
  export default Footer;