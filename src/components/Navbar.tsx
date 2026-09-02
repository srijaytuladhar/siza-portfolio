"use client";

import React from 'react';
import Link from 'next/link';
import PixelBorder from './PixelBorder';
import ThemeToggle from './ThemeToggle';
import { Download } from 'lucide-react';

const Navbar = () => {
    const triggerGlitch = () => {
        document.body.classList.add('retro-scroll-glitch');
        setTimeout(() => {
            document.body.classList.remove('retro-scroll-glitch');
        }, 400);
    };

    return (
        <nav className="sticky top-0 z-50 bg-background/90 backdrop-blur-sm border-b border-retro-green/20 p-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="flex items-center gap-4 w-full md:w-auto justify-between">
                    <Link href="/" onClick={triggerGlitch} className="text-retro-green text-lg md:text-xl font-bold tracking-tighter whitespace-nowrap">
                        &lt;SRIJAY TULADHAR /&gt;
                    </Link>
                    <div className="md:hidden">
                        <ThemeToggle />
                    </div>
                </div>
                <div className="flex gap-3 sm:gap-4 md:gap-6 overflow-x-auto md:overflow-visible w-full md:w-auto justify-center py-2 md:py-0 scrollbar-hide items-center">
                    <Link href="#hero" onClick={triggerGlitch} className="text-[10px] md:text-sm hover:text-retro-yellow transition-colors underline-offset-4 hover:underline whitespace-nowrap font-retro">HERO</Link>
                    <Link href="#skills" onClick={triggerGlitch} className="text-[10px] md:text-sm hover:text-retro-yellow transition-colors underline-offset-4 hover:underline whitespace-nowrap font-retro">STATS</Link>
                    <Link href="#experience" onClick={triggerGlitch} className="text-[10px] md:text-sm hover:text-retro-yellow transition-colors underline-offset-4 hover:underline whitespace-nowrap font-retro">QUESTS</Link>
                    <Link href="#contact" onClick={triggerGlitch} className="text-[10px] md:text-sm hover:text-retro-yellow transition-colors underline-offset-4 hover:underline whitespace-nowrap font-retro">CONTACT</Link>
                    <a
                        href="/Srijay-Tuladhar-CV-2026.pdf"
                        download="Srijay-Tuladhar-CV-2026.pdf"
                        className="pixel-border-slim text-[9px] md:text-xs px-2.5 py-1 text-retro-green hover:bg-retro-green hover:text-retro-black transition-colors font-retro flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
                    >
                        <Download size={13} className="flex-shrink-0" />
                        <span>CV</span>
                    </a>
                    <div className="hidden md:block ml-2">
                        <ThemeToggle />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

