import HeroBanner from '../components/Home/HeroBanner';
import NavigationCards from '../components/Home/NavigationCards';
import IntroSection from '../components/Home/IntroSection';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';

export default function HomePage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
                <HeroBanner />
                <NavigationCards />
                <IntroSection />
            </main>
            <Footer />
        </div>
    );
}
