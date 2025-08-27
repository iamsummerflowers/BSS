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
      <footer className="bg-slate-900 text-white py-2 sm:py-16 px-4 sm:px-8 text-center" id="contact">
          <div className="max-w-6xl mx-auto">
              <div className="opacity-60">
                  <p className="text-sm sm:text-base">&copy; {currentYear} Beyond Sight Solutions. All rights reserved.</p>
              </div>
          </div>
      </footer>
    );
  }
  
  export default Footer;