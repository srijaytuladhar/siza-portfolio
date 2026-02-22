"use client";

import React from 'react';
import Image from 'next/image';
import PixelBorder from './PixelBorder';
import RetroButton from './RetroButton';

const Hero = () => {
    return (
        <section id="hero" className="py-20 px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                <div className="flex-1 flex justify-center">
                    <div className="relative w-64 h-64 md:w-80 md:h-80">
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
                <div className="flex-1 text-center md:text-left">
                    <h1 className="text-3xl md:text-4xl mb-6 text-retro-green">
                        &gt; HELLO_WORLD!
                    </h1>
                    <div className="h-16 mb-8 transform-none">
                        <span className="typewriter text-xl md:text-2xl inline-block">
                            FULL_STACK_DEVELOPER
                        </span>
                    </div>
                    <p className="text-lg mb-8 leading-relaxed opacity-80">
                        SENIOR BACKEND ENGINEER WITH 5+ YEARS’ EXPERIENCE BUILDING SCALABLE, CLOUD-NATIVE DIGITAL PAYMENT SYSTEMS. STRONG IN JAVA, SPRING BOOT, MICROSERVICES, KUBERNETES, AND DISTRIBUTED ARCHITECTURES, WITH EXPERTISE IN HIGH-AVAILABILITY FINTECH PLATFORMS AND PRODUCTION-GRADE API DEVELOPMENT.
                    </p>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                        <RetroButton variant="green">VIEW_STATS</RetroButton>
                        <RetroButton variant="yellow">START_QUEST</RetroButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
