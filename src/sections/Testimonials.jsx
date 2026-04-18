/* ============================================
   ⭐ TESTIMONIALS SECTION
   Client testimonials showcase
   Theme: Midnight Tech
   ============================================ */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiStar, FiChevronLeft, FiChevronRight, FiMessageSquare } from 'react-icons/fi';
import { testimonials, getFeaturedTestimonials } from '../data/testimonials';

/**
 * Testimonials Section Component
 */
const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const featuredTestimonials = getFeaturedTestimonials();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => 
      prev === featuredTestimonials.length - 1 ? 0 : prev + 1
    );
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => 
      prev === 0 ? featuredTestimonials.length - 1 : prev - 1
    );
  };
  
  // Auto-rotate testimonials
  React.useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeIndex]);
  
  // Render star rating
  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <FiStar
        key={i}
        className={i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}
        size={14}
      />
    ));
  };
  
  return (
    <section id="testimonials" className="
      py-20 md:py-24
      bg-gradient-to-b from-primary/40 via-primary/30 to-primary/40
      relative overflow-hidden
    ">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Subtle Gradient */}
        <div className="
          absolute inset-0
          bg-gradient-to-br from-primary/50 via-transparent to-primary/30
        " />
        
        {/* Floating Quote Marks */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="
                absolute
                text-accent/5
                font-serif
                select-none
              "
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
                fontSize: `${Math.random() * 30 + 30}px`,
              }}
              animate={{
                y: [0, Math.random() * 40 - 20],
                rotate: [0, 5],
                opacity: [0.1, 0.2, 0.1],
              }}
              transition={{
                duration: Math.random() * 15 + 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              "
            </motion.div>
          ))}
        </div>
        
        {/* Gradient Orbs */}
        <div className="
          absolute top-1/4 -left-1/4
          w-[400px] h-[400px]
          bg-gradient-to-r from-accent/5 to-transparent
          rounded-full blur-3xl
        " />
        <div className="
          absolute bottom-1/4 -right-1/4
          w-[400px] h-[400px]
          bg-gradient-to-l from-accent/5 to-transparent
          rounded-full blur-3xl
        " />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-6 h-px bg-accent/50" />
            <span className="
              font-mono text-sm text-accent
              uppercase tracking-widest
            ">
              Client Voices
            </span>
            <div className="w-6 h-px bg-accent/50" />
          </div>
          
          <h2 className="
            font-heading font-bold
            text-4xl md:text-5xl
            text-text-heading
            mb-6
          ">
            What Clients{' '}
            <span className="text-accent">Say</span>
          </h2>
          
          <p className="
            text-lg text-text-body/80
            leading-relaxed
            max-w-2xl mx-auto
          ">
            Trusted by businesses and individuals who value quality, 
            reliability, and exceptional results.
          </p>
        </motion.div>
        
        {/* Main Testimonial Display */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.4 }}
              className="
                relative
                bg-gradient-to-br from-primary/30 to-primary/20
                border border-border/30
                rounded-2xl
                p-8 md:p-10
                shadow-xl
                mb-10
              "
            >
              {/* Quote Icon */}
              <div className="
                absolute -top-4 -left-4
                w-12 h-12
                flex items-center justify-center
                bg-gradient-to-br from-accent to-accent-hover
                text-primary-dark
                rounded-full
                shadow-lg
              ">
                <FiMessageSquare size={20} />
              </div>
              
              {/* Content */}
              <div className="pl-4">
                <div className="flex items-center gap-2 mb-6">
                  {renderStars(featuredTestimonials[activeIndex]?.rating || 5)}
                </div>
                
                <p className="
                  text-xl md:text-2xl
                  text-text-heading
                  leading-relaxed
                  mb-8
                  font-light
                  italic
                ">
                  "{featuredTestimonials[activeIndex]?.quote}"
                </p>
                
                <div className="
                  flex flex-col md:flex-row
                  items-start md:items-center
                  justify-between
                  gap-4
                  pt-8
                  border-t border-border/30
                ">
                  <div className="flex items-center gap-4">
                    <div className="
                      w-14 h-14
                      flex items-center justify-center
                      bg-gradient-to-br from-primary/60 to-primary/40
                      border border-border/30
                      rounded-full
                      overflow-hidden
                    ">
                      {featuredTestimonials[activeIndex]?.avatar ? (
                        <img
                          src={featuredTestimonials[activeIndex]?.avatar}
                          alt={featuredTestimonials[activeIndex]?.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="
                          w-full h-full
                          flex items-center justify-center
                          bg-gradient-to-br from-accent/20 to-accent/10
                          text-accent
                          font-medium
                          text-lg
                        ">
                          {featuredTestimonials[activeIndex]?.name?.charAt(0)}
                        </div>
                      )}
                    </div>
                    
                    <div>
                      <h4 className="
                        font-heading font-semibold
                        text-lg text-text-heading
                        mb-1
                      ">
                        {featuredTestimonials[activeIndex]?.name}
                      </h4>
                      <p className="text-sm text-text-body/70">
                        {featuredTestimonials[activeIndex]?.position}
                        {featuredTestimonials[activeIndex]?.company && 
                          ` • ${featuredTestimonials[activeIndex]?.company}`}
                      </p>
                    </div>
                  </div>
                  
                  {/* Project Info */}
                  {featuredTestimonials[activeIndex]?.project && (
                    <div className="
                      px-4 py-2
                      bg-gradient-to-br from-primary/50 to-primary/30
                      border border-border/30
                      rounded-lg
                    ">
                      <span className="text-sm text-text-body/70">Project:</span>
                      <div className="text-sm font-medium text-text-heading">
                        {featuredTestimonials[activeIndex]?.project}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          {/* Navigation Controls */}
          <div className="flex items-center justify-between">
            {/* Dots */}
            <div className="flex items-center gap-3">
              {featuredTestimonials.slice(0, 6).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`
                    w-10 h-1
                    rounded-full
                    transition-all duration-300
                    ${index === activeIndex
                      ? 'bg-gradient-to-r from-accent to-accent-hover'
                      : 'bg-border hover:bg-text-body/30'
                    }
                  `}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={prevTestimonial}
                className="
                  w-12 h-12
                  flex items-center justify-center
                  bg-gradient-to-br from-primary/40 to-primary/30
                  text-text-body
                  border border-border/30
                  rounded-full
                  hover:bg-gradient-to-br hover:from-accent/20 hover:to-accent/10
                  hover:text-accent hover:border-accent/30
                  transition-all duration-300
                "
                aria-label="Previous testimonial"
              >
                <FiChevronLeft size={20} />
              </button>
              
              <button
                onClick={nextTestimonial}
                className="
                  w-12 h-12
                  flex items-center justify-center
                  bg-gradient-to-br from-primary/40 to-primary/30
                  text-text-body
                  border border-border/30
                  rounded-full
                  hover:bg-gradient-to-br hover:from-accent/20 hover:to-accent/10
                  hover:text-accent hover:border-accent/30
                  transition-all duration-300
                "
                aria-label="Next testimonial"
              >
                <FiChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
        
        {/* Testimonial Mini Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
            gap-6
            mt-16
          "
        >
          {featuredTestimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="
                bg-gradient-to-br from-primary/30 to-primary/20
                border border-border/30
                rounded-xl
                p-6
                hover:border-accent/30
                transition-all duration-300
                group
              "
              onClick={() => setActiveIndex(index)}
            >
              <div className="flex items-center gap-2 mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              <p className="
                text-text-body/80
                text-sm leading-relaxed
                mb-6
                line-clamp-3
                group-hover:text-text-body
                transition-colors duration-300
              ">
                "{testimonial.quote}"
              </p>
              
              <div className="
                flex items-center gap-3
                pt-4
                border-t border-border/30
              ">
                <div className="
                  w-10 h-10
                  flex items-center justify-center
                  bg-gradient-to-br from-primary/60 to-primary/40
                  border border-border/30
                  rounded-full
                  overflow-hidden
                ">
                  {testimonial.avatar ? (
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="
                      w-full h-full
                      flex items-center justify-center
                      bg-gradient-to-br from-accent/20 to-accent/10
                      text-accent
                      text-sm font-medium
                    ">
                      {testimonial.name?.charAt(0)}
                    </div>
                  )}
                </div>
                
                <div>
                  <div className="
                    font-medium text-text-heading
                    text-sm
                  ">
                    {testimonial.name}
                  </div>
                  <div className="
                    text-xs text-text-body/60
                    mt-0.5
                  ">
                    {testimonial.position}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="
            mt-16
            grid grid-cols-2 md:grid-cols-4
            gap-4
            max-w-2xl mx-auto
          "
        >
          {[
            { 
              value: testimonials.length,
              label: 'Happy Clients',
              color: 'from-blue-400 to-cyan-400'
            },
            { 
              value: '5.0',
              label: 'Avg Rating',
              color: 'from-yellow-400 to-orange-400'
            },
            { 
              value: '98%',
              label: 'Satisfaction',
              color: 'from-green-400 to-emerald-400'
            },
            { 
              value: '75%',
              label: 'Repeat Work',
              color: 'from-purple-400 to-pink-400'
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="
                text-center
                p-5
                bg-gradient-to-br from-primary/30 to-primary/20
                border border-border/30
                rounded-xl
                hover:border-accent/20
                transition-all duration-300
              "
            >
              <div className={`
                font-heading font-bold
                text-2xl md:text-3xl
                mb-2
                bg-gradient-to-r ${stat.color}
                bg-clip-text text-transparent
              `}>
                {stat.value}
              </div>
              <div className="
                text-xs text-text-body/60
                font-medium uppercase tracking-wider
              ">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
        
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="/contact"
            className="
              inline-flex items-center gap-3
              px-6 py-3
              bg-gradient-to-r from-accent/10 to-accent/5
              border border-accent/20
              text-accent font-medium
              rounded-lg
              hover:from-accent/20 hover:to-accent/10
              hover:border-accent/30
              hover:shadow-lg hover:shadow-accent/10
              transition-all duration-300
              group
            "
          >
            <span>Become the next success story</span>
            <FiChevronRight className="
              group-hover:translate-x-1
              transition-transform duration-300
            " />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

// Add utility for line clamping if not already in your CSS
const styles = `
  .line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export default Testimonials;