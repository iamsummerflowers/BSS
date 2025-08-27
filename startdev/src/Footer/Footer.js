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
                          <a href="#" className="block text-slate-300 hover:text-white transition-colors">Web Design</a>
                          <a href="#" className="block text-slate-300 hover:text-white transition-colors">Development</a>
                          <a href="#" className="block text-slate-300 hover:text-white transition-colors">UX/UI Design</a>
                          <a href="#" className="block text-slate-300 hover:text-white transition-colors">Digital Strategy</a>
                      </div>
                  </div>
                  
                  <div>
                      <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
                      <div className="space-y-2">
                          <a href="#" className="block text-slate-300 hover:text-white transition-colors">About Us</a>
                          <a href="#" className="block text-slate-300 hover:text-white transition-colors">Our Team</a>
                          {/* <a href="#" className="block text-slate-300 hover:text-white transition-colors">Careers</a> */}
                          <a href="#" className="block text-slate-300 hover:text-white transition-colors">Contact</a>
                      </div>
                  </div>
                  
                  <div>
                      <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
                      <div className="space-y-2 text-slate-300">
                          <p>📧 <a href="mailto:hello@parallaxsite.com" className="hover:text-white transition-colors">hello@parallaxsite.com</a></p>
                          <p>📞 +1 (555) 123-4567</p>
                          <p>📍Houston, TX</p>
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