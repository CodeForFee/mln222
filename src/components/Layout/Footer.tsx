import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <footer className="relative mt-auto border-t border-[var(--color-gray-800)] bg-[var(--color-black)]">
            {/* Decorative top line */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--color-crimson)] to-transparent" />

            <div className="container py-6">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
                    {/* Brand */}
                    <div className="md:col-span-5">
                        <div className="flex items-center gap-3 mb-5">

                            <div>
                                <span
                                    className="text-white font-semibold text-lg block"
                                    style={{ fontFamily: 'var(--font-display)' }}
                                >
                                    Triết học Mác-Lênin
                                </span>
                                <span className="text-[var(--color-gold)] text-xs tracking-[0.2em] uppercase">
                                    Nền tảng học thuật
                                </span>
                            </div>
                        </div>
                        <p className="text-[var(--color-gray-600)] text-sm leading-relaxed max-w-sm">
                            Khám phá kiến thức lịch sử, tư tưởng và hành trình hình thành
                            học thuyết Mác – Lênin dưới dạng tương tác hiện đại.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="md:col-span-3">
                        <h4
                            className="text-white text-base font-semibold mb-5"
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            Liên kết
                        </h4>
                        <ul className="space-y-2.5">
                            {[
                                { path: '/timeline', label: 'Dòng thời gian' },
                                { path: '/gallery', label: 'Thư viện ảnh' },
                                { path: '/games', label: 'Trò chơi & Giáo trình' },
                            ].map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className="text-[var(--color-gray-600)] hover:text-[var(--color-gold)] transition-colors text-sm inline-flex items-center gap-2 group"
                                    >
                                        <span className="w-0 h-[1px] bg-[var(--color-gold)] transition-all group-hover:w-4" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Info */}
                    <div className="md:col-span-4">
                        <h4
                            className="text-white text-base font-semibold mb-5"
                            style={{ fontFamily: 'var(--font-display)' }}
                        >
                            Thông tin
                        </h4>
                        <p className="text-[var(--color-gray-600)] text-sm leading-relaxed mb-5">
                            Dự án được thực hiện với mục đích giáo dục và học thuật,
                            tổng hợp từ các nguồn tài liệu đáng tin cậy.
                        </p>

                        {/* Decorative stars */}
                        <div className="flex items-center gap-3">
                            <motion.span
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                                className="text-2xl text-[var(--color-gold)] opacity-60"
                            >
                                ★
                            </motion.span>
                            <span className="text-2xl text-[var(--color-crimson)]">★</span>
                            <motion.span
                                animate={{ rotate: [360, 0] }}
                                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                                className="text-2xl text-[var(--color-gold)] opacity-60"
                            >
                                ★
                            </motion.span>
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-6 pt-4 border-t border-[var(--color-gray-800)] flex flex-col sm:flex-row justify-between items-center gap-2">
                    <p className="text-[var(--color-gray-600)] text-sm">
                        © 2025 Khám phá Triết học Mác – Lênin
                    </p>
                    <p className="text-[var(--color-gray-700)] text-xs tracking-wider">
                        MLN222 With ❤️
                    </p>
                </div>
            </div>

            {/* Corner decorations */}
            <div className="absolute bottom-8 left-8 w-12 h-12 border-l border-b border-[var(--color-crimson)] opacity-20" />
            <div className="absolute bottom-8 right-8 w-12 h-12 border-r border-b border-[var(--color-crimson)] opacity-20" />
        </footer>
    );
}
