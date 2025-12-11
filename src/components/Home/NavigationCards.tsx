import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    ClockIcon,
    PhotoIcon,
    PuzzlePieceIcon
} from '@heroicons/react/24/outline';

const cards = [
    {
        id: 'timeline',
        title: 'Dòng Thời Gian',
        subtitle: 'Các Nhà Triết Học',
        description: 'Khám phá cuộc đời và sự nghiệp của Karl Marx, Friedrich Engels, và V.I. Lenin.',
        icon: ClockIcon,
        path: '/timeline',
        accent: 'crimson',
    },
    {
        id: 'gallery',
        title: 'Thư Viện',
        subtitle: 'Hình Ảnh Lịch Sử',
        description: 'Bộ sưu tập hình ảnh các nhà triết học, bối cảnh lịch sử và tác phẩm.',
        icon: PhotoIcon,
        path: '/gallery',
        accent: 'gold',
    },
    {
        id: 'games',
        title: 'Trò Chơi',
        subtitle: '& Giáo Trình',
        description: 'Học qua trò chơi tương tác và truy cập kho tài liệu giáo trình.',
        icon: PuzzlePieceIcon,
        path: '/games',
        accent: 'green',
    },
];

const accentColors = {
    crimson: {
        bg: 'rgba(153, 27, 27, 0.15)',
        border: 'rgba(153, 27, 27, 0.4)',
        text: '#DC2626',
        glow: 'rgba(153, 27, 27, 0.3)',
    },
    gold: {
        bg: 'rgba(245, 158, 11, 0.1)',
        border: 'rgba(245, 158, 11, 0.3)',
        text: '#F59E0B',
        glow: 'rgba(245, 158, 11, 0.3)',
    },
    green: {
        bg: 'rgba(16, 185, 129, 0.1)',
        border: 'rgba(16, 185, 129, 0.3)',
        text: '#10B981',
        glow: 'rgba(16, 185, 129, 0.3)',
    },
};

export default function NavigationCards() {
    return (
        <section id="explore" className="relative" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
            {/* Background accent */}
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-black)] via-[var(--color-gray-900)] to-[var(--color-black)]" />

            <div className="container relative z-10">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-editorial text-[var(--color-gold)] inline-flex items-center gap-4 mb-5">
                        <span className="w-8 h-[1px] bg-[var(--color-gold)]" />
                        Khám phá nội dung
                        <span className="w-8 h-[1px] bg-[var(--color-gold)]" />
                    </span>
                    <h2 className="text-white">Bắt đầu hành trình</h2>
                </motion.div>

                {/* Cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {cards.map((card, index) => {
                        const colors = accentColors[card.accent as keyof typeof accentColors];

                        return (
                            <motion.div
                                key={card.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                            >
                                <Link
                                    to={card.path}
                                    className="group block h-full"
                                >
                                    <div
                                        className="card-revolutionary rounded-none h-full p-6 relative"
                                        style={{
                                            '--card-accent': colors.text,
                                            '--card-glow': colors.glow,
                                        } as React.CSSProperties}
                                    >
                                        {/* Corner decorations */}
                                        <div className="geometric-corner geometric-corner--tl" style={{ borderColor: colors.text }} />
                                        <div className="geometric-corner geometric-corner--br" style={{ borderColor: colors.text }} />

                                        {/* Icon */}
                                        <motion.div
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            transition={{ type: 'spring', stiffness: 300 }}
                                            className="w-14 h-14 rounded-none flex items-center justify-center mb-6 transition-all duration-500"
                                            style={{
                                                backgroundColor: colors.bg,
                                                border: `1px solid ${colors.border}`,
                                            }}
                                        >
                                            <card.icon
                                                className="w-6 h-6"
                                                style={{ color: colors.text }}
                                            />
                                        </motion.div>

                                        {/* Title */}
                                        <h3
                                            className="text-xl font-bold mb-1 transition-colors duration-300 group-hover:text-[var(--card-accent)]"
                                            style={{ fontFamily: 'var(--font-display)' }}
                                        >
                                            {card.title}
                                        </h3>
                                        <p
                                            className="text-base mb-3 transition-colors duration-300"
                                            style={{ color: colors.text }}
                                        >
                                            {card.subtitle}
                                        </p>

                                        {/* Description */}
                                        <p className="text-[var(--color-gray-400)] text-sm leading-relaxed mb-6">
                                            {card.description}
                                        </p>

                                        {/* Arrow indicator */}
                                        <div className="flex items-center gap-3 text-[var(--color-gray-600)] group-hover:text-[var(--card-accent)] transition-all duration-300">
                                            <span className="text-editorial text-xs">Khám phá</span>
                                            <motion.span
                                                className="inline-block"
                                                initial={{ x: 0 }}
                                                whileHover={{ x: 5 }}
                                            >
                                                →
                                            </motion.span>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
