/* ============================================
   ✨ FRAMER MOTION CONFIGURATION
   High-Quality Animation Library for Portfolio
   Theme: Midnight Tech
   ============================================ */

import { motion, AnimatePresence, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

// ============================================
// 🎯 EASING FUNCTIONS
// ============================================

/**
 * Custom easing curves for smooth animations
 */
export const easings = {
  // Smooth & Natural
  smooth: [0.4, 0, 0.2, 1],
  smoothOut: [0, 0, 0.2, 1],
  smoothIn: [0.4, 0, 1, 1],
  
  // Bounce & Elastic
  bounce: [0.68, -0.55, 0.265, 1.55],
  bounceOut: [0.34, 1.56, 0.64, 1],
  elastic: [0.68, -0.6, 0.32, 1.6],
  
  // Expo (Dramatic)
  expoOut: [0.19, 1, 0.22, 1],
  expoIn: [0.95, 0.05, 0.795, 0.035],
  expoInOut: [0.87, 0, 0.13, 1],
  
  // Circ (Circular)
  circOut: [0, 0.55, 0.45, 1],
  circIn: [0.55, 0, 1, 0.45],
  circInOut: [0.85, 0, 0.15, 1],
  
  // Back (Overshoot)
  backOut: [0.34, 1.56, 0.64, 1],
  backIn: [0.6, -0.28, 0.735, 0.045],
  backInOut: [0.68, -0.55, 0.265, 1.55],
  
  // Custom Portfolio Easings
  heroEntrance: [0.16, 1, 0.3, 1],
  cardHover: [0.25, 0.1, 0.25, 1],
  buttonPress: [0.34, 1.56, 0.64, 1],
  menuSlide: [0.22, 1, 0.36, 1],
  pageTransition: [0.43, 0.13, 0.23, 0.96],
  reveal: [0.77, 0, 0.175, 1],
};

// ============================================
// ⏱️ TRANSITION PRESETS
// ============================================

/**
 * Pre-configured transition settings
 */
export const transitions = {
  // Default
  default: {
    duration: 0.5,
    ease: easings.smooth,
  },
  
  // Fast (UI feedback)
  fast: {
    duration: 0.2,
    ease: easings.smooth,
  },
  
  // Medium
  medium: {
    duration: 0.4,
    ease: easings.smooth,
  },
  
  // Slow (Dramatic)
  slow: {
    duration: 0.8,
    ease: easings.smooth,
  },
  
  // Spring animations
  spring: {
    type: 'spring',
    stiffness: 300,
    damping: 30,
  },
  
  springBouncy: {
    type: 'spring',
    stiffness: 400,
    damping: 10,
  },
  
  springGentle: {
    type: 'spring',
    stiffness: 120,
    damping: 14,
  },
  
  springStiff: {
    type: 'spring',
    stiffness: 500,
    damping: 30,
  },
  
  // Tween animations
  tweenSmooth: {
    type: 'tween',
    duration: 0.5,
    ease: easings.smooth,
  },
  
  tweenBounce: {
    type: 'tween',
    duration: 0.6,
    ease: easings.bounce,
  },
  
  // Page transitions
  pageEnter: {
    duration: 0.6,
    ease: easings.pageTransition,
  },
  
  pageExit: {
    duration: 0.4,
    ease: easings.smooth,
  },
  
  // Hero section
  hero: {
    duration: 0.8,
    ease: easings.heroEntrance,
  },
  
  // Card hover
  cardHover: {
    duration: 0.3,
    ease: easings.cardHover,
  },
  
  // Menu
  menu: {
    duration: 0.5,
    ease: easings.menuSlide,
  },
  
  // Reveal
  reveal: {
    duration: 0.8,
    ease: easings.reveal,
  },
};

// ============================================
// 🎬 ANIMATION VARIANTS
// ============================================

/**
 * Fade animations
 */
export const fadeVariants = {
  // Basic fade
  fade: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: transitions.default,
    },
    exit: {
      opacity: 0,
      transition: transitions.fast,
    },
  },

  // Fade up
  fadeUp: {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easings.smooth,
      },
    },
    exit: {
      opacity: 0,
      y: 20,
      transition: transitions.fast,
    },
  },

  // Fade down
  fadeDown: {
    hidden: {
      opacity: 0,
      y: -40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easings.smooth,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: transitions.fast,
    },
  },

  // Fade left
  fadeLeft: {
    hidden: {
      opacity: 0,
      x: -60,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: easings.smooth,
      },
    },
    exit: {
      opacity: 0,
      x: -30,
      transition: transitions.fast,
    },
  },

  // Fade right
  fadeRight: {
    hidden: {
      opacity: 0,
      x: 60,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: easings.smooth,
      },
    },
    exit: {
      opacity: 0,
      x: 30,
      transition: transitions.fast,
    },
  },

  // Fade scale
  fadeScale: {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: easings.smooth,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      transition: transitions.fast,
    },
  },

  // Fade scale up
  fadeScaleUp: {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 30,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easings.smooth,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: 20,
      transition: transitions.fast,
    },
  },
};

