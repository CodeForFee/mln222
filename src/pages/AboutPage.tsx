import { motion } from 'framer-motion';
import { Users, GraduationCap, User, Sparkles } from 'lucide-react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';

const teamMembers = [
    { name: 'Lê Thị Hải Hà', id: '180159' },
    { name: 'Lê Quốc Việt', id: 'QS180039' },
    { name: 'Cung Nguyễn Bích Trâm', id: 'SE184306' },
    { name: 'Nguyễn Nhật Minh', id: 'SE170310' },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[var(--color-black)] flex flex-col">
            <Navbar />

            <main className="flex-1" style={{ paddingTop: '100px' }}>
                {/* Header Section */}
                <section className="pb-8 px-4">
                    <div className="container max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center"
                        >
                            <h1
                                className="text-5xl md:text-6xl font-bold text-white mb-6"
                                style={{ fontFamily: 'var(--font-display)' }}
                            >
                                Giới Thiệu
                            </h1>
                            <div className="w-24 h-1.5 bg-gradient-to-r from-[var(--color-crimson)] to-[var(--color-gold)] mx-auto rounded-full" />
                        </motion.div>
                    </div>
                </section>

                {/* Class Info Section */}
                <section className="py-12 px-4">
                    <div className="container max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                        >
                            <div className="bg-gradient-to-br from-[var(--color-gray-900)] to-[var(--color-black)] 
                            border border-[var(--color-gray-800)] rounded-3xl p-10 shadow-2xl"
                            >
                                <div className="flex items-center justify-center gap-3 mb-8">
                                    <div className="w-16 h-16 rounded-2xl bg-[var(--color-crimson)]/10 flex items-center justify-center">
                                        <GraduationCap className="w-9 h-9 text-[var(--color-crimson)]" />
                                    </div>
                                    <div className="text-left">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--color-crimson)]/15 
                                        text-[var(--color-crimson)] rounded-lg text-sm font-medium mb-1"
                                        >
                                            <span className="text-base">☭</span>
                                            <span>Triết học Mác-Lênin</span>
                                        </div>
                                        <h2 className="text-4xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
                                            MLN122
                                        </h2>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-center gap-3 px-6 py-4 bg-[var(--color-black)]/50 
                                    rounded-2xl border border-[var(--color-gray-800)]"
                                    >
                                        <span className="text-[var(--color-gray-400)] text-lg">Lớp:</span>
                                        <span className="text-[var(--color-gold)] text-2xl font-bold">3W_MLN122_03</span>
                                    </div>

                                    <div className="flex items-center justify-center gap-3 px-6 py-4 bg-[var(--color-black)]/50 
                                    rounded-2xl border border-[var(--color-gray-800)]"
                                    >
                                        <User className="w-6 h-6 text-[var(--color-gold)]" />
                                        <span className="text-[var(--color-gray-400)] text-lg">Giảng viên:</span>
                                        <span className="text-white text-xl font-semibold">Nguyễn Thúy Phương</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Team Section */}
                <section className="py-12 px-4">
                    <div className="container max-w-6xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="text-center mb-10">
                                <div className="inline-flex items-center gap-3 mb-4">
                                    <Users className="w-10 h-10 text-[var(--color-crimson)]" />
                                    <h3 className="text-4xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
                                        Nhóm 5
                                    </h3>
                                </div>
                                <div className="w-16 h-1 bg-gradient-to-r from-[var(--color-crimson)] to-[var(--color-gold)] mx-auto rounded-full" />
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {teamMembers.map((member, index) => (
                                    <motion.div
                                        key={member.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 + index * 0.1 }}
                                        whileHover={{ y: -8, scale: 1.02 }}
                                        className="bg-gradient-to-br from-[var(--color-gray-900)] to-[var(--color-black)] 
                                        border border-[var(--color-gray-800)] rounded-2xl p-6 text-center
                                        hover:border-[var(--color-crimson)]/50 hover:shadow-xl hover:shadow-[var(--color-crimson)]/10
                                        transition-all duration-300"
                                    >
                                        <div className="w-20 h-20 mx-auto mb-4 rounded-2xl 
                                        bg-gradient-to-br from-[var(--color-crimson)] to-[var(--color-gold)]
                                        flex items-center justify-center text-white text-2xl font-bold 
                                        shadow-lg shadow-[var(--color-crimson)]/30"
                                        >
                                            {member.name.split(' ').pop()?.charAt(0)}
                                        </div>
                                        <p className="text-white font-bold text-lg mb-2">
                                            {member.name}
                                        </p>
                                        <div className="inline-block px-3 py-1 bg-[var(--color-black)]/60 rounded-lg 
                                        border border-[var(--color-gray-800)]"
                                        >
                                            <p className="text-[var(--color-gold)] text-sm font-mono font-semibold">
                                                {member.id}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* AI Usage Section */}
                <section className="py-12 px-4 pb-20">
                    <div className="container max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            <div className="text-center mb-10">
                                <div className="inline-flex items-center gap-3 mb-4">
                                    <Sparkles className="w-10 h-10 text-[var(--color-gold)]" />
                                    <h3 className="text-4xl font-bold text-white" style={{ fontFamily: 'var(--font-display)' }}>
                                        AI Usage
                                    </h3>
                                </div>
                                <div className="w-16 h-1 bg-gradient-to-r from-[var(--color-crimson)] to-[var(--color-gold)] mx-auto rounded-full" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* ChatGPT */}
                                <motion.div
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="bg-gradient-to-br from-[var(--color-gray-900)] to-[var(--color-black)] 
                                    border border-[var(--color-gray-800)] rounded-2xl p-8
                                    hover:border-[#10a37f]/50 hover:shadow-xl hover:shadow-[#10a37f]/10
                                    transition-all duration-300"
                                >
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-20 h-20 rounded-2xl bg-[#10a37f]/10 flex items-center justify-center mb-6
                                        border-2 border-[#10a37f]/20"
                                        >
                                            <svg viewBox="0 0 24 24" className="w-11 h-11 text-[#10a37f]" fill="currentColor">
                                                <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.8956zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.4066-.6813zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
                                            </svg>
                                        </div>
                                        <p className="text-white font-bold text-2xl mb-2">ChatGPT</p>
                                        <p className="text-[var(--color-gray-500)] text-sm">Làm nội dung slide</p>
                                    </div>
                                </motion.div>

                                {/* Gemini */}
                                <motion.div
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    className="bg-gradient-to-br from-[var(--color-gray-900)] to-[var(--color-black)] 
                                    border border-[var(--color-gray-800)] rounded-2xl p-8
                                    hover:border-[#4285f4]/50 hover:shadow-xl hover:shadow-[#4285f4]/10
                                    transition-all duration-300"
                                >
                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-20 h-20 rounded-2xl bg-[#4285f4]/10 flex items-center justify-center mb-6
                                        border-2 border-[#4285f4]/20"
                                        >
                                            <svg viewBox="0 0 24 24" className="w-11 h-11" fill="none">
                                                <defs>
                                                    <linearGradient id="geminiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                                        <stop offset="0%" stopColor="#4285f4" />
                                                        <stop offset="50%" stopColor="#9b72cb" />
                                                        <stop offset="100%" stopColor="#d96570" />
                                                    </linearGradient>
                                                </defs>
                                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="url(#geminiGrad)" />
                                                <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="url(#geminiGrad)" />
                                                <circle cx="12" cy="12" r="2" fill="url(#geminiGrad)" />
                                            </svg>
                                        </div>
                                        <p className="text-white font-bold text-2xl mb-2">Gemini</p>
                                        <p className="text-[var(--color-gray-500)] text-sm">Code game và website</p>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
