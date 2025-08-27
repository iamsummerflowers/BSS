import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
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
      <footer className="bg-slate-800 text-white py-16" id="contact">
          <div className="max-w-6xl mx-auto px-8">
              <div className="grid md:grid-cols-4 gap-8 mb-8">
                  <div>
                      <h3 className="text-lg font-semibold text-white mb-4">Beyond Sight Solutions</h3>
                      <p className="text-slate-300 leading-relaxed">
                          Creating immersive digital experiences that transform businesses and engage audiences worldwide.
                      </p>
                  </div>
                  
                  <div>
                      <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
                      <div className="space-y-2">
                          <HashLink smooth to="/services/#grid" target="_self" rel="noopener noreferrer" className="block text-slate-300 hover:text-white transition-colors">Web Design</HashLink>
                          <HashLink smooth to="/services/#grid" target="_self" rel="noopener noreferrer" className="block text-slate-300 hover:text-white transition-colors">Development</HashLink>
                          <HashLink smooth to="/services/#grid" target="_self" rel="noopener noreferrer" className="block text-slate-300 hover:text-white transition-colors">UX/UI Design</HashLink>
                          <HashLink smooth to="/services/#grid" target="_self" rel="noopener noreferrer" className="block text-slate-300 hover:text-white transition-colors">Digital Strategy</HashLink>
                      </div>
                  </div>
                  
                  <div>
                      <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
                      <div className="space-y-2">
                          <HashLink smooth to="/about/#mission" target="_self" rel="noopener noreferrer" className="block text-slate-300 hover:text-white transition-colors">About Us</HashLink>
                          <HashLink smooth to="/about/#team" target="_self" rel="noopener noreferrer" className="block text-slate-300 hover:text-white transition-colors">Our Team</HashLink>
                          {/* <a href="#" className="block text-slate-300 hover:text-white transition-colors">Careers</a> */}
                          <HashLink smooth to="#contact" target="_self" rel="noopener noreferrer" className="block text-slate-300 hover:text-white transition-colors">Contact</HashLink>
                      </div>
                  </div>
                  
                  <div>
                      <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
                      <div className="space-y-2 text-slate-300">
                          <p className="flex">support@bss.com</p>
                          {/* <p>📞 +1 (555) 123-4567</p> */}
                          <p>Houston, TX</p>
                      </div>
                  </div>
              </div>
              
              <div className="border-t border-slate-600 pt-8 text-center text-slate-400">
                  <p>&copy; {currentYear} Beyond Sight Solutions. All rights reserved.</p>
              </div>
          </div>
      </footer>
    );
  }
  
  export default Footer;