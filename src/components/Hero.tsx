"use client";

import React from 'react';
import Image from 'next/image';
import PixelBorder from './PixelBorder';
import RetroButton from './RetroButton';

const Hero = () => {
    return (
        <section id="hero" className="py-12 md:py-20 px-4 overflow-hidden">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 flex justify-center w-full">
                    <div className="relative w-56 h-56 md:w-80 md:h-80">
                        <PixelBorder variant="white" className="p-0 overflow-hidden w-full h-full group cursor-pointer">
                            {/* 8-bit Avatar (Default) */}
                            <div className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-0 z-10">
                                <Image
                                    src="/profile-8bit-v4.png"
                                    alt="Profile 8-bit"
                                    fill
                                    className="object-cover object-center"
                                    priority
                                />
                            </div>
                            {/* Real Photo (Reveal on Hover) */}
                            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                                <Image
                                    src="/profile-real.jpg"
                                    alt="Profile Real"
                                    fill
                                    className="object-cover object-[50%_20%] scale-105"
                                />
                            </div>
                        </PixelBorder>
                        <div className="absolute -bottom-14 left-0 w-full text-center">
                            <p className="text-[10px] md:text-xs text-retro-yellow animate-pulse font-retro mt-4">
                                HOVER TO SEE THE HANDSOME IN REAL WORLD
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex-1 text-center md:text-left w-full mt-8 md:mt-0">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 text-retro-green break-words">
                        &gt; HELLO_WORLD!
                    </h1>
                    <div className="min-h-[3rem] mb-8">
                        <span className="typewriter text-sm sm:text-xl md:text-2xl inline-block break-all">
                            SENIOR_BACKEND_ENGINEER
                        </span>
                    </div>
                    <p className="text-sm md:text-lg mb-8 leading-relaxed opacity-80 max-w-2xl mx-auto md:mx-0">
                        SENIOR BACKEND ENGINEER WITH 5+ YEARS’ EXPERIENCE BUILDING SCALABLE, CLOUD-NATIVE DIGITAL PAYMENT SYSTEMS. STRONG IN JAVA, SPRING BOOT, MICROSERVICES, KUBERNETES, AND DISTRIBUTED ARCHITECTURES, WITH EXPERTISE IN HIGH-AVAILABILITY FINTECH PLATFORMS AND PRODUCTION-GRADE API DEVELOPMENT.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                        <RetroButton variant="green" className="w-full sm:w-auto">VIEW_STATS</RetroButton>
                        <RetroButton variant="yellow" className="w-full sm:w-auto">START_QUEST</RetroButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
