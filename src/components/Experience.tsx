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
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl mb-12 text-center text-retro-green">&lt;QUEST_LOG /&gt;</h2>
                <div className="relative border-l-4 border-retro-green/30 ml-4 md:ml-0 md:left-1/2">
                    {quests.map((quest, index) => (
                        <div key={index} className="mb-12 relative">
                            <div className="absolute -left-3 top-0 bg-retro-black">
                                <Heart className="text-retro-green fill-retro-green" size={24} />
                            </div>
                            <div className={`ml-8 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:ml-0 md:mr-auto md:text-right md:pr-8 md:-translate-x-full' : 'md:ml-auto md:pl-8'}`}>
                                <PixelBorder variant="green" className="bg-retro-black/40">
                                    <h3 className="text-lg font-bold text-retro-green mb-1">{quest.title}</h3>
                                    <p className="text-sm text-retro-yellow mb-2">{quest.company} | {quest.period}</p>
                                    <p className="text-sm opacity-80 leading-relaxed">{quest.description}</p>
                                </PixelBorder>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
