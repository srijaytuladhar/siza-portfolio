"use client";

import React from 'react';
import Link from 'next/link';
import PixelBorder from './PixelBorder';

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-40 bg-retro-black/80 backdrop-blur-sm p-4">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <Link href="/" className="text-retro-green text-xl font-bold tracking-tighter">
                    &lt;SIZA_PORTFOLIO /&gt;
                </Link>
                <div className="flex gap-6">
                    <Link href="#hero" className="hover:text-retro-yellow transition-colors underline-offset-4 hover:underline">HERO</Link>
                    <Link href="#skills" className="hover:text-retro-yellow transition-colors underline-offset-4 hover:underline">STATS</Link>
                    <Link href="#experience" className="hover:text-retro-yellow transition-colors underline-offset-4 hover:underline">QUESTS</Link>
                    <Link href="#contact" className="hover:text-retro-yellow transition-colors underline-offset-4 hover:underline">CONTACT</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