/**
 * Slide animations
 */
export const slideVariants = {
  // Slide up
  slideUp: {
    hidden: {
      y: '100%',
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easings.expoOut,
      },
    },
    exit: {
      y: '100%',
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: easings.expoIn,
      },
    },
  },

  // Slide down
  slideDown: {
    hidden: {
      y: '-100%',
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easings.expoOut,
      },
    },
    exit: {
      y: '-100%',
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: easings.expoIn,
      },
    },
  },

  // Slide left
  slideLeft: {
    hidden: {
      x: '100%',
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: easings.menuSlide,
      },
    },
    exit: {
      x: '100%',
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: easings.smooth,
      },
    },
  },

  // Slide right
  slideRight: {
    hidden: {
      x: '-100%',
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: easings.menuSlide,
      },
    },
    exit: {
      x: '-100%',
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: easings.smooth,
      },
    },
  },
};

/**
 * Scale animations
 */
export const scaleVariants = {
  // Scale in
  scaleIn: {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
    exit: {
      scale: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  },

  // Scale bounce
  scaleBounce: {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 10,
      },
    },
    exit: {
      scale: 0,
      opacity: 0,
    },
  },

  // Pop
  pop: {
    hidden: {
      scale: 0.5,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 500,
        damping: 25,
      },
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
  },

  // Grow
  grow: {
    hidden: {
      scale: 0.95,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: easings.smooth,
      },
    },
  },
};

/**
 * Rotate animations
 */
export const rotateVariants = {
  // Rotate in
  rotateIn: {
    hidden: {
      rotate: -180,
      opacity: 0,
      scale: 0.5,
    },
    visible: {
      rotate: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 15,
      },
    },
  },

  // Flip X
  flipX: {
    hidden: {
      rotateX: 90,
      opacity: 0,
    },
    visible: {
      rotateX: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easings.smooth,
      },
    },
  },

  // Flip Y
  flipY: {
    hidden: {
      rotateY: 90,
      opacity: 0,
    },
    visible: {
      rotateY: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easings.smooth,
      },
    },
  },
};

/**
 * Reveal animations (with clip-path)
 */
