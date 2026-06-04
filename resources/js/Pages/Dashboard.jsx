import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import DashboardSidebar from '@/Components/DashboardSidebar';

export default function Dashboard() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-['Archivo_Black'] leading-tight text-[var(--accent-1)]">
                    Tableau de Bord
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="flex min-h-[calc(100vh-65px)] bg-[#0a0a0f] relative overflow-hidden">
                {/* Theme Background Grid */}
                <div className="bg-grid absolute inset-0 pointer-events-none z-0 opacity-10"
                     style={{backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>

                <DashboardSidebar />

                {/* Main Content Area */}
                <div className="flex-1 p-8 relative z-10">
                    <div className="max-w-4xl">
                        <div className="overflow-hidden bg-[var(--bg-secondary)] border border-[var(--border)] shadow-2xl sm:rounded-xl">
                            <div className="p-8 text-white">
                                <h3 className="text-3xl font-['Archivo_Black'] mb-6 bg-gradient-to-r from-[var(--accent-1)] via-[var(--accent-2)] to-[var(--accent-3)] bg-clip-text text-transparent">
                                    Bienvenue dans votre Console, Paul
                                </h3>

                                <div className="grid md:grid-cols-3 gap-6 mt-8">
                                    <div className="p-6 rounded-lg border border-[var(--border)] bg-[rgba(255,255,255,0.02)] hover:border-[var(--accent-1)] transition-colors">
                                        <p className="text-[var(--accent-1)] text-3xl font-bold mb-2">12</p>
                                        <p className="text-[var(--text-secondary)] text-sm uppercase tracking-wider">Compétences</p>
                                    </div>
                                    <div className="p-6 rounded-lg border border-[var(--border)] bg-[rgba(255,255,255,0.02)] hover:border-[var(--accent-2)] transition-colors">
                                        <p className="text-[var(--accent-2)] text-3xl font-bold mb-2">9</p>
                                        <p className="text-[var(--text-secondary)] text-sm uppercase tracking-wider">Réalisations Pro</p>
                                    </div>
                                    <div className="p-6 rounded-lg border border-[var(--border)] bg-[rgba(255,255,255,0.02)] hover:border-[var(--accent-3)] transition-colors">
                                        <p className="text-[var(--accent-3)] text-3xl font-bold mb-2">6</p>
                                        <p className="text-[var(--text-secondary)] text-sm uppercase tracking-wider">Missions Admin</p>
                                    </div>
                                </div>

                                <div className="mt-10 p-6 rounded-lg bg-[rgba(0,245,255,0.05)] border border-[rgba(0,245,255,0.2)]">
                                    <p className="text-[var(--text-secondary)] italic">
                                        Prêt à mettre à jour votre portfolio ? Sélectionnez une section dans le menu de gauche.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
