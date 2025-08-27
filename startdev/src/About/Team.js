import React, { useState } from 'react';
import './Team.css';
import { Link } from 'react-router-dom';

function Team() {

    const teamMembers = [
        {
            name: 'Alex Smith',
            role: 'Creative Director',
            bio: 'Leading our design vision with 10+ years of experience in creating award-winning digital experiences.',
            initials: 'AS'
        },
        {
            name: 'Maria Johnson',
            role: 'Lead Developer',
            bio: 'Full-stack expert specializing in modern web technologies and performance optimization.',
            initials: 'MJ'
        },
        {
            name: 'David Chen',
            role: 'UX Strategist',
            bio: 'Passionate about user-centered design and creating intuitive digital experiences.',
            initials: 'DC'
        },
        {
            name: 'Sarah Rodriguez',
            role: 'Project Manager',
            bio: 'Ensuring seamless project delivery and client satisfaction with meticulous attention to detail.',
            initials: 'SR'
        }
    ];

  return (
    <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Meet Our Team</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-16">
                The creative minds and technical experts behind ParallaxSite's innovative digital experiences.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                    <div key={index} className="bg-slate-50 p-8 rounded-xl hover:transform hover:-translate-y-2 transition-all duration-300">
                        <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-semibold mx-auto mb-4">
                            {member.initials}
                        </div>
                        <h3 className="text-xl font-semibold text-slate-800 mb-2">
                            {member.name}
                        </h3>
                        <div className="text-indigo-500 font-medium mb-4">
                            {member.role}
                        </div>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            {member.bio}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}

export default Team;