export const revealVariants = {
  // Reveal from left
  revealLeft: {
    hidden: {
      clipPath: 'inset(0 100% 0 0)',
      opacity: 0,
    },
    visible: {
      clipPath: 'inset(0 0% 0 0)',
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: easings.reveal,
      },
    },
  },

  // Reveal from right
  revealRight: {
    hidden: {
      clipPath: 'inset(0 0 0 100%)',
      opacity: 0,
    },
    visible: {
      clipPath: 'inset(0 0 0 0%)',
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: easings.reveal,
      },
    },
  },

  // Reveal from top
  revealTop: {
    hidden: {
      clipPath: 'inset(0 0 100% 0)',
      opacity: 0,
    },
    visible: {
      clipPath: 'inset(0 0 0% 0)',
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: easings.reveal,
      },
    },
  },

  // Reveal from bottom
  revealBottom: {
    hidden: {
      clipPath: 'inset(100% 0 0 0)',
      opacity: 0,
    },
    visible: {
      clipPath: 'inset(0% 0 0 0)',
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: easings.reveal,
      },
    },
  },

  // Reveal from center
  revealCenter: {
    hidden: {
      clipPath: 'inset(50% 50% 50% 50%)',
      opacity: 0,
    },
    visible: {
      clipPath: 'inset(0% 0% 0% 0%)',
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: easings.reveal,
      },
    },
  },

  // Circle reveal
  revealCircle: {
    hidden: {
      clipPath: 'circle(0% at 50% 50%)',
      opacity: 0,
    },
    visible: {
      clipPath: 'circle(100% at 50% 50%)',
      opacity: 1,
      transition: {
        duration: 1,
        ease: easings.reveal,
      },
    },
  },
};

// ============================================
// 🎭 STAGGER ANIMATIONS
// ============================================

/**
 * Container variants for stagger animations
 */
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: (custom = {}) => ({
    opacity: 1,
    transition: {
      staggerChildren: custom.stagger || 0.1,
      delayChildren: custom.delay || 0,
      when: 'beforeChildren',
    },
  }),
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
      when: 'afterChildren',
    },
  },
};

/**
 * Fast stagger container
 */
export const staggerContainerFast = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

/**
 * Slow stagger container
 */
export const staggerContainerSlow = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

/**
 * Stagger item variants
 */
export const staggerItem = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: easings.smooth,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: {
      duration: 0.3,
    },
  },
};

/**
 * Stagger item with scale
 */
export const staggerItemScale = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: easings.smooth,
    },
  },
};

/**
 * Stagger item from left
 */
export const staggerItemLeft = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: easings.smooth,
    },
  },
};

/**
 * Stagger item from right
 */
export const staggerItemRight = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: easings.smooth,
    },
  },
};

// ============================================
// 🏠 HERO SECTION ANIMATIONS
// ============================================

/**
 * Hero container
 */
export const heroVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  },

  // Hero greeting (small text above name)
  greeting: {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easings.heroEntrance,
      },
    },
  },

  // Hero name (main heading)
  name: {
    hidden: {
      opacity: 0,
      y: 50,
      skewY: 5,
    },
    visible: {
      opacity: 1,
      y: 0,
      skewY: 0,
      transition: {
        duration: 0.8,
        ease: easings.heroEntrance,
      },
    },
  },

  // Hero title/tagline
  title: {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: easings.heroEntrance,
      },
    },
  },

  // Hero description
  description: {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easings.smooth,
      },
    },
  },

  // Hero CTA buttons
  cta: {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: easings.smooth,
      },
    },
  },

  // Hero image/graphic
  image: {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -5,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: easings.smooth,
      },
    },
  },

  // Floating elements in hero
  float: {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: easings.heroEntrance,
      },
    },
  },
};

// ============================================
// 📦 CARD ANIMATIONS
// ============================================

/**
 * Card variants
 */
export const cardVariants = {
  // Basic card
  card: {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: easings.smooth,
      },
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        duration: 0.3,
        ease: easings.cardHover,
      },
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1,
      },
    },
  },

  // Project card
  projectCard: {
    hidden: {
      opacity: 0,
      y: 60,
      rotateX: 10,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: easings.smooth,
      },
    },
    hover: {
      y: -15,
      rotateX: -2,
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
      transition: {
        duration: 0.3,
        ease: easings.cardHover,
      },
    },
  },

  // Service card
  serviceCard: {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: easings.smooth,
      },
    },
    hover: {
      y: -8,
      scale: 1.03,
      transition: {
        duration: 0.3,
        ease: easings.cardHover,
      },
    },
  },

  // Testimonial card
  testimonialCard: {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotateY: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: easings.smooth,
      },
    },
  },

  // Card image overlay
  cardOverlay: {
    hidden: { opacity: 0 },
    hover: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  },

  // Card content
  cardContent: {
    hidden: { opacity: 0, y: 20 },
    hover: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        delay: 0.1,
      },
    },
  },
};

