/* ============================================
   🎯 INTERSECTION OBSERVER HOOK
   For scroll animations and lazy loading
   ============================================ */

import { useEffect, useRef, useState } from 'react';

/**
 * useIntersectionObserver Hook
 * Detects when elements enter/leave viewport
 */
const useIntersectionObserver = ({
  threshold = 0.1,
  root = null,
  rootMargin = '0px',
  freezeOnceVisible = true,
} = {}) => {
  const [entry, setEntry] = useState({});
  const [node, setNode] = useState(null);
  const observer = useRef(null);
  const isClient = typeof window !== 'undefined';

  useEffect(() => {
    if (!isClient || !node) return;

    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(
      ([entry]) => {
        setEntry(entry);
        
        if (freezeOnceVisible && entry.isIntersecting && observer.current) {
          observer.current.disconnect();
        }
      },
      { threshold, root, rootMargin }
    );

    observer.current.observe(node);

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [node, threshold, root, rootMargin, freezeOnceVisible, isClient]);

  return [setNode, entry];
};

export default useIntersectionObserver;