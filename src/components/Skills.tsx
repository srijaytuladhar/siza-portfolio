import React from 'react';
import { Code2, Database, Wrench, Globe, Server, Terminal } from 'lucide-react';
import PixelBorder from './PixelBorder';

const Skills = () => {
    const skillGroups = [
        {
            title: 'FRONTEND',
            icon: <Globe className="text-retro-green" />,
            skills: ['AngularJS', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS']
        },
        {
            title: 'BACKEND',
            icon: <Server className="text-retro-yellow" />,
            skills: ['Java', 'Spring Boot', 'Node.js', 'Microservices', 'RESTful APIs', 'Apache Kafka', 'Redis', 'PostgreSQL / MySQL / NoSQL']
        },
        {
            title: 'TOOLS',
            icon: <Wrench className="text-white" />,
            skills: ['Kubernetes', 'Docker', 'Jenkins (CI/CD)', 'High-Availability', 'Distributed Arch', 'Secure Payments', 'SSL/TLS', 'Tokenization']
        },
        {
            title: 'SOFT_SKILLS',
            icon: <Terminal className="text-retro-green" />,
            skills: ['Problem Solving', 'Team Leadership', 'Mentoring', 'Agile/Scrum', 'Communication', 'Collaboration', 'Adaptability', 'Analytical Thinking']
        }
    ];

    return (
        <section id="skills" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl mb-12 text-center text-retro-yellow">&lt;SKILL_TREE /&gt;</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillGroups.map((group, index) => (
                        <PixelBorder
                            key={index}
                            className="bg-retro-black/50 hover:bg-retro-black transition-colors h-full"
                            variant={index % 3 === 0 ? 'green' : index % 3 === 1 ? 'yellow' : 'white'}
                        >
                            <div className="flex items-center gap-4 mb-6">
                                {group.icon}
                                <h3 className="text-xl font-bold tracking-tight">{group.title}</h3>
                            </div>
                            <ul className="space-y-3">
                                {group.skills.map((skill, sIndex) => (
                                    <li key={sIndex} className="flex items-start gap-2 text-sm leading-tight break-words">
                                        <span className="text-retro-green mt-1 flex-shrink-0">▶</span> {skill}
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
