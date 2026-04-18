/* ============================================
   🔘 BUTTON COMPONENT
   Versatile button with multiple variants
   Theme: Midnight Tech
   ============================================ */

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

/**
 * Button Component
 * 
 * @param {Object} props - Component props
 * @param {string} props.variant - Button variant (primary, secondary, ghost, glass)
 * @param {string} props.size - Button size (sm, md, lg)
 * @param {boolean} props.fullWidth - Full width button
 * @param {boolean} props.disabled - Disabled state
 * @param {boolean} props.loading - Loading state
 * @param {React.ReactNode} props.leftIcon - Icon on the left
 * @param {React.ReactNode} props.rightIcon - Icon on the right
 * @param {string} props.href - External link URL
 * @param {string} props.to - Internal router link
 * @param {boolean} props.external - External link (adds target="_blank")
 * @param {string} props.className - Additional CSS classes
 * @param {React.ReactNode} props.children - Button content
 */
const Button = React.forwardRef(({
  // Variant & Style
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  loading = false,
  
  // Icons
  leftIcon,
  rightIcon,
  
  // Links
  href,
  to,
  external = false,
  
  // Other
  className = '',
  children,
  type = 'button',
  onClick,
  ...props
}, ref) => {
  
  // ======================================
  // STYLE CONFIGURATIONS
  // ======================================
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const variantClasses = {
    // Primary - Gradient background
    primary: `
      bg-gradient-to-r from-accent to-accent-hover
      text-primary-dark font-semibold
      hover:shadow-glow
      active:scale-95
      disabled:opacity-50 disabled:cursor-not-allowed
    `,
    
    // Secondary - Outlined
    secondary: `
      bg-transparent
      text-accent border-2 border-accent
      hover:bg-accent/10
      disabled:opacity-50 disabled:cursor-not-allowed
    `,
    
    // Ghost - Minimal
    ghost: `
      bg-transparent
      text-text-body border border-border
      hover:bg-white/5 hover:text-accent hover:border-accent
      disabled:opacity-50 disabled:cursor-not-allowed
    `,
    
    // Glass - Glass morphism
    glass: `
      bg-white/5 backdrop-blur-sm
      text-white border border-white/10
      hover:bg-white/10 hover:border-accent/30
      hover:shadow-glow-sm
      disabled:opacity-50 disabled:cursor-not-allowed
    `,
    
    // Link - Text only
    link: `
      bg-transparent
      text-accent underline underline-offset-4
      hover:text-accent-hover
      disabled:opacity-50 disabled:cursor-not-allowed
    `,
  };
  
  // ======================================
  // BASE CLASSES
  // ======================================
  
  const baseClasses = `
    inline-flex items-center justify-center
    gap-2 font-medium
    rounded-lg
    transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary
    ${sizeClasses[size]}
    ${variantClasses[variant]}
    ${fullWidth ? 'w-full' : ''}
    ${disabled || loading ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}
    ${className}
  `.trim().replace(/\s+/g, ' ');
  
  // ======================================
  // CONTENT
  // ======================================
  
  const renderContent = () => (
    <>
      {loading ? (
        <span className="inline-flex items-center gap-2">
          <LoadingSpinner />
          {children}
        </span>
      ) : (
        <>
          {leftIcon && <span className="inline-flex">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="inline-flex">{rightIcon}</span>}
        </>
      )}
    </>
  );
  
  // ======================================
  // LOADING SPINNER
  // ======================================
  
  const LoadingSpinner = () => (
    <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
    </svg>
  );
  
  // ======================================
  // RENDER BUTTON
  // ======================================
  
  // External link
  if (href && !disabled) {
    return (
      <motion.a
        ref={ref}
        href={href}
        target={external ? "_blank" : "_self"}
        rel={external ? "noopener noreferrer" : undefined}
        className={baseClasses}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {renderContent()}
      </motion.a>
    );
  }
  
  // Internal link
  if (to && !disabled) {
    return (
      <motion.div
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
      >
        <Link
          ref={ref}
          to={to}
          className={baseClasses}
          {...props}
        >
          {renderContent()}
        </Link>
      </motion.div>
    );
  }
  
  // Regular button
  return (
    <motion.button
      ref={ref}
      type={type}
      disabled={disabled || loading}
      className={baseClasses}
      onClick={onClick}
      whileHover={!disabled && !loading ? { y: -2 } : {}}
      whileTap={!disabled && !loading ? { scale: 0.98 } : {}}
      {...props}
    >
      {renderContent()}
    </motion.button>
  );
});

Button.displayName = 'Button';

// ============================================
// ICON BUTTON COMPONENT
// ============================================

export const IconButton = React.forwardRef(({
  children,
  size = 'md',
  variant = 'ghost',
  className = '',
  ...props
}, ref) => {
  
  const sizeClasses = {
    sm: 'p-2 text-sm',
    md: 'p-3 text-base',
    lg: 'p-4 text-lg',
  };
  
  const iconClasses = `
    inline-flex items-center justify-center
    rounded-full
    transition-all duration-300
    focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary
    ${sizeClasses[size]}
    ${variant === 'primary' ? 'bg-accent text-primary-dark hover:bg-accent-hover' : ''}
    ${variant === 'ghost' ? 'bg-transparent text-text-body hover:bg-white/5 hover:text-accent' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');
  
  return (
    <motion.button
      ref={ref}
      className={iconClasses}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
});

IconButton.displayName = 'IconButton';

export default Button;