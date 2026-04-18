/* ============================================
   🧭 HEADER COMPONENT
   Main navigation header with mobile menu
   Theme: Midnight Tech
   ============================================ */

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiDownload } from 'react-icons/fi';

// Components
import Button from './Button';

// Data
import { socials } from '../data/socials';

/**
 * Header Component
 */
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // Navigation links
  const navLinks = [
    { id: 'home',     label: 'Home',     href: '/'         },
    { id: 'about',    label: 'About',    href: '/about'    },
    { id: 'services', label: 'Services', href: '/services' },
    { id: 'projects', label: 'Projects', href: '/portfolio' },
    { id: 'blog',     label: 'Blog',     href: '/blog'     }, // ← ADDED
    { id: 'contact',  label: 'Contact',  href: '/contact'  },
  ];
  
  // Filter social links for header
  const headerSocials = socials.filter(link => 
    ['github', 'linkedin', 'instagram'].includes(link.id)
  ).slice(0, 3);
  
  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : '';
  };
  
  // Close menu
  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = '';
  };
  
  // Check if link is active
  const isActiveLink = (href) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(href);
  };
  
  return (
    <>
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        className="
          fixed top-0 left-0 right-0 z-50
          bg-primary/90 backdrop-blur-md
          border-b border-border
        "
      >
        <div className="container mx-auto px-6">
          <nav className="
            flex items-center justify-between
            py-4
          ">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="
                  w-12 h-12
                  flex items-center justify-center
                  border-2 border-accent
                  rounded-lg
                  group-hover:bg-accent/10
                  transition-colors duration-300
                "
              >
                <span className="font-heading font-bold text-xl text-accent">
                  web
                </span>
              </motion.div>
              <div className="hidden md:block">
                <div className="font-heading font-bold text-xl text-text-heading">
                  webX
                </div>
                <div className="text-xs text-accent font-mono">
                  Developer
                </div>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {/* Navigation Links */}
              <div className="flex items-center gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`
                      relative font-mono text-sm
                      px-1 py-2
                      transition-colors duration-300
                      ${isActiveLink(link.href) ? 'text-accent' : 'text-text-body hover:text-accent'}
                    `}
                  >
                    <span className={`
                      absolute bottom-0 left-0 right-0 h-0.5
                      bg-accent origin-left
                      transition-transform duration-300
                      ${isActiveLink(link.href) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                    `} />
                    {link.label}
                  </a>
                ))}
              </div>
              
              {/* Social Links */}
              <div className="flex items-center gap-3">
                {headerSocials.map((social) => (
                  <motion.a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="
                      w-10 h-10
                      flex items-center justify-center
                      text-text-body hover:text-accent
                      bg-primary-light/50 hover:bg-accent/10
                      border border-border hover:border-accent/50
                      rounded-lg
                      transition-all duration-300
                    "
                    aria-label={social.name}
                  >
                    {React.createElement(social.icon, { size: 18 })}
                  </motion.a>
                ))}
              </div>
              
              {/* Resume Button */}
              <Button
                variant="primary"
                size="sm"
                leftIcon={<FiDownload size={16} />}
                href="/resume.pdf"
                external
              >
                Resume
              </Button>
            </div>
            
            {/* Mobile Menu Button */}
            <motion.button
              onClick={toggleMenu}
              className="
                md:hidden
                w-10 h-10
                flex items-center justify-center
                text-accent
                rounded-lg
                focus:outline-none focus:ring-2 focus:ring-accent
              "
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </motion.button>
          </nav>
        </div>
      </motion.header>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              className="
                fixed inset-0 z-40
                bg-primary/80 backdrop-blur-sm
                md:hidden
              "
            />
            
            {/* Menu Panel */}
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 20 }}
              className="
                fixed top-0 right-0 bottom-0 z-50
                w-[min(75vw,320px)]
                bg-primary border-l border-border
                flex flex-col
                md:hidden
                shadow-2xl
              "
            >
              {/* Menu Content */}
              <div className="flex flex-col h-full pt-24 pb-8 px-8">
                {/* Navigation Links */}
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.id}
                      href={link.href}
                      onClick={closeMenu}
                      className={`
                        font-mono text-lg
                        py-3
                        transition-colors duration-300
                        ${isActiveLink(link.href) ? 'text-accent' : 'text-text-body hover:text-accent'}
                      `}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
                
                {/* Social Links */}
                <div className="mt-8">
                  <div className="flex items-center gap-4">
                    {headerSocials.map((social) => (
                      <a
                        key={social.id}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeMenu}
                        className="
                          text-text-body hover:text-accent
                          transition-colors duration-300
                        "
                        aria-label={social.name}
                      >
                        {React.createElement(social.icon, { size: 20 })}
                      </a>
                    ))}
                  </div>
                </div>
                
                {/* Resume Button */}
                <div className="mt-auto pt-8">
                  <Button
                    variant="primary"
                    size="md"
                    fullWidth
                    leftIcon={<FiDownload size={18} />}
                    href="/resume.pdf"
                    external
                    onClick={closeMenu}
                  >
                    Download Resume
                  </Button>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;