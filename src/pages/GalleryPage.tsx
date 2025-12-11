import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    XMarkIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    Squares2X2Icon,
    UserIcon,
    ClockIcon,
    BookOpenIcon,
    PaintBrushIcon
} from '@heroicons/react/24/outline';
import { galleryImages, getImagesByCategory } from '../data/gallery';
import type { GalleryImage } from '../data/gallery';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';

type CategoryFilter = 'all' | GalleryImage['category'];

const categories: { id: CategoryFilter; label: string; Icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'all', label: 'Tất cả', Icon: Squares2X2Icon },
    { id: 'portrait', label: 'Chân dung', Icon: UserIcon },
    { id: 'historical', label: 'Lịch sử', Icon: ClockIcon },
    { id: 'book', label: 'Sách', Icon: BookOpenIcon },
    { id: 'illustration', label: 'Minh họa', Icon: PaintBrushIcon },
];

export default function GalleryPage() {
    const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
    const [selectedIndex, setSelectedIndex] = useState<number>(0);

    const filteredImages = activeCategory === 'all'
        ? galleryImages
        : getImagesByCategory(activeCategory);

    const openLightbox = (image: GalleryImage, index: number) => {
        setSelectedImage(image);
        setSelectedIndex(index);
    };

    const navigateLightbox = (direction: 'prev' | 'next') => {
        if (!filteredImages.length) return;
        let newIndex = direction === 'next'
            ? (selectedIndex + 1) % filteredImages.length
            : (selectedIndex - 1 + filteredImages.length) % filteredImages.length;
        setSelectedIndex(newIndex);
        setSelectedImage(filteredImages[newIndex]);
    };

    return (
        <div className="min-h-screen flex flex-col bg-[var(--color-black)]">
            <Navbar />

            <main className="flex-1" style={{ paddingTop: '80px' }}>
                {/* Hero Section */}
                <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden py-10">
                    {/* Background decorations */}
                    <div className="absolute inset-0">
                        <div className="absolute top-20 left-10 w-64 h-64 bg-[var(--color-crimson)] rounded-full blur-[150px] opacity-20" />
                        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[var(--color-gold)] rounded-full blur-[180px] opacity-10" />
                    </div>

                    <div className="container relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center max-w-4xl mx-auto"
                        >
                            <span className="text-editorial text-[var(--color-gold)] inline-flex items-center gap-4 mb-6">
                                <span className="w-12 h-[1px] bg-[var(--color-gold)]" />
                                Bộ sưu tập hình ảnh
                                <span className="w-12 h-[1px] bg-[var(--color-gold)]" />
                            </span>

                            <h1 className="mb-6">
                                <span className="block text-white leading-[0.95]">Thư Viện</span>
                                <span className="block text-gradient-gold leading-[0.95] mt-3">Lịch Sử & Tư Tưởng</span>
                            </h1>

                            <p className="text-lg text-[var(--color-gray-400)] max-w-2xl mx-auto leading-relaxed">
                                Khám phá bộ sưu tập hình ảnh về các triết gia, sự kiện lịch sử,
                                và biểu tượng của phong trào cộng sản quốc tế.
                            </p>
                        </motion.div>
                    </div>
                </section>

                {/* Category Filter */}
                <section className="sticky top-20 z-30 py-4 bg-[var(--color-black)]/90 backdrop-blur-md border-y border-[var(--color-gray-800)]">
                    <div className="container">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex flex-wrap justify-center gap-3"
                        >
                            {categories.map((cat, idx) => (
                                <motion.button
                                    key={cat.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    onClick={() => setActiveCategory(cat.id)}
                                    className={`group relative px-6 py-3 text-sm font-medium transition-all duration-300 overflow-hidden ${activeCategory === cat.id
                                        ? 'text-white'
                                        : 'text-[var(--color-gray-400)] hover:text-white'
                                        }`}
                                    style={{ fontFamily: 'var(--font-display)' }}
                                >
                                    {/* Background */}
                                    <span className={`absolute inset-0 transition-all duration-300 ${activeCategory === cat.id
                                        ? 'bg-gradient-to-r from-[var(--color-crimson)] to-[var(--color-crimson-dark)]'
                                        : 'bg-[var(--color-gray-900)] group-hover:bg-[var(--color-gray-800)]'
                                        }`} />

                                    {/* Border */}
                                    <span className={`absolute inset-0 border transition-colors duration-300 ${activeCategory === cat.id
                                        ? 'border-[var(--color-crimson)]'
                                        : 'border-[var(--color-gray-800)] group-hover:border-[var(--color-gray-600)]'
                                        }`} />

                                    <span className="relative flex items-center gap-2">
                                        <cat.Icon className="w-4 h-4" />
                                        <span>{cat.label}</span>
                                        {activeCategory === cat.id && (
                                            <span className="ml-1 text-xs opacity-70">
                                                ({filteredImages.length})
                                            </span>
                                        )}
                                    </span>
                                </motion.button>
                            ))}
                        </motion.div>
                    </div>
                </section>

                {/* Gallery Grid */}
                <section className="py-16">
                    <div className="container">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeCategory}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                            >
                                {filteredImages.map((image, index) => (
                                    <motion.div
                                        key={image.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.05, duration: 0.5 }}
                                        className="group"
                                    >
                                        <div
                                            className="relative aspect-[4/5] cursor-pointer overflow-hidden bg-[var(--color-gray-900)]"
                                            onClick={() => openLightbox(image, index)}
                                            role="button"
                                            tabIndex={0}
                                            onKeyDown={(e) => {
                                                if (e.key === 'Enter' || e.key === ' ') {
                                                    e.preventDefault();
                                                    openLightbox(image, index);
                                                }
                                            }}
                                            aria-label={`Xem ảnh: ${image.caption}`}
                                        >
                                            {/* Image */}
                                            <img
                                                src={image.url}
                                                alt={image.caption}
                                                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-75"
                                                loading="lazy"
                                            />

                                            {/* Decorative frame */}
                                            <div className="absolute inset-3 border border-[var(--color-gold)]/0 group-hover:border-[var(--color-gold)]/50 transition-all duration-500 pointer-events-none" />

                                            {/* Gradient overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />

                                            {/* Content */}
                                            <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                                <div className="flex items-start justify-between gap-3">
                                                    <div>
                                                        <h3
                                                            className="text-white font-semibold text-base mb-1 line-clamp-2"
                                                            style={{ fontFamily: 'var(--font-display)' }}
                                                        >
                                                            {image.caption}
                                                        </h3>
                                                        <p className="text-[var(--color-gray-500)] text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                            {image.source.split(',')[0]}
                                                        </p>
                                                    </div>
                                                    {image.year && (
                                                        <span className="flex-shrink-0 px-2 py-1 bg-[var(--color-gold)]/20 text-[var(--color-gold)] text-xs font-medium">
                                                            {image.year}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Category badge */}
                                            <div className="absolute top-4 left-4">
                                                <span className="px-2 py-1 bg-[var(--color-black)]/70 backdrop-blur-sm text-[var(--color-gold)] text-xs flex items-center gap-1">
                                                    {(() => {
                                                        const cat = categories.find(c => c.id === image.category);
                                                        return cat ? <cat.Icon className="w-3 h-3" /> : null;
                                                    })()}
                                                </span>
                                            </div>

                                            {/* Hover zoom indicator */}
                                            <div className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center bg-[var(--color-crimson)] opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                                                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </AnimatePresence>

                        {filteredImages.length === 0 && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-center py-20"
                            >
                                <p className="text-[var(--color-gray-600)] text-lg">
                                    Không tìm thấy hình ảnh nào trong danh mục này.
                                </p>
                            </motion.div>
                        )}
                    </div>
                </section>

                {/* Lightbox */}
                <AnimatePresence>
                    {selectedImage && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
                            onClick={() => setSelectedImage(null)}
                        >
                            {/* Navigation buttons */}
                            <button
                                onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}
                                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-[var(--color-gray-900)]/80 hover:bg-[var(--color-crimson)] text-white transition-all duration-300"
                                aria-label="Ảnh trước"
                            >
                                <ChevronLeftIcon className="w-6 h-6" />
                            </button>

                            <button
                                onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}
                                className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center bg-[var(--color-gray-900)]/80 hover:bg-[var(--color-crimson)] text-white transition-all duration-300"
                                aria-label="Ảnh tiếp theo"
                            >
                                <ChevronRightIcon className="w-6 h-6" />
                            </button>

                            {/* Close button */}
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 md:top-8 md:right-8 z-10 w-12 h-12 flex items-center justify-center bg-[var(--color-gray-900)]/80 hover:bg-[var(--color-crimson)] text-white transition-all duration-300"
                                aria-label="Đóng"
                            >
                                <XMarkIcon className="w-6 h-6" />
                            </button>

                            {/* Image container */}
                            <motion.div
                                key={selectedImage.id}
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="relative max-w-5xl max-h-[85vh] mx-4"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <img
                                    src={selectedImage.url}
                                    alt={selectedImage.caption}
                                    className="max-w-full max-h-[75vh] object-contain border-4 border-[var(--color-gray-800)]"
                                />

                                {/* Info panel */}
                                <div className="mt-4 px-2 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                                    <div>
                                        <h3
                                            className="text-xl md:text-2xl text-white mb-2"
                                            style={{ fontFamily: 'var(--font-display)' }}
                                        >
                                            {selectedImage.caption}
                                        </h3>
                                        <p className="text-[var(--color-gray-500)] text-sm">
                                            {selectedImage.source}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        {selectedImage.year && (
                                            <span className="px-4 py-2 bg-[var(--color-gold)]/20 text-[var(--color-gold)] font-semibold">
                                                {selectedImage.year}
                                            </span>
                                        )}
                                        <span className="text-[var(--color-gray-600)] text-sm">
                                            {selectedIndex + 1} / {filteredImages.length}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>

            <Footer />
        </div>
    );
}