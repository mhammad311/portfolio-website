/* ============================================
   📱 RESPONSIVE TEST COMPONENT
   Development tool for testing responsiveness
   ============================================ */

import React, { useState, useEffect } from 'react';
import { FiSmartphone, FiTablet, FiMonitor, FiX } from 'react-icons/fi';

/**
 * Responsive Test Component (Development only)
 */
const ResponsiveTest = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentView, setCurrentView] = useState('desktop');
  
  // Only show in development
if (!import.meta.env.DEV) {
    return null;
  }
  
  const viewportSizes = {
    mobile: { width: 375, height: 667, icon: <FiSmartphone />, label: 'Mobile' },
    tablet: { width: 768, height: 1024, icon: <FiTablet />, label: 'Tablet' },
    desktop: { width: 1280, height: 800, icon: <FiMonitor />, label: 'Desktop' },
  };
  
  const toggleView = (view) => {
    setCurrentView(view);
    const size = viewportSizes[view];
    
    // Update viewport meta tag
    const viewportMeta = document.querySelector('meta[name="viewport"]');
    if (viewportMeta) {
      viewportMeta.content = `width=${size.width}, initial-scale=1`;
    }
  };
  
  const resetViewport = () => {
    const viewportMeta = document.querySelector('meta[name="viewport"]');
    if (viewportMeta) {
      viewportMeta.content = 'width=device-width, initial-scale=1';
    }
    setIsVisible(false);
  };
  
  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="
          fixed top-4 right-4 z-50
          px-4 py-2
          bg-accent text-primary-dark
          rounded-lg
          text-sm font-medium
          shadow-lg
          hover:shadow-xl
          transition-all duration-300
          hidden md:flex items-center gap-2
        "
      >
        <FiSmartphone />
        Responsive Test
      </button>
      
      {/* Control Panel */}
      {isVisible && (
        <div className="
          fixed top-4 right-4 z-50
          bg-primary/95 backdrop-blur-lg
          border border-border
          rounded-xl
          p-4
          shadow-2xl
          w-64
        ">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-heading font-semibold text-text-heading">
              Responsive Test
            </h3>
            <button
              onClick={resetViewport}
              className="
                p-1
                text-text-body hover:text-accent
                transition-colors duration-300
              "
            >
              <FiX size={20} />
            </button>
          </div>
          
          {/* Viewport Controls */}
          <div className="space-y-3">
            {Object.entries(viewportSizes).map(([key, config]) => (
              <button
                key={key}
                onClick={() => toggleView(key)}
                className={`
                  w-full
                  flex items-center justify-between
                  px-4 py-3
                  rounded-lg
                  transition-all duration-300
                  ${currentView === key
                    ? 'bg-accent text-primary-dark'
                    : 'bg-primary-light/50 text-text-body hover:bg-accent/10 hover:text-accent'
                  }
                `}
              >
                <div className="flex items-center gap-3">
                  {config.icon}
                  <span>{config.label}</span>
                </div>
                <span className="text-xs">
                  {config.width}×{config.height}
                </span>
              </button>
            ))}
          </div>
          
          {/* Current View Info */}
          <div className="
            mt-4 pt-4 border-t border-border
            text-sm text-text-body
          ">
            <div className="flex justify-between mb-1">
              <span>Current View:</span>
              <span className="text-accent">
                {viewportSizes[currentView].label}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Viewport:</span>
              <span>
                {viewportSizes[currentView].width}×{viewportSizes[currentView].height}
              </span>
            </div>
          </div>
          
          {/* Instructions */}
          <div className="
            mt-4 pt-4 border-t border-border
            text-xs text-text-body/70
          ">
            <p className="mb-2">
              This tool helps test responsive designs. It modifies the viewport meta tag.
            </p>
            <p>
              Remember to refresh after closing to restore default viewport.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default ResponsiveTest;
