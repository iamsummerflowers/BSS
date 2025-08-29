import React, { useState } from 'react';
import './ServiceCard.css';
import { Link } from 'react-router-dom';


function ServiceCard({ service, onGetQuote }) {

    const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
        className={`bg-white p-8 rounded-2xl shadow-xl border border-gray-200 relative overflow-hidden transition-all duration-300 ${
            isHovered ? 'transform -translate-y-3 shadow-2xl' : ''
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-600 to-blue-800"></div>
        
        {/* <div className="text-5xl mb-6">{service.icon}</div> */}
        
        <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            {service.title}
        </h3>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
            {service.description}
        </p>
        
        <ul className="space-y-3 mb-6">
            {service.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-700">
                    <span className="text-green-500 font-bold mr-3 w-fit">✓</span>
                    {feature}
                </li>
            ))}
        </ul>
        
        {/* <div className="text-2xl font-bold text-indigo-600 mb-6">
            {service.price}
        </div> */}
        
        <button 
            onClick={() => onGetQuote(service.title)}
            className="w-full bg-green-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-green-800 transform hover:-translate-y-0.5 transition-all duration-200"
        >
            Get Quote
        </button>
    </div>
  );
}

export default ServiceCard;