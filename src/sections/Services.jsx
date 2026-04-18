/* ============================================
   🛠️ SERVICES SECTION
   Showcase of services offered
   Theme: Midnight Tech
   ============================================ */

import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiCode, 
  FiLayout, 
  FiSmartphone, 
  FiShoppingCart,
  FiServer,
  FiGlobe,
  FiPenTool,
  FiCloud,
  FiArrowRight
} from 'react-icons/fi';
import SectionTitle from '../components/SectionTitle';
import { ServiceCard } from '../components/Card';
import { services, getFeaturedServices } from '../data/services';

/**
 * Services Section Component
 */
const Services = () => {
  const featuredServices = getFeaturedServices().slice(0, 4);
  
  const iconMap = {
    'code': FiCode,
    'layout': FiLayout,
    'smartphone': FiSmartphone,
    'shopping-cart': FiShoppingCart,
    'server': FiServer,
    'globe': FiGlobe,
    'pen-tool': FiPenTool,
    'cloud': FiCloud,
  };
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };
  
  const statsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.4,
      },
    },
  };
  
  const statItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };
  
  return (
    <section id="services" className="py-20 md:py-24 bg-primary/40 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="
          absolute inset-0
          bg-gradient-to-b from-primary/30 via-transparent to-primary/20
        " />
        <div className="
          absolute inset-0
          bg-grid-pattern opacity-[0.03]
          bg-[length:60px_60px]
        " />
        {/* Subtle gradient orbs */}
        <div className="
          absolute top-1/2 -left-32
          w-64 h-64
          bg-accent/5
          rounded-full blur-3xl
        " />
        <div className="
          absolute bottom-1/2 -right-32
          w-64 h-64
          bg-accent/5
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
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-4 h-px bg-accent/50" />
            <span className="font-mono text-sm text-accent uppercase tracking-widest">
              Services
            </span>
            <div className="w-4 h-px bg-accent/50" />
          </div>
          
          <h2 className="
            font-heading font-bold
            text-4xl md:text-5xl
            text-text-heading
            text-center
            mb-6
          ">
            What I <span className="text-accent">Offer</span>
          </h2>
          
          <p className="
            text-lg text-text-body/80
            text-center
            max-w-2xl mx-auto
            leading-relaxed
          ">
            Comprehensive development solutions tailored to your needs. 
            From concept to deployment, I handle every aspect of your digital presence.
          </p>
        </motion.div>
        
        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {featuredServices.map((service, index) => {
            const IconComponent = service.icon ? iconMap[service.icon] : FiCode;
            const IconElement = IconComponent ? (
              <IconComponent className="text-accent" size={24} />
            ) : (
              <FiCode className="text-accent" size={24} />
            );
            
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="
                  h-full
                  bg-gradient-to-b from-primary/40 to-primary/20
                  border border-border/50
                  rounded-xl
                  p-6
                  hover:border-accent/30
                  hover:shadow-lg hover:shadow-accent/5
                  transition-all duration-300
                  group
                  flex flex-col
                ">
                  {/* Icon */}
                  <div className="
                    w-14 h-14
                    flex items-center justify-center
                    bg-gradient-to-br from-accent/10 to-accent/5
                    border border-accent/20
                    rounded-lg
                    mb-6
                    group-hover:scale-110
                    group-hover:border-accent/30
                    transition-all duration-300
                  ">
                    {IconElement}
                  </div>
                  
                  {/* Title */}
                  <h3 className="
                    font-heading font-semibold
                    text-xl text-text-heading
                    mb-3
                    group-hover:text-accent
                    transition-colors duration-300
                  ">
                    {service.shortTitle}
                  </h3>
                  
                  {/* Description */}
                  <p className="
                    text-text-body/70
                    text-sm leading-relaxed
                    mb-4
                    flex-grow
                  ">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  {service.features?.slice(0, 2).map((feature, idx) => (
                    <div
                      key={idx}
                      className="
                        flex items-center gap-2
                        text-sm text-text-body/60
                        mb-1
                        group-hover:text-text-body/80
                        transition-colors duration-300
                      "
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                      <span>{feature}</span>
                    </div>
                  ))}
                  
                  {/* Learn More Link */}
                  <a
                    href={`/services#${service.id}`}
                    className="
                      inline-flex items-center gap-1
                      text-accent text-sm font-medium
                      mt-6 pt-4
                      border-t border-border/30
                      group-hover:border-accent/30
                      transition-colors duration-300
                      w-fit
                    "
                  >
                    <span>Learn more</span>
                    <FiArrowRight className="
                      group-hover:translate-x-1
                      transition-transform duration-300
                    " size={16} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        
        {/* Stats */}
        <motion.div
          variants={statsVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            mt-20
            grid grid-cols-2 md:grid-cols-4
            gap-4
            max-w-3xl mx-auto
          "
        >
          {[
            { value: '50+', label: 'Projects', color: 'from-blue-400 to-cyan-400' },
            { value: '100%', label: 'Satisfaction', color: 'from-green-400 to-emerald-400' },
            { value: '2+', label: 'Years', color: 'from-purple-400 to-pink-400' },
            { value: '24/7', label: 'Support', color: 'from-orange-400 to-red-400' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={statItemVariants}
              className="
                text-center
                p-5
                bg-primary/30 border border-border/30
                rounded-xl
                hover:border-accent/20
                transition-all duration-300
              "
            >
              <div className={`
                font-heading font-bold
                text-2xl md:text-3xl
                mb-1
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
            </motion.div>
          ))}
        </motion.div>
        
        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="
            mt-16 text-center
          "
        >
          <a
            href="/services"
            className="
              inline-flex items-center gap-3
              px-6 py-3
              bg-gradient-to-r from-accent/10 to-accent/5
              border border-accent/20
              rounded-lg
              text-accent font-medium
              hover:from-accent/15 hover:to-accent/10
              hover:border-accent/30
              hover:shadow-lg hover:shadow-accent/10
              transition-all duration-300
              group
            "
          >
            <span>View all services</span>
            <FiArrowRight className="
              group-hover:translate-x-1
              transition-transform duration-300
            " />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;