// ============================================
// 🔘 BUTTON ANIMATIONS
// ============================================

/**
 * Button variants
 */
export const buttonVariants = {
  // Primary button
  primary: {
    initial: {
      scale: 1,
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: easings.cardHover,
      },
    },
    tap: {
      scale: 0.95,
      transition: {
        duration: 0.1,
      },
    },
  },

  // Secondary button
  secondary: {
    initial: {
      scale: 1,
      backgroundColor: 'rgba(100, 255, 218, 0.1)',
    },
    hover: {
      scale: 1.02,
      backgroundColor: 'rgba(100, 255, 218, 0.2)',
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.98,
    },
  },

  // Icon button
  icon: {
    initial: {
      scale: 1,
      rotate: 0,
    },
    hover: {
      scale: 1.15,
      rotate: 5,
      transition: {
        duration: 0.2,
        ease: easings.bounce,
      },
    },
    tap: {
      scale: 0.9,
      rotate: -5,
    },
  },

  // Floating action button
  fab: {
    initial: {
      scale: 1,
      boxShadow: '0 4px 14px 0 rgba(100, 255, 218, 0.39)',
    },
    hover: {
      scale: 1.1,
      boxShadow: '0 6px 20px 0 rgba(100, 255, 218, 0.5)',
      transition: {
        duration: 0.3,
        ease: easings.smooth,
      },
    },
    tap: {
      scale: 0.95,
    },
  },

  // Glow button
  glow: {
    initial: {
      boxShadow: '0 0 0 rgba(100, 255, 218, 0)',
    },
    hover: {
      boxShadow: '0 0 30px rgba(100, 255, 218, 0.5)',
      transition: {
        duration: 0.3,
      },
    },
  },

  // Button text underline
  underline: {
    initial: {
      scaleX: 0,
      originX: 0,
    },
    hover: {
      scaleX: 1,
      transition: {
        duration: 0.3,
        ease: easings.smooth,
      },
    },
  },
};

// ============================================
// 📜 NAVBAR ANIMATIONS
// ============================================

/**
 * Navbar variants
 */
export const navVariants = {
  // Navbar container
  navbar: {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: easings.smooth,
        staggerChildren: 0.1,
      },
    },
  },

  // Nav item
  navItem: {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: easings.smooth,
      },
    },
  },

  // Nav link hover
  navLink: {
    initial: {},
    hover: {
      color: '#64FFDA',
      transition: {
        duration: 0.2,
      },
    },
  },

  // Nav indicator (active link underline)
  navIndicator: {
    initial: {
      scaleX: 0,
    },
    active: {
      scaleX: 1,
      transition: {
        duration: 0.3,
        ease: easings.smooth,
      },
    },
  },

  // Logo
  logo: {
    initial: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: easings.bounce,
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
  },
};

// ============================================
// 📱 MOBILE MENU ANIMATIONS
// ============================================

/**
 * Mobile menu variants
 */
export const mobileMenuVariants = {
  // Overlay backdrop
  overlay: {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
        delay: 0.2,
      },
    },
  },

  // Menu panel
  menu: {
    hidden: {
      x: '100%',
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: easings.menuSlide,
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
    exit: {
      x: '100%',
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: easings.smooth,
      },
    },
  },

  // Menu items
  menuItem: {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: easings.smooth,
      },
    },
    exit: {
      opacity: 0,
      x: 20,
      transition: {
        duration: 0.2,
      },
    },
  },

  // Hamburger icon
  hamburger: {
    closed: {
      rotate: 0,
    },
    open: {
      rotate: 45,
      transition: {
        duration: 0.3,
      },
    },
  },

  // Hamburger lines
  hamburgerLine: {
    top: {
      closed: { rotate: 0, y: 0 },
      open: { rotate: 45, y: 8 },
    },
    middle: {
      closed: { opacity: 1 },
      open: { opacity: 0 },
    },
    bottom: {
      closed: { rotate: 0, y: 0 },
      open: { rotate: -45, y: -8 },
    },
  },
};

