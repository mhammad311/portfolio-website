/* ============================================
   📞 CONTACT PAGE - ENHANCED
   Full contact page with WhatsApp integration
   Theme: Midnight Tech
   ============================================ */

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin,
  FiMessageSquare,
  FiSend,
  FiCheckCircle,
  FiClock,
  FiGlobe,
  FiShield,
  FiZap,
  FiArrowRight
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import Card from '../components/Card';
import Contact from '../sections/Contact';
import usePageMeta from '../hooks/usePageMeta';

/* ── Animated Background Orbs ── */
const BackgroundOrbs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <motion.div
      className="absolute -top-40 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3],
      }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute -bottom-40 -left-40 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"
      animate={{
        scale: [1.2, 1, 1.2],
        opacity: [0.2, 0.4, 0.2],
      }}
      transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/3 rounded-full blur-3xl"
      animate={{
        scale: [1, 1.3, 1],
        rotate: [0, 180, 360],
      }}
      transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
    />
  </div>
);

/* ── Typing Animation Text ── */
const TypingText = ({ texts }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [currentText, setCurrentText] = React.useState('');
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const text = texts[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(text.substring(0, currentText.length + 1));
        if (currentText === text) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(text.substring(0, currentText.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex, texts]);

  return (
    <span className="
      bg-gradient-to-r from-accent to-green-400
      bg-clip-text text-transparent
    ">
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
        className="text-accent"
      >
        |
      </motion.span>
    </span>
  );
};

/**
 * Contact Page Component
 */
const ContactPage = () => {
  usePageMeta({
    title: 'Contact | Hamad Hussain',
    description:
      'Get in touch with Hamad Hussain for WordPress, MERN, Shopify, and custom web development projects.',
  });

  const WHATSAPP_NUMBER = '923497818575';
  
  const contactMethods = [
    {
      icon: <FiMail />,
      title: 'Email',
      description: 'Best for detailed project discussions and formal inquiries',
      details: 'mhweb11@gmail.com',
      action: 'mailto:mhweb11@gmail.com',
      color: 'from-blue-500/20 to-blue-600/10',
      iconColor: 'text-blue-400',
      borderColor: 'hover:border-blue-400/50',
      responseTime: '~24 hours',
    },
    {
      icon: <FaWhatsapp />,
      title: 'WhatsApp',
      description: 'Fastest way to reach me for quick conversations',
      details: '+92 349 7818575',
      action: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'm interested in discussing a project.")}`,
      color: 'from-green-500/20 to-green-600/10',
      iconColor: 'text-green-400',
      borderColor: 'hover:border-green-400/50',
      responseTime: '~1 hour',
      featured: true,
    },
    {
      icon: <FiPhone />,
      title: 'Phone',
      description: 'Call directly for urgent matters or real-time discussion',
      details: '+92 349 7818575',
      action: 'tel:+923497818575',
      color: 'from-yellow-500/20 to-yellow-600/10',
      iconColor: 'text-yellow-400',
      borderColor: 'hover:border-yellow-400/50',
      responseTime: 'Immediate',
    },
    {
      icon: <FiMessageSquare />,
      title: 'Live Chat',
      description: 'Available during business hours for quick questions',
      details: 'Start a conversation',
      action: '#contact',
      color: 'from-purple-500/20 to-purple-600/10',
      iconColor: 'text-purple-400',
      borderColor: 'hover:border-purple-400/50',
      responseTime: '~5 minutes',
    },
  ];

  const whyWorkWithMe = [
    {
      icon: <FiZap />,
      title: 'Fast Delivery',
      description: 'Projects delivered on time, every time. No delays, no excuses.',
    },
    {
      icon: <FiShield />,
      title: 'Quality Guaranteed',
      description: 'Clean, tested, and production-ready code with best practices.',
    },
    {
      icon: <FiGlobe />,
      title: 'Global Experience',
      description: 'Worked with clients from 10+ countries across different industries.',
    },
    {
      icon: <FiClock />,
      title: '24/7 Support',
      description: 'Post-project support and maintenance to keep things running.',
    },
  ];
  
  const faqs = [
    {
      question: 'What is your typical response time?',
      answer: 'Via WhatsApp, I usually respond within 1 hour. For emails, expect a response within 24 hours during business days. Phone calls are answered immediately when available.'
    },
    {
      question: 'Do you work with international clients?',
      answer: 'Absolutely! I work with clients from all over the world. I\'m comfortable working across different time zones, currencies, and communication styles.'
    },
    {
      question: 'What information should I provide in my inquiry?',
      answer: 'The more detail, the better! Include: project goals, target audience, desired timeline, budget range, reference websites you like, and any specific features or requirements.'
    },
    {
      question: 'Do you offer ongoing maintenance?',
      answer: 'Yes! I offer monthly maintenance packages that include updates, security patches, performance optimization, and priority technical support.'
    },
    {
      question: 'What is your pricing model?',
      answer: 'I offer both fixed-price and hourly models depending on the project scope. For most projects, I provide a detailed quote after our initial discussion. Starting from $50 for small tasks.'
    },
    {
      question: 'Can I see your previous work?',
      answer: 'Of course! Check out my portfolio page for detailed case studies. I can also provide references from previous clients upon request.'
    },
  ];

  // FAQ toggle state
  const [openFaq, setOpenFaq] = React.useState(null);
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 pb-20"
    >
      {/* ═══════════════════════════════════════════
          HERO SECTION
          ═══════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <BackgroundOrbs />
        
        <div className="container mx-auto px-6">
          <div className="
            max-w-4xl mx-auto
            text-center
            py-16 md:py-24
            relative z-10
          ">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="
                inline-flex items-center gap-2
                px-5 py-2.5 mb-8
                bg-accent/10 border border-accent/20
                rounded-full
                backdrop-blur-sm
              "
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
              </span>
              <span className="
                font-mono text-xs text-accent
                uppercase tracking-[0.2em]
              ">
                Available for Projects
              </span>
            </motion.div>
            
            {/* Title with typing effect */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="
                font-heading font-bold
                text-4xl md:text-5xl lg:text-6xl
                text-text-heading
                leading-tight
                mb-6
              "
            >
              Let's Build
              <br />
              <TypingText 
                texts={[
                  'Your Dream Website',
                  'Something Amazing',
                  'A Stunning App',
                  'Your Next Project',
                ]}
              />
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="
                text-text-body text-lg md:text-xl
                max-w-3xl mx-auto
                leading-relaxed
                mb-10
              "
            >
              Have an idea? Let's turn it into reality. Choose your preferred 
              way to reach out — fill the form, send an email, or jump straight 
              to WhatsApp for an instant conversation.
            </motion.p>

            {/* Quick action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="
                  inline-flex items-center gap-3
                  px-8 py-4
                  bg-accent hover:bg-accent-hover
                  text-primary-dark font-semibold
                  rounded-xl
                  shadow-lg shadow-accent/20
                  transition-all duration-300
                "
              >
                <FiSend size={18} />
                <span>Fill Contact Form</span>
              </motion.a>

              <motion.a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'd like to discuss a project with you.")}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="
                  inline-flex items-center gap-3
                  px-8 py-4
                  bg-green-600 hover:bg-green-500
                  text-white font-semibold
                  rounded-xl
                  shadow-lg shadow-green-600/20
                  transition-all duration-300
                "
              >
                <FaWhatsapp size={20} />
                <span>Quick WhatsApp Chat</span>
              </motion.a>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-16"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="
                  w-8 h-12 mx-auto
                  border-2 border-text-body/20
                  rounded-full
                  flex items-start justify-center pt-2
                "
              >
                <motion.div
                  animate={{ opacity: [0.2, 1, 0.2], y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1.5 h-3 bg-accent rounded-full"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* ═══════════════════════════════════════════
          CONTACT METHODS
          ═══════════════════════════════════════════ */}
      <section className="py-16 bg-primary/50 relative">
        <div className="container mx-auto px-6">
          <SectionTitle
            subtitle="Quick Contact"
            title="Choose How to Reach Me"
            description="Multiple ways to connect — pick the one that works best for you"
            align="center"
            gradient
          />
          
          <div className="
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
            gap-6 mt-12
            max-w-6xl mx-auto
          ">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.action}
                target={method.action.startsWith('http') ? '_blank' : undefined}
                rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`
                  relative
                  bg-primary-light/30 
                  border border-border ${method.borderColor}
                  rounded-2xl p-6
                  text-center
                  transition-all duration-300
                  group cursor-pointer
                  overflow-hidden
                  ${method.featured ? 'ring-1 ring-green-500/30' : ''}
                `}
              >
                {/* Featured badge */}
                {method.featured && (
                  <div className="
                    absolute top-3 right-3
                    px-2 py-1
                    bg-green-500/20 border border-green-500/30
                    rounded-full
                  ">
                    <span className="text-[10px] font-mono text-green-400 uppercase tracking-wider">
                      Fastest
                    </span>
                  </div>
                )}

                {/* Background gradient */}
                <div className={`
                  absolute inset-0 opacity-0 group-hover:opacity-100
                  bg-gradient-to-br ${method.color}
                  transition-opacity duration-500
                `} />

                {/* Icon */}
                <div className={`
                  w-14 h-14 mx-auto mb-4
                  flex items-center justify-center
                  text-2xl rounded-2xl
                  bg-primary/50 ${method.iconColor}
                  border border-border
                  transition-all duration-300
                  group-hover:scale-110
                  group-hover:border-transparent
                  relative z-10
                `}>
                  {method.icon}
                </div>
                
                {/* Title */}
                <h3 className="
                  font-heading font-semibold
                  text-lg text-text-heading
                  mb-2 relative z-10
                ">
                  {method.title}
                </h3>
                
                {/* Description */}
                <p className="
                  text-text-body text-xs
                  mb-3 relative z-10
                  leading-relaxed
                ">
                  {method.description}
                </p>
                
                {/* Details */}
                <div className="
                  font-medium text-sm text-text-heading
                  mb-3 relative z-10
                ">
                  {method.details}
                </div>

                {/* Response time */}
                <div className="
                  inline-flex items-center gap-1.5
                  text-[10px] font-mono
                  text-text-body/50
                  relative z-10
                ">
                  <FiClock size={10} />
                  <span>Response: {method.responseTime}</span>
                </div>

                {/* Arrow indicator */}
                <div className="
                  mt-4 
                  flex items-center justify-center
                  relative z-10
                ">
                  <motion.span
                    className={`
                      ${method.iconColor}
                      opacity-0 group-hover:opacity-100
                      transition-opacity duration-300
                    `}
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FiArrowRight size={18} />
                  </motion.span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          WHY WORK WITH ME
          ═══════════════════════════════════════════ */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <SectionTitle
            subtitle="Why Choose Me"
            title="What You Get"
            description="More than just code — a reliable partner for your digital success"
            align="center"
            gradient
          />

          <div className="
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
            gap-6 mt-12
            max-w-6xl mx-auto
          ">
            {whyWorkWithMe.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="
                  text-center p-6
                  bg-primary-light/20 border border-border
                  hover:border-accent/30
                  rounded-2xl
                  transition-all duration-300
                  group
                "
              >
                <div className="
                  w-12 h-12 mx-auto mb-4
                  flex items-center justify-center
                  text-accent text-xl
                  bg-accent/10 rounded-xl
                  group-hover:bg-accent group-hover:text-primary-dark
                  transition-all duration-300
                  group-hover:scale-110
                ">
                  {item.icon}
                </div>
                <h3 className="
                  font-heading font-semibold
                  text-base text-text-heading mb-2
                ">
                  {item.title}
                </h3>
                <p className="text-text-body text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* ═══════════════════════════════════════════
          CONTACT FORM SECTION
          ═══════════════════════════════════════════ */}
      <Contact />
      
      {/* ═══════════════════════════════════════════
          FAQ SECTION - Enhanced with Accordion
          ═══════════════════════════════════════════ */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <SectionTitle
            subtitle="Common Questions"
            title="Frequently Asked Questions"
            description="Quick answers to help you get started"
            align="center"
            gradient
          />
          
          <div className="max-w-3xl mx-auto mt-12">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="mb-3"
              >
                <motion.button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className={`
                    w-full text-left
                    p-5 md:p-6
                    bg-primary-light/30 
                    border rounded-xl
                    transition-all duration-300
                    group
                    ${openFaq === index 
                      ? 'border-accent/30 bg-accent/5' 
                      : 'border-border hover:border-accent/20'
                    }
                  `}
                >
                  <div className="flex items-center justify-between">
                    <h3 className={`
                      font-heading font-semibold
                      text-base md:text-lg pr-4
                      transition-colors duration-300
                      ${openFaq === index ? 'text-accent' : 'text-text-heading group-hover:text-accent'}
                    `}>
                      {faq.question}
                    </h3>
                    <motion.div
                      animate={{ rotate: openFaq === index ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`
                        w-8 h-8 flex-shrink-0
                        flex items-center justify-center
                        rounded-lg
                        transition-colors duration-300
                        ${openFaq === index 
                          ? 'bg-accent text-primary-dark' 
                          : 'bg-primary/50 text-text-body'
                        }
                      `}
                    >
                      <span className="text-lg font-light">+</span>
                    </motion.div>
                  </div>
                  
                  <AnimatePresence>
                    {openFaq === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="
                          pt-4 mt-4
                          border-t border-border
                        ">
                          <p className="text-text-body text-sm leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </motion.div>
            ))}
          </div>

          {/* More questions CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-10"
          >
            <p className="text-text-body text-sm mb-4">
              Still have questions?
            </p>
            <motion.a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I have a question about your services.")}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                inline-flex items-center gap-2
                px-6 py-3
                bg-green-600/20 hover:bg-green-600
                border border-green-500/30
                text-green-400 hover:text-white
                rounded-xl
                text-sm font-medium
                transition-all duration-300
              "
            >
              <FaWhatsapp size={18} />
              <span>Ask me on WhatsApp</span>
            </motion.a>
          </motion.div>
        </div>
      </section>
      
      {/* ═══════════════════════════════════════════
          FINAL CTA SECTION
          ═══════════════════════════════════════════ */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="
            bg-gradient-to-br from-primary-light to-primary
            border border-border
            rounded-3xl
            p-12 md:p-16 text-center
            relative overflow-hidden
          ">
            {/* Background Elements */}
            <div className="absolute inset-0">
              <div className="
                absolute top-1/2 left-1/2
                -translate-x-1/2 -translate-y-1/2
                w-96 h-96
                bg-accent/5 rounded-full
                blur-3xl
              " />
              <div className="
                absolute top-0 right-0
                w-64 h-64
                bg-green-500/5 rounded-full
                blur-3xl
              " />
              
              {/* Grid pattern */}
              <div className="
                absolute inset-0 opacity-5
              " style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
              }} />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10"
            >
              <div className="
                inline-flex items-center gap-2
                px-4 py-2 mb-6
                bg-accent/10 border border-accent/20
                rounded-full
              ">
                <FiZap className="text-accent" size={14} />
                <span className="font-mono text-xs text-accent uppercase tracking-wider">
                  Let's Start
                </span>
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="
                font-heading font-bold
                text-3xl md:text-4xl lg:text-5xl
                text-text-heading
                mb-6
                relative z-10
              "
            >
              Ready to Start Your
              <br />
              <span className="
                bg-gradient-to-r from-accent to-green-400
                bg-clip-text text-transparent
              ">
                Next Project?
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="
                text-text-body text-lg
                max-w-2xl mx-auto
                mb-10
                relative z-10
              "
            >
              Don't let your ideas stay as ideas. Let's transform them into 
              powerful digital experiences that make an impact.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="
                flex flex-col sm:flex-row 
                items-center justify-center 
                gap-4 relative z-10
              "
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="
                  inline-flex items-center gap-3
                  px-8 py-4
                  bg-accent hover:bg-accent-hover
                  text-primary-dark font-semibold
                  rounded-xl
                  shadow-lg shadow-accent/20
                  transition-colors duration-300
                "
              >
                <FiSend size={18} />
                <span>Send Message</span>
              </motion.a>

              <motion.a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'm ready to start a project. Let's discuss!")}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="
                  inline-flex items-center gap-3
                  px-8 py-4
                  bg-green-600 hover:bg-green-500
                  text-white font-semibold
                  rounded-xl
                  shadow-lg shadow-green-600/20
                  transition-colors duration-300
                "
              >
                <FaWhatsapp size={20} />
                <span>WhatsApp Now</span>
              </motion.a>
              
              <Button
                variant="secondary"
                size="lg"
                href="/portfolio"
              >
                View Portfolio
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ContactPage;
