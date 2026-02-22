import React from 'react';
import { Code2, Database, Wrench, Globe, Server, Terminal } from 'lucide-react';
import PixelBorder from './PixelBorder';

const Skills = () => {
    const skillGroups = [
        {
            title: 'FRONTEND',
            icon: <Globe className="text-retro-green" />,
            skills: ['React', 'Next.js', 'Tailwind', 'TypeScript', 'Redux']
        },
        {
            title: 'BACKEND',
            icon: <Server className="text-retro-yellow" />,
            skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'GraphQL']
        },
        {
            title: 'TOOLS',
            icon: <Wrench className="text-white" />,
            skills: ['Git', 'Docker', 'AWS', 'Jest', 'Vite']
        }
    ];

    return (
        <section id="skills" className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl mb-12 text-center text-retro-yellow">&lt;SKILL_TREE /&gt;</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillGroups.map((group, index) => (
                        <PixelBorder key={index} className="bg-retro-black/50 hover:bg-retro-black transition-colors" variant={index === 0 ? 'green' : index === 1 ? 'yellow' : 'white'}>
                            <div className="flex items-center gap-4 mb-6">
                                {group.icon}
                                <h3 className="text-xl font-bold">{group.title}</h3>
                            </div>
                            <ul className="space-y-4">
                                {group.skills.map((skill, sIndex) => (
                                    <li key={sIndex} className="flex items-center gap-2">
                                        <span className="text-retro-green">▶</span> {skill}
                                    </li>
                                ))}
                            </ul>
                        </PixelBorder>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
