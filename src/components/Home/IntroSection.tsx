import { motion } from 'framer-motion';

export default function IntroSection() {
    return (
        <section id="about" className="relative overflow-hidden" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[var(--color-black)]" />
                {/* Top divider line */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[var(--color-crimson)] to-transparent opacity-50" />
            </div>

            <div className="container relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Left column - Editorial content */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-7"
                    >
                        {/* Section label */}
                        <span className="text-editorial text-[var(--color-gold)] inline-flex items-center gap-4 mb-6">
                            <span className="w-8 h-[1px] bg-[var(--color-gold)]" />
                            Bối cảnh lịch sử
                        </span>

                        <h2 className="text-white mb-6 leading-[1.1]">
                            Triết học Mác – Lênin<br />
                            <span className="text-gradient-gold">ra đời trong bối cảnh nào?</span>
                        </h2>

                        <div className="space-y-5 text-[var(--color-gray-400)] text-base leading-relaxed">
                            <p>
                                Vào giữa thế kỷ XIX, khi cuộc cách mạng công nghiệp đang thay đổi bộ mặt châu Âu,
                                những mâu thuẫn xã hội ngày càng sâu sắc. Giai cấp công nhân, dù là lực lượng sản
                                xuất chính, lại sống trong điều kiện cực kỳ khổ cực.
                            </p>
                            <p>
                                Trong bối cảnh đó, <span className="text-white font-medium">Karl Marx</span> và
                                <span className="text-white font-medium"> Friedrich Engels</span> đã xây dựng nên
                                một hệ thống lý luận hoàn chỉnh, đặt nền móng cho phong trào cách mạng vô sản
                                toàn thế giới.
                            </p>
                        </div>

                        {/* Key pillars */}
                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
                            {[
                                { number: '01', title: 'Triết học', desc: 'Duy vật biện chứng' },
                                { number: '02', title: 'Kinh tế', desc: 'Chính trị học' },
                                { number: '03', title: 'CNXHKH', desc: 'Giải phóng nhân loại' },
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 + 0.3 }}
                                    className="group"
                                >
                                    <span className="text-editorial text-[var(--color-crimson)] text-xs block mb-2">
                                        {item.number}
                                    </span>
                                    <h4 className="text-white font-semibold text-lg mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                                        {item.title}
                                    </h4>
                                    <p className="text-[var(--color-gray-600)] text-sm">
                                        {item.desc}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right column - Quote card */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-5"
                    >
                        <div className="relative">
                            {/* Decorative element */}
                            <div className="absolute -top-8 -left-8 w-32 h-32 border border-[var(--color-crimson)] opacity-20" />

                            <div className="glass-crimson p-8 relative">
                                {/* Large quote mark */}
                                <div
                                    className="absolute top-3 left-4 text-[100px] leading-none opacity-10"
                                    style={{ fontFamily: 'var(--font-display)', color: 'var(--color-crimson)' }}
                                >
                                    "
                                </div>

                                <div className="relative z-10">
                                    <blockquote
                                        className="text-xl md:text-2xl text-white leading-snug mb-6"
                                        style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic' }}
                                    >
                                        Các nhà triết học đã chỉ giải thích thế giới bằng nhiều cách khác nhau;
                                        vấn đề là <span className="text-[var(--color-gold)]">cải tạo thế giới</span>.
                                    </blockquote>

                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 flex-shrink-0">
                                            <img
                                                src="/images/KarlMarx.jpg"
                                                alt="Karl Marx"
                                                className="w-full h-full object-cover border border-[var(--color-crimson)]"
                                            />
                                        </div>
                                        <div>
                                            <div className="text-white font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
                                                Karl Marx
                                            </div>
                                            <div className="text-[var(--color-gray-600)] text-sm">
                                                Luận cương về Feuerbach, 1845
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Value proposition card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                                className="mt-6 p-6 bg-[var(--color-gray-900)] border border-[var(--color-gray-800)]"
                            >
                                <h4
                                    className="text-[var(--color-gold)] text-base font-semibold mb-2"
                                    style={{ fontFamily: 'var(--font-display)' }}
                                >
                                    Giá trị thế kỷ XXI
                                </h4>
                                <p className="text-[var(--color-gray-400)] text-sm leading-relaxed">
                                    Trong bối cảnh toàn cầu hóa và những thách thức mới của thời đại,
                                    tư tưởng Mác – Lênin vẫn giữ nguyên giá trị trong việc phân tích
                                    các quan hệ kinh tế – xã hội.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
