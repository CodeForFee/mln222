import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function HeroBanner() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end start']
    });

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
            style={{ paddingTop: '80px', paddingBottom: '80px' }}
        >
            {/* Background layers */}
            <motion.div
                style={{ y }}
                className="absolute inset-0"
            >
                {/* Deep crimson gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-crimson-dark)] via-[var(--color-black)] to-[var(--color-black)]" />

                {/* Radial glow */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[var(--color-crimson)] rounded-full blur-[200px] opacity-20" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[var(--color-gold)] rounded-full blur-[200px] opacity-10" />

                {/* Geometric pattern overlay */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(45deg, var(--color-crimson) 25%, transparent 25%),
                              linear-gradient(-45deg, var(--color-crimson) 25%, transparent 25%),
                              linear-gradient(45deg, transparent 75%, var(--color-crimson) 75%),
                              linear-gradient(-45deg, transparent 75%, var(--color-crimson) 75%)`,
                        backgroundSize: '60px 60px',
                        backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px'
                    }}
                />
            </motion.div>

            {/* Floating decorative stars */}
            <motion.div
                animate={{
                    y: [0, -15, 0],
                    rotate: [0, 5, 0]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-32 right-[15%] text-7xl text-[var(--color-gold)] opacity-20"
                style={{ textShadow: '0 0 60px rgba(245, 158, 11, 0.5)' }}
            >
                ★
            </motion.div>
            <motion.div
                animate={{
                    y: [0, 10, 0],
                    rotate: [0, -3, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute bottom-40 left-[10%] text-5xl text-[var(--color-crimson)] opacity-30"
            >
                ★
            </motion.div>

            {/* Main content */}
            <motion.div
                style={{ opacity }}
                className="container relative z-10"
            >
                <div className="max-w-5xl mx-auto text-center">
                    {/* Editorial label */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-8"
                    >
                        <span className="text-editorial text-[var(--color-gold)] inline-flex items-center gap-4">
                            <span className="w-12 h-[1px] bg-[var(--color-gold)]" />
                            Khám phá triết học
                            <span className="w-12 h-[1px] bg-[var(--color-gold)]" />
                        </span>
                    </motion.div>

                    {/* Main headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="mb-8"
                    >
                        <span className="block text-white leading-[0.9]">Tư duy mở</span>
                        <span className="block text-gradient-gold leading-[0.9] mt-2">Khám phá nền tảng</span>
                        <span className="block text-gradient-crimson leading-[0.9] mt-2">triết học hiện đại</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-xl md:text-2xl text-[var(--color-gray-400)] max-w-3xl mx-auto mb-12 leading-relaxed"
                    >
                        Một nền tảng <em className="text-[var(--color-gold)] not-italic">trực quan</em> –
                        <em className="text-white not-italic"> học thuật</em> –
                        <em className="text-[var(--color-crimson)] not-italic"> hiện đại</em>,
                        tổng hợp kiến thức và tư tưởng Mác – Lênin.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7 }}
                        className="flex flex-col sm:flex-row gap-5 justify-center items-center"
                    >
                        <motion.a
                            href="#explore"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="btn-primary"
                        >
                            <span>Bắt đầu khám phá</span>
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </motion.a>
                        <motion.a
                            href="#about"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="btn-secondary"
                        >
                            Tìm hiểu thêm
                        </motion.a>
                    </motion.div>
                </div>
            </motion.div>

            {/* Bottom scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    className="flex flex-col items-center gap-3"
                >
                    <span className="text-editorial text-[var(--color-gray-600)] text-xs">Cuộn xuống</span>
                    <div className="w-[1px] h-12 bg-gradient-to-b from-[var(--color-gold)] to-transparent" />
                </motion.div>
            </motion.div>

            {/* Corner decorations */}
            <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-[var(--color-gold)] opacity-30" />
            <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-[var(--color-gold)] opacity-30" />
        </section>
    );
}
