import React from 'react';
import { Star } from 'lucide-react';
import PixelBorder from './PixelBorder';

const Education = () => {
    const levels = [
        {
            title: 'Master of Business Administration (IMBA)',
            school: 'University of Wolverhampton',
            period: 'Mar 2022 – Jun 2024',
            description: 'ACQUIRED STRATEGIC MANAGEMENT XP AND BUSINESS LEADERSHIP BUFFS.'
        },
        {
            title: 'BSc (Hons) Computing',
            school: 'University of Wolverhampton',
            period: 'Nov 2017 – Jul 2021',
            description: 'COMPLETED CORE MISSIONS IN SOFTWARE ENGINEERING, SYSTEMS ARCHITECTURE, AND PROBLEM SOLVING.'
        }
    ];

    return (
        <section id="education" className="py-20 px-4">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl mb-12 text-center text-retro-yellow">&lt;EDUCATION /&gt;</h2>
                <div className="relative">
                    {/* Vertical Center Line (Desktop) / Left Line (Mobile) */}
                    <div className="absolute left-4 md:left-1/2 top-0 h-full border-l-4 border-retro-yellow/30 -translate-x-1/2" />

                    {levels.map((level, index) => (
                        <div key={index} className="relative mb-16">
                            {/* Icon on the line */}
                            <div className="absolute left-4 md:left-1/2 top-0 -translate-x-1/2 z-10 bg-retro-black py-1">
                                <Star className="text-retro-yellow fill-retro-yellow" size={24} />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24">
                                {/* Left Side Item */}
                                <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:block' : 'md:invisible hidden md:block'}`}>
                                    {index % 2 === 0 && (
                                        <div className="md:text-right">
                                            <PixelBorder variant="yellow" className="bg-retro-black/40 inline-block text-left w-full md:w-auto md:min-w-[300px]">
                                                <h3 className="text-lg font-bold text-retro-yellow mb-1">{level.title}</h3>
                                                <p className="text-sm text-retro-green mb-2">{level.school} | {level.period}</p>
                                                <p className="text-sm opacity-80 leading-relaxed">{level.description}</p>
                                            </PixelBorder>
                                        </div>
                                    )}
                                </div>

                                {/* Right Side Item */}
                                <div className={`ml-12 md:ml-0 ${index % 2 !== 0 ? 'md:block' : 'md:invisible hidden md:block'}`}>
                                    {index % 2 !== 0 && (
                                        <div className="text-left">
                                            <PixelBorder variant="yellow" className="bg-retro-black/40 inline-block text-left w-full md:w-auto md:min-w-[300px]">
                                                <h3 className="text-lg font-bold text-retro-yellow mb-1">{level.title}</h3>
                                                <p className="text-sm text-retro-green mb-2">{level.school} | {level.period}</p>
                                                <p className="text-sm opacity-80 leading-relaxed">{level.description}</p>
                                            </PixelBorder>
                                        </div>
                                    )}
                                    {/* Mobile Fallback for Right-side items (to show them on mobile where center line becomes left line) */}
                                </div>

                                {/* Mobile view for odd items (they need to appear in the same track as even items on mobile) */}
                                {index % 2 !== 0 && (
                                    <div className="md:hidden ml-12 -mt-8">
                                        <PixelBorder variant="yellow" className="bg-retro-black/40 w-full">
                                            <h3 className="text-lg font-bold text-retro-yellow mb-1">{level.title}</h3>
                                            <p className="text-sm text-retro-green mb-2">{level.school} | {level.period}</p>
                                            <p className="text-sm opacity-80 leading-relaxed">{level.description}</p>
                                        </PixelBorder>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
