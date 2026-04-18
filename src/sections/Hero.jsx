/* ============================================
   🎯 HERO SECTION - Split Layout
   Above the fold introduction with skill showcase
   Theme: Midnight Tech
   ============================================ */

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiCpu, FiCode, FiDatabase, FiGlobe } from 'react-icons/fi';
import { 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiExpress, 
  SiWordpress, 
  SiShopify, 
  SiFlutter 
} from 'react-icons/si';
import Button from '../components/Button';
import { socials } from '../data/socials';

// Skill data with icons and colors
const skills = [
  { id: 'react', name: 'React', icon: SiReact, color: '#61DAFB' },
  { id: 'node', name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
  { id: 'mongodb', name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
  { id: 'express', name: 'Express', icon: SiExpress, color: '#000000' },
  { id: 'wordpress', name: 'WordPress', icon: SiWordpress, color: '#21759B' },
  { id: 'shopify', name: 'Shopify', icon: SiShopify, color: '#7AB55C' },
  { id: 'flutter', name: 'Flutter', icon: SiFlutter, color: '#02569B' },
];

/**
 * Skill Orbit Component
 */
const SkillOrbit = () => {
  const [activeSkill, setActiveSkill] = useState(null);
  
  return (
    <div className="relative w-full h-full">
      {/* PC Screen Glow Effect */}
      <div className="
        absolute top-1/2 left-1/2
        -translate-x-1/2 -translate-y-1/2
        w-[280px] h-[160px]
        bg-gradient-to-r from-accent/20 via-accent/10 to-transparent
        rounded-lg
        blur-xl
      " />
      
      {/* PC Screen */}
      <div className="
        absolute top-1/2 left-1/2
        -translate-x-1/2 -translate-y-1/2
        w-[300px] h-[180px]
        bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900
        border border-accent/30
        rounded-lg
        overflow-hidden
        shadow-2xl shadow-accent/20
        z-20
      ">
        {/* Screen Content */}
        <div className="relative w-full h-full p-4">
          {/* Code Lines */}
          <div className="space-y-2">
            {[1, 2, 3, 4].map((line) => (
              <div key={line} className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-accent/50" />
                <div 
                  className="h-2 bg-gradient-to-r from-accent/40 to-accent/20 rounded-full"
                  style={{ width: `${70 + Math.random() * 30}%` }}
                />
              </div>
            ))}
          </div>
          
          {/* Active Skill Display */}
          {activeSkill && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="
                absolute bottom-4 left-4 right-4
                bg-gradient-to-r from-primary/50 to-primary/20
                border border-accent/30
                rounded-lg p-3
                backdrop-blur-sm
              "
            >
              <div className="flex items-center gap-3">
                <div className="text-2xl" style={{ color: activeSkill.color }}>
                  {React.createElement(activeSkill.icon)}
                </div>
                <div>
                  <div className="font-semibold text-white">{activeSkill.name}</div>
                  <div className="text-xs text-text-body/70">Currently working with</div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
      
      {/* PC Base */}
      <div className="
        absolute top-[calc(50%+90px)] left-1/2
        -translate-x-1/2
        w-[320px] h-3
        bg-gradient-to-t from-gray-800 to-gray-700
        rounded-b-lg
        z-10
      " />
      <div className="
        absolute top-[calc(50%+96px)] left-1/2
        -translate-x-1/2
        w-[350px] h-3
        bg-gradient-to-t from-gray-900 to-gray-800
        rounded-lg
        z-10
      " />
      
      {/* Skill Orbit Rings */}
      <div className="
        absolute top-1/2 left-1/2
        -translate-x-1/2 -translate-y-1/2
        w-[400px] h-[400px]
        border border-accent/10
        rounded-full
        z-0
      " />
      <div className="
        absolute top-1/2 left-1/2
        -translate-x-1/2 -translate-y-1/2
        w-[500px] h-[500px]
        border border-accent/5
        rounded-full
        z-0
      " />
      
      {/* Orbiting Skills */}
      {skills.map((skill, index) => {
        const angle = (index * 360) / skills.length;
        const radius = 200;
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);
        
        return (
          <motion.div
            key={skill.id}
            className="
              absolute top-1/2 left-1/2
              -translate-x-1/2 -translate-y-1/2
              w-16 h-16
              flex items-center justify-center
              bg-gradient-to-br from-primary/90 to-primary/70
              border border-accent/30
              rounded-full
              shadow-lg
              cursor-pointer
              z-10
              group
            "
            style={{
              x: x,
              y: y,
            }}
            animate={{
              rotate: 360,
              transition: {
                duration: 30 + Math.random() * 10,
                repeat: Infinity,
                ease: "linear",
              }
            }}
            onMouseEnter={() => setActiveSkill(skill)}
            onMouseLeave={() => setActiveSkill(null)}
            whileHover={{ 
              scale: 1.2,
              boxShadow: `0 0 30px ${skill.color}40`,
              zIndex: 20
            }}
          >
            <div className="
              w-12 h-12
              flex items-center justify-center
              bg-primary
              border border-accent/20
              rounded-full
              group-hover:scale-110
              transition-transform duration-300
            ">
              {React.createElement(skill.icon, {
                size: 24,
                className: "transition-all duration-300",
                style: { 
                  color: skill.color,
                  filter: 'drop-shadow(0 0 2px rgba(255,255,255,0.3))'
                }
              })}
            </div>
            
            {/* Skill Label */}
            <div className="
              absolute -bottom-8
              px-3 py-1
              bg-primary/80 backdrop-blur-sm
              border border-accent/20
              rounded-full
              opacity-0 group-hover:opacity-100
              transition-all duration-300
              whitespace-nowrap
              text-sm
            ">
              {skill.name}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

/**
 * Hero Section Component
 */
const Hero = () => {
  const heroVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };
  
  const floatingVariants = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };
  
  const techStackVariants = {
    hidden: { opacity: 0, width: 0 },
    visible: {
      opacity: 1,
      width: "100%",
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };
  
  // Get primary social links
  const heroSocials = socials.filter(link => 
    ['github', 'linkedin', 'instagram'].includes(link.id)
  );
  
  return (
    <section id="hero" className="
      relative min-h-screen
      flex items-center
      pt-20 md:pt-24
      overflow-hidden
    ">
      {/* Background Effects - Enhanced */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Background */}
        <div className="
          absolute inset-0
          bg-gradient-to-br from-primary/90 via-primary/80 to-primary-light/30
        " />
        
        {/* Animated Grid Pattern */}
        <div className="
          absolute inset-0
          bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)]
          bg-[size:50px_50px]
          opacity-30
          animate-grid-flow
        " />
        
        {/* Floating Tech Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => {
            const icons = [FiCpu, FiCode, FiDatabase, FiGlobe];
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={i}
                className="absolute text-accent/10"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  fontSize: `${Math.random() * 40 + 20}px`,
                }}
                animate={{
                  y: [0, Math.random() * 100 - 50],
                  x: [0, Math.random() * 100 - 50],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: Math.random() * 20 + 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Icon />
              </motion.div>
            );
          })}
        </div>
        
        {/* Gradient Orbs */}
        <motion.div
          className="
            absolute top-1/4 left-1/4
            w-[600px] h-[600px]
            bg-gradient-to-r from-accent/15 to-transparent
            rounded-full blur-3xl
          "
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="
            absolute bottom-1/4 right-1/4
            w-[500px] h-[500px]
            bg-gradient-to-l from-accent/10 to-transparent
            rounded-full blur-3xl
          "
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      {/* Content - Split Layout */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="
          grid grid-cols-1 lg:grid-cols-2
          gap-12 lg:gap-8
          items-center
          min-h-[calc(100vh-120px)]
        ">
          {/* Left Column: Text Content */}
          <motion.div
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="
              text-left
              order-2 lg:order-1
            "
          >
            {/* Greeting Badge */}
            <motion.div
              variants={itemVariants}
              className="
                inline-flex items-center gap-3
                px-4 py-2 mb-8
                bg-gradient-to-r from-accent/10 to-accent/5
                border border-accent/20
                rounded-full
                backdrop-blur-sm
              "
            >
              <motion.div
                className="w-2 h-2 rounded-full bg-accent"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="
                font-mono text-sm text-accent
                uppercase tracking-widest
              ">
                Welcome to My Digital Space
              </span>
            </motion.div>
            
            {/* Main Title */}
            <motion.h1
              variants={itemVariants}
              className="
                font-heading font-bold
                text-5xl md:text-6xl lg:text-7xl
                text-text-heading
                leading-[1.1]
                mb-6
              "
            >
              <span className="block">Crafting</span>
              <span className="
                bg-gradient-to-r from-accent via-accent-hover to-accent
                bg-clip-text text-transparent
                animate-gradient-x
              ">
                Digital Solutions
              </span>
              <span className="block">That Scale</span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="
                text-xl text-text-body
                leading-relaxed
                mb-10
                max-w-2xl
              "
            >
              I'm a <span className="text-accent font-semibold">Full Stack Developer</span> 
              & <span className="text-accent font-semibold">Tech Consultant</span> 
              passionate about building scalable, performant applications with modern technologies.
            </motion.p>
            
            {/* Tech Stack Progress */}
            <motion.div
              variants={itemVariants}
              className="mb-12"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-text-heading font-semibold">Tech Stack Mastery</span>
                <span className="text-accent text-sm">7+ Technologies</span>
              </div>
              <div className="
                h-2 bg-primary-light/30
                rounded-full overflow-hidden
              ">
                <motion.div
                  variants={techStackVariants}
                  initial="hidden"
                  animate="visible"
                  className="
                    h-full
                    bg-gradient-to-r from-accent to-accent-hover
                    rounded-full
                  "
                />
              </div>
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="
                flex flex-col sm:flex-row
                items-start sm:items-center
                gap-4 mb-10
              "
            >
              <Button
                variant="primary"
                size="lg"
                rightIcon={<FiArrowRight />}
                href="/portfolio"
                className="group"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  Explore Projects
                </span>
              </Button>
              
              <Button
                variant="secondary"
                size="lg"
                leftIcon={<FiDownload />}
                href="/resume.pdf"
                external
                className="group"
              >
                <span className="group-hover:translate-y-[-2px] transition-transform duration-300">
                  Download CV
                </span>
              </Button>
            </motion.div>
            
            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-6"
            >
              <span className="text-text-body/70 text-sm">Connect with me:</span>
              {heroSocials.map((social) => (
                <motion.a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="
                    text-text-body hover:text-accent
                    transition-all duration-300
                    group
                  "
                  aria-label={social.name}
                >
                  {React.createElement(social.icon, { 
                    size: 22,
                    className: "group-hover:scale-110 group-hover:rotate-12 transition-all duration-300"
                  })}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right Column: PC Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="
              relative
              h-[500px] lg:h-[600px]
              flex items-center justify-center
              order-1 lg:order-2
            "
          >
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="relative w-full h-full"
            >
              <SkillOrbit />
              
              {/* Stats Cards */}
              <motion.div
                className="
                  absolute top-4 right-4
                  px-4 py-3
                  bg-gradient-to-br from-primary/80 to-primary/60
                  border border-accent/20
                  rounded-xl
                  backdrop-blur-sm
                  shadow-lg
                  z-30
                "
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
              >
                <div className="text-2xl font-bold text-white">50+</div>
                <div className="text-xs text-text-body/70">Projects Completed</div>
              </motion.div>
              
              <motion.div
                className="
                  absolute bottom-8 left-4
                  px-4 py-3
                  bg-gradient-to-br from-primary/80 to-primary/60
                  border border-accent/20
                  rounded-xl
                  backdrop-blur-sm
                  shadow-lg
                  z-30
                "
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 }}
              >
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-xs text-text-body/70">Client Satisfaction</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Add to your global CSS or Tailwind config
const styles = `
  @keyframes grid-flow {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: 50px 50px;
    }
  }
  
  .animate-grid-flow {
    animation: grid-flow 20s linear infinite;
  }
  
  @keyframes gradient-x {
    0%, 100% {
      background-size: 200% 200%;
      background-position: left center;
    }
    50% {
      background-size: 200% 200%;
      background-position: right center;
    }
  }
  
  .animate-gradient-x {
    animation: gradient-x 3s ease infinite;
  }
`;

export default Hero;
