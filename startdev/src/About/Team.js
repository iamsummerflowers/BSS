import React, { useState } from 'react';
import './Team.css';
import { Link } from 'react-router-dom';

function Team() {

    const teamFunctions = [
        {
            icon: '💻',
            title: 'Developers',
            description: 'Our skilled development team brings designs to life with clean, efficient code. They specialize in modern frameworks, performance optimization, and creating seamless user experiences across all devices.',
            skills: ['React & Vue.js', 'Node.js & Python', 'Mobile Development', 'Cloud Architecture']
        },
        {
            icon: '🎨',
            title: 'Designers',
            description: 'Creative visionaries who craft beautiful, intuitive interfaces. Our design team focuses on user experience, brand identity, and creating memorable digital experiences that engage and convert.',
            skills: ['UI/UX Design', 'Brand Identity', 'Prototyping', 'Design Systems']
        },
        {
            icon: '📋',
            title: 'Project Managers',
            description: 'The orchestrators who ensure every project runs smoothly from concept to launch. They coordinate teams, manage timelines, and maintain clear communication with clients throughout the process.',
            skills: ['Agile Methodology', 'Client Relations', 'Timeline Management', 'Quality Assurance']
        }
    ];

  return (
    <section className="bg-white py-24" id="team">
        <div className="max-w-6xl mx-auto px-8">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Meet Our Team</h2>
                <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                    The creative minds and technical experts behind ParallaxSite's innovative digital experiences.
                </p>
            </div>

            {/* Owner Section */}
            <div className="mb-20">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 md:p-12 text-white text-center max-w-4xl mx-auto">
                    <div className="w-32 h-32 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-6">
                        AS
                    </div>
                    <h3 className="text-3xl font-bold mb-2">Alex Smith</h3>
                    <div className="text-xl text-indigo-200 font-medium mb-6">Founder & CEO</div>
                    <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-8">
                        With over 15 years of experience in digital innovation, Alex founded ParallaxSite with a vision to transform how businesses connect with their audiences online. His passion for cutting-edge technology and exceptional design drives our company's mission to create unforgettable digital experiences.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm">Digital Strategy</span>
                        <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm">Innovation Leadership</span>
                        <span className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm">Business Development</span>
                    </div>
                </div>
            </div>

            {/* Team Functions */}
            <div>
                <h3 className="text-3xl font-bold text-slate-800 text-center mb-12">Our Team Functions</h3>
                <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
                    {teamFunctions.map((func, index) => (
                        <div key={index} className="bg-slate-50 p-8 rounded-xl hover:transform hover:-translate-y-2 transition-all duration-300">
                            <div className="text-4xl mb-4">{func.icon}</div>
                            <h4 className="text-2xl font-bold text-slate-800 mb-4">{func.title}</h4>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                {func.description}
                            </p>
                            <div className="space-y-2">
                                <div className="text-sm font-semibold text-slate-700 mb-3">Key Expertise:</div>
                                {func.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm inline-block mr-2 mb-2">
                                        {skill}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
}

export default Team;