// ============================================
// 📑 PAGE TRANSITION ANIMATIONS
// ============================================

/**
 * Page transition variants
 */
export const pageVariants = {
  // Fade
  fade: {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: easings.smooth,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  },

  // Slide up
  slideUp: {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easings.pageTransition,
      },
    },
    exit: {
      opacity: 0,
      y: -30,
      transition: {
        duration: 0.4,
      },
    },
  },

  // Slide left
  slideLeft: {
    initial: {
      opacity: 0,
      x: 100,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: easings.smooth,
      },
    },
    exit: {
      opacity: 0,
      x: -100,
      transition: {
        duration: 0.4,
      },
    },
  },

  // Scale fade
  scaleFade: {
    initial: {
      opacity: 0,
      scale: 0.95,
    },
    animate: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: easings.smooth,
      },
    },
    exit: {
      opacity: 0,
      scale: 1.05,
      transition: {
        duration: 0.3,
      },
    },
  },

  // Reveal
  reveal: {
    initial: {
      clipPath: 'circle(0% at 50% 50%)',
    },
    animate: {
      clipPath: 'circle(150% at 50% 50%)',
      transition: {
        duration: 1,
        ease: easings.reveal,
      },
    },
    exit: {
      clipPath: 'circle(0% at 50% 50%)',
      transition: {
        duration: 0.6,
      },
    },
  },
};

// ============================================
// 📊 SECTION ANIMATIONS
// ============================================

/**
 * Section variants
 */
export const sectionVariants = {
  // Default section
  section: {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },

  // Section title
  sectionTitle: {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easings.smooth,
      },
    },
  },

  // Section subtitle
  sectionSubtitle: {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: easings.smooth,
      },
    },
  },

  // Section content
  sectionContent: {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easings.smooth,
      },
    },
  },

  // Numbered section title
  numberedTitle: {
    hidden: {
      opacity: 0,
      x: -30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: easings.smooth,
      },
    },
  },

  // Decorative line
  decorativeLine: {
    hidden: {
      scaleX: 0,
      originX: 0,
    },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: easings.smooth,
        delay: 0.3,
      },
    },
  },
};

// ============================================
// 📬 FORM ANIMATIONS
// ============================================

/**
 * Form variants
 */
export const formVariants = {
  // Form container
  form: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },

  // Form field
  formField: {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: easings.smooth,
      },
    },
  },

  // Input focus
  inputFocus: {
    initial: {
      borderColor: '#233554',
    },
    focus: {
      borderColor: '#64FFDA',
      boxShadow: '0 0 0 3px rgba(100, 255, 218, 0.1)',
      transition: {
        duration: 0.2,
      },
    },
  },

  // Submit button
  submitButton: {
    initial: {
      scale: 1,
    },
    hover: {
      scale: 1.02,
    },
    tap: {
      scale: 0.98,
    },
    submitting: {
      scale: 0.95,
      opacity: 0.7,
    },
  },

  // Success message
  successMessage: {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
  },

  // Error shake
  errorShake: {
    shake: {
      x: [0, -10, 10, -10, 10, 0],
      transition: {
        duration: 0.5,
      },
    },
  },
};

// ============================================
// ♾️ INFINITE ANIMATIONS
// ============================================

/**
 * Infinite/loop animations
 */
