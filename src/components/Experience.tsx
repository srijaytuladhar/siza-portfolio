import React from 'react';
import { Heart } from 'lucide-react';
import PixelBorder from './PixelBorder';

const Experience = () => {
    const quests = [
        {
            title: 'SENIOR_SOFTWARE_ENGINEER',
            company: 'TECH_CORP_GLOBAL',
            period: '2022 - PRESENT',
            description: 'LEADING THE FRONTEND FACTION IN DEVELOPING SCALABLE CLOUD SOLUTIONS. OPTIMIZING RENDER PERFORMANCE BY 40%.'
        },
        {
            title: 'FULL_STACK_DEVELOPER',
            company: 'INNOVATE_STUDIOS',
            period: '2020 - 2022',
            description: 'CRAFTED COMPLEX WEB APPLICATIONS USING THE NEXT.JS MAGIC. IMPLEMENTED SECURE PAYMENT FLOWS.'
        },
        {
            title: 'JUNIOR_DEVELOPER',
            company: 'STARTUP_LABS',
            period: '2019 - 2020',
            description: 'BEGAN THE JOURNEY BY BUILDING RESPONSIVE UI COMPONENTS AND LEARNING THE WAYS OF THE TERMINAL.'
        }
    ];

    return (
        <section id="experience" className="py-20 px-4">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl mb-12 text-center text-retro-green">&lt;EXPERIENCE /&gt;</h2>
                <div className="relative">
                    {/* Vertical Center Line (Desktop) / Left Line (Mobile) */}
                    <div className="absolute left-4 md:left-1/2 top-0 h-full border-l-4 border-retro-green/30 -translate-x-1/2" />

                    {quests.map((quest, index) => (
                        <div key={index} className="relative mb-16">
                            {/* Icon on the line */}
                            <div className="absolute left-4 md:left-1/2 top-0 -translate-x-1/2 z-10 bg-retro-black py-1">
                                <Heart className="text-retro-green fill-retro-green" size={24} />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24">
                                {/* Left Side Item */}
                                <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:block' : 'md:invisible hidden md:block'}`}>
                                    {index % 2 === 0 && (
                                        <div className="md:text-right">
                                            <PixelBorder variant="green" className="bg-retro-black/40 inline-block text-left w-full md:w-auto md:min-w-[300px]">
                                                <h3 className="text-lg font-bold text-retro-green mb-1">{quest.title}</h3>
                                                <p className="text-sm text-retro-yellow mb-2">{quest.company} | {quest.period}</p>
                                                <p className="text-sm opacity-80 leading-relaxed">{quest.description}</p>
                                            </PixelBorder>
                                        </div>
                                    )}
                                </div>

                                {/* Right Side Item */}
                                <div className={`ml-12 md:ml-0 ${index % 2 !== 0 ? 'md:block' : 'md:invisible hidden md:block'}`}>
                                    {index % 2 !== 0 && (
                                        <div className="text-left">
                                            <PixelBorder variant="green" className="bg-retro-black/40 inline-block text-left w-full md:w-auto md:min-w-[300px]">
                                                <h3 className="text-lg font-bold text-retro-green mb-1">{quest.title}</h3>
                                                <p className="text-sm text-retro-yellow mb-2">{quest.company} | {quest.period}</p>
                                                <p className="text-sm opacity-80 leading-relaxed">{quest.description}</p>
                                            </PixelBorder>
                                        </div>
                                    )}
                                </div>

                                {/* Mobile view for odd items */}
                                {index % 2 !== 0 && (
                                    <div className="md:hidden ml-12 -mt-8">
                                        <PixelBorder variant="green" className="bg-retro-black/40 w-full">
                                            <h3 className="text-lg font-bold text-retro-green mb-1">{quest.title}</h3>
                                            <p className="text-sm text-retro-yellow mb-2">{quest.company} | {quest.period}</p>
                                            <p className="text-sm opacity-80 leading-relaxed">{quest.description}</p>
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

export default Experience;
