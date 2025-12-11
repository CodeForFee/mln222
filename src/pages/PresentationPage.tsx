import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';

export default function PresentationPage() {
    return (
        <div className="min-h-screen bg-[var(--color-black)]">
            <Navbar />

            <main style={{ paddingTop: '80px' }}>
                <div className="container py-8">
                    <div className="text-center mb-8">
                        <span className="text-editorial text-[var(--color-gold)] inline-flex items-center gap-4 mb-4">
                            <span className="w-8 h-[1px] bg-[var(--color-gold)]" />
                            Bài thuyết trình
                            <span className="w-8 h-[1px] bg-[var(--color-gold)]" />
                        </span>
                        {/* <h1 className="text-white mb-4">
                            <span className="text-gradient-gold">Sống hay Tồn tại?</span>
                        </h1> */}
                        {/* <p className="text-[var(--color-gray-400)] max-w-2xl mx-auto">
                            Khám phá bài thuyết trình về triết học Mác-Lênin thông qua flipbook tương tác.
                        </p> */}
                    </div>

                    {/* Flipbook iframe container */}
                    <div className="relative w-full" style={{
                        height: 'calc(100vh - 280px)',
                        minHeight: '800px'
                    }}>
                        <iframe
                            src="/mln111_Flipbook/index.html"
                            title="Sống Hay Tồn Tại - Presentation"
                            className="w-full h-full border-0 rounded-lg"
                            style={{
                                background: '#1a1a1a'
                            }}
                        />
                    </div>

                    {/* Instructions */}
                    <div className="mt-6 text-center">
                        <p className="text-[var(--color-gray-600)] text-sm">
                            Sử dụng phím mũi tên ← → hoặc click vào trang để lật sách
                        </p>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
