/* ============================================
   🛠️ SERVICES PAGE
   Detailed services showcase
   Theme: Midnight Tech
   ============================================ */

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FiCheck, 
  FiClock, 
  FiDollarSign,
  FiCode,
  FiLayers,
  FiZap
} from 'react-icons/fi';

import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import Card from '../components/Card';
import { ServiceCard } from '../components/Card';
import { services, servicePackages, processSteps, whyChooseUs } from '../data/services';
import usePageMeta from '../hooks/usePageMeta';

/**
 * Services Page Component
 */
const ServicesPage = () => {
  usePageMeta({
    title: 'Services | Hamad Hussain',
    description:
      'Explore development services by Hamad Hussain including WordPress, MERN, Shopify, UI implementation, and custom web solutions.',
  });

  const [activeTab, setActiveTab] = useState('all');
  
  const filteredServices = activeTab === 'all'
    ? services
    : services.filter(service => service.category === activeTab);
  
  const tabVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-20"
    >
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="
            max-w-4xl mx-auto
            text-center
            py-16 md:py-24
          ">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="
                inline-flex items-center gap-2
                px-4 py-2 mb-6
                bg-accent/10 border border-accent/20
                rounded-full
              "
            >
              <span className="
                w-2 h-2 rounded-full
                bg-accent animate-pulse
              " />
              <span className="
                font-mono text-xs text-accent
                uppercase tracking-widest
              ">
                My Services
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="
                font-heading font-bold
                text-4xl md:text-5xl lg:text-6xl
                text-text-heading
                leading-tight
                mb-6
              "
            >
              <span className="
                bg-gradient-to-r from-accent to-accent-hover
                bg-clip-text text-transparent
              ">
                Development Services
              </span>
              <br />
              Tailored to Your Needs
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="
                text-text-body text-xl
                max-w-3xl mx-auto
                leading-relaxed
                mb-10
              "
            >
              I provide comprehensive web development solutions, from concept to deployment. 
              Each project is treated with attention to detail and a commitment to excellence.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                variant="primary"
                size="lg"
                href="/contact"
              >
                Get a Quote
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="/portfolio"
              >
                See My Work
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Services Tabs */}
      <section className="py-16 bg-primary/50">
        <div className="container mx-auto px-6">
          <SectionTitle
            subtitle="Categories"
            title="Browse by Service Type"
            description="Find the perfect solution for your project"
            align="center"
          />
          
          {/* Tabs */}
          <div className="
            flex flex-wrap justify-center
            gap-3 mb-12
          ">
            <button
              onClick={() => setActiveTab('all')}
              className={`
                px-6 py-3
                font-medium
                rounded-lg
                transition-all duration-300
                ${activeTab === 'all'
                  ? 'bg-accent text-primary-dark'
                  : 'bg-primary/50 text-text-body hover:text-accent hover:bg-accent/10'
                }
              `}
            >
              All Services
            </button>
            
            {[...new Set(services.map(s => s.category))].map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`
                  px-6 py-3
                  font-medium
                  rounded-lg
                  transition-all duration-300
                  ${activeTab === category
                    ? 'bg-accent text-primary-dark'
                    : 'bg-primary/50 text-text-body hover:text-accent hover:bg-accent/10'
                  }
                `}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
          
          {/* Services Grid */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.1,
                },
              },
            }}
            initial="hidden"
            animate="visible"
            className="
              grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
              gap-8
            "
          >
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                variants={tabVariants}
                custom={index}
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon ? React.createElement(service.icon) : <FiCode />}
                  features={service.features?.slice(0, 4) || []}
                  to={`/services#${service.id}`}
                  className="h-full"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <SectionTitle
            subtitle="Workflow"
            title="My Development Process"
            description="A structured approach to ensure project success"
            align="center"
            gradient
          />
          
          <div className="
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
            gap-8 mt-16
          ">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  hoverable={true}
                  className="
                    p-8 text-center
                    relative
                    group
                  "
                >
                  {/* Step Number */}
                  <div className="
                    absolute -top-4 -left-4
                    w-12 h-12
                    bg-accent text-primary-dark
                    rounded-xl
                    flex items-center justify-center
                    font-heading font-bold text-2xl
                    shadow-glow
                  ">
                    {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="
                    text-4xl mb-6
                    group-hover:scale-110
                    transition-transform duration-300
                  ">
                    {step.icon}
                  </div>
                  
                  {/* Title */}
                  <h3 className="
                    font-heading font-semibold
                    text-xl text-text-heading
                    mb-3
                  ">
                    {step.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-text-body text-sm leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Duration */}
                  {step.duration && (
                    <div className="
                      mt-4 pt-4 border-t border-border
                      text-xs text-accent font-mono
                    ">
                      {step.duration}
                    </div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="py-20 bg-primary-light/30">
        <div className="container mx-auto px-6">
          <SectionTitle
            subtitle="Pricing"
            title="Flexible Packages"
            description="Choose the plan that fits your project requirements"
            align="center"
            gradient
          />
          
          <div className="
            grid grid-cols-1 md:grid-cols-3
            gap-8 mt-16
            max-w-5xl mx-auto
          ">
            {servicePackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`
                  relative
                  ${pkg.recommended ? 'md:-mt-4 md:-mb-4' : ''}
                `}
              >
                {/* Recommended Badge */}
                {pkg.recommended && (
                  <div className="
                    absolute -top-3 left-1/2
                    -translate-x-1/2
                    bg-accent text-primary-dark
                    px-4 py-1
                    rounded-full
                    text-sm font-bold
                    whitespace-nowrap
                    z-10
                  ">
                    Most Popular
                  </div>
                )}
                
                <Card
                  variant={pkg.recommended ? 'glass' : 'default'}
                  className={`
                    p-8 h-full
                    ${pkg.recommended ? 'border-accent/50 shadow-glow' : ''}
                    flex flex-col
                  `}
                >
                  {/* Package Header */}
                  <div className="text-center mb-8">
                    <h3 className="
                      font-heading font-bold
                      text-2xl text-text-heading
                      mb-2
                    ">
                      {pkg.name}
                    </h3>
                    <p className="text-text-body text-sm mb-6">
                      {pkg.description}
                    </p>
                    <div className="
                      font-heading font-bold
                      text-4xl text-accent
                    ">
                      {pkg.price}
                      <span className="
                        text-lg text-text-body
                        font-normal
                      ">
                        
                      </span>
                    </div>
                  </div>
                  
                  {/* Features List */}
                  <ul className="space-y-3 mb-8 flex-grow">
                    {pkg.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-3 text-sm"
                      >
                        <FiCheck className="
                          text-accent mt-0.5 flex-shrink-0
                        " />
                        <span className="text-text-body">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* CTA Button */}
                  <Button
                    variant={pkg.recommended ? 'primary' : 'secondary'}
                    size="lg"
                    fullWidth
                    href="/contact"
                  >
                    Get Started
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
          
          {/* Custom Package Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              text-center mt-12
              p-6
              bg-primary/30 border border-border
              rounded-xl
              max-w-2xl mx-auto
            "
          >
            <div className="
              flex items-center justify-center gap-3
              mb-4
            ">
              <FiLayers className="text-accent text-xl" />
              <h4 className="
                font-heading font-semibold
                text-lg text-text-heading
              ">
                Need a Custom Solution?
              </h4>
            </div>
            <p className="text-text-body mb-4">
              Every project is unique. Contact me for a personalized quote 
              tailored to your specific requirements.
            </p>
            <Button
              variant="link"
              href="/contact"
              size="lg"
            >
              Request Custom Quote →
            </Button>
          </motion.div>
        </div>
      </section>
      
      {/* Why Choose Me Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <SectionTitle
            subtitle="Advantages"
            title="Why Work With Me"
            description="What sets me apart from other developers"
            align="center"
            gradient
          />
          
          <div className="
            grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
            gap-8 mt-16
            max-w-6xl mx-auto
          ">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card
                  hoverable={true}
                  className="
                    p-6
                    flex items-start gap-4
                    group
                  "
                >
                  {/* Icon */}
                  <div className="
                    w-14 h-14
                    flex items-center justify-center
                    bg-accent/10 text-accent
                    rounded-xl
                    group-hover:bg-accent group-hover:text-primary-dark
                    transition-all duration-300
                    flex-shrink-0
                  ">
                    {React.createElement(item.icon, { size: 24 })}
                  </div>
                  
                  {/* Content */}
                  <div>
                    <h3 className="
                      font-heading font-semibold
                      text-lg text-text-heading
                      mb-2
                    ">
                      {item.title}
                    </h3>
                    <p className="text-text-body text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
          
          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="
              text-center mt-16
            "
          >
            <div className="
              inline-flex flex-col sm:flex-row
              items-center gap-6
              p-8
              bg-gradient-to-r from-primary-light to-primary
              border border-border
              rounded-2xl
            ">
              <div className="text-left">
                <h3 className="
                  font-heading font-semibold
                  text-xl text-text-heading
                  mb-2
                ">
                  Ready to Start Your Project?
                </h3>
                <p className="text-text-body">
                  Let's discuss your ideas and create something amazing together.
                </p>
              </div>
              
              <div className="flex-shrink-0">
                <Button
                  variant="primary"
                  size="lg"
                  href="/contact"
                >
                  Get Started Now
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ServicesPage;
