"use client";

import React from 'react';
import PixelBorder from './PixelBorder';
import { Award, ShieldCheck, Cloud, Layers, Smartphone, ExternalLink } from 'lucide-react';

interface Certificate {
    title: string;
    issuer: string;
    date: string;
    expires?: string;
    credentialId?: string;
    link: string;
    skills: string[];
    variant: 'yellow' | 'green' | 'white';
    icon: React.ReactNode;
}

const Certificates = () => {
    const certs: Certificate[] = [
        {
            title: 'REGISTERED PRODUCT OWNER',
            issuer: 'Agile Education by Scrum Inc.™',
            date: 'MAR 2026',
            expires: 'MAR 2027',
            credentialId: 'RPO-2238998',
            link: 'https://s3.amazonaws.com/scruminc-certs/RPO-2238998',
            skills: ['RPO', 'Scrum', 'Agile'],
            variant: 'yellow',
            icon: <Award size={28} className="text-retro-yellow" />
        },
        {
            title: 'MASTERING SOFTWARE ARCHITECTURE',
            issuer: 'Nepal Mentor',
            date: 'APR 2025',
            credentialId: 'e904030c-0129-4b82-b60f-a73bf74670ff',
            link: 'https://media.licdn.com/dms/image/v2/D562DAQG0GMDEHnPD3g/profile-treasury-image-shrink_1280_1280/B56ZzHEPD2H8AQ-/0/1772866315718?e=1788930000&v=beta&t=bGHMSfk03c_MbojiCj8-RXP7EzS5YkdNf5qX5qlVg4s',
            skills: ['Java', 'SOLID Principles', 'Architecture'],
            variant: 'green',
            icon: <Layers size={28} className="text-retro-green" />
        },
        {
            title: 'AWS SIMULEARN: CLOUD PRACTITIONER',
            issuer: 'Amazon Web Services (AWS)',
            date: 'MAR 2026',
            link: 'https://media.licdn.com/dms/image/v2/D562DAQEOpbBu_IkyZw/profile-treasury-document-images_1280/B56ZyuwS2SHUAU-/1/1772458424451?e=1788998400&v=beta&t=PIX8nNHAgwDdJ4f80M4uktrhgkbrMOs3lQSNrmHhLj0',
            skills: ['AWS', 'RDS', 'Cloud Computing'],
            variant: 'yellow',
            icon: <Cloud size={28} className="text-retro-yellow" />
        },
        {
            title: 'CERTIFIED CYBERSECURITY EDUCATOR PROFESSIONAL (CCEP)',
            issuer: 'Red Team Leaders',
            date: 'DEC 2025',
            link: 'https://courses.redteamleaders.com/exam-completion/0e3a9e37dddb59eb',
            skills: ['Cybersecurity', 'VAPT', 'Pen Testing'],
            variant: 'green',
            icon: <ShieldCheck size={28} className="text-retro-green" />
        },
        {
            title: 'JAVA FOR ANDROID',
            issuer: 'Coursera',
            date: 'MAY 2021',
            credentialId: '8Q6WGZLN8G56',
            link: 'https://www.coursera.org/account/accomplishments/certificate/8Q6WGZLN8G56',
            skills: ['Java', 'Android SDK'],
            variant: 'white',
            icon: <Smartphone size={28} className="text-foreground" />
        }
    ];

    return (
        <section id="certificates" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-xl sm:text-3xl mb-12 text-center text-retro-yellow break-all">
                    &lt;ACHIEVEMENTS_UNLOCKED /&gt;
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certs.map((cert, index) => (
                        <a
                            key={index}
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group block transition-transform duration-300 hover:-translate-y-2 cursor-pointer no-underline text-inherit ${
                                index === 4 ? 'md:col-span-2 lg:col-span-1 md:max-w-md md:mx-auto lg:max-w-none w-full' : ''
                            }`}
                        >
                            <PixelBorder
                                variant={cert.variant}
                                className="h-full flex flex-col bg-retro-black/60 group-hover:bg-retro-black transition-colors shadow-lg p-5"
                            >
                                <div className="flex items-start justify-between gap-3 mb-4">
                                    <div className="p-2 bg-foreground/5 border border-foreground/10 flex-shrink-0 group-hover:border-retro-yellow/40 transition-colors">
                                        {cert.icon}
                                    </div>
                                    <span className="text-[9px] md:text-[10px] text-retro-yellow/90 px-2 py-1 bg-retro-yellow/10 border border-retro-yellow/30 font-mono tracking-wider">
                                        {cert.date}
                                    </span>
                                </div>

                                <h3 className="text-xs md:text-sm font-bold mb-2 group-hover:text-retro-green transition-colors leading-relaxed text-foreground flex items-center justify-between gap-2">
                                    <span>{cert.title}</span>
                                    <ExternalLink size={14} className="opacity-60 group-hover:opacity-100 transition-opacity flex-shrink-0 text-retro-green" />
                                </h3>

                                <p className="text-[10px] md:text-xs text-retro-green/90 mb-2 font-medium">
                                    {cert.issuer}
                                </p>

                                {cert.credentialId && (
                                    <p className="text-[10px] md:text-xs text-foreground/70 font-mono break-all mb-3 leading-relaxed">
                                        <span className="text-retro-yellow/90 font-bold">ID:</span> {cert.credentialId}
                                    </p>
                                )}

                                <div className="mb-4">
                                    <span className="inline-flex items-center gap-1.5 text-[8px] md:text-[9px] text-retro-yellow group-hover:text-retro-green transition-colors font-mono font-bold">
                                        <span>[VIEW_CREDENTIAL]</span>
                                        <ExternalLink size={10} />
                                    </span>
                                </div>

                                <div className="mt-auto pt-3 border-t border-foreground/10 flex flex-wrap gap-1.5">
                                    {cert.skills.map((skill, sIdx) => (
                                        <span
                                            key={sIdx}
                                            className="text-[8px] md:text-[9px] px-2 py-0.5 bg-foreground/5 text-foreground/80 border border-foreground/10 group-hover:border-foreground/30 transition-colors"
                                        >
                                            +{skill}
                                        </span>
                                    ))}
                                </div>
                            </PixelBorder>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;


