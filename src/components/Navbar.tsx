"use client";

import React from 'react';
import Link from 'next/link';
import PixelBorder from './PixelBorder';

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 bg-retro-black/90 backdrop-blur-sm border-b border-retro-green/20 p-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <Link href="/" className="text-retro-green text-lg md:text-xl font-bold tracking-tighter whitespace-nowrap">
                    &lt;SRIJAY PORTFOLIO /&gt;
                </Link>
                <div className="flex gap-4 md:gap-6 overflow-x-auto md:overflow-visible w-full md:w-auto justify-center py-2 md:py-0 scrollbar-hide">
                    <Link href="#hero" className="text-[10px] md:text-sm hover:text-retro-yellow transition-colors underline-offset-4 hover:underline whitespace-nowrap">HERO</Link>
                    <Link href="#skills" className="text-[10px] md:text-sm hover:text-retro-yellow transition-colors underline-offset-4 hover:underline whitespace-nowrap">STATS</Link>
                    <Link href="#experience" className="text-[10px] md:text-sm hover:text-retro-yellow transition-colors underline-offset-4 hover:underline whitespace-nowrap">QUESTS</Link>
                    <Link href="#contact" className="text-[10px] md:text-sm hover:text-retro-yellow transition-colors underline-offset-4 hover:underline whitespace-nowrap">CONTACT</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
