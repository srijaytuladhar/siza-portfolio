import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import PixelBorder from './PixelBorder';

const Footer = () => {
    return (
        <footer id="contact" className="py-20 px-4 mt-20">
            <div className="max-w-4xl mx-auto">
                <PixelBorder variant="yellow" className="bg-retro-black p-8">
                    <h2 className="text-2xl mb-8 text-center">&lt;FINAL_BOSS_CHAT /&gt;</h2>
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="flex-1 space-y-6">
                            <p className="text-lg leading-relaxed">
                                "HEY TRAVELLER! YOU'VE REACHED THE END OF THE LEVEL.
                                WANT TO TEAM UP FOR A NEW QUEST? DROP A MESSAGE BELOW!"
                            </p>
                            <div className="flex gap-6 justify-center md:justify-start">
                                <a href="#" className="hover:text-retro-yellow transition-transform hover:-translate-y-1"><Github size={32} /></a>
                                <a href="#" className="hover:text-retro-yellow transition-transform hover:-translate-y-1"><Linkedin size={32} /></a>
                                <a href="#" className="hover:text-retro-yellow transition-transform hover:-translate-y-1"><Twitter size={32} /></a>
                                <a href="#" className="hover:text-retro-yellow transition-transform hover:-translate-y-1"><Mail size={32} /></a>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <form className="space-y-4">
                                <div>
                                    <label className="block mb-2 text-sm text-retro-yellow">NAME</label>
                                    <input type="text" className="w-full bg-transparent border-2 border-retro-yellow p-2 focus:outline-none focus:bg-retro-yellow/10" />
                                </div>
                                <div>
                                    <label className="block mb-2 text-sm text-retro-yellow">MESSAGE</label>
                                    <textarea className="w-full bg-transparent border-2 border-retro-yellow p-2 h-32 focus:outline-none focus:bg-retro-yellow/10"></textarea>
                                </div>
                                <button type="submit" className="w-full bg-retro-yellow text-black font-bold py-3 hover:bg-white transition-colors">
                                    SEND TRANSMISSION
                                </button>
                            </form>
                        </div>
                    </div>
                </PixelBorder>
                <p className="text-center mt-12 text-xs opacity-50">
                    © 2024 SIZA_PORTFOLIO. INSERT COIN TO CONTINUE.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
