import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useLayoutEffect(() => {
        // Instantly scroll to top before browser paints
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, [pathname]);

    return null;
}
