/* ============================================
   🔝 SCROLL TO TOP COMPONENT
   Smooth scroll functionality
   ============================================ */

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Scroll to Top Component
 * Automatically scrolls to top on route change
 */
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Smooth scroll to top
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;