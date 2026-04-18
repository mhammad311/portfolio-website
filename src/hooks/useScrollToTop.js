import { useState, useEffect, useCallback } from 'react';

export const useScrollToTop = (options = {}) => {
  const { threshold = 400, behavior = 'smooth' } = options;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > threshold);
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [threshold]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior,
    });
  }, [behavior]);

  return { scrollToTop, isVisible };
};

export default useScrollToTop;