/* ============================================
   🏠 HOME PAGE
   Combines all sections for the homepage
   Theme: Midnight Tech
   ============================================ */

import React from 'react';
import { motion } from 'framer-motion';
import usePageMeta from '../hooks/usePageMeta';

// Section Components
import Hero from '../sections/Hero';
import Services from '../sections/Services';
import Projects from '../sections/Projects';
import Testimonials from '../sections/Testimonials';
import Contact from '../sections/Contact';

/**
 * Home Page Component
 */
const Home = () => {
  usePageMeta({
    title: 'Hamad Hussain | Full Stack Developer',
    description:
      'Portfolio homepage for Hamad Hussain featuring WordPress, MERN, Shopify, and custom full stack development work.',
  });

  const pageVariants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
    exit: { opacity: 0 },
  };
  
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="overflow-hidden"
    >
      <Hero />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />
    </motion.div>
  );
};

export default Home;
