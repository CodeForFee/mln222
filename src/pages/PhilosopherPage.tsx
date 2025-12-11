import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, BookOpenIcon } from '@heroicons/react/24/outline';
import { getPhilosopherById } from '../data/philosophers';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';

export default function PhilosopherPage() {
    const { id } = useParams<{ id: string }>();
    const philosopher = getPhilosopherById(id || '');

    if (!philosopher) {
        return (
            <div className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-1 flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-2xl text-white mb-4">Không tìm thấy nhà triết học</h1>
                        <Link to="/timeline" className="btn-primary">
                            Quay lại danh sách
                        </Link>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 pb-20" style={{ paddingTop: '140px' }}>
                {/* Background */}
                <div className="fixed inset-0 bg-[var(--color-black)] -z-10">
                    <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[var(--color-crimson)] rounded-full blur-[400px] opacity-10" />
                </div>

                <div className="container">
                    {/* Back button */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <Link
                            to="/timeline"
                            className="inline-flex items-center gap-3 text-[var(--color-gray-600)] hover:text-white transition-colors mb-12 group"
                        >
                            <ArrowLeftIcon className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            <span className="text-sm">Quay lại danh sách</span>
                        </Link>
                    </motion.div>

                    {/* Hero header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24"
                    >
                        {/* Portrait */}
                        <div className="lg:col-span-4">
                            <div className="relative">
                                <div className="absolute -top-4 -left-4 w-full h-full border border-[var(--color-crimson)] opacity-30" />
                                <div className="relative aspect-[3/4] bg-gradient-to-br from-[var(--color-crimson-dark)] to-[var(--color-black)] overflow-hidden">
                                    <img
                                        src={philosopher.portrait}
                                        alt={philosopher.name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Info */}
                        <div className="lg:col-span-8 flex flex-col justify-center">
                            <span className="text-editorial text-[var(--color-gold)] inline-flex items-center gap-4 mb-6">
                                <span className="w-8 h-[1px] bg-[var(--color-gold)]" />
                                {philosopher.birthYear} — {philosopher.deathYear}
                            </span>

                            <h1 className="text-white mb-6">{philosopher.name}</h1>

                            <p className="text-[var(--color-gray-400)] text-xl leading-relaxed mb-10 max-w-2xl">
                                {philosopher.description}
                            </p>

                            {/* Stats */}
                            <div className="flex flex-wrap gap-8">
                                <div className="bg-[var(--color-gray-900)] px-8 py-6 border-l-2 border-[var(--color-gold)]">
                                    <div className="text-4xl font-bold text-[var(--color-gold)]">
                                        {philosopher.timeline.length}
                                    </div>
                                    <div className="text-[var(--color-gray-600)] text-sm mt-1">Sự kiện quan trọng</div>
                                </div>
                                <div className="bg-[var(--color-gray-900)] px-8 py-6 border-l-2 border-[var(--color-crimson)]">
                                    <div className="text-4xl font-bold text-[var(--color-crimson)]">
                                        {philosopher.deathYear - philosopher.birthYear}
                                    </div>
                                    <div className="text-[var(--color-gray-600)] text-sm mt-1">Năm cuộc đời</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Timeline section */}
                    <div className="mb-20">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center mb-16"
                        >
                            <span className="text-editorial text-[var(--color-gold)] inline-flex items-center gap-4 mb-4">
                                <span className="w-8 h-[1px] bg-[var(--color-gold)]" />
                                Dòng thời gian
                                <span className="w-8 h-[1px] bg-[var(--color-gold)]" />
                            </span>
                            <h2 className="text-white">Các cột mốc quan trọng</h2>
                        </motion.div>

                        {/* Timeline */}
                        <div className="relative timeline-vertical">
                            <div className="space-y-16">
                                {philosopher.timeline.map((event, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 50, scale: 0.95 }}
                                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                        className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 ${index % 2 === 0 ? '' : 'lg:direction-rtl'
                                            }`}
                                    >
                                        {/* Content */}
                                        <div className={`${index % 2 === 0 ? 'lg:text-right lg:pr-16' : 'lg:order-2 lg:pl-16'}`}>
                                            <div className={`inline-block ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                                                <span className="text-5xl font-bold text-[var(--color-gold)] block mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                                                    {event.year}
                                                </span>
                                                <h3 className="text-2xl text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                                                    {event.title}
                                                </h3>
                                                <p className="text-[var(--color-gray-400)] leading-relaxed mb-4 max-w-md">
                                                    {event.content}
                                                </p>
                                                <div className="flex items-center gap-2 text-[var(--color-gray-600)] text-xs">
                                                    <BookOpenIcon className="w-3 h-3" />
                                                    <span>{event.source}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Dot */}
                                        <div className="absolute left-1/2 top-2 -translate-x-1/2 hidden lg:block">
                                            <div className="timeline-dot" />
                                        </div>

                                        {/* Spacer */}
                                        <div className={`hidden lg:block ${index % 2 === 0 ? 'lg:order-2' : ''}`} />
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="text-center bg-[var(--color-gray-900)] p-12 border border-[var(--color-gray-800)]"
                    >
                        <h3 className="text-xl text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                            Khám phá thêm
                        </h3>
                        <p className="text-[var(--color-gray-400)] mb-6">
                            Xem hình ảnh và tài liệu liên quan trong Thư viện ảnh
                        </p>
                        <Link to="/gallery" className="btn-secondary">
                            Đến Thư viện ảnh →
                        </Link>
                    </motion.div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
