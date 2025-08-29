import React, { useState } from 'react';
import './Story.css';
import { Link } from 'react-router-dom';

function Story() {

    const stats = [
        { number: '50+', label: 'Projects Completed' },
        { number: '92%', label: 'Client Retention Rate' },
        { number: '4.9', label: 'Average Rating' },
        { number: '20+', label: 'Insutries Served' }
    ];

  return (
    <section className="bg-slate-50 py-24">
        <div className="max-w-6xl mx-auto px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-8">Our Story</h2>
                    <div className="space-y-6 text-slate-600">
                        <p className="text-lg leading-relaxed">
                            Founded in 2020, Beyond Sight Solutions emerged from a simple, intuitive observation: good ideas should always come to fruition. 
                            It was also observed that, in addition to foundational understanding, businesses need both compelling digital presence and sustainable growth strategies to truly succeed. 
                            {/* While many agencies focused solely on aesthetics or profitability, we recognized the power of balancing research, technology, and strategic growth. */}
                        </p>
                        <p className="text-lg leading-relaxed">
                            We built our company at the intersections of creativity, technology, and business.
                            Our team combines expertise in immersive digital experiences with deep knowledge of business viability assessment, market analysis, and strategic planning.
                        </p>
                        <p className="text-lg leading-relaxed">
                            Today, we're proud of the organizations we’ve helped not only create engaging digital experiences but also develop viable business models that drive meaningful long-term results.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                            <div className="text-3xl font-bold text-slate-600 mb-2">
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