import React, { useState } from 'react';
import './Story.css';
import { Link } from 'react-router-dom';

function Story() {

    const stats = [
        { number: '500+', label: 'Projects Completed' },
        { number: '150+', label: 'Happy Clients' },
        { number: '4.9', label: 'Average Rating' },
        { number: '24/7', label: 'Support Available' }
    ];

  return (
    <section className="bg-slate-50 py-24">
        <div className="max-w-6xl mx-auto px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8">Our Story</h2>
                    <div className="space-y-6 text-slate-600">
                        <p className="text-lg leading-relaxed">
                            Founded in 2020, ParallaxSite emerged from a simple observation: the web had become predictable. While technology advanced rapidly, most websites felt static and disconnected from their users.
                        </p>
                        <p className="text-lg leading-relaxed">
                            We set out to change that. Starting with a small team of passionate designers and developers, we began experimenting with parallax effects, interactive animations, and immersive storytelling techniques.
                        </p>
                        <p className="text-lg leading-relaxed">
                            Today, we're proud to have helped hundreds of businesses create digital experiences that truly engage their audiences and drive meaningful results.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                            <div className="text-3xl font-bold text-indigo-500 mb-2">
                                {stat.number}
                            </div>
                            <div className="text-slate-600 text-sm">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  );
}

export default Story;