export const infiniteVariants = {
  // Float
  float: {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        ease: 'easeInOut',
        repeat: Infinity,
      },
    },
  },

  // Float with rotation
  floatRotate: {
    animate: {
      y: [0, -15, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 8,
        ease: 'easeInOut',
        repeat: Infinity,
      },
    },
  },

  // Pulse
  pulse: {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [1, 0.8, 1],
      transition: {
        duration: 2,
        ease: 'easeInOut',
        repeat: Infinity,
      },
    },
  },

  // Glow pulse
  glowPulse: {
    animate: {
      boxShadow: [
        '0 0 20px rgba(100, 255, 218, 0.3)',
        '0 0 40px rgba(100, 255, 218, 0.6)',
        '0 0 20px rgba(100, 255, 218, 0.3)',
      ],
      transition: {
        duration: 2,
        ease: 'easeInOut',
        repeat: Infinity,
      },
    },
  },

  // Spin
  spin: {
    animate: {
      rotate: 360,
      transition: {
        duration: 8,
        ease: 'linear',
        repeat: Infinity,
      },
    },
  },

  // Spin reverse
  spinReverse: {
    animate: {
      rotate: -360,
      transition: {
        duration: 10,
        ease: 'linear',
        repeat: Infinity,
      },
    },
  },

  // Bounce
  bounce: {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 1.5,
        ease: 'easeInOut',
        repeat: Infinity,
      },
    },
  },

  // Shimmer
  shimmer: {
    animate: {
      x: ['-100%', '100%'],
      transition: {
        duration: 1.5,
        ease: 'linear',
        repeat: Infinity,
        repeatDelay: 1,
      },
    },
  },

  // Wave
  wave: {
    animate: {
      rotate: [0, 14, -8, 14, -4, 10, 0, 0],
      transition: {
        duration: 2.5,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatDelay: 1,
      },
    },
  },

  // Morph blob
  morphBlob: {
    animate: {
      borderRadius: [
        '60% 40% 30% 70%/60% 30% 70% 40%',
        '30% 60% 70% 40%/50% 60% 30% 60%',
        '60% 40% 30% 70%/60% 30% 70% 40%',
      ],
      transition: {
        duration: 8,
        ease: 'easeInOut',
        repeat: Infinity,
      },
    },
  },

  // Gradient shift
  gradientShift: {
    animate: {
      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
      transition: {
        duration: 5,
        ease: 'linear',
        repeat: Infinity,
      },
    },
  },

  // Typing cursor
  cursor: {
    animate: {
      opacity: [1, 0, 1],
      transition: {
        duration: 1,
        ease: 'steps(1)',
        repeat: Infinity,
      },
    },
  },

  // Scroll indicator
  scrollIndicator: {
    animate: {
      y: [0, 10, 0],
      opacity: [1, 0.5, 1],
      transition: {
        duration: 2,
        ease: 'easeInOut',
        repeat: Infinity,
      },
    },
  },
};

// ============================================
// 🔧 UTILITY ANIMATIONS
// ============================================

/**
 * Utility variants
 */
export const utilityVariants = {
  // Tooltip
  tooltip: {
    hidden: {
      opacity: 0,
      y: 10,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.2,
        ease: easings.smooth,
      },
    },
  },

  // Dropdown
  dropdown: {
    hidden: {
      opacity: 0,
      y: -10,
      scaleY: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scaleY: 1,
      transition: {
        duration: 0.2,
        ease: easings.smooth,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      scaleY: 0.95,
      transition: {
        duration: 0.15,
      },
    },
  },

  // Modal
  modal: {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 25,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: 20,
      transition: {
        duration: 0.2,
      },
    },
  },

  // Modal backdrop
  backdrop: {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
        delay: 0.1,
      },
    },
  },

  // Toast
  toast: {
    hidden: {
      opacity: 0,
      y: -100,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 25,
      },
    },
    exit: {
      opacity: 0,
      x: 100,
      transition: {
        duration: 0.2,
      },
    },
  },

  // Accordion
  accordion: {
    hidden: {
      height: 0,
      opacity: 0,
    },
    visible: {
      height: 'auto',
      opacity: 1,
      transition: {
        height: {
          duration: 0.4,
        },
        opacity: {
          duration: 0.3,
          delay: 0.1,
        },
      },
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: {
        height: {
          duration: 0.3,
        },
        opacity: {
          duration: 0.2,
        },
      },
    },
  },

  // Tab content
  tabContent: {
    hidden: {
      opacity: 0,
      x: 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: easings.smooth,
      },
    },
    exit: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.2,
      },
    },
  },

  // Progress bar
  progressBar: {
    hidden: {
      scaleX: 0,
      originX: 0,
    },
    visible: (custom) => ({
      scaleX: custom || 1,
      transition: {
        duration: 1,
        ease: easings.smooth,
      },
    }),
  },

  // Counter
  counter: {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  },

  // Image zoom
  imageZoom: {
    initial: {
      scale: 1,
    },
    hover: {
      scale: 1.1,
      transition: {
        duration: 0.4,
        ease: easings.smooth,
      },
    },
  },

  // Link hover
  linkHover: {
    initial: {
      backgroundSize: '0% 2px',
    },
    hover: {
      backgroundSize: '100% 2px',
      transition: {
        duration: 0.3,
        ease: easings.smooth,
      },
    },
  },
};

