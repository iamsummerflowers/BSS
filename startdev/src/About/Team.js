import React, { useState } from 'react';
import './Team.css';
import { Link } from 'react-router-dom';
import sf from '../assets/summflowershs.jpg'

function Team() {

    const teamFunctions = [
        {
            icon: '💻',
            title: 'Business Analysts',
            description: 'Our expert business analysts bridge the gap between problems and solutions through data-driven insights. They excel at identifying market opportunities, evaluating business processes, and translating complex requirements into actionable strategies that drive measurable results.',
            skills: ['React & Vue.js', 'Node.js & Python', 'Mobile Development', 'Cloud Architecture']
        },
        {
            icon: '🎨',
            title: 'UI/UX Designers',
            description: 'Creative visionaries who combine aesthetic vision with user psychology to create interfaces that delight and perform. Our design team focuses on user experience, brand identity, and creating memorable digital experiences that engage and convert.',
            skills: ['UI/UX Design', 'Brand Identity', 'Prototyping', 'Design Systems']
        },
        {
            icon: '📋',
            title: 'Developers',
            description: 'Our development team transforms concepts into functional digital experiences through coding and technical innovation. They specialize in modern frameworks, responsive implementations, and creating scalable solutions that ensure optimal performance, security, and user satisfaction across all platforms and devices.',
            skills: ['React & Vue.js', 'Node.js & Python', 'Mobile Development', 'Cloud Architecture']
        },
        {
            icon: '📋',
            title: 'Digital Marketing Team',
            description: 'Strategic digital marketing specialists who drive brand visibility and engagement across channels. They leverage data analytics, SEO expertise, and content strategy to connect businesses with their target audiences and generate measurable ROI from digital campaigns.',
            skills: ['Agile Methodology', 'Client Relations', 'Timeline Management', 'Quality Assurance']
        }
    ];

  return (
    <section className="bg-white py-24" id="team">
        <div className="max-w-6xl mx-auto px-8">
            <div className="text-center mb-10">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Meet Our Team</h2>
                <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                    The creative minds and technical experts behind the experience.
                </p>
            </div>

            {/* Owner Section */}
            <div className="mb-10">
                <div className="bg-yellow-800 rounded-md p-8 md:p-12 text-white text-center max-w-4xl mx-auto">
                    {/* <div className="w-32 h-32 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-6">
                        <img src={sf} className="w-32 h-32 object-cover bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white text-4xl font-bold mx-auto mb-6"/>
                    </div> */}
                    <img src={sf} className="w-32 h-32 object-cover object-[25%_25%] rounded-full mx-auto mb-6"/>
                    <h3 className="text-3xl font-bold mb-2">Summer Flowers</h3>
                    <div className="text-xl text-white font-medium mb-6">Founder & CEO</div>
                    <p className="text-lg leading-relaxed max-w-3xl mx-auto mb-8">
                        With over 10 years of experience in strategic delivery &  digital innovation, 
                        Summer founded Beyond Sight Solutions to empower prospective business owners to move beyond perceived limitations, 
                        creating a ripple effect for innovation across industries and communities worldwide.
                    </p>
                    {/* <div className="flex flex-wrap justify-center gap-4">
                        <span className="w-fit bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm">Digital Strategy</span>
                        <span className="w-fit bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm">Innovation Leadership</span>
                        <span className="w-fit bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-sm">Business Development</span>
                    </div> */}
                </div>
            </div>

            {/* Team Functions */}
            <div>
                <h3 className="text-3xl font-bold text-slate-800 text-center mb-12">...working together to make it happen!</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto bg">
                    {teamFunctions.map((func, index) => (
                        <div key={index} className="bg-slate-100 p-8 rounded-md hover:transform hover:-translate-y-2 transition-all duration-300">
                            {/* <div className="text-4xl mb-4">{func.icon}</div> */}
                            <h4 className="text-2xl font-bold text-slate-800 mb-4">{func.title}</h4>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                {func.description}
                            </p>
                            {/* <div className="space-y-2">
                                <div className="text-sm font-semibold text-slate-700 mb-3">Key Expertise:</div>
                                {func.skills.map((skill, skillIndex) => (
                                    <div key={skillIndex} className="w-fit bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm inline-block mr-2 mb-2">
                                        {skill}
                                    </div>
                                ))}
                            </div> */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
}

export default Team;