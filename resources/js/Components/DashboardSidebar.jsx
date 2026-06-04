import { Link } from '@inertiajs/react';

export default function DashboardSidebar() {
    const links = [
        { name: 'Vue d\'ensemble', href: 'dashboard', active: 'dashboard' },
        { name: 'Compétences', href: 'dashboard.skills', active: 'dashboard.skills' },
        { name: 'Réalisations Pro', href: 'dashboard.realisations-pro', active: 'dashboard.realisations-pro' },
        { name: 'Réalisations Admin', href: 'dashboard.realisations-admin', active: 'dashboard.realisations-admin' },
    ];

    return (
        <aside className="w-72 border-r border-[var(--border)] bg-[rgba(10,10,15,0.8)] backdrop-blur-xl z-10 hidden md:block">
            <nav className="p-6 space-y-3">
                <div className="text-[var(--text-secondary)] text-xs font-bold uppercase tracking-widest mb-6 px-4">
                    Administration
                </div>
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={route(link.href)}
                        className={`block px-4 py-3 rounded-xl font-bold transition-all duration-300 border ${
                            route().current(link.active)
                                ? 'bg-[rgba(0,245,255,0.1)] text-[var(--accent-1)] border-[var(--accent-1)] shadow-[0_0_15px_rgba(0,245,255,0.1)]'
                                : 'text-[var(--text-secondary)] border-transparent hover:text-white hover:bg-[rgba(255,255,255,0.05)] hover:border-[rgba(255,255,255,0.1)]'
                        }`}
                    >
                        {link.name}
                    </Link>
                ))}
            </nav>
        </aside>
    );
}
