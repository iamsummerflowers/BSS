import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


function Header({ scrollY, currentSection }) {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigation = (item) => {
      if (item.type === 'section') {
          const element = document.getElementById(item.id);
          if (element) {
              const offsetTop = element.offsetTop - 80;
              window.scrollTo({
                  top: offsetTop,
                  behavior: 'smooth'
              });
          }
      } else if (item.type === 'page') {
          // Navigate to external page
          window.location.href = item.url;
      }
      setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const navItems = [
      { id: 'home', label: 'Home', type: 'page', url: '/' },
      { id: 'about', label: 'About', type: 'page', url: '/about' },
      { id: 'services', label: 'Services', type: 'page', url: '/services' },
      { id: 'contact', label: 'Contact', type: 'section' }
  ];


  return (
    <nav 
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 backdrop-blur-md transition-all duration-300 bg-white"
        style={{
            // background: scrollY > 100 ? 'rgba(15, 23, 42, 0.98)' : 'rgba(15, 23, 42, 0.95)'
        }}
    >
        <div className="flex justify-between items-center max-w-7xl mx-auto">
            <div className="text-xl sm:text-2xl font-bold text-black text-left">Beyond Sight Solutions</div>
            
            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-8">
                {navItems.map((item) => (
                    <li key={item.id}>
                        <HashLink 
                            to={item.url}
                            onClick={() => handleNavigation(item)}
                            className={`relative cursor-pointer transition-all duration-300 ${
                                currentSection === item.id && item.type === 'section'
                                    ? 'text-red-400' 
                                    : 'text-black hover:text-red-400'
                            }`}
                        >
                            {item.label}
                            {currentSection === item.id && item.type === 'section' && (
                                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-red-400 transition-all duration-300"></span>
                            )}
                        </HashLink>
                    </li>
                ))}
            </ul>

            {/* Mobile Menu Button */}
            <button 
                className="md:hidden text-black focus:outline-none flex justify-end mx-2 w-fit"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isMobileMenuOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
                <ul className="flex flex-col space-y-2">
                    {navItems.map((item) => (
                        <li key={item.id}>
                            <HashLink
                                to={item.url}
                                onClick={() => handleNavigation(item)} 
                                className={`block px-4 py-2 rounded cursor-pointer transition-all duration-300 ${
                                    currentSection === item.id && item.type === 'section' 
                                        ? 'text-red-400 bg-opacity-10' 
                                        : 'text-black hover:text-red-400 hover:bg-white hover:bg-opacity-10'
                                }`}
                            >
                                {item.label}
                            </HashLink>
                        </li>
                    ))}
                </ul>
            </div>
        )}
    </nav>
  );
}

export default Header;