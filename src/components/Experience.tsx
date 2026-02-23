import React from 'react';
import { Briefcase } from 'lucide-react';
import PixelBorder from './PixelBorder';

const Experience = () => {
    const quests = [
        {
            title: 'FULL STACK ENGINEER',
            company: 'FONEPAY PAYMENT SERVICE LTD',
            period: 'OCT 2023 – PRESENT',
            location: 'PULCHOWK, LALITPUR, NEPAL',
            points: [
                'LED DEVELOPMENT OF FULL-STACK SOLUTIONS USING JAVA, SPRING BOOT, ANGULAR, AND KUBERNETES.',
                'REDUCED DEPLOYMENT TIME BY 40% BY IMPROVING CI/CD PIPELINES AND CONTAINERISATION WORKFLOWS.',
                'DESIGNED MICROSERVICES ARCHITECTURE WITH KAFKA AND REDIS, SUPPORTING 10,000+ CONCURRENT TRANSACTIONS WITH 99.9% UPTIME.',
                'REFACTORED LEGACY SYSTEMS, REDUCING PRODUCTION BUGS BY 30% AND IMPROVING API RESPONSE TIMES.',
                'RESOLVED CRITICAL PRODUCTION INCIDENTS IN REAL TIME TO MAINTAIN HIGH AVAILABILITY FOR A RAPIDLY GROWING USER BASE.',
                'MENTORED JUNIOR ENGINEERS AND PROMOTED KNOWLEDGE-SHARING TO IMPROVE OVERALL TEAM VELOCITY.'
            ]
        },
        {
            title: 'SENIOR_ASSOCIATE_ENGINEER',
            company: 'FONEPAY_PAYMENT_SERVICE_LTD',
            period: 'NOV 2021 – OCT 2023',
            points: [
                'SPEARHEADED INTEGRATION OF CROSS-BORDER PAYMENTS AND UPI (UNIFIED PAYMENTS INTERFACE) IN NEPAL.',
                'ENABLED PROCESSING OF $240,000+ IN MONTHLY TRANSACTION VOLUME WITHIN THE FIRST YEAR.',
                'DESIGNED AND IMPLEMENTED DIGITAL PAYMENT SOLUTIONS INCLUDING QR PAYMENTS AND IBFT.',
                'INCREASED DAILY TRANSACTION THROUGHPUT BY 25% THROUGH SYSTEM AND PROCESS OPTIMISATION.',
                'COLLABORATED WITH BUSINESS AND COMPLIANCE TEAMS TO REDUCE TRANSACTION FAILURE RATES BY 15%.',
                'INTEGRATED REST APIS COMPLIANT WITH NEPAL RASTRA BANK REGULATORY STANDARDS.',
                'IMPROVED PLATFORM SECURITY USING SSL/TLS ENCRYPTION AND TOKENISATION FOR SENSITIVE PAYMENT DATA.'
            ]
        },
        {
            title: 'SOFTWARE_DEVELOPER',
            company: 'FONEPAY_PAYMENT_SERVICE_LTD',
            period: 'MAY 2021 – NOV 2021',
            points: [
                'DEVELOPED SCALABLE SOFTWARE ARCHITECTURE USING JAVA (SPRING BOOT) AND ANGULAR.JS, DELIVERING 3 MAJOR FEATURES AHEAD OF SCHEDULE.',
                'IMPROVED DATABASE QUERIES AND ALGORITHMS, REDUCING SERVER LOAD BY 20% DURING PEAK TRAFFIC HOURS.',
                'ENHANCED SYSTEM STABILITY BY IDENTIFYING AND RESOLVING 50+ CRITICAL SOFTWARE BUGS DURING THE TESTING PHASE.',
                'COLLABORATED WITH CROSS-FUNCTIONAL TEAMS TO DELIVER PRODUCT FEATURES ON TIME WHILE ADHERING TO CODING STANDARDS.'
            ]
        }
    ];

    return (
        <section id="experience" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-xl sm:text-3xl mb-12 text-center text-retro-green break-all">&lt;EXPERIENCE /&gt;</h2>
                <div className="relative">
                    {/* Vertical Center Line (Desktop) / Left Line (Mobile) */}
                    <div className="absolute left-4 md:left-1/2 top-0 h-full border-l-4 border-retro-green/30 -translate-x-1/2" />

                    {quests.map((quest, index) => (
                        <div key={index} className="relative mb-16">
                            {/* Icon on the line */}
                            <div className="absolute left-4 md:left-1/2 top-0 -translate-x-1/2 z-10 bg-retro-black py-1">
                                <Briefcase className="text-retro-green fill-retro-green" size={24} />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24">
                                {/* Left Side Item */}
                                <div className={`ml-8 md:ml-0 ${index % 2 === 0 ? 'block' : 'hidden md:block md:invisible'}`}>
                                    {index % 2 === 0 && (
                                        <div className="md:text-right">
                                            <PixelBorder variant="green" className="bg-retro-black/40 inline-block text-left w-full md:w-auto md:max-w-[600px]">
                                                <div className="p-4 md:p-6">
                                                    <h3 className="text-sm md:text-lg font-bold text-retro-green mb-1 break-all">{quest.title}</h3>
                                                    <p className="text-[10px] md:text-sm text-retro-yellow mb-2 break-all flex flex-wrap gap-x-2">
                                                        <span>{quest.company}</span>
                                                        <span className="hidden md:inline">|</span>
                                                        <span>{quest.period}</span>
                                                        {quest.location && <span className="w-full text-[10px] opacity-60 mt-1 break-words">{quest.location}</span>}
                                                    </p>
                                                    <ul className="text-[10px] md:text-sm opacity-80 space-y-2 list-none">
                                                        {quest.points.map((point, pIndex) => (
                                                            <li key={pIndex} className="flex gap-2">
                                                                <span className="text-retro-green flex-shrink-0">▶</span>
                                                                <span className="break-words">{point}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </PixelBorder>
                                        </div>
                                    )}
                                </div>

                                {/* Right Side Item */}
                                <div className={`ml-8 md:ml-0 ${index % 2 !== 0 ? 'block' : 'hidden md:block md:invisible'}`}>
                                    {index % 2 !== 0 && (
                                        <div className="text-left">
                                            <PixelBorder variant="green" className="bg-retro-black/40 inline-block text-left w-full md:w-auto md:max-w-[600px]">
                                                <div className="p-4 md:p-6">
                                                    <h3 className="text-sm md:text-lg font-bold text-retro-green mb-1 break-all">{quest.title}</h3>
                                                    <p className="text-[10px] md:text-sm text-retro-yellow mb-2 break-all flex flex-wrap gap-x-2">
                                                        <span>{quest.company}</span>
                                                        <span className="hidden md:inline">|</span>
                                                        <span>{quest.period}</span>
                                                        {quest.location && <span className="w-full text-[10px] opacity-60 mt-1 break-words">{quest.location}</span>}
                                                    </p>
                                                    <ul className="text-[10px] md:text-sm opacity-80 space-y-2 list-none">
                                                        {quest.points.map((point, pIndex) => (
                                                            <li key={pIndex} className="flex gap-2">
                                                                <span className="text-retro-green flex-shrink-0">▶</span>
                                                                <span className="break-words">{point}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
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

export default Experience;