// ============================================
// 🧩 MOTION COMPONENTS
// ============================================

/**
 * Animated wrapper component
 */
export const MotionDiv = motion.div;
export const MotionSpan = motion.span;
export const MotionP = motion.p;
export const MotionH1 = motion.h1;
export const MotionH2 = motion.h2;
export const MotionH3 = motion.h3;
export const MotionSection = motion.section;
export const MotionArticle = motion.article;
export const MotionNav = motion.nav;
export const MotionHeader = motion.header;
export const MotionFooter = motion.footer;
export const MotionUl = motion.ul;
export const MotionLi = motion.li;
export const MotionA = motion.a;
export const MotionButton = motion.button;
export const MotionImg = motion.img;
export const MotionForm = motion.form;
export const MotionInput = motion.input;
export const MotionTextarea = motion.textarea;
export const MotionPath = motion.path;
export const MotionSvg = motion.svg;
export const MotionCircle = motion.circle;

// ============================================
// 🪝 CUSTOM HOOKS
// ============================================

/**
 * useScrollAnimation Hook
 * Trigger animation when element comes into view
 * 
 * @param {Object} options - Hook options
 * @returns {Object} - { ref, controls, isInView }
 */
export const useScrollAnimation = (options = {}) => {
  const {
    threshold = 0.1,
    triggerOnce = true,
    rootMargin = '-100px',
  } = options;

  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: triggerOnce,
    amount: threshold,
    margin: rootMargin,
  });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else if (!triggerOnce) {
      controls.start('hidden');
    }
  }, [isInView, controls, triggerOnce]);

  return { ref, controls, isInView };
};

/**
 * useParallax Hook
 * Create parallax effect on scroll
 * 
 * @param {number} speed - Parallax speed multiplier
 * @returns {Object} - { ref, y }
 */
