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
                                        <div className="w-20 h-20 rounded-2xl overflow-hidden mb-6 border-2 border-[#10a37f]/20 shadow-lg shadow-[#10a37f]/20">
                                            <img
                                                src="/images/chatgpt.png"
                                                alt="ChatGPT"
                                                className="w-full h-full object-cover"
                                            />
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
                                        <div className="w-20 h-20 rounded-2xl overflow-hidden mb-6 border-2 border-[#4285f4]/20 shadow-lg shadow-[#4285f4]/20">
                                            <img
                                                src="/images/gemini.jpg"
                                                alt="Gemini"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <p className="text-white font-bold text-2xl mb-2">Gemini</p>
                                        <p className="text-[var(--color-gray-500)] text-sm">Tạo hình ảnh bằng AI</p>
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
