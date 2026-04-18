/* ============================================
   🃏 CARD COMPONENT
   Versatile card with multiple variants
   Theme: Midnight Tech
   ============================================ */

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

/**
 * Card Component
 * 
 * @param {Object} props - Component props
 * @param {string} props.variant - Card variant (default, glass, bordered, gradient)
 * @param {string} props.padding - Padding size (sm, md, lg)
 * @param {boolean} props.hoverable - Enable hover effects
 * @param {boolean} props.clickable - Enable click/tap effects
 * @param {boolean} props.animate - Enable scroll animations
 * @param {string} props.href - External link
 * @param {string} props.to - Router link
 * @param {Function} props.onClick - Click handler
 * @param {string} props.className - Additional CSS classes
 * @param {React.ReactNode} props.children - Card content
 */
const Card = React.forwardRef(({
  // Variant & Style
  variant = 'default',
  padding = 'md',
  rounded = 'lg',
  
  // Behavior
  hoverable = true,
  clickable = false,
  animate = true,
  
  // Link props
  href,
  to,
  onClick,
  
  // Other
  className = '',
  children,
  ...props
}, ref) => {
  
  // ======================================
  // STYLE CONFIGURATIONS
  // ======================================
  
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };
  
  const roundedClasses = {
    sm: 'rounded',
    md: 'rounded-lg',
    lg: 'rounded-xl',
    xl: 'rounded-2xl',
  };
  
  const variantClasses = {
    // Default card
    default: `
      bg-primary-light
      border border-border
      hover:border-accent/30
    `,
    
    // Glass morphism
    glass: `
      bg-white/5 backdrop-blur-sm
      border border-white/10
      hover:border-accent/30
    `,
    
    // Bordered
    bordered: `
      bg-transparent
      border-2 border-border
      hover:border-accent
    `,
    
    // Gradient
    gradient: `
      bg-gradient-to-br from-primary-light to-primary
      border border-border
      hover:border-accent/30
    `,
    
    // Minimal
    minimal: `
      bg-transparent
      border border-transparent
    `,
  };
  
  // ======================================
  // BASE CLASSES
  // ======================================
  
  const baseClasses = `
    relative overflow-hidden
    transition-all duration-300
    ${paddingClasses[padding]}
    ${roundedClasses[rounded]}
    ${variantClasses[variant]}
    ${hoverable ? 'hover-lift' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');
  
  // ======================================
  // ANIMATION SETTINGS
  // ======================================
  
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };
  
  // ======================================
  // RENDER TOP HIGHLIGHT
  // ======================================
  
  const TopHighlight = () => (
    <div className="
      absolute top-0 left-0 right-0 h-1
      bg-gradient-to-r from-transparent via-accent/50 to-transparent
      opacity-0 group-hover:opacity-100
      transition-opacity duration-300
    " />
  );
  
  // ======================================
  // RENDER CARD
  // ======================================
  
  const cardContent = (
    <>
      <TopHighlight />
      {children}
    </>
  );
  
  const Wrapper = animate ? motion.div : 'div';
  const wrapperProps = animate
    ? {
        variants: cardVariants,
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true, amount: 0.2 },
      }
    : {};
  
  // External link
  if (href) {
    return (
      <Wrapper {...wrapperProps}>
        <a
          ref={ref}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`group block ${baseClasses}`}
          {...props}
        >
          {cardContent}
        </a>
      </Wrapper>
    );
  }
  
  // Internal link
  if (to) {
    return (
      <Wrapper {...wrapperProps}>
        <Link
          ref={ref}
          to={to}
          className={`group block ${baseClasses}`}
          {...props}
        >
          {cardContent}
        </Link>
      </Wrapper>
    );
  }
  
  // Clickable div
  if (onClick) {
    return (
      <Wrapper {...wrapperProps}>
        <div
          ref={ref}
          onClick={onClick}
          className={`group cursor-pointer ${baseClasses}`}
          role="button"
          tabIndex={0}
          onKeyPress={(e) => e.key === 'Enter' && onClick(e)}
          {...props}
        >
          {cardContent}
        </div>
      </Wrapper>
    );
  }
  
  // Static card
  return (
    <Wrapper
      ref={ref}
      className={`group ${baseClasses}`}
      {...wrapperProps}
      {...props}
    >
      {cardContent}
    </Wrapper>
  );
});

Card.displayName = 'Card';

// ============================================
// CARD SUBCOMPONENTS
// ============================================

export const CardHeader = ({
  children,
  className = '',
  ...props
}) => (
  <div
    className={`mb-4 ${className}`}
    {...props}
  >
    {children}
  </div>
);

export const CardBody = ({
  children,
  className = '',
  ...props
}) => (
  <div
    className={className}
    {...props}
  >
    {children}
  </div>
);

export const CardFooter = ({
  children,
  className = '',
  ...props
}) => (
  <div
    className={`mt-6 pt-6 border-t border-border ${className}`}
    {...props}
  >
    {children}
  </div>
);

// ============================================
// PROJECT CARD COMPONENT
// ============================================

/**
 * ProjectCard Component
 * Card optimized for portfolio projects
 */
export const ProjectCard = ({
  title,
  description,
  image,
  mediaType = 'image',
  posterImage,
  tags = [],
  category,
  liveUrl,
  githubUrl,
  featured = false,
  className = '',
  ...props
}) => {
  return (
    <Card
      hoverable={true}
      className={`relative overflow-hidden group ${className}`}
      {...props}
    >
      <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
        {mediaType === 'video' ? (
          <video
            src={image}
            poster={posterImage}
            muted
            playsInline
            preload="metadata"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        )}
        
        {/* Overlay - FIX: Use div instead of nested links if parent is clickable */}
        <div className="
          absolute inset-0
          bg-gradient-to-t from-primary/90 via-primary/50 to-transparent
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
          flex items-end p-6
        ">
          {/* Links */}
          <div className="flex items-center gap-4">
            {githubUrl && (
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent parent click
                  window.open(githubUrl, '_blank', 'noopener,noreferrer');
                }}
                className="
                  w-10 h-10 flex items-center justify-center
                  bg-white/10 backdrop-blur-sm
                  text-white border border-white/20
                  rounded-lg
                  hover:bg-accent hover:text-primary-dark hover:border-accent
                  transition-all duration-300
                  cursor-pointer
                "
                aria-label="View on GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </button>
            )}
            {liveUrl && (
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent parent click
                  window.open(liveUrl, '_blank', 'noopener,noreferrer');
                }}
                className="
                  w-10 h-10 flex items-center justify-center
                  bg-white/10 backdrop-blur-sm
                  text-white border border-white/20
                  rounded-lg
                  hover:bg-accent hover:text-primary-dark hover:border-accent
                  transition-all duration-300
                  cursor-pointer
                "
                aria-label="View live demo"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 mb-3">
        <span className="px-3 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full">
          {category}
        </span>
        {featured && (
          <span className="px-3 py-1 text-xs font-medium bg-yellow-400/15 text-yellow-300 border border-yellow-400/20 rounded-full">
            Featured
          </span>
        )}
      </div>

      <h3 className="font-heading font-semibold text-xl text-text-heading mb-3 group-hover:text-accent transition-colors duration-300">
        {title}
      </h3>

      <p className="text-text-body text-sm leading-relaxed mb-5">
        {description}
      </p>

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {tags.slice(0, 5).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-mono text-text-body/80 bg-primary/50 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </Card>
  );
};

// ============================================
// SERVICE CARD COMPONENT
// ============================================

/**
 * ServiceCard Component
 * Card optimized for services
 */
export const ServiceCard = ({
  title,
  description,
  icon,
  features = [],
  className = '',
  ...props
}) => {
  return (
    <Card
      hoverable={true}
      className={`text-center group ${className}`}
      {...props}
    >
      {/* Icon */}
      {icon && (
        <div className="
          w-16 h-16 mx-auto mb-6
          flex items-center justify-center
          text-3xl text-accent
          bg-accent/10 border border-accent/20
          rounded-2xl
          transition-all duration-300
          group-hover:bg-accent group-hover:text-primary-dark
          group-hover:scale-110
        ">
          {icon}
        </div>
      )}
      
      {/* Title */}
      <h3 className="
        font-heading font-bold text-xl text-text-heading
        mb-3 group-hover:text-accent
        transition-colors duration-300
      ">
        {title}
      </h3>
      
      {/* Description */}
      <p className="text-text-body text-sm leading-relaxed mb-4">
        {description}
      </p>
      
      {/* Features */}
      {features.length > 0 && (
        <ul className="text-left space-y-2 mt-4">
          {features.slice(0, 3).map((feature, index) => (
            <li
              key={index}
              className="flex items-start gap-2 text-sm text-text-body"
            >
              <span className="text-accent mt-1">▹</span>
              {feature}
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
};
// ============================================
// SKILL CARD COMPONENT
// ============================================

/**
 * SkillCard Component
 * Card optimized for skills display
 */
export const SkillCard = ({
  title,
  level,
  icon,
  description,
  className = '',
  ...props
}) => {
  const levelWidth = {
    beginner: '25%',
    intermediate: '50%',
    advanced: '75%',
    expert: '100%',
  };
  
  return (
    <Card
      variant="glass"
      className={`flex items-center gap-4 ${className}`}
      {...props}
    >
      {/* Icon */}
      {icon && (
        <div className="
          w-12 h-12 flex items-center justify-center
          text-2xl text-accent
          bg-accent/10 border border-accent/20
          rounded-xl
        ">
          {icon}
        </div>
      )}
      
      {/* Content */}
      <div className="flex-1">
        <div className="flex justify-between items-center mb-2">
          <h3 className="font-heading font-semibold text-text-heading">
            {title}
          </h3>
          <span className="text-xs font-mono text-accent uppercase">
            {level}
          </span>
        </div>
        
        {/* Progress bar */}
        <div className="
          w-full h-2
          bg-primary-light rounded-full
          overflow-hidden
        ">
          <div
            className="
              h-full bg-gradient-to-r from-accent/50 to-accent
              rounded-full
            "
            style={{ width: levelWidth[level] || '50%' }}
          />
        </div>
        
        {/* Description */}
        {description && (
          <p className="text-text-body/80 text-xs mt-2">
            {description}
          </p>
        )}
      </div>
    </Card>
  );
};

// ============================================
// TESTIMONIAL CARD COMPONENT
// ============================================

/**
 * TestimonialCard Component
 * Card optimized for testimonials
 */
export const TestimonialCard = ({
  quote,
  author,
  role,
  company,
  avatar,
  rating = 5,
  className = '',
  ...props
}) => {
  return (
    <Card
      variant="glass"
      className={`relative ${className}`}
      {...props}
    >
      {/* Quote marks */}
      <div className="
        absolute -top-2 -left-2
        text-6xl text-accent/20
        font-serif
      ">
        "
      </div>
      
      {/* Rating */}
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <span key={i} className="text-yellow-400 mr-1">★</span>
        ))}
      </div>
      
      {/* Quote */}
      <p className="
        text-text-body text-lg italic mb-6
        relative z-10
      ">
        {quote}
      </p>
      
      {/* Author */}
      <div className="flex items-center">
        {avatar && (
          <img
            src={avatar}
            alt={author}
            className="w-12 h-12 rounded-full mr-4 border-2 border-accent/30"
          />
        )}
        
        <div>
          <h4 className="font-heading font-bold text-text-heading">
            {author}
          </h4>
          <div className="flex items-center gap-2 text-sm text-text-body/80">
            <span>{role}</span>
            {company && (
              <>
                <span className="text-accent">•</span>
                <span>{company}</span>
              </>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};


// If you want default export too, keep this:
export default Card;

