import React from 'react';
import { Star } from 'lucide-react';
import PixelBorder from './PixelBorder';

const Education = () => {
    const levels = [
        {
            title: 'MASTER_OF_BUSINESS_ADMINISTRATION',
            school: 'GLOBAL_INSTITUTE_OF_MANAGEMENT',
            period: '2021 - 2023',
            description: 'ACQUIRED ADVANCED MANAGEMENT XP AND STRATEGIC PLANNING SKILLS.'
        },
        {
            title: 'BACHELOR_IN_INFORMATION_TECHNOLOGY',
            school: 'TECH_UNIVERSITY',
            period: '2015 - 2019',
            description: 'COMPLETED CORE MISSIONS IN COMPUTER SCIENCE, DATA STRUCTURES, AND ALGORITHMS.'
        }
    ];

    return (
        <section id="education" className="py-20 px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl mb-12 text-center text-retro-yellow">&lt;LEVELING_UP /&gt;</h2>
                <div className="relative border-l-4 border-retro-yellow/30 ml-4 md:ml-0 md:left-1/2">
                    {levels.map((level, index) => (
                        <div key={index} className="mb-12 relative">
                            <div className="absolute -left-3 top-0 bg-retro-black">
                                <Star className="text-retro-yellow fill-retro-yellow" size={24} />
                            </div>
                            <div className={`ml-8 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:ml-0 md:mr-auto md:text-right md:pr-8 md:-translate-x-full' : 'md:ml-auto md:pl-8'}`}>
                                <PixelBorder variant="yellow" className="bg-retro-black/40">
                                    <h3 className="text-lg font-bold text-retro-yellow mb-1">{level.title}</h3>
                                    <p className="text-sm text-retro-green mb-2">{level.school} | {level.period}</p>
                                    <p className="text-sm opacity-80 leading-relaxed">{level.description}</p>
                                </PixelBorder>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
