/* ============================================
   🚀 PERFORMANCE UTILITIES
   Optimization helpers
   ============================================ */

/**
 * Debounce function for performance
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Throttle function for performance
 */
export const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
};

/**
 * Lazy load images
 */
export const lazyLoadImages = () => {
  if ('loading' in HTMLImageElement.prototype) {
    // Browser supports native lazy loading
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
      img.src = img.dataset.src;
    });
  } else {
    // Fallback to Intersection Observer
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add('loaded');
            imageObserver.unobserve(img);
          }
        });
      });

      lazyImages.forEach((img) => imageObserver.observe(img));
    } else {
      // Fallback for very old browsers
      lazyImages.forEach((img) => {
        img.src = img.dataset.src;
      });
    }
  }
};

/**
 * Preload critical resources
 */
export const preloadResources = () => {
  // Preload critical images
  const criticalImages = [
    '/assets/images/hero-bg.webp',
    '/assets/images/profile.webp',
  ];

  criticalImages.forEach((src) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });

  // Preload fonts
  const fontLink = document.createElement('link');
  fontLink.rel = 'preload';
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Fira+Code:wght@300;400;500;600&display=swap';
  fontLink.as = 'style';
  document.head.appendChild(fontLink);
};

/**
 * Optimize animations for performance
 */
export const optimizeAnimations = () => {
  // Use passive event listeners for better scrolling performance
  const supportsPassive = (() => {
    let supports = false;
    try {
      const opts = Object.defineProperty({}, 'passive', {
        get() {
          supports = true;
          return true;
        },
      });
      window.addEventListener('test', null, opts);
      window.removeEventListener('test', null, opts);
    } catch (e) {}
    return supports;
  })();

  if (supportsPassive) {
    document.addEventListener('touchmove', () => {}, { passive: true });
    document.addEventListener('wheel', () => {}, { passive: true });
  }
};

/**
 * Monitor performance metrics
 */
export const monitorPerformance = () => {
  if ('performance' in window) {
    // Report Core Web Vitals
    const reportMetric = (metric) => {
      console.log(`📊 ${metric.name}: ${metric.value.toFixed(2)}`);
    };

    // Monitor largest contentful paint
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        reportMetric(entry);
      }
    });

    observer.observe({ entryTypes: ['largest-contentful-paint'] });
  }
};