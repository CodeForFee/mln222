import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { path: '/', label: 'Trang chủ' },
    // { path: '/presentation', label: 'Thuyết trình' },
    { path: '/games', label: 'Trò chơi' },
    { path: '/timeline', label: 'Dòng thời gian' },
    { path: '/gallery', label: 'Thư viện ảnh' },
    { path: '/about', label: 'Giới thiệu' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'bg-[var(--color-black)]/95 backdrop-blur-md border-b border-[var(--color-gray-800)]'
                : 'bg-transparent'
                }`}
        >
            <div className="container">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-3 group">
                        <motion.span
                            whileHover={{ rotate: 180 }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl text-[var(--color-crimson)]"
                        >
                            ☭
                        </motion.span>
                        <div className="hidden sm:block">
                            <span
                                className="text-white font-semibold text-lg tracking-tight block leading-tight"
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                Triết học
                            </span>
                            <span className="text-[var(--color-gold)] text-xs tracking-[0.2em] uppercase">
                                Mác-Lênin
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className="relative py-2 group"
                            >
                                <span className={`text-sm font-medium transition-colors duration-300 ${location.pathname === link.path
                                    ? 'text-[var(--color-gold)]'
                                    : 'text-[var(--color-gray-400)] group-hover:text-white'
                                    }`}>
                                    {link.label}
                                </span>
                                <span
                                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-[var(--color-gold)] transition-all duration-300 ease-out origin-left"
                                    style={{
                                        transform: location.pathname === link.path ? 'scaleX(1)' : 'scaleX(0)',
                                        opacity: location.pathname === link.path ? 1 : 0
                                    }}
                                />
                            </Link>
                        ))}
                    </div>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 text-[var(--color-gray-400)] hover:text-white transition-colors"
                    >
                        {isOpen ? (
                            <XMarkIcon className="w-6 h-6" />
                        ) : (
                            <Bars3Icon className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-[var(--color-black)] border-t border-[var(--color-gray-800)]"
                    >
                        <div className="container py-6 flex flex-col gap-1">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.path}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <Link
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className={`block px-4 py-3 text-lg transition-colors ${location.pathname === link.path
                                            ? 'text-[var(--color-gold)] bg-[var(--color-crimson)]/10'
                                            : 'text-[var(--color-gray-400)] hover:text-white hover:bg-[var(--color-gray-900)]'
                                            }`}
                                        style={{ fontFamily: 'var(--font-display)' }}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
