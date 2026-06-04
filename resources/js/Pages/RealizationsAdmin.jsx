import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import DashboardSidebar from '@/Components/DashboardSidebar';

export default function RealizationsAdmin() {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-['Archivo_Black'] leading-tight text-[var(--accent-1)]">
                    Réalisations Administratives
                </h2>
            }
        >
            <Head title="Admin - Réalisations Admin" />

            <div className="flex min-h-[calc(100vh-65px)] bg-[#0a0a0f] relative overflow-hidden">
                <div className="bg-grid absolute inset-0 pointer-events-none z-0 opacity-10"
                     style={{backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>

                <DashboardSidebar />

                <main className="flex-1 p-8 relative z-10">
                    <div className="max-w-5xl">
                        <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-8 shadow-2xl text-white">
                            <div className="flex justify-between items-center mb-8">
                                <h3 className="text-2xl font-['Archivo_Black']">Missions Administratives</h3>
                                <button className="bg-[var(--accent-3)] text-white px-4 py-2 rounded-lg font-bold hover:scale-105 transition-transform">
                                    + Ajouter une mission
                                </button>
                            </div>
                            <p className="text-[var(--text-secondary)]">Interface de gestion pour vos missions de consultant et archiviste.</p>
                        </div>
                    </div>
                </main>
            </div>
        </AuthenticatedLayout>
    );
}
