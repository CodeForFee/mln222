import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/HomePage';
import TimelinePage from './pages/TimelinePage';
import PhilosopherPage from './pages/PhilosopherPage';
import GalleryPage from './pages/GalleryPage';
import GamesPage from './pages/GamesPage';
import AboutPage from './pages/AboutPage';
// import PresentationPage from './pages/PresentationPage';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/timeline" element={<TimelinePage />} />
        <Route path="/philosopher/:id" element={<PhilosopherPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* <Route path="/presentation" element={<PresentationPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
