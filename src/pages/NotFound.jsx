/* ============================================
   404 NOT FOUND PAGE
   Custom 404 error page
   Theme: Midnight Tech
   ============================================ */

import React from 'react';
import { motion } from 'framer-motion';
import { FiHome, FiArrowLeft } from 'react-icons/fi';
import Button from '../components/Button';

/**
 * 404 Not Found Page
 */
const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="
        min-h-screen
        flex items-center justify-center
        pt-24 pb-20
      "
    >
      <div className="container mx-auto px-6">
        <div className="
          max-w-2xl mx-auto
          text-center
        ">
          {/* 404 Number */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              type: 'spring',
              stiffness: 200,
              damping: 20
            }}
            className="
              text-9xl font-heading font-bold
              bg-gradient-to-r from-accent to-accent-hover
              bg-clip-text text-transparent
              mb-8
            ">
            404
          </motion.div>
          
          {/* Title */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="
              font-heading font-bold
              text-3xl md:text-4xl
              text-text-heading
              mb-6
            "
          >
            Page Not Found
          </motion.h1>
          
          {/* Description */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="
              text-text-body text-lg
              max-w-md mx-auto
              mb-10
            "
          >
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </motion.p>
          
          {/* Action Buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="
              flex flex-col sm:flex-row
              items-center justify-center
              gap-4
            "
          >
            <Button
              variant="primary"
              size="lg"
              leftIcon={<FiHome />}
              href="/"
            >
              Back to Home
            </Button>
            <Button
              variant="secondary"
              size="lg"
              leftIcon={<FiArrowLeft />}
              onClick={() => window.history.back()}
            >
              Go Back
            </Button>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="
              mt-12 pt-12 border-t border-border
            "
          >
            <p className="
              text-text-body text-sm mb-4
            ">
              You might be looking for:
            </p>
            <div className="
              flex flex-wrap justify-center
              gap-4
            ">
              {[
                { label: 'Portfolio', href: '/portfolio' },
                { label: 'Services', href: '/services' },
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '/contact' },
              ].map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="
                    text-accent hover:text-accent-hover
                    transition-colors duration-300
                  "
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default NotFound;