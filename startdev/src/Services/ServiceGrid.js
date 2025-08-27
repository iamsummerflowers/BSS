import React, { useState } from 'react';
import './ServiceGrid.css';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard.js';



function ServiceGrid({ onGetQuote }) {

    const services = [
        {
            icon: '🎨',
            title: 'Web Design & Branding',
            description: 'Complete visual identity and website design that captures your brand essence and engages your audience.',
            features: [
                'Custom website design',
                'Brand identity development',
                'Logo and visual assets',
                'Style guide creation',
                'Responsive design'
            ],
            price: 'Starting at $2,500'
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
            icon: '🚀',
            title: 'Full Website Development',
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
            icon: '📱',
            title: 'Mobile App Development',
            description: 'Native and cross-platform mobile applications that extend your digital reach to smartphones and tablets.',
            features: [
                'iOS & Android apps',
                'Cross-platform development',
                'App store optimization',
                'Push notifications',
                'Analytics integration'
            ],
            price: 'Starting at $8,000'
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
            icon: '📊',
            title: 'Digital Strategy & Consulting',
            description: 'Strategic guidance and consulting to help you make informed decisions about your digital presence.',
            features: [
                'Digital strategy planning',
                'Technology consulting',
                'User experience audit',
                'Competitive analysis',
                'Growth recommendations'
            ],
            price: '$150/hour'
        }
    ];

  return (
    <section id="grid" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Choose Your Perfect Solution
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Whether you're a startup or an established business, we have the right package to elevate your online presence.
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