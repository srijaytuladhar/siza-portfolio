import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import PixelBorder from './PixelBorder';

const Footer = () => {
    return (
        <footer id="contact" className="py-20 px-4 mt-20">
            <div className="max-w-4xl mx-auto">
                <PixelBorder variant="yellow" className="bg-retro-black px-4 md:p-8">
                    <div className="p-4 md:p-0">
                        <h2 className="text-xl md:text-2xl mb-8 text-center">&lt;FINAL_BOSS_CHAT /&gt;</h2>
                        <div className="flex flex-col md:flex-row gap-12 items-start">
                            <div className="flex-1 space-y-6 w-full text-center md:text-left">
                                <p className="text-base md:text-lg leading-relaxed">
                                    "HEY TRAVELLER! YOU'VE REACHED THE END OF THE LEVEL.
                                    WANT TO TEAM UP FOR A NEW QUEST? DROP A MESSAGE BELOW!"
                                </p>
                                <div className="flex gap-6 justify-center md:justify-start">
                                    <a href="https://github.com/srijaytuladhar" target="_blank" rel="noopener noreferrer" className="text-white hover:text-retro-yellow transition-transform hover:-translate-y-1"><Github size={32} /></a>
                                    <a href="https://www.linkedin.com/in/srijaytuladhar/" target="_blank" rel="noopener noreferrer" className="text-[#0077b5] hover:text-retro-yellow transition-transform hover:-translate-y-1"><Linkedin size={32} /></a>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2">
                                <form className="space-y-4">
                                    <div>
                                        <label className="block mb-2 text-xs md:text-sm text-retro-yellow font-retro">NAME</label>
                                        <input type="text" className="w-full bg-transparent border-2 border-retro-yellow p-2 focus:outline-none focus:bg-retro-yellow/10" />
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-xs md:text-sm text-retro-yellow font-retro">MESSAGE</label>
                                        <textarea className="w-full bg-transparent border-2 border-retro-yellow p-2 h-32 focus:outline-none focus:bg-retro-yellow/10"></textarea>
                                    </div>
                                    <button type="submit" className="w-full bg-retro-yellow text-black font-bold py-3 hover:bg-white transition-colors">
                                        SEND TRANSMISSION
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </PixelBorder>
                <p className="text-center mt-12 text-[10px] md:text-xs opacity-50 px-4">
                    © 2026 SRIJAY PORTFOLIO | INSERT COIN TO CONTINUE.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
