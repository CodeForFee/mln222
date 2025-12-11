import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            {/* SỬA LỖI CHỒNG LẤN: Tăng pt-32 lên pt-52 */}
            <main className="flex-1 **pt-52**"> 
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}