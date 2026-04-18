/* ============================================
   📞 CONTACT SECTION - FIXED VERSION
   Fixed: Input height, padding, email service
   Theme: Midnight Tech
   ============================================ */

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiSend,
  FiCheck,
  FiAlertCircle,
  FiUser,
  FiDollarSign,
  FiClock,
  FiLayers,
  FiMessageSquare,
  FiX,
  FiChevronDown
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { contactInfo, socials } from '../data/socials';

/* ══════════════════════════════════════════════
   FLOATING INPUT - FIXED HEIGHT & PADDING
   ══════════════════════════════════════════════ */
const FloatingInput = ({ 
  id, 
  name, 
  type = 'text', 
  value, 
  onChange, 
  label, 
  required = false, 
  disabled = false, 
  icon: Icon,
  error,
  success 
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const isActive = isFocused || value?.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative group"
    >
      {/* Icon - vertically centered */}
      {Icon && (
        <div className={`
          absolute left-4 top-[50%] -translate-y-1/2
          z-10 transition-colors duration-300
          ${isFocused ? 'text-accent' : 'text-text-body/40'}
          ${error ? 'text-red-400' : ''}
          ${success ? 'text-green-400' : ''}
        `}>
          <Icon size={18} />
        </div>
      )}

      {/* Input - FIXED: More height and better padding */}
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`
          w-full peer
          h-[56px]
          ${Icon ? 'pl-12' : 'pl-4'} 
          pr-12 
          ${isActive ? 'pt-7 pb-2' : 'pt-4 pb-4'}
          bg-primary/80 backdrop-blur-sm
          border-2 rounded-xl
          text-text-heading text-sm
          placeholder-transparent
          focus:outline-none
          disabled:opacity-50 disabled:cursor-not-allowed
          transition-all duration-300
          ${error 
            ? 'border-red-500/50 focus:border-red-400 focus:ring-2 focus:ring-red-400/20' 
            : success 
              ? 'border-green-500/50 focus:border-green-400 focus:ring-2 focus:ring-green-400/20'
              : 'border-border hover:border-accent/30 focus:border-accent focus:ring-2 focus:ring-accent/20'
          }
        `}
        placeholder={label}
      />

      {/* Floating Label - FIXED positioning */}
      <label
        htmlFor={id}
        className={`
          absolute transition-all duration-300 pointer-events-none
          ${Icon ? 'left-12' : 'left-4'}
          ${isActive
            ? 'top-2 text-[10px] font-semibold tracking-wider uppercase'
            : 'top-[50%] -translate-y-1/2 text-sm'
          }
          ${isFocused ? 'text-accent' : 'text-text-body/50'}
          ${error ? '!text-red-400' : ''}
          ${success ? '!text-green-400' : ''}
        `}
      >
        {label} {required && <span className="text-red-400">*</span>}
      </label>

      {/* Validation Icon */}
      <AnimatePresence>
        {(error || success) && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="absolute right-4 top-[50%] -translate-y-1/2"
          >
            {error && <FiAlertCircle className="text-red-400" size={18} />}
            {success && <FiCheck className="text-green-400" size={18} />}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error Message */}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -5, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -5, height: 0 }}
            className="text-red-400 text-xs mt-2 ml-1"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>

      {/* Bottom glow line on focus */}
      <motion.div
        className="absolute bottom-0 left-1/2 h-[2px] bg-accent rounded-full"
        initial={{ width: 0, x: '-50%' }}
        animate={{ 
          width: isFocused ? '90%' : '0%',
          x: '-50%'
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

/* ══════════════════════════════════════════════
   CUSTOM SELECT DROPDOWN - FIXED HEIGHT
   ══════════════════════════════════════════════ */
const FloatingSelect = ({ 
  id, 
  name, 
  value, 
  onChange, 
  label, 
  options, 
  required = false, 
  disabled = false, 
  icon: Icon,
  error 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const dropdownRef = useRef(null);
  const isActive = isFocused || value?.length > 0;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setIsFocused(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find(opt => opt.value === value);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      ref={dropdownRef}
      className="relative group"
    >
      {/* Icon */}
      {Icon && (
        <div className={`
          absolute left-4 top-[50%] -translate-y-1/2
          z-10 transition-colors duration-300
          ${isFocused ? 'text-accent' : 'text-text-body/40'}
        `}>
          <Icon size={18} />
        </div>
      )}

      {/* Select Button - FIXED height */}
      <button
        type="button"
        disabled={disabled}
        onClick={() => {
          setIsOpen(!isOpen);
          setIsFocused(true);
        }}
        className={`
          w-full text-left
          h-[56px]
          ${Icon ? 'pl-12' : 'pl-4'} 
          pr-12 
          ${isActive ? 'pt-7 pb-2' : 'pt-4 pb-4'}
          bg-primary/80 backdrop-blur-sm
          border-2 rounded-xl
          text-sm
          disabled:opacity-50 disabled:cursor-not-allowed
          transition-all duration-300
          ${isOpen 
            ? 'border-accent ring-2 ring-accent/20' 
            : 'border-border hover:border-accent/30'
          }
          ${error ? 'border-red-500/50' : ''}
          ${value ? 'text-text-heading' : 'text-text-body/50'}
        `}
      >
        {selectedOption?.label || ''}
      </button>

      {/* Floating Label - FIXED */}
      <label
        className={`
          absolute transition-all duration-300 pointer-events-none
          ${Icon ? 'left-12' : 'left-4'}
          ${isActive
            ? 'top-2 text-[10px] font-semibold tracking-wider uppercase'
            : 'top-[50%] -translate-y-1/2 text-sm'
          }
          ${isFocused ? 'text-accent' : 'text-text-body/50'}
        `}
      >
        {label} {required && <span className="text-red-400">*</span>}
      </label>

      {/* Chevron */}
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        className="absolute right-4 top-[50%] -translate-y-1/2 text-text-body/40"
      >
        <FiChevronDown size={18} />
      </motion.div>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="
              absolute z-50 w-full mt-2
              bg-primary-light border border-border
              rounded-xl shadow-2xl shadow-black/30
              overflow-hidden
              max-h-64 overflow-y-auto
            "
          >
            {options.map((option, index) => (
              <motion.button
                key={option.value}
                type="button"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.03 }}
                onClick={() => {
                  onChange({ target: { name, value: option.value } });
                  setIsOpen(false);
                  setIsFocused(false);
                }}
                className={`
                  w-full text-left px-4 py-3.5
                  text-sm transition-all duration-200
                  flex items-center justify-between
                  ${option.value === value
                    ? 'bg-accent/10 text-accent'
                    : 'text-text-body hover:bg-accent/5 hover:text-text-heading'
                  }
                  ${option.divider ? 'border-t border-border' : ''}
                `}
              >
                <span>{option.label}</span>
                {option.value === value && (
                  <FiCheck size={16} className="text-accent" />
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error */}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="text-red-400 text-xs mt-2 ml-1"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

/* ══════════════════════════════════════════════
   FLOATING TEXTAREA - FIXED
   ══════════════════════════════════════════════ */
const FloatingTextarea = ({ 
  id, 
  name, 
  value, 
  onChange, 
  label, 
  required = false, 
  disabled = false, 
  icon: Icon,
  rows = 5,
  maxLength = 1000,
  error,
  success 
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const isActive = isFocused || value?.length > 0;
  const charCount = value?.length || 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative group"
    >
      {/* Icon */}
      {Icon && (
        <div className={`
          absolute left-4 top-7
          z-10 transition-colors duration-300
          ${isFocused ? 'text-accent' : 'text-text-body/40'}
        `}>
          <Icon size={18} />
        </div>
      )}

      {/* Textarea - FIXED padding */}
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        rows={rows}
        maxLength={maxLength}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`
          w-full peer
          min-h-[140px]
          ${Icon ? 'pl-12' : 'pl-4'} 
          pr-4 pt-8 pb-8
          bg-primary/80 backdrop-blur-sm
          border-2 rounded-xl
          text-text-heading text-sm
          leading-relaxed
          placeholder-transparent
          focus:outline-none
          disabled:opacity-50 disabled:cursor-not-allowed
          transition-all duration-300
          resize-none
          ${error 
            ? 'border-red-500/50 focus:border-red-400 focus:ring-2 focus:ring-red-400/20' 
            : 'border-border hover:border-accent/30 focus:border-accent focus:ring-2 focus:ring-accent/20'
          }
        `}
        placeholder={label}
      />

      {/* Floating Label */}
      <label
        htmlFor={id}
        className={`
          absolute transition-all duration-300 pointer-events-none
          ${Icon ? 'left-12' : 'left-4'}
          ${isActive
            ? 'top-2.5 text-[10px] font-semibold tracking-wider uppercase'
            : 'top-6 text-sm'
          }
          ${isFocused ? 'text-accent' : 'text-text-body/50'}
        `}
      >
        {label} {required && <span className="text-red-400">*</span>}
      </label>

      {/* Character Counter */}
      <div className={`
        absolute bottom-3 right-4
        text-[10px] font-mono
        transition-colors duration-300
        ${charCount > maxLength * 0.9 
          ? 'text-red-400' 
          : charCount > maxLength * 0.7 
            ? 'text-yellow-400' 
            : 'text-text-body/30'
        }
      `}>
        {charCount}/{maxLength}
      </div>

      {/* Bottom glow line */}
      <motion.div
        className="absolute bottom-0 left-1/2 h-[2px] bg-accent rounded-full"
        initial={{ width: 0, x: '-50%' }}
        animate={{ 
          width: isFocused ? '90%' : '0%',
          x: '-50%'
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Error */}
      <AnimatePresence>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -5, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -5, height: 0 }}
            className="text-red-400 text-xs mt-2 ml-1"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

/* ══════════════════════════════════════════════
   PARTICLE BACKGROUND
   ══════════════════════════════════════════════ */
const FormParticles = () => {
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-accent/10"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, -15, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

/* ══════════════════════════════════════════════════════
   MAIN CONTACT SECTION
   ══════════════════════════════════════════════════════ */
const Contact = () => {
  const WHATSAPP_NUMBER = '923497818575';
  const formRef = useRef(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    subject: '',
    message: '',
  });
  
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    sendMethod: null,
    error: null,
  });
  
  // ── Dropdown Options ──
  const projectTypes = [
    { value: 'web-development', label: '🌐 Web Development' },
    { value: 'mobile-app', label: '📱 Mobile App' },
    { value: 'ecommerce', label: '🛒 E-Commerce Store' },
    { value: 'landing-page', label: '📄 Landing Page' },
    { value: 'portfolio', label: '💼 Portfolio Website' },
    { value: 'web-application', label: '⚙️ Web Application' },
    { value: 'ui-ux-design', label: '🎨 UI/UX Design' },
    { value: 'seo-optimization', label: '🔍 SEO Optimization' },
    { value: 'consultation', label: '💬 Consultation' },
    { value: 'other', label: '📋 Other', divider: true },
  ];

  const budgetRanges = [
    { value: '50-200', label: '$50 - $200' },
    { value: '200-500', label: '$200 - $500' },
    { value: '500-1000', label: '$500 - $1,000' },
    { value: '1000-3000', label: '$1,000 - $3,000' },
    { value: '3000-5000', label: '$3,000 - $5,000' },
    { value: '5000-10000', label: '$5,000 - $10,000' },
    { value: '10000+', label: '$10,000+' },
    { value: 'discuss', label: "💬 Not sure, let's discuss", divider: true },
  ];

  const timelines = [
    { value: 'asap', label: '⚡ ASAP' },
    { value: '1-2-weeks', label: '📅 1-2 Weeks' },
    { value: '1-month', label: '📅 1 Month' },
    { value: '2-3-months', label: '📅 2-3 Months' },
    { value: '3-6-months', label: '📅 3-6 Months' },
    { value: '6-months+', label: '📅 6+ Months' },
    { value: 'flexible', label: '🕐 Flexible' },
    { value: 'discuss', label: "💬 Not sure, let's discuss", divider: true },
  ];
  
  // ── Validation ──
  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return null;
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email';
        return null;
      case 'phone':
        if (value && !/^[\+]?[0-9\s\-\(\)]{7,15}$/.test(value)) return 'Please enter a valid phone number';
        return null;
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        return null;
      default:
        return null;
    }
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    const allTouched = {};
    Object.keys(formData).forEach(key => { allTouched[key] = true; });
    setTouched(allTouched);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  // ── Get Label from Value ──
  const getLabelFromValue = (options, value) => {
    const option = options.find(opt => opt.value === value);
    return option ? option.label.replace(/^[^\w$]+ /, '') : value || 'Not specified';
  };
  
  // ── Generate WhatsApp Message ──
  const generateWhatsAppMessage = () => {
    const projectLabel = getLabelFromValue(projectTypes, formData.projectType);
    const budgetLabel = getLabelFromValue(budgetRanges, formData.budget);
    const timelineLabel = getLabelFromValue(timelines, formData.timeline);

    const message = `
🌟 *New Project Inquiry*
━━━━━━━━━━━━━━━━━━━━━━

👤 *Name:* ${formData.name}
📧 *Email:* ${formData.email}
${formData.phone ? `📱 *Phone:* ${formData.phone}` : ''}

━━━━━━━━━━━━━━━━━━━━━━
🚀 *Project Type:* ${projectLabel}
💰 *Budget:* ${budgetLabel}
⏰ *Timeline:* ${timelineLabel}
${formData.subject ? `📌 *Subject:* ${formData.subject}` : ''}

━━━━━━━━━━━━━━━━━━━━━━
📝 *Message:*
${formData.message}

━━━━━━━━━━━━━━━━━━━━━━
_Sent from Portfolio Contact Form_
    `.trim();

    return encodeURIComponent(message);
  };

  // ── Send via WhatsApp ──
  const handleWhatsAppSend = () => {
    if (!validateForm()) return;

    const message = generateWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    
    setStatus({
      submitting: false,
      submitted: true,
      sendMethod: 'whatsapp',
      error: null,
    });

    window.open(whatsappUrl, '_blank');

    setTimeout(() => {
      setStatus(prev => ({ ...prev, submitted: false, sendMethod: null }));
    }, 5000);
  };
  
  /* ══════════════════════════════════════════════
     ISSUE 2 FIX: REAL EMAIL SENDING WITH EMAILJS
     ══════════════════════════════════════════════ */
  const handleEmailSend = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus({ submitting: true, submitted: false, sendMethod: 'email', error: null });
    
    try {
      // ── EmailJS Configuration ──
      // You need these 3 things from https://www.emailjs.com
      const SERVICE_ID = 'service_8hljpsv';     // Step 1: Create in EmailJS
      const TEMPLATE_ID = 'template_iuxtl2a';   // Step 2: Create in EmailJS
      const PUBLIC_KEY = 'coCmYRuDCmCzJtuHx';      // Step 3: Get from EmailJS

      const projectLabel = getLabelFromValue(projectTypes, formData.projectType);
      const budgetLabel = getLabelFromValue(budgetRanges, formData.budget);
      const timelineLabel = getLabelFromValue(timelines, formData.timeline);

      // Template parameters that match your EmailJS template
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        project_type: projectLabel,
        budget: budgetLabel,
        timeline: timelineLabel,
        subject: formData.subject || 'New Project Inquiry',
        message: formData.message,
        to_email: 'mhweb11@gmail.com',
      };

      const { default: emailjs } = await import('@emailjs/browser');

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );
      
      setStatus({ 
        submitting: false, 
        submitted: true, 
        sendMethod: 'email',
        error: null 
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: '',
        budget: '',
        timeline: '',
        subject: '',
        message: '',
      });
      setTouched({});
      setErrors({});
      
      setTimeout(() => {
        setStatus(prev => ({ ...prev, submitted: false, sendMethod: null }));
      }, 5000);

    } catch (err) {
      console.error('EmailJS Error:', err);
      setStatus({ 
        submitting: false, 
        submitted: false, 
        sendMethod: null,
        error: 'Email sending is not configured right now. Please use WhatsApp or contact directly.' 
      });
    }
  };
  
  // ── Progress calculation ──
  const requiredFields = ['name', 'email', 'message'];
  const optionalFields = ['phone', 'projectType', 'budget', 'timeline', 'subject'];
  const allFields = [...requiredFields, ...optionalFields];
  const filledCount = allFields.filter(f => formData[f]?.trim?.()?.length > 0).length;
  const progressPercent = Math.round((filledCount / allFields.length) * 100);

  // ── Animation Variants ──
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
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
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const contactSocials = socials.filter(link => 
    ['email', 'whatsapp', 'linkedin'].includes(link.id)
  );
  
  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <SectionTitle
          subtitle="Get In Touch"
          title="Let's Work Together"
          description="Have a project in mind? Fill the form and choose how you'd like to send it"
          align="center"
          gradient
        />
        
        <div className="
          grid grid-cols-1 lg:grid-cols-3
          gap-12 mt-12
        ">
          {/* ═══ LEFT SIDEBAR ═══ */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            {/* Sticky outer wrapper */}
            <div className="
              bg-primary-light/30 border border-border
              rounded-2xl p-8
              sticky top-24
            ">
              {/* Inner relative wrapper for gradient */}
              <div className="relative overflow-hidden">
                <div className="
                  absolute -top-20 -right-20
                  w-40 h-40
                  bg-accent/5 rounded-full blur-3xl
                " />

                <div className="relative z-10">
                  <h3 className="
                    font-heading font-semibold
                    text-xl text-text-heading
                    mb-6
                  ">
                    Contact Information
                  </h3>
                  
                  {/* Contact Details */}
                  <div className="space-y-6 mb-8">
                    <motion.a
                      variants={itemVariants}
                      href={`mailto:${contactInfo.primaryEmail}`}
                      className="flex items-start gap-4 group"
                    >
                      <div className="
                        w-12 h-12 flex items-center justify-center
                        bg-accent/10 border border-accent/20
                        text-accent rounded-xl shrink-0
                        group-hover:bg-accent group-hover:text-primary-dark
                        transition-all duration-300
                        group-hover:scale-110
                      ">
                        <FiMail size={20} />
                      </div>
                      <div>
                        <div className="font-mono text-xs text-text-body uppercase tracking-wider">
                          Email
                        </div>
                        <div className="text-text-heading text-sm group-hover:text-accent transition-colors duration-300">
                          {contactInfo.primaryEmail}
                        </div>
                      </div>
                    </motion.a>
                    
                    <motion.a
                      variants={itemVariants}
                      href={`tel:${contactInfo.primaryPhone}`}
                      className="flex items-start gap-4 group"
                    >
                      <div className="
                        w-12 h-12 flex items-center justify-center
                        bg-accent/10 border border-accent/20
                        text-accent rounded-xl shrink-0
                        group-hover:bg-accent group-hover:text-primary-dark
                        transition-all duration-300
                        group-hover:scale-110
                      ">
                        <FiPhone size={20} />
                      </div>
                      <div>
                        <div className="font-mono text-xs text-text-body uppercase tracking-wider">
                          Phone
                        </div>
                        <div className="text-text-heading text-sm group-hover:text-accent transition-colors duration-300">
                          {contactInfo.primaryPhone}
                        </div>
                      </div>
                    </motion.a>

                    <motion.a
                      variants={itemVariants}
                      href={`https://wa.me/${WHATSAPP_NUMBER}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-4 group"
                    >
                      <div className="
                        w-12 h-12 flex items-center justify-center
                        bg-green-500/10 border border-green-500/20
                        text-green-400 rounded-xl shrink-0
                        group-hover:bg-green-500 group-hover:text-white
                        transition-all duration-300
                        group-hover:scale-110
                      ">
                        <FaWhatsapp size={20} />
                      </div>
                      <div>
                        <div className="font-mono text-xs text-text-body uppercase tracking-wider">
                          WhatsApp
                        </div>
                        <div className="text-text-heading text-sm group-hover:text-green-400 transition-colors duration-300">
                          +92 349 7818575
                        </div>
                      </div>
                    </motion.a>
                    
                    <motion.div
                      variants={itemVariants}
                      className="flex items-start gap-4"
                    >
                      <div className="
                        w-12 h-12 flex items-center justify-center
                        bg-accent/10 border border-accent/20
                        text-accent rounded-xl shrink-0
                      ">
                        <FiMapPin size={20} />
                      </div>
                      <div>
                        <div className="font-mono text-xs text-text-body uppercase tracking-wider">
                          Location
                        </div>
                        <div className="text-text-heading text-sm">
                          {contactInfo.location?.city}, {contactInfo.location?.country}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Response Times */}
                  <motion.div
                    variants={itemVariants}
                    className="mb-8 p-4 bg-primary/50 border border-border rounded-xl space-y-3"
                  >
                    <h4 className="font-mono text-xs text-accent uppercase tracking-wider">
                      Response Times
                    </h4>
                    <div className="space-y-2">
                      {[
                        { icon: <FaWhatsapp size={14} />, label: 'WhatsApp', time: '~1 hour', color: 'text-green-400' },
                        { icon: <FiMail size={14} />, label: 'Email', time: '~24 hours', color: 'text-blue-400' },
                        { icon: <FiPhone size={14} />, label: 'Phone', time: 'Immediate', color: 'text-yellow-400' },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between text-xs">
                          <span className={`flex items-center gap-2 ${item.color}`}>
                            {item.icon}
                            <span className="text-text-body">{item.label}</span>
                          </span>
                          <span className="text-text-heading font-mono">{item.time}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                  
                  {/* Social Links */}
                  <motion.div variants={itemVariants} className="pt-8 border-t border-border">
                    <h4 className="font-heading font-semibold text-lg text-text-heading mb-4">
                      Follow Me
                    </h4>
                    <div className="flex items-center gap-3">
                      {contactSocials.map((social) => (
                        <motion.a
                          key={social.id}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ y: -3, scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="
                            w-12 h-12
                            flex items-center justify-center
                            text-text-body hover:text-accent
                            bg-primary/50 hover:bg-accent/10
                            border border-border hover:border-accent/50
                            rounded-xl transition-all duration-300
                          "
                          aria-label={social.name}
                        >
                          {React.createElement(social.icon, { size: 20 })}
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                  
                  {/* Availability */}
                  <motion.div
                    variants={itemVariants}
                    className="mt-8 p-4 bg-accent/5 border border-accent/20 rounded-xl"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-accent" />
                      </span>
                      <span className="font-mono text-sm text-accent">
                        Available for freelance work
                      </span>
                    </div>
                    <p className="text-xs text-text-body">
                      {contactInfo.availability?.responseTime || 'Currently accepting new projects'}
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* ═══ RIGHT SIDE - FORM ═══ */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="
              bg-primary-light/30 border border-border
              rounded-2xl p-6 sm:p-8 md:p-10
              relative overflow-hidden
            ">
              <FormParticles />

              {/* Form Header */}
              <div className="relative z-10 mb-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <h3 className="font-heading font-semibold text-xl text-text-heading">
                    Send a Message
                  </h3>
                  
                  {/* Progress */}
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-text-body/60">
                      {filledCount}/{allFields.length} fields
                    </span>
                    <div className="w-24 h-1.5 bg-border rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-accent rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${progressPercent}%` }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                </div>

                <p className="text-text-body/60 text-sm">
                  Fill in the details below. Fields marked with{' '}
                  <span className="text-red-400">*</span> are required.
                </p>
              </div>
              
              {/* Status Messages */}
              <AnimatePresence>
                {status.error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                    exit={{ opacity: 0, y: -10, height: 0 }}
                    className="
                      mb-6 p-4
                      bg-red-500/10 border border-red-500/30
                      text-red-400 rounded-xl
                      flex items-center gap-3
                      relative z-10
                    "
                  >
                    <FiAlertCircle size={20} className="shrink-0" />
                    <span className="text-sm flex-1">{status.error}</span>
                    <button 
                      onClick={() => setStatus(prev => ({ ...prev, error: null }))}
                      className="hover:text-red-300 transition-colors shrink-0"
                    >
                      <FiX size={18} />
                    </button>
                  </motion.div>
                )}
                
                {status.submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: 'auto' }}
                    exit={{ opacity: 0, y: -10, height: 0 }}
                    className={`
                      mb-6 p-4
                      rounded-xl
                      flex items-center gap-3
                      relative z-10
                      ${status.sendMethod === 'whatsapp'
                        ? 'bg-green-500/10 border border-green-500/30 text-green-400'
                        : 'bg-accent/10 border border-accent/30 text-accent'
                      }
                    `}
                  >
                    {status.sendMethod === 'whatsapp' 
                      ? <FaWhatsapp size={20} className="shrink-0" />
                      : <FiCheck size={20} className="shrink-0" />
                    }
                    <span className="text-sm">
                      {status.sendMethod === 'whatsapp'
                        ? 'Opening WhatsApp with your message! Complete sending there.'
                        : "Message sent successfully! I'll get back to you soon."
                      }
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* ── THE FORM ── */}
              <form ref={formRef} onSubmit={handleEmailSend} className="space-y-6 relative z-10">
                
                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FloatingInput
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    label="Full Name"
                    required
                    disabled={status.submitting}
                    icon={FiUser}
                    error={touched.name ? errors.name : null}
                    success={touched.name && !errors.name && formData.name.length > 0}
                  />
                  
                  <FloatingInput
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    label="Email Address"
                    required
                    disabled={status.submitting}
                    icon={FiMail}
                    error={touched.email ? errors.email : null}
                    success={touched.email && !errors.email && formData.email.length > 0}
                  />
                </div>

                {/* Row 2: Phone & Project Type */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FloatingInput
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    label="Phone Number"
                    disabled={status.submitting}
                    icon={FiPhone}
                    error={touched.phone ? errors.phone : null}
                    success={touched.phone && !errors.phone && formData.phone.length > 0}
                  />

                  <FloatingSelect
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    label="Project Type"
                    options={projectTypes}
                    disabled={status.submitting}
                    icon={FiLayers}
                  />
                </div>

                {/* Row 3: Budget & Timeline */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FloatingSelect
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    label="Budget Range"
                    options={budgetRanges}
                    disabled={status.submitting}
                    icon={FiDollarSign}
                  />

                  <FloatingSelect
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    label="Project Timeline"
                    options={timelines}
                    disabled={status.submitting}
                    icon={FiClock}
                  />
                </div>

                {/* Row 4: Subject */}
                <FloatingInput
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  label="Subject"
                  disabled={status.submitting}
                  icon={FiMessageSquare}
                />
                
                {/* Row 5: Message */}
                <FloatingTextarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  label="Your Message"
                  required
                  disabled={status.submitting}
                  icon={FiMail}
                  rows={5}
                  maxLength={1000}
                  error={touched.message ? errors.message : null}
                />
                
                {/* ── DUAL ACTION BUTTONS ── */}
                <motion.div 
                  className="
                    pt-4
                    flex flex-col sm:flex-row 
                    items-stretch sm:items-center 
                    gap-4
                  "
                  variants={itemVariants}
                >
                  {/* Email Button */}
                  <motion.button
                    type="submit"
                    disabled={status.submitting || status.submitted}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="
                      flex-1
                      flex items-center justify-center gap-3
                      px-8 py-4
                      bg-accent hover:bg-accent-hover
                      text-primary-dark font-semibold
                      rounded-xl
                      transition-all duration-300
                      disabled:opacity-50 disabled:cursor-not-allowed
                      shadow-lg shadow-accent/20
                      hover:shadow-xl hover:shadow-accent/30
                      relative overflow-hidden
                      group
                    "
                  >
                    <div className="
                      absolute inset-0
                      bg-gradient-to-r from-transparent via-white/20 to-transparent
                      translate-x-[-200%]
                      group-hover:translate-x-[200%]
                      transition-transform duration-700
                    " />
                    
                    {status.submitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-5 h-5 border-2 border-primary-dark/30 border-t-primary-dark rounded-full"
                        />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <FiSend size={18} />
                        <span>Send via Email</span>
                      </>
                    )}
                  </motion.button>

                  {/* OR Divider */}
                  <div className="hidden sm:flex items-center text-text-body/30 text-xs font-mono">
                    OR
                  </div>
                  <div className="sm:hidden flex items-center justify-center text-text-body/30 text-xs font-mono">
                    ── OR ──
                  </div>

                  {/* WhatsApp Button */}
                  <motion.button
                    type="button"
                    onClick={handleWhatsAppSend}
                    disabled={status.submitting || status.submitted}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="
                      flex-1
                      flex items-center justify-center gap-3
                      px-8 py-4
                      bg-green-600 hover:bg-green-500
                      text-white font-semibold
                      rounded-xl
                      transition-all duration-300
                      disabled:opacity-50 disabled:cursor-not-allowed
                      shadow-lg shadow-green-600/20
                      hover:shadow-xl hover:shadow-green-500/30
                      relative overflow-hidden
                      group
                    "
                  >
                    <div className="
                      absolute inset-0
                      bg-gradient-to-r from-transparent via-white/20 to-transparent
                      translate-x-[-200%]
                      group-hover:translate-x-[200%]
                      transition-transform duration-700
                    " />
                    
                    <FaWhatsapp size={20} />
                    <span>Send via WhatsApp</span>
                  </motion.button>
                </motion.div>

                {/* Info text */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 pt-1">
                  <p className="text-[11px] text-text-body/40 flex items-center gap-1.5">
                    <FiMail size={12} />
                    Email sends directly to inbox
                  </p>
                  <p className="text-[11px] text-text-body/40 flex items-center gap-1.5">
                    <FaWhatsapp size={12} />
                    WhatsApp opens with pre-filled message
                  </p>
                </div>
              </form>
              
              {/* Privacy */}
              <div className="mt-8 pt-8 border-t border-border relative z-10">
                <p className="text-xs text-text-body/50 flex items-start gap-2">
                  <span className="mt-0.5">🔒</span>
                  <span>
                    Your information is secure. By submitting this form, you agree to our 
                    privacy policy. Data is only used to respond to your inquiry.
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="
            mt-20 p-8 md:p-12
            bg-gradient-to-r from-primary-light to-primary
            border border-border rounded-2xl
            text-center relative overflow-hidden
          "
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-green-500/5 rounded-full blur-3xl" />

          <h3 className="font-heading font-bold text-2xl md:text-3xl text-text-heading mb-4 relative z-10">
            Prefer a Quick Chat?
          </h3>
          <p className="text-text-body text-lg max-w-2xl mx-auto mb-8 relative z-10">
            Skip the form and reach out directly via WhatsApp for an instant conversation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
            <motion.a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'm interested in discussing a project with you.")}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="
                inline-flex items-center gap-3
                px-8 py-4 bg-green-600 hover:bg-green-500
                text-white font-semibold rounded-xl
                shadow-lg shadow-green-600/20 transition-all duration-300
              "
            >
              <FaWhatsapp size={22} />
              <span>Chat on WhatsApp</span>
            </motion.a>
            <Button variant="secondary" size="lg" href="/portfolio">
              View My Work
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
