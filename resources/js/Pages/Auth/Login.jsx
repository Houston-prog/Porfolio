import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Connexion - Console" />

            {/* Background Effects (Matching Welcome Page) */}
            <div className="bg-grid fixed inset-0 pointer-events-none z-0 opacity-20"
                 style={{backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)', backgroundSize: '50px 50px'}}></div>
            <div className="gradient-orb orb-1 fixed top-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[100px] opacity-15 pointer-events-none" style={{background: 'radial-gradient(circle, var(--accent-1), transparent)'}}></div>

            <div className="relative z-10 w-full max-w-md mx-auto">
                {/* Branding matching the Portfolio logo */}
                <div className="mb-8 text-center">
                    <Link href="/" className="logo font-['Archivo_Black'] text-3xl bg-gradient-to-r from-[var(--accent-1)] to-[var(--accent-2)] bg-clip-text text-transparent inline-block hover:scale-105 transition-transform">
                        &lt;Paul Nodjom/&gt;
                    </Link>
                    <p className="text-[var(--text-secondary)] mt-2 uppercase tracking-widest text-xs font-bold">Accès Administration</p>
                </div>

                {/* Form Container matching ProjectCard/Terminal style */}
                <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-8 shadow-2xl backdrop-blur-sm">
                    {status && (
                        <div className="mb-4 text-sm font-medium text-green-500 bg-green-500/10 border border-green-500/20 p-3 rounded-lg">
                            {status}
                        </div>
                    )}

                    <form onSubmit={submit} className="space-y-6">
                        <div>
                            <InputLabel htmlFor="email" value="Email" className="text-[var(--accent-1)] font-bold mb-1" />

                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full bg-[rgba(255,255,255,0.03)] border-[var(--border)] text-white focus:border-[var(--accent-1)] focus:ring-[var(--accent-1)]"
                                autoComplete="username"
                                isFocused={true}
                                onChange={(e) => setData('email', e.target.value)}
                                placeholder="admin@paulnodjom.dev"
                            />

                            <InputError message={errors.email} className="mt-2" />
                        </div>

                        <div className="mt-4">
                            <InputLabel htmlFor="password" value="Mot de passe" className="text-[var(--accent-1)] font-bold mb-1" />

                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full bg-[rgba(255,255,255,0.03)] border-[var(--border)] text-white focus:border-[var(--accent-1)] focus:ring-[var(--accent-1)]"
                                autoComplete="current-password"
                                onChange={(e) => setData('password', e.target.value)}
                                placeholder="••••••••"
                            />

                            <InputError message={errors.password} className="mt-2" />
                        </div>

                        <div className="mt-4 block">
                            <label className="flex items-center group cursor-pointer">
                                <Checkbox
                                    name="remember"
                                    checked={data.remember}
                                    onChange={(e) =>
                                        setData('remember', e.target.checked)
                                    }
                                    className="bg-[var(--bg-primary)] border-[var(--border)] text-[var(--accent-1)] focus:ring-[var(--accent-1)]"
                                />
                                <span className="ms-2 text-sm text-[var(--text-secondary)] group-hover:text-white transition-colors">
                                    Se souvenir de moi
                                </span>
                            </label>
                        </div>

                        <div className="mt-8 flex flex-col gap-4">
                            <PrimaryButton
                                className="w-full justify-center py-3 bg-[var(--accent-1)] text-[var(--bg-primary)] font-black text-lg hover:shadow-[0_0_20px_rgba(0,245,255,0.4)] transition-all uppercase tracking-tighter"
                                disabled={processing}
                            >
                                {processing ? 'Authentification...' : 'Initialiser Connexion'}
                            </PrimaryButton>

                            {canResetPassword && (
                                <Link
                                    href={route('password.request')}
                                    className="text-center text-xs text-[var(--text-secondary)] hover:text-[var(--accent-2)] transition-colors underline underline-offset-4 decoration-[rgba(255,255,255,0.1)]"
                                >
                                    Identifiants oubliés ?
                                </Link>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </GuestLayout>
    );
}
