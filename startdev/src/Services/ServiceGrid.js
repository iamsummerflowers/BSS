import React, { useState } from 'react';
import './ServiceGrid.css';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard.js';



function ServiceGrid({ onGetQuote }) {

 const services = [
        {
            icon: '💼',
            title: 'Viability Assessment',
            description: 'Comprehensive analysis and planning to ensure your business idea is viable and set for success.',
            features: [
                'Market research',
                'Competitive analysis',
                'Financial projections',
                'Risk assessment',
                'Growth strategy'
            ],
            price: 'Starting at $2,000'
        },
        {
            icon: '🎨',
            title: 'UI/UX Research & Design',
            description: 'User-centered design process that creates intuitive, engaging interfaces based on thorough research.',
            features: [
                'User research',
                'Wireframing',
                'Prototyping',
                'Usability testing',
                'Visual design'
            ],
            price: 'Starting at $3,500'
        },
        {
            icon: '🚀',
            title: 'Website Development',
            description: 'Complete website development with modern features, CMS integration, and ongoing support.',
            features: [
                'Custom development',
                'CMS integration',
                'E-commerce functionality',
                'Database design',
                '3 months support'
            ],
            price: 'Starting at $4,500'
        },
        {
            icon: '⚡',
            title: 'Performance Optimization',
            description: 'Supercharge your website\'s speed and performance for better user experience and search rankings.',
            features: [
                'Site speed optimization',
                'SEO improvements',
                'Mobile optimization',
                'Core Web Vitals',
                'Performance monitoring'
            ],
            price: 'Starting at $1,200'
        },
        {
            icon: '🔧',
            title: 'Maintenance & Support',
            description: 'Ongoing website maintenance, security updates, and technical support to keep your site running smoothly.',
            features: [
                'Regular updates',
                'Security monitoring',
                'Backup management',
                'Technical support',
                'Performance reports'
            ],
            price: '$200/month'
        },
        {
            icon: '📣',
            title: 'Digital Marketing Strategy',
            description: 'Comprehensive digital marketing strategies to increase your online visibility and drive targeted traffic.',
            features: [
                'SEO optimization',
                'Content marketing',
                'Social media management',
                'PPC advertising',
                'Email marketing campaigns'
            ],
            price: 'Starting at $1,800/month'
        }
    ];

  return (
    <section id="grid" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    What do you need help with?
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Choose a package best suited for what you're trying to tackle!
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index} 
                        service={service} 
                        onGetQuote={onGetQuote}
                    />
                ))}
            </div>
        </div>
    </section>
  );
}

export default ServiceGrid;