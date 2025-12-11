import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { philosophers } from '../data/philosophers';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';

export default function TimelinePage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 pb-16" style={{ paddingTop: '140px' }}>
                {/* Background */}
                <div className="fixed inset-0 bg-[var(--color-black)] -z-10">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--color-crimson)] rounded-full blur-[300px] opacity-10" />
                </div>

                <div className="container">
                    {/* Header */}
                    <div className="max-w-4xl mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="mb-6"
                        >
                            <span className="text-editorial text-[var(--color-gold)] inline-flex items-center gap-4">
                                <span className="w-8 h-[1px] bg-[var(--color-gold)]" />
                                Dòng thời gian
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="mb-6"
                        >
                            <span className="block text-white leading-[0.9]">Các Nhà</span>
                            <span className="block text-gradient-crimson leading-[0.9] mt-2">Triết Học</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="text-lg text-[var(--color-gray-400)] max-w-3xl leading-relaxed mb-10"
                        >
                            Khám phá cuộc đời, sự nghiệp và những đóng góp to lớn của các nhà tư tưởng
                            đặt nền móng cho chủ nghĩa Mác – Lênin.
                        </motion.p>
                    </div>

                    {/* Philosopher cards - Large editorial style */}
                    <div className="space-y-6">
                        {philosophers.map((philosopher, index) => (
                            <motion.div
                                key={philosopher.id}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                            >
                                <Link
                                    to={`/philosopher/${philosopher.id}`}
                                    className="group block"
                                >
                                    <div className="card-revolutionary grid grid-cols-1 lg:grid-cols-12 gap-0 overflow-hidden">
                                        {/* Image */}
                                        <div className="lg:col-span-4 relative h-64 lg:h-auto bg-gradient-to-br from-[var(--color-crimson-dark)] to-[var(--color-black)] overflow-hidden">
                                            <img
                                                src={philosopher.portrait}
                                                alt={philosopher.name}
                                                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                            />

                                            {/* Year badge */}
                                            <div className="absolute top-4 left-4 bg-[var(--color-black)]/80 px-3 py-1.5">
                                                <span className="text-[var(--color-gold)] text-sm font-medium">
                                                    {philosopher.birthYear} — {philosopher.deathYear}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="lg:col-span-8 p-8 lg:p-10 flex flex-col justify-center">
                                            <div className="flex items-start justify-between gap-6">
                                                <div className="flex-1">
                                                    <h2
                                                        className="text-3xl lg:text-4xl text-white mb-3 group-hover:text-[var(--color-gold)] transition-colors"
                                                        style={{ fontFamily: 'var(--font-display)' }}
                                                    >
                                                        {philosopher.name}
                                                    </h2>
                                                    <p className="text-[var(--color-gray-400)] text-base leading-relaxed max-w-2xl mb-6">
                                                        {philosopher.description}
                                                    </p>

                                                    {/* Stats */}
                                                    <div className="flex items-center gap-6">
                                                        <div>
                                                            <span className="text-2xl font-bold text-[var(--color-crimson)]">
                                                                {philosopher.timeline.length}
                                                            </span>
                                                            <span className="text-[var(--color-gray-600)] text-sm ml-2">sự kiện</span>
                                                        </div>
                                                        <div>
                                                            <span className="text-2xl font-bold text-[var(--color-gold)]">
                                                                {philosopher.deathYear - philosopher.birthYear}
                                                            </span>
                                                            <span className="text-[var(--color-gray-600)] text-sm ml-2">năm cuộc đời</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Arrow */}
                                                <motion.div
                                                    initial={{ x: 0, opacity: 0.5 }}
                                                    whileHover={{ x: 10, opacity: 1 }}
                                                    className="hidden lg:flex items-center justify-center w-16 h-16 bg-[var(--color-crimson)]/10 group-hover:bg-[var(--color-crimson)] transition-colors"
                                                >
                                                    <ArrowRightIcon className="w-6 h-6 text-[var(--color-crimson)] group-hover:text-white transition-colors" />
                                                </motion.div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    {/* Note */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="mt-12 text-center"
                    >
                        <p className="text-[var(--color-gray-600)] text-sm inline-flex items-center gap-3">
                            <span className="star-decoration">★</span>
                            Nhấp vào mỗi nhà triết học để xem dòng thời gian chi tiết
                            <span className="star-decoration">★</span>
                        </p>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