export const useParallax = (speed = 0.5) => {
  const ref = useRef(null);
  const [y, setY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const rect = ref.current.getBoundingClientRect();
      const scrollY = window.scrollY;
      const elementTop = rect.top + scrollY;
      const offset = (scrollY - elementTop) * speed;
      
      setY(offset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return { ref, y };
};

/**
 * useReducedMotion Hook
 * Check if user prefers reduced motion
 * 
 * @returns {boolean}
 */
export const useReducedMotion = () => {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return reducedMotion;
};

// ============================================
// 🎨 ANIMATION HELPERS
// ============================================

/**
 * Create stagger delay for children
 * @param {number} index - Child index
 * @param {number} delayPerItem - Delay between items
 * @returns {Object} - Transition with delay
 */
export const staggerDelay = (index, delayPerItem = 0.1) => ({
  transition: {
    delay: index * delayPerItem,
  },
});

/**
 * Create custom spring animation
 * @param {Object} options - Spring options
 * @returns {Object} - Spring transition
 */
export const createSpring = (options = {}) => ({
  type: 'spring',
  stiffness: options.stiffness || 300,
  damping: options.damping || 20,
  mass: options.mass || 1,
  ...options,
});

/**
 * Create custom tween animation
 * @param {Object} options - Tween options
 * @returns {Object} - Tween transition
 */
export const createTween = (options = {}) => ({
  type: 'tween',
  duration: options.duration || 0.5,
  ease: options.ease || easings.smooth,
  ...options,
});

/**
 * Generate animation variants with custom properties
 * @param {Object} base - Base variant
 * @param {Object} overrides - Override properties
 * @returns {Object} - Merged variant
 */
export const extendVariant = (base, overrides) => ({
  ...base,
  visible: {
    ...base.visible,
    ...overrides.visible,
    transition: {
      ...base.visible?.transition,
      ...overrides.visible?.transition,
    },
  },
  hidden: {
    ...base.hidden,
    ...overrides.hidden,
  },
});

/**
 * Get animation variants based on direction
 * @param {string} direction - 'up' | 'down' | 'left' | 'right'
 * @returns {Object} - Direction-based variants
 */
export const getDirectionalVariants = (direction = 'up') => {
  const directions = {
    up: fadeVariants.fadeUp,
    down: fadeVariants.fadeDown,
    left: fadeVariants.fadeLeft,
    right: fadeVariants.fadeRight,
  };
  
  return directions[direction] || directions.up;
};

/**
 * Create responsive animation (disable on mobile if needed)
 * @param {Object} variants - Animation variants
 * @param {boolean} isMobile - Is mobile device
 * @returns {Object} - Variants (or empty for mobile)
 */
export const responsiveVariants = (variants, isMobile = false, disableOnMobile = false) => {
  if (disableOnMobile && isMobile) {
    return {
      hidden: { opacity: 1 },
      visible: { opacity: 1 },
    };
  }
  return variants;
};

// ============================================
// 📦 PRESET ANIMATION CONFIGS
// ============================================

/**
 * Common animation configurations
 */
export const animationConfigs = {
  // Fast UI feedback
  fast: {
    duration: 0.2,
    ease: easings.smooth,
  },
  
  // Standard animations
  standard: {
    duration: 0.5,
    ease: easings.smooth,
  },
  
  // Slow dramatic
  dramatic: {
    duration: 0.8,
    ease: easings.expoOut,
  },
  
  // Bouncy
  bouncy: {
    type: 'spring',
    stiffness: 400,
    damping: 10,
  },
  
  // Gentle
  gentle: {
    type: 'spring',
    stiffness: 100,
    damping: 20,
  },
};

/**
 * Viewport animation settings
 */
export const viewportSettings = {
  once: true,
  amount: 0.2,
  margin: '-100px 0px',
};

// ============================================
// 🔄 RE-EXPORTS
// ============================================

export {
  motion,
  AnimatePresence,
  useAnimation,
  useInView,
};

// ============================================
// 📋 DEFAULT EXPORT
// ============================================

const framerMotionConfig = {
  // Easings
  easings,
  
  // Transitions
  transitions,
  
  // Variants
  fadeVariants,
  slideVariants,
  scaleVariants,
  rotateVariants,
  revealVariants,
  
  // Stagger
  staggerContainer,
  staggerContainerFast,
  staggerContainerSlow,
  staggerItem,
  staggerItemScale,
  staggerItemLeft,
  staggerItemRight,
  
  // Component-specific
  heroVariants,
  cardVariants,
  buttonVariants,
  navVariants,
  mobileMenuVariants,
  pageVariants,
  sectionVariants,
  formVariants,
  infiniteVariants,
  utilityVariants,
  
  // Helpers
  staggerDelay,
  createSpring,
  createTween,
  extendVariant,
  getDirectionalVariants,
  responsiveVariants,
  
  // Configs
  animationConfigs,
  viewportSettings,
  
  // Hooks
  useScrollAnimation,
  useParallax,
  useReducedMotion,
};

export default framerMotionConfig;