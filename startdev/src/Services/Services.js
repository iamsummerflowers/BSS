import React, { useState } from 'react';
import './Services.css';
import { Link } from 'react-router-dom';
import Header from '../Header/Header.js';
import ServiceHero from './ServiceHero.js';
import ServiceGrid from './ServiceGrid.js';

// import Story from './Story.js';
// import Vision from './Vision.js';
// import Team from './Team.js';
import Contact from '../Contact/Contact.js';
import Footer from '../Footer/Footer.js';






function Services() {

  const scrollToConsultation = () => {
      document.getElementById('contact')?.scrollIntoView({ 
          behavior: 'smooth' 
      });
  };

  const handleGetQuote = (serviceName) => {
      // Pre-fill the service in the consultation form
      const serviceSelect = document.querySelector('select[name="service"]');
      if (serviceSelect) {
          const serviceMap = {
              'Web Design & Branding': 'web-design',
              'Performance Optimization': 'performance',
              'Full Website Development': 'development',
              'Mobile App Development': 'mobile',
              'Maintenance & Support': 'maintenance',
              'Digital Strategy & Consulting': 'consulting'
          };
          serviceSelect.value = serviceMap[serviceName] || '';
      }
      scrollToConsultation();
  };

  return (
    <div>
        <Header />
        <ServiceHero onGetStarted={scrollToConsultation}/>
        <ServiceGrid onGetQuote={handleGetQuote}/>
        <Contact />
        <Footer />
    </div>
  );
}

export default Services;