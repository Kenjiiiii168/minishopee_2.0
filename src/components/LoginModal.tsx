import React, { useState } from 'react';
import { X, User, Lock, Mail } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface LoginModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialMode?: 'login' | 'signup';
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, initialMode = 'login' }) => {
    const { login } = useAuth();
    const [mode, setMode] = React.useState<'login' | 'signup'>(initialMode);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');

    // Effect to sync mode if initialMode changes while modal is open (rare but good for consistency)
    React.useEffect(() => {
        if (isOpen) setMode(initialMode);
    }, [isOpen, initialMode]);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // For simulation, both login and signup just "login"
        login(username);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-md animate-in fade-in duration-300 px-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-10 relative animate-in zoom-in-95 duration-300 border border-gray-100">
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors p-2 hover:bg-gray-100 rounded-full"
                >
                    <X size={32} />
                </button>

                <div className="text-center mb-10">
                    <h2 className="text-4xl font-extrabold text-orange-600 mb-3 tracking-tight">MiniShopee</h2>
                    <p className="text-xl text-gray-600 font-medium">
                        {mode === 'login' ? 'Welcome Back!' : 'Join Us Today!'}
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                    {mode === 'signup' && (
                        <div>
                            <label className="block text-xl font-bold text-gray-800 mb-3">Email Address</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                                    <Mail size={24} />
                                </div>
                                <input
                                    type="email"
                                    className="block w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-orange-100 focus:border-orange-500 transition-all bg-gray-50 focus:bg-white placeholder-gray-400 font-medium"
                                    placeholder="your@email.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                        </div>
                    )}

                    <div>
                        <label className="block text-xl font-bold text-gray-800 mb-3">Username</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                                <User size={24} />
                            </div>
                            <input
                                type="text"
                                className="block w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-orange-100 focus:border-orange-500 transition-all bg-gray-50 focus:bg-white placeholder-gray-400 font-medium"
                                placeholder="Enter your username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-xl font-bold text-gray-800 mb-3">Password</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                                <Lock size={24} />
                            </div>
                            <input
                                type="password"
                                className="block w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-orange-100 focus:border-orange-500 transition-all bg-gray-50 focus:bg-white placeholder-gray-400 font-medium"
                                placeholder="Enter secure password"
                                required
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-orange-600 text-white font-extrabold py-5 rounded-xl text-2xl hover:bg-orange-700 active:bg-orange-800 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 active:scale-[0.98] duration-200"
                    >
                        {mode === 'login' ? 'Login Now' : 'Create Account'}
                    </button>
                </form>

                <div className="mt-8 text-center text-lg font-medium text-gray-600">
                    {mode === 'login' ? (
                        <>
                            Don't have an account?{' '}
                            <button
                                onClick={() => setMode('signup')}
                                className="text-orange-600 hover:underline font-bold transition-all"
                            >
                                Sign Up
                            </button>
                        </>
                    ) : (
                        <>
                            Already have an account?{' '}
                            <button
                                onClick={() => setMode('login')}
                                className="text-orange-600 hover:underline font-bold transition-all"
                            >
                                Login
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
