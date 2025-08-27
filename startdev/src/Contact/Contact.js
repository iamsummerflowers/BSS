import React from 'react';
import { useState, useEffect, useRef } from 'react';
import './Contact.css';
import ContactForm from './ContactForm.js';
import { Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";





function Contact() {

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
            }
        },
        { threshold: 0.1 }
    );






    
    if (sectionRef.current) {
        observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  
  return (
    <section id="contact" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="max-w-4xl mx-auto px-6">
          <div className={`text-center mb-16 fade-in ${isVisible ? 'visible' : ''}`}>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Don't Hesitate to Reach Out.</h2>
              <p className="text-xl text-gray-600">We're here to help you every step of the way.</p>
          </div>

          <div className="grid md:grid-cols-1 gap-12">

              <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
                  <ContactForm />
              </div>
          </div>
      </div>
    </section>
  );
}

export default Contact;