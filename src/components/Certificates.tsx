"use client";

import React from 'react';
import PixelBorder from './PixelBorder';
import { Award } from 'lucide-react';

const Certificates = () => {
    const certs = [
        { title: 'AWS_CERTIFIED_DEVELOPER', issuer: 'AMAZON', date: '2023' },
        { title: 'GOOGLE_CLOUD_PROFESSIONAL', issuer: 'GOOGLE', date: '2022' },
        { title: 'META_FRONTEND_SPECIALIST', issuer: 'META', date: '2021' },
        { title: 'AZURE_SOLUTIONS_ARCHITECT', issuer: 'MICROSOFT', date: '2020' }
    ];

    return (
        <section id="certificates" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl mb-12 text-center text-white">&lt;ACHIEVEMENTS_UNLOCKED /&gt;</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {certs.map((cert, index) => (
                        <div key={index} className="group transition-transform duration-300 hover:-translate-y-4">
                            <PixelBorder className="h-full flex flex-col items-center text-center bg-retro-black/60 group-hover:bg-retro-black shadow-lg">
                                <Award size={48} className="mb-4 text-retro-yellow" />
                                <h3 className="text-sm font-bold mb-2 group-hover:text-retro-green transition-colors">{cert.title}</h3>
                                <p className="text-xs opacity-60 uppercase">{cert.issuer} • {cert.date}</p>
                            </PixelBorder>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
