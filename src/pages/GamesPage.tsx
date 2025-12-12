import { motion } from 'framer-motion';
import {
    PuzzlePieceIcon,
    BookOpenIcon,
    ArrowTopRightOnSquareIcon
} from '@heroicons/react/24/outline';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';

const cards = [
    {
        id: 'games',
        title: 'Trò Chơi',
        subtitle: 'Mini Game',
        description: 'Tham gia trò chơi mini game thú vị',
        icon: PuzzlePieceIcon,
        color: 'crimson',
        link: 'https://693af87714834c90c667069f--mln2-team5.netlify.app',
    },
    {
        id: 'curriculum',
        title: 'Giáo Trình',
        subtitle: 'Tài liệu học tập',
        description: 'Truy cập kho tài liệu học tập phong phú bao gồm PDF, slide bài giảng và tài nguyên giáo dục.',
        icon: BookOpenIcon,
        color: 'gold',
        link: 'https://drive.google.com/file/d/1d4Fn74CGUi0PYqRmjSXD6QSJd-jfL4TJ/view',
    },
];

export default function GamesPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1" style={{ paddingTop: '100px', paddingBottom: '40px' }}>
                {/* Background */}
                <div className="fixed inset-0 bg-[var(--color-black)] -z-10">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-crimson)] rounded-full blur-[400px] opacity-5" />
                </div>

                <div className="container">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <span className="text-editorial text-[var(--color-gold)] inline-flex items-center gap-4 mb-6">
                            <span className="w-8 h-[1px] bg-[var(--color-gold)]" />
                            Học tập & Giải trí
                            <span className="w-8 h-[1px] bg-[var(--color-gold)]" />
                        </span>
                        <h1 className="text-white mb-6">
                            Trò Chơi <span className="text-gradient-gold">&</span> Giáo Trình
                        </h1>
                        <p className="text-[var(--color-gray-400)] text-lg leading-relaxed mb-10">
                            Học tập qua trò chơi tương tác và truy cập kho tài liệu giáo trình phong phú.
                        </p>
                    </motion.div>

                    {/* Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                        {cards.map((card, index) => (
                            <motion.a
                                key={card.id}
                                href={card.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 + index * 0.15 }}
                                whileHover={{ y: -8 }}
                                className="group block"
                            >
                                <div className={`relative p-8 bg-[var(--color-gray-900)] border transition-all duration-500 ${card.color === 'crimson'
                                    ? 'border-[var(--color-crimson)]/30 hover:border-[var(--color-crimson)]'
                                    : 'border-[var(--color-gold)]/30 hover:border-[var(--color-gold)]'
                                    }`}>
                                    {/* Corner decorations */}
                                    <div className={`absolute top-0 left-0 w-10 h-10 border-l-2 border-t-2 ${card.color === 'crimson' ? 'border-[var(--color-crimson)]' : 'border-[var(--color-gold)]'
                                        } opacity-50`} />
                                    <div className={`absolute bottom-0 right-0 w-10 h-10 border-r-2 border-b-2 ${card.color === 'crimson' ? 'border-[var(--color-crimson)]' : 'border-[var(--color-gold)]'
                                        } opacity-50`} />

                                    {/* Icon */}
                                    <motion.div
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className={`w-16 h-16 flex items-center justify-center mb-6 ${card.color === 'crimson'
                                            ? 'bg-[var(--color-crimson)]/10'
                                            : 'bg-[var(--color-gold)]/10'
                                            }`}
                                    >
                                        <card.icon className={`w-8 h-8 ${card.color === 'crimson'
                                            ? 'text-[var(--color-crimson)]'
                                            : 'text-[var(--color-gold)]'
                                            }`} />
                                    </motion.div>

                                    {/* Content */}
                                    <h2
                                        className="text-2xl text-white mb-2 group-hover:text-[var(--color-gold)] transition-colors"
                                        style={{ fontFamily: 'var(--font-display)' }}
                                    >
                                        {card.title}
                                    </h2>
                                    <p className={`text-base mb-3 ${card.color === 'crimson'
                                        ? 'text-[var(--color-crimson)]'
                                        : 'text-[var(--color-gold)]'
                                        }`}>
                                        {card.subtitle}
                                    </p>
                                    <p className="text-[var(--color-gray-400)] text-sm leading-relaxed mb-6">
                                        {card.description}
                                    </p>

                                    {/* Link indicator */}
                                    <div className="flex items-center gap-3 text-[var(--color-gray-600)] group-hover:text-[var(--color-gold)] transition-colors">
                                        <span className="text-editorial text-xs">
                                            {card.id === 'games' ? 'Chơi ngay' : 'Xem tài liệu'}
                                        </span>
                                        <ArrowTopRightOnSquareIcon className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    {/* Note */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mt-12 text-center"
                    >
                        {/* <p className="text-[var(--color-gray-600)] text-sm inline-flex items-center gap-3">
                            <span className="star-decoration">★</span>
                            Các đường link sẽ được cập nhật khi tài nguyên sẵn sàng
                            <span className="star-decoration">★</span>
                        </p> */}
                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
