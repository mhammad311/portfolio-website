/* ============================================
   📝 SECTION TITLE COMPONENT
   Animated section headers
   Theme: Midnight Tech
   ============================================ */

import React from 'react';
import { motion } from 'framer-motion';

/**
 * SectionTitle Component
 * 
 * @param {Object} props - Component props
 * @param {string} props.subtitle - Subtitle/label text
 * @param {string} props.title - Main title text
 * @param {string} props.description - Description paragraph
 * @param {string} props.align - Text alignment (left, center, right)
 * @param {boolean} props.animate - Enable animations
 * @param {boolean} props.gradient - Use gradient text for title
 * @param {string} props.className - Additional CSS classes
 */
const SectionTitle = ({
  subtitle,
  title,
  description,
  align = 'center',
  animate = true,
  gradient = false,
  className = '',
  ...props
}) => {
  
  // ======================================
  // STYLE CONFIGURATIONS
  // ======================================
  
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };
  
  const gradientClass = gradient
    ? 'bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent'
    : 'text-text-heading';
  
  // ======================================
  // ANIMATION SETTINGS
  // ======================================
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
  
  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
        delay: 0.3,
      },
    },
  };
  
  // ======================================
  // RENDER COMPONENT
  // ======================================
  
  const Wrapper = animate ? motion.div : 'div';
  const wrapperProps = animate
    ? {
        variants: containerVariants,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.3 },
      }
    : {};
  
  const MotionElement = animate ? motion.div : 'div';
  const motionProps = animate ? { variants: itemVariants } : {};
  
  const MotionLine = animate ? motion.div : 'div';
  const lineProps = animate ? { variants: lineVariants } : {};
  
  return (
    <Wrapper
      className={`
        flex flex-col space-y-4
        ${alignClasses[align]}
        mb-12 md:mb-16
        ${className}
      `.trim().replace(/\s+/g, ' ')}
      {...wrapperProps}
      {...props}
    >
      {/* Subtitle */}
      {subtitle && (
        <MotionElement
          {...motionProps}
          className="
            inline-block
            font-mono text-xs md:text-sm
            text-accent uppercase tracking-widest
            px-4 py-2
            bg-accent/10 border border-accent/20
            rounded-full
          "
        >
          {subtitle}
        </MotionElement>
      )}
      
      {/* Title */}
      {title && (
        <MotionElement
          {...motionProps}
          className="
            font-heading font-bold
            text-3xl md:text-4xl lg:text-5xl
            leading-tight
            mb-4
          "
        >
          <h2 className={gradientClass}>
            {title}
          </h2>
        </MotionElement>
      )}
      
      {/* Description */}
      {description && (
        <MotionElement
          {...motionProps}
          className={`
            text-text-body text-lg
            max-w-2xl leading-relaxed
            ${align === 'center' ? 'mx-auto' : ''}
          `}
        >
          {description}
        </MotionElement>
      )}
      
      {/* Decorative Line */}
      <MotionLine
        {...lineProps}
        className={`
          w-16 h-1
          bg-gradient-to-r from-accent to-transparent
          rounded-full
          ${align === 'center' ? 'mx-auto' : ''}
          ${align === 'right' ? 'ml-auto' : ''}
        `}
      />
    </Wrapper>
  );
};

// ============================================
// INLINE TITLE COMPONENT
// ============================================

/**
 * InlineTitle Component
 * Small, inline title for subsections
 */
export const InlineTitle = ({
  children,
  icon,
  number,
  className = '',
  ...props
}) => {
  return (
    <h3
      className={`
        flex items-center gap-3
        font-heading font-semibold
        text-xl md:text-2xl
        text-text-heading
        mb-6
        ${className}
      `.trim().replace(/\s+/g, ' ')}
      {...props}
    >
      {number && (
        <span className="font-mono text-accent text-base">
          {String(number).padStart(2, '0')}.
        </span>
      )}
      {icon && (
        <span className="text-accent">{icon}</span>
      )}
      {children}
    </h3>
  );
};

export default SectionTitle;