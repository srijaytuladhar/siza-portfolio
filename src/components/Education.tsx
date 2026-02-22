import React from 'react';
import { GraduationCap } from 'lucide-react';
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
                <h2 className="text-xl sm:text-3xl mb-12 text-center text-retro-yellow">&lt;EDUCATION /&gt;</h2>
                <div className="relative">
                    {/* Vertical Center Line (Desktop) / Left Line (Mobile) */}
                    <div className="absolute left-4 md:left-1/2 top-0 h-full border-l-4 border-retro-yellow/30 -translate-x-1/2" />

                    {levels.map((level, index) => (
                        <div key={index} className="relative mb-16">
                            {/* Icon on the line */}
                            <div className="absolute left-4 md:left-1/2 top-0 -translate-x-1/2 z-10 bg-retro-black py-1">
                                <GraduationCap className="text-retro-yellow fill-retro-yellow" size={24} />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24">
                                {/* Left Side Item */}
                                <div className={`ml-8 md:ml-0 ${index % 2 === 0 ? 'block' : 'hidden md:block md:invisible'}`}>
                                    {index % 2 === 0 && (
                                        <div className="md:text-right">
                                            <PixelBorder variant="yellow" className="bg-retro-black/40 inline-block text-left w-full md:w-auto md:max-w-[400px]">
                                                <div className="p-4 md:p-6">
                                                    <h3 className="text-sm md:text-lg font-bold text-retro-yellow mb-1 break-all">{level.title}</h3>
                                                    <p className="text-[10px] md:text-sm text-retro-green mb-2 break-all flex flex-wrap gap-x-2">
                                                        <span>{level.school}</span>
                                                        <span className="hidden md:inline">|</span>
                                                        <span>{level.period}</span>
                                                    </p>
                                                    <p className="text-[10px] md:text-sm opacity-80 leading-relaxed break-words">{level.description}</p>
                                                </div>
                                            </PixelBorder>
                                        </div>
                                    )}
                                </div>

                                {/* Right Side Item */}
                                <div className={`ml-8 md:ml-0 ${index % 2 !== 0 ? 'block' : 'hidden md:block md:invisible'}`}>
                                    {index % 2 !== 0 && (
                                        <div className="text-left">
                                            <PixelBorder variant="yellow" className="bg-retro-black/40 inline-block text-left w-full md:w-auto md:max-w-[400px]">
                                                <div className="p-4 md:p-6">
                                                    <h3 className="text-base md:text-lg font-bold text-retro-yellow mb-1">{level.title}</h3>
                                                    <p className="text-xs md:text-sm text-retro-green mb-2">{level.school} | {level.period}</p>
                                                    <p className="text-xs md:text-sm opacity-80 leading-relaxed">{level.description}</p>
                                                </div>
                                            </PixelBorder>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
