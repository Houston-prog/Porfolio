import React from 'react';
import { Head, Link } from '@inertiajs/react';

export default function Portfolio() {
    return (
        <>
            <Head title="Full Stack Developer" />

            {/* Background Effects */}
            <div className="bg-grid fixed inset-0 pointer-events-none z-0 opacity-20"
                 style={{backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>
            <div className="gradient-orb orb-1 fixed top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[100px] opacity-15 pointer-events-none" style={{background: 'radial-gradient(circle, var(--accent-1), transparent)'}}></div>

            {/* Navigation */}
            <nav className="fixed top-0 w-full px-8 py-6 flex justify-between items-center z-[1000] backdrop-blur-md border-b border-[var(--border)] bg-[rgba(10,10,15,0.8)]">
                <div className="logo font-['Archivo_Black'] text-2xl bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] bg-clip-text text-transparent">
                    &lt;Paul Nodjom/&gt;
                </div>
                <ul className="hidden md:flex gap-8 list-none">
                    <li>
                        <a href="#home" className="text-[var(--text-secondary)] hover:text-white transition-colors">
                            Accueil
                        </a>
                    </li>
                    <li>
                        <a href="#skills" className="text-[var(--text-secondary)] hover:text-white transition-colors">
                            Competences
                        </a>
                    </li>
                    <li>
                        <a href="#realisation" className="text-[var(--text-secondary)] hover:text-white transition-colors">
                            Réalisations Pro
                        </a>
                    </li>
                    <li>
                        <a href="#realisation-admin" className="text-[var(--text-secondary)] hover:text-white transition-colors">
                            Réalisations Admin
                        </a>
                    </li>
                    <li>
                        <a href="#projects" className="text-[var(--text-secondary)] hover:text-white transition-colors">
                            Projets
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="text-[var(--text-secondary)] hover:text-white transition-colors">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>

            <main className="relative z-10 container mx-auto px-8">
                {/* Hero Section */}
                <section id="home" className="min-h-screen flex items-center pt-20">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div className="hero-text">
                            {/* Profile Photo */}
                            <div className="mb-8">
                                <img
                                    src="/images/pass.jpg"
                                    alt="Paul Nodjom - Développeur Full Stack & Archiviste assermenté"
                                    className="w-32 h-32 rounded-full border-4 border-[var(--accent-1)] shadow-lg object-cover"
                                />
                            </div>
                            <h1 className="font-['Archivo_Black'] text-4xl md:text-5xl leading-tight mb-4">
                                Développeur Full Stack & Archiviste assermenté <br />
                                <span className="bg-gradient-to-r from-[var(--accent-1)] via-[var(--accent-2)] to-[var(--accent-3)] bg-clip-text text-transparent">
                                    Création d'expériences numériques
                                </span>
                            </h1>
                            <p className="text-xl text-[var(--text-secondary)] mb-8">

                            </p>

                            <div className='mt-4 mb-8'>
                                <span className="text-xl text-[var(--text-secondary)] mb-8">
                                    Développeur Full Stack et Archiviste assermenté passionné par l'optimisation des processus métier et la création d'expériences utilisateur fluides. Fort d'une solide expérience dans la conception d'outils de gestion électronique et de plateformes éducatives, je maîtrise l'ensemble du cycle de vie d'un projet, de l'architecture base de données au déploiement cloud. Mon approche combine rigueur technique (Stack Laravel/React/Next.js) et expertise archivistique pour répondre aux enjeux de transformation numérique et de gestion documentaire.
                                </span>
                            </div>

                            <div className="flex gap-4">
                                <a href="#projects" className="bg-[var(--accent-1)] text-[var(--bg-primary)] px-8 py-4 rounded-lg font-bold hover:shadow-[0_10px_30px_rgba(0,245,255,0.3)] transition-all">
                                    View Projects
                                </a>
                                <a href="#contact" className="border-2 border-[var(--border)] px-8 py-4 rounded-lg font-bold hover:text-[var(--accent-2)] hover:border-[var(--accent-2)] transition-all">
                                    Get in Touch
                                </a>
                            </div>
                        </div>

                        {/* Code Terminal */}
                        <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-6 font-mono text-sm shadow-2xl">
                            <div className="flex gap-2 mb-4">
                                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                            </div>
                            <code className="block">
                                <p><span className="text-[var(--accent-2)]">const</span> <span className="text-[var(--accent-3)]">developer</span> = &#123;</p>
                                <p className="ml-4">
                                    Nom:
                                    <span className="text-[var(--accent-1)]">'Paul Nodjom'</span>,
                                </p>
                                <p className="ml-4">
                                    Compétences:
                                    [
                                        <span className="text-[var(--accent-1)]">
                                            'React'
                                        </span>,
                                        <span className="text-[var(--accent-1)]">
                                            'Laravel'
                                        </span>
                                        <span className="text-[var(--accent-1)]">
                                            'NextJS'
                                        </span>
                                        <span className="text-[var(--accent-1)]">
                                            'NodeJS'
                                        </span>
                                        <span className="text-[var(--accent-1)]">
                                            'Wordpress'
                                        </span>
                                        <span className="text-[var(--accent-1)]">
                                            'Symfony'
                                        </span>
                                        <span className="text-[var(--accent-1)]">
                                            'Javascript'
                                        </span>
                                        <span className="text-[var(--accent-1)]">
                                            'PHP'
                                        </span>
                                        <span className="text-[var(--accent-1)]">
                                            'Express'
                                        </span>
                                    ],
                                </p>
                                <p className="ml-4">
                                    passion:
                                    <span className="text-[var(--accent-1)]">
                                        'Transformer des idées en solutions élégantes et évolutives grâce à un code propre.'
                                    </span>
                                </p>
                                <p>&#125;;</p>
                            </code>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section id="skills" className="py-24">
                    <h2 className="text-4xl font-['Archivo_Black'] mb-12 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-2/3 after:h-1 after:bg-gradient-to-r after:from-[var(--accent-1)] after:to-[var(--accent-2)]">
                        Compétences Technique
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <SkillCard
                            title="Frontend"
                            tags={['React', 'TypeScript', 'Next.js', 'Tailwind', 'Shadcn-ui', 'Bootstrap']}
                        />
                        <SkillCard
                            title="Backend"
                            tags={['Laravel', 'Node.js', 'PHP', 'MySQL', 'PostgreSQL', 'Symfony', 'MongoDB']}
                        />
                        <SkillCard
                            title="DevOps"
                            tags={['Docker', 'CI/CD', 'Git']}
                        />
                    </div>
                </section>

                {/* Realisation Section */}
                <section id="realisation" className="py-24">
                    <h2 className="text-4xl font-['Archivo_Black'] mb-12 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-2/3 after:h-1 after:bg-gradient-to-r after:from-[var(--accent-1)] after:to-[var(--accent-2)]">
                        Réalisations Professionnelles
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <ProjectCard
                            title="Application Web GED pour la DGB (Version 1)"
                            description="Conception et réalisation d'une application web pour la Gestion Électronique des Informations et Documents des Entreprises pour la DGB."
                            tags={['PHP5', 'HTML5', 'CSS3', 'jQuery', 'MySQL', 'Bootstrap']}
                        />
                        <ProjectCard
                            title="Application Web GED pour la DGB (Version 2)"
                            description="Refonte complète de l'application GED pour la DGB avec des technologies modernes."
                            tags={['Laravel 12', 'Shadcn', 'PostgreSQL', 'TailwindCSS', 'ReactJS', 'NodeJS']}
                        />
                        <ProjectCard
                            title="Mail-Doc | Application Web Gestion des Courriers DDPP"
                            description="Développement d'une application métier dédiée au suivi et à la traçabilité des flux documentaires."
                            tags={['PHP5', 'HTML5', 'CSS3', 'jQuery', 'MySQL']}
                        />
                        <ProjectCard
                            title="Registres Électroniques de Courriers (ART, DDPP/DGB, DREF/DGB, DCOB/DGB)"
                            description="Conception d'outils d'automatisation sur mesure pour l'Agence de Régulation des Télécommunications et diverses Services de la Direction Générale du Budget."
                            tags={['VBA Excel (Optimisation de processus par macros complexes)']}
                        />
                        <ProjectCard
                            title="Modernisation du Système d'Archivage DGB | Responsable des travaux informatiques"
                            description="Pilotage technique de la transition numérique des archives physiques vers un écosystème digital sécurisé."
                        />
                        <ProjectCard
                            title="Application Help-Edu | Aide à l'Éducation | en-cours de développement"
                            description="Application web dynamique orientée vers le soutien scolaire et l'accès aux ressources éducatives."
                            tags={['NextJS', 'Shadcn', 'MongoDB', 'TailwindCSS', 'ExpressJS', 'NodeJS']}
                        />
                        <ProjectCard
                            title="NdapUn-Toit | Plateforme Immobilière"
                            description="Solution de recherche de logement au Cameroun: Conception d'une interface intuitive permettant la mise en relation locataires/propriétaires. Site : https://www.ndapuntoit.space"
                            tags={['Laravel 12', 'Shadcn', 'PostgreSQL', 'TailwindCSS', 'ReactJS', 'NodeJS']}
                        />
                        <ProjectCard
                            title="CCE - Cristal Clear English | Apprentissage des Langues  "
                            description="Application hybride performante pour Android & iOS: Conception d'une application mobile Android et iOS pour des cours d'anglais en ligne."
                            tags={['React Native', 'ReactJS', 'TailwindCSS', 'Shadcn', 'Expo']}
                        />
                        <ProjectCard
                            title="Site Web Cristal Clear English"
                            description="Conception d'un site web pour l'apprentissage des cours d'anglais en ligne. Site : https://www.cristalclearenglish.site"
                            tags={['Laravel 12', 'Shadcn', 'PostgreSQL', 'TailwindCSS', 'ReactJS', 'NodeJS']}
                        />
                    </div>
                </section>

                {/* Realisation Administrative Section */}
                <section id="realisation-admin" className="py-24">
                    <h2 className="text-4xl font-['Archivo_Black'] mb-12 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-2/3 after:h-1 after:bg-gradient-to-r after:from-[var(--accent-1)] after:to-[var(--accent-2)]">
                        Réalisations Administratives
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <ProjectCard
                            title="Consultant Archiviste | NC Consulting Sarl et CINVCORSA"
                            description="Consultant archiviste dans le cadre du 'Projet de modernisation du système d'archivage de la Direction Générale du Budget (DGB) au Ministère des Finances'. Missions : Assistance à la DGB dans le classement des dossiers actifs, mise en place de la gestion électronique des documents, rédaction de rapports et comptes-rendus, planification des activités, contrôle des répertoires de saisie, génération de cotes d'archives, production de cadre de classement, leadership et management du projet."
                        />
                        <ProjectCard
                            title="Employé Temporaire | Elections Cameroun (ELECAM)"
                            description="Chargé de la révision des listes électorales, inscription des électeurs, toilettage du fichier électoral, distribution des cartes d'électeurs et gestion globale du fichier électoral."
                        />
                        <ProjectCard
                            title="Expert Technique | NC Consulting Sarl"
                            description="Modernisation du Système d'archivage du Ministère de l'Agriculture et du Développement Rural (MINADER) : Formation sur la gestion, le traitement et la sécurisation des archives physiques."
                            location="Fondation Mouna, Yaoundé"
                        />
                        <ProjectCard
                            title="Expert Technique | NC Consulting Sarl"
                            description="Formation sur la gestion, le traitement et la sécurisation des archives physiques pour les personnels de la DGB (Direction Générale du Budget)."
                            location="Hôtel United, Mbankomo"
                        />
                        <ProjectCard
                            title="Expert Technique | CINVCORSA"
                            description="Modernisation du Système d'archivage du Ministère de l'Agriculture et du Développement Rural (MINADER) : Formation sur la gestion, le traitement et la sécurisation des archives physiques."
                            location="Fondation Mouna, Yaoundé"
                        />
                        <ProjectCard
                            title="Expert Technique | NC Consulting Sarl"
                            description="Séminaire de formation sur la gestion et le suivi des archives de la DDPP."
                            location="Ministère des Finances/Bâtiment A"
                        />
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="py-24">
                    <h2 className="text-4xl font-['Archivo_Black'] mb-12 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-2/3 after:h-1 after:bg-gradient-to-r after:from-[var(--accent-1)] after:to-[var(--accent-2)]">
                        Projets
                    </h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <SkillCard
                            title="Frontend"
                            tags={['React', 'TypeScript', 'Next.js', 'Tailwind', 'Shadcn-ui', 'Bootstrap']}
                        />
                        <SkillCard
                            title="Backend"
                            tags={['Laravel', 'Node.js', 'PHP', 'MySQL', 'PostgreSQL', 'Symfony', 'MongoDB']}
                        />
                        <SkillCard
                            title="DevOps"
                            tags={['Docker', 'CI/CD', 'Git']}
                        />
                    </div>
                </section>
            </main>

            <footer className="border-t border-[var(--border)] py-8 text-center text-[var(--text-secondary)]">
                <p>&copy; 2026 Paul Nodjom.</p>
            </footer>
        </>
    );
}

// Sous-composant pour la clarté
function SkillCard({ title, tags }) {
    return (
        <div className="bg-[var(--bg-secondary)] border border-[var(--border)] p-8 rounded-xl hover:border-[var(--accent-1)] transition-all group">
            <h3 className="text-2xl text-[var(--accent-1)] mb-4">{title}</h3>
            <div className="flex flex-wrap gap-2">
                {tags.map(tag => (
                    <span key={tag} className="bg-[rgba(0,245,255,0.1)] text-[var(--accent-1)] px-3 py-1 rounded-full text-xs border border-[rgba(0,245,255,0.3)]">
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    );
}

function ProjectCard({ title, description, tags = [], location }) {
    return (
        <div className="bg-[var(--bg-secondary)] border border-[var(--border)] p-8 rounded-xl hover:border-[var(--accent-1)] transition-all group">
            <h3 className="text-2xl text-[var(--accent-1)] mb-4">{title}</h3>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-4">{description}</p>
            {tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-2">
                    {tags.map(tag => (
                        <span key={tag} className="bg-[rgba(0,245,255,0.1)] text-[var(--accent-1)] px-3 py-1 rounded-full text-xs border border-[rgba(0,245,255,0.3)]">
                            {tag}
                        </span>
                    ))}
                </div>
            )}
            {location && (
                <div className="flex flex-wrap gap-2">
                    <span className="bg-[rgba(255,165,0,0.1)] text-orange-400 px-3 py-1 rounded-full text-xs border border-[rgba(255,165,0,0.3)]">
                        📍 {location}
                    </span>
                </div>
            )}
        </div>
    